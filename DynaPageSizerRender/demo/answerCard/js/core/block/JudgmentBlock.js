import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

var judgmentBlock = function (index, parentBlock, sourceData, customTypeName) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData, customTypeName);
}

Utils.extendObj(judgmentBlock, TemplateContentBlock);

judgmentBlock.prototype.buildChildrenTempleteStr = function (sourceData) {
	var htmlStr = $(Utils.formatStr(this.childrenHtmlTemplateStr, {
		content: sourceData.externalNo
	})).addClass("externalNo").removeClass("child_axises_item").prop("outerHTML").trim();
	var alias = "T";
	for (let i = 0; i < 2; i++) {
		if (i == 1) alias = "F";
		htmlStr += Utils.formatStr(this.childrenHtmlTemplateStr, {
			content: "[" + alias + "]"
		});
	}
	return htmlStr;
}

export {judgmentBlock as JudgmentBlock}
