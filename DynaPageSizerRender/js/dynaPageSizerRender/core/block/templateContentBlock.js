import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";
import {ContentBlock} from "./contentBlock.js";

/*
* 模板ContentBlock基类
* */

var templateContentBlock = function (index, parentBlock, sourceData, customTypeName) {
	ContentBlock.call(this, index, parentBlock, sourceData);
	this.childrenHtmlTemplateStr;
	this.customTypeName = customTypeName;
}

Utils.extendObj(templateContentBlock, ContentBlock);

templateContentBlock.prototype.getTypeName = function (isNotSuperTypeName){
	var typeName = Utils.super(this, isNotSuperTypeName);
	if (!isNotSuperTypeName && !Utils.isEmpty(this.customTypeName)) {
		typeName = typeName + " " + this.customTypeName;
	}
	return typeName.trim();
}

templateContentBlock.prototype.buildTempleteData = function (sourceData) {
	return {
		content: this.buildChildrenTempleteStr(sourceData)
	}
}

templateContentBlock.prototype.buildChildrenTempleteStr = function (sourceData) {
	return this.childrenHtmlTemplateStr;
}
templateContentBlock.prototype.initChildrenTempleteStr = function (templeteStr) {
	var htmlStrDomTemp = $(templeteStr);
	var optionDom = htmlStrDomTemp.find(".children_template");
	if (optionDom.length == 1) {
		optionDom.removeClass("children_template");
		this.childrenHtmlTemplateStr = optionDom.prop("outerHTML").trim();
		optionDom.remove();
		return htmlStrDomTemp.prop("outerHTML").trim();
	} else {
		return templeteStr;
	}
}

templateContentBlock.prototype.getTempleteStr = function () {
	var templateNodeClassName = ".template_html ." + this.getTypeName(true);
	if ($(templateNodeClassName).length > 0) {
		return this.initChildrenTempleteStr($(templateNodeClassName).prop("outerHTML").trim());
	}
	return Utils.super(this);
}

export {templateContentBlock as TemplateContentBlock}
