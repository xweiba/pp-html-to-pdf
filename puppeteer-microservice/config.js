module.exports = {
    port: 9572,
    puppeteer: {
        headless: true,
        args: [
            '–-disable-gpu',
            '-–disable-dev-shm-usage',
            '-–disable-setuid-sandbox',
            '-–no-first-run',
            '--no-sandbox',
            '-–no-zygote',
            '-–single-process',
            '--disable-font-subpixel-positioning',
            '--font-render-hinting=none'
        ],
        ignoreHTTPSErrors: true,
        timeout: 0
    },
    browserPool: {
        min: 1,
        max: 5,
        idleTimeoutMillis: 1000 * 60 * 60 * 24,
        evictionRunIntervalMillis: 1000 * 60 * 60
    },
    pagePool: {
        min: 5,
        max: 10,
        cacheDisabled: true,
        idleTimeoutMillis: 1000 * 60 * 60,
        evictionRunIntervalMillis: 1000 * 60
    },
    log: {
        level: "DEBUG"
    },
    tempRootDir: '/home/icampus3.0/pkgs/puppeteer-microservice/temp',
    contextPath: '/microservice/puppeteerservice'
}
