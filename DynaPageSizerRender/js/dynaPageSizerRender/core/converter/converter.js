/*
* 业务数据转换器
* */
import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";

var converter = function (businessData) {
	this.businessData = this.beforeParseData(businessData);
}

converter.prototype = {
	beforeParseData(businessData) {
		if (Utils.isEmpty(businessData)) throw new Error("businessData is Empty!");
		return businessData;
	},
	buildRenderBlocks() { // 转换处理接口, 返回待渲染contentBlocks
		let contentBlocks = this.buildContentBlocks(this.businessData);
		return this.afterParseData(contentBlocks);
	},
	buildContentBlocks(businessData) {
		// 元数据转化为contentBlock数据处理
		throw new Error("Converter buildContentBlocks Uninitialized");
	},
	afterParseData(contentBlocks) {
		return contentBlocks;
	}
}
export {converter as Converter};
