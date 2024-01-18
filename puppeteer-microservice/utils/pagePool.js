'use strict'
const genericPool = require('generic-pool')
const log = require('./log');
const config = require('../config');

/**
 * 初始化一个 Puppeteer 池
 * @param {Object} [options={}] 创建池的配置配置
 * @param {Boolean} [options.browserPageInit=0] 浏览器页面初始化状态，浏览器实例创建后将做一次页面请求初始化页面。
 * @param {Number} [options.max=10] 最多产生多少个 puppeteer 实例 。如果你设置它，请确保 在引用关闭时调用清理池。 pool.drain().then(()=>pool.clear())
 * @param {Number} [options.min=0] 保证池中最少有多少个实例存活
 * @param {Number} [options.maxUses=500] 每一个 实例 最大可重用次数，超过后将重启实例。0表示不检验
 * @param {Boolean} [options.cacheDisabled=true] 是否禁用页面缓存，默认true。
 * @param {Number} [options.testOnBorrow=true] 在将 实例 提供给用户之前，池应该验证这些实例。
 * @param {Boolean} [options.autostart=false] 是不是需要在 池 初始化时 初始化 实例
 * @param {Number} [options.idleTimeoutMillis=300000] 如果一个实例 5分钟 都没访问就关掉他
 * @param {Number} [options.evictionRunIntervalMillis=30000] 每 30秒 检查一次 实例的访问状态
 * @param {Function} [options.validator=(instance)=>Promise.resolve(true))] 用户自定义校验 参数是 取到的一个实例
 * @param {Object} [options.otherConfig={}] 剩余的其他参数 // For all opts, see opts at https://github.com/coopernurse/node-pool#createpool
 * @return {Object} pool
 */
exports.createPool = async (options = {}) => {

  // 定义参数
  const {
    max = 1,
    min = 0,
    maxUses = 500,
    browserPageInit = false,
    cacheDisabled = true,
    testOnBorrow = true,
    autostart = true,
    idleTimeoutMillis = 20000,
    evictionRunIntervalMillis = 10000,
    validator = () => Promise.resolve(true),
    browser = {},
    ...otherConfig
  } = options

  // 定义生命周期
  const factory = {
    create: async () => {
      let page = await browser.newPage();
      // 初始化真实页面
      if (!config.browserPageInit) { // 让chrome真正加载一次页面
        log.debug("pagePoll init page....");
        config.browserPageInit = true;
        await page.goto("http://127.0.0.1:" + config.port);
      }
      page.setCacheEnabled(!options.cacheDisabled);
      page.useCount = 0;
      log.debug("pagePoll create page");
      return page;
    },
    destroy: page => {
      page.close();
    },
    validate: page => {
      // 执行一次自定义校验，并且校验校验 实例已使用次数。 当 返回 reject 时 表示实例不可用
      return validator(page).then(valid => 
        Promise.resolve(valid && (maxUses <= 0 || ++page.useCount <= maxUses))
      )
    }
  }

  // 配置generic-pool
  const generiConfig = {
    max,
    min,
    testOnBorrow,
    autostart,
    idleTimeoutMillis,
    evictionRunIntervalMillis,
    ...otherConfig
  }

  // 初始化资源池
  var pool = genericPool.createPool(factory, generiConfig);

  // 定义使用方法
  pool.use = async fn => {
    log.debug("pagePoll page use");
    let page = await pool.acquire();
    let result = await fn(page).catch(e => {
      pool.release(page);
      throw e;
    });
    pool.release(page);
    log.debug("pagePoll page release");
    return result;
  }
  
  return pool;
}
