const BrowserPool = require("../utils/browserPool");
const config = require("../config");
const sha1 = require('sha1')
const fs = require('fs');
const path = require('path');
const FileUtils = require("../utils/fileUtils")
const log = require('../utils/log');

/* printUrl 网页地址, printConfig 打印参数*/
module.exports = async function (printUrl, printConfig) {
    if (!printUrl || printUrl == '' || !printConfig) {
        throw new Error("params error")
    }
    return await BrowserPool.use(async browser => {
        // 获取pagePool
        let pagePool = browser.pagePool;

        return await pagePool.use(async page => {
            log.debug('printUrl：' + printUrl);
            let startTime = new Date().getTime();
            // 跳转指定url并等待页面不再有网络连接时触发（至少500毫秒后）
            await page.goto(printUrl, {waitUntil: ['domcontentloaded', 'networkidle0']});
            log.debug('page goto time consuming：' + (new Date().getTime() - startTime));

            // page.wait() 接口已废弃。
            await page.waitForTimeout(5);

            if (!printConfig.path) { // path为空生成临时目录
                log.error('printConfig path is empty, generate pdf file path!');
                let filePath = await generateFilePath(printUrl, printConfig.format);
                printConfig.path = filePath
            }

            await FileUtils.mkdirsSync(path.dirname(printConfig.path));

            // 打印pdf文件
            log.debug('printConfig：' + JSON.stringify(printConfig));
            await page.pdf(printConfig);
            log.debug('print pdf tatol time consuming：' + (new Date().getTime() - startTime));
            return printConfig.path;
        })
    });

    async function generateFilePath(src, format) {
        let srcHash = sha1(src);
        let pdfFilePathTemp = config.tempRootDir + "/pdf/" + format + "_" + srcHash + "_" + new Date().getTime() + "_puppeteer.pdf";
        return pdfFilePathTemp;
    }
}
