exports.success = function(data){
    return {
        "data": data,
        "status": "success",
        "statusCode":"200",
        "message":"success"
    }
}
exports.error = function(msg){
    return {
        "data": "",
        "status": "error",
        "statusCode":"999",
        "message": msg
    }
}
exports.param_empty = function(params){
    return {
        "data": "",
        "status": "error",
        "statusCode":"990",
        "message":"params empty: " + params
    }
}
exports.param_error = function(params){
    return {
        "data": "",
        "status": "error",
        "statusCode":"991",
        "message":"params error: " + params
    }
}
