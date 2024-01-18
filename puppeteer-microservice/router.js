const bodyParser= require("body-parser");
const log = require('./utils/log');
const puppeteer = require('./controller/puppeteer');
const response = require('./utils/response');
const config = require('./config');

module.exports = function(app){
    app.use(bodyParser.urlencoded({ extended: false }));

    app.get("",function(req,res){
        res.send('Puppeteer-Microservice is running...');
    })

    app.get(config.contextPath + "/pdf",async function(req,res){

        var params = req.query;

        log.debug("请求参数："+JSON.stringify(params));
        var result;
        try {
            result = await puppeteer.print(params, req.app);
        } catch (e) {
            result = response.error(e.message);
        }

        log.debug("响应结果："+JSON.stringify(result));

        res.json(result);
    })
}
