const pdfService = require('../service/pdfService')
const log = require('../utils/log');
const response = require('../utils/response');
const urlUtils = require("url");
const querystring = require("querystring");

exports.print = async function(params, app) {
    await checkParsingParams(params);
    let printConfig = await buildPrintConfig(params);
    let filePath = await pdfService(params.htmlUrl, printConfig);
    // 同步返回
    return response.success(filePath);
}

async function checkParsingParams(params) {
    // 判断是否为json
    var error_params = [];
    if (!params) {
        error_params.push("params is empty");
    }
    if (!params.htmlUrl) {
        error_params.push("htmlUrl param is empty");
    } else {
        params.htmlUrl = Buffer.from(params.htmlUrl, 'base64').toString('binary')
        let paramsTemp = querystring.parse(urlUtils.parse(params.htmlUrl).query);
        if (!paramsTemp.format == '' && paramsTemp.format != 'A3' && paramsTemp.format != 'A4') {
            error_params.push("Print Only support A3 Or A4");
        }
        params.format = paramsTemp.format;
        params.printBackground = (paramsTemp.printBackground && paramsTemp.printBackground == "true") ? true : false;
    }
    if (!params.outFilePath) {
        // error_params.push("outFilePath param is empty");
        log.error('outFilePath param is empty');
    } else {
        params.outFilePath = Buffer.from(params.outFilePath, 'base64').toString('binary')
    }
    if(error_params.length > 0){
        log.error('参数错误：'+error_params);
        throw new Error(error_params)
    }
    return true;
}

async function buildPrintConfig(params) {
    // btoa
    let format = params.format || 'A4';
    let printBackground = params.printBackground || false;
    let printConfig = {
        path: params.outFilePath,
        format: format,
        landscape: format == 'A3' ? true : false,
        printBackground: printBackground
    }

    return printConfig;
}
