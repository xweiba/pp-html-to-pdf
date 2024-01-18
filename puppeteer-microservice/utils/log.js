const timeUtil = require('./timeUtil')
const config = require('../config.js')

let level = "ERROR";

if (config.log != undefined && config.log.level != undefined) {
    level = config.log.level.toUpperCase();
}

let levelMap = {
    "ERROR": 1,
    "WARN": 2,
    "INFO": 3,
    "DEBUG": 4,
}

let levelNo = levelMap[level];
if (levelNo == undefined || levelNo == null) levelNo = 1;

exports.error = function(msg){
    if (levelNo >= 1) {
        console.error('['+timeUtil.currentTime()+'] [ERROR] '+msg);
    }
}
exports.warn = function(msg){
    if (levelNo >= 2) {
        console.warn('['+timeUtil.currentTime()+'] [WARN] '+msg);
    }
}
exports.info = function(msg){
    if (levelNo >= 3) {
        console.info('['+timeUtil.currentTime()+'] [INFO] '+msg);
    }
}
exports.debug = function(msg){
    if (levelNo >= 4) {
        console.debug('['+timeUtil.currentTime()+'] [DEBUG] '+msg);
    }
}
