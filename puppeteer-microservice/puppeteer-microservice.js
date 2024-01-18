const app = require('./app');
const config = require('./config');
const log = require('./utils/log');

const puppeteerMicroservice = app.listen(config.port, function(){
    const port = puppeteerMicroservice.address().port
    log.debug("Puppeteer-Microservice，启动成功, 服务地址：http://127.0.0.1:" + config.port + config.contextPath)
})
