module.exports = {
    port: 9572,
    puppeteer: {
        headless: true, // 是否启用无头模式页面
        //executablePath: '/usr/lib64/chromium-browser/headless_shell',
        args: [
            '–-disable-gpu',
            '-–disable-dev-shm-usage',
            '-–disable-setuid-sandbox',
            '-–no-first-run',
            '--no-sandbox',
            '-–no-zygote',
            '-–single-process',
            '--disable-font-subpixel-positioning', // 必须添加，解决windows和linux下渲染结果不一致问题
            '--font-render-hinting=none' // 必须添加，解决windows和linux下渲染结果不一致问题
        ],
        ignoreHTTPSErrors: true,
        timeout: 0
    },
    browserPool: {
        min: 1, // 池中最小实例数
        max: 5, // 池中最大实例数
        idleTimeoutMillis: 1000 * 60 * 60 * 24, // 实例存活时间，超时将重新创建新的实例，防止内存泄漏，浏览器实例默认24小时
        evictionRunIntervalMillis: 1000 * 60 * 60 // 实例存活检测时间
    },
    pagePool: {
        min: 5,
        max: 10,
        cacheDisabled: true, // 是否禁用页面缓存
        idleTimeoutMillis: 1000 * 60 * 60, // 页面实例默认一小时重新创建一次
        evictionRunIntervalMillis: 1000 * 60
    },
    log: {
        level: "DEBUG"
    },
    tempRootDir: '/home/icampus3.0/pkgs/puppeteer-microservice/temp',
    contextPath: '/microservice/puppeteerservice'
}
