import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

var multipleChoiceBlock = function (index, parentBlock, sourceData, customTypeName) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData, customTypeName);
}

Utils.extendObj(multipleChoiceBlock, TemplateContentBlock);

multipleChoiceBlock.prototype.buildChildrenTempleteStr = function (sourceData) {
	var htmlStr = $(Utils.formatStr(this.childrenHtmlTemplateStr, {
		content: sourceData.externalNo
	})).addClass("externalNo").removeClass("child_axises_item").prop("outerHTML").trim();
	for (var option of sourceData.question.options) {
		htmlStr += Utils.formatStr(this.childrenHtmlTemplateStr, {
			content: "[" + option.alias + "]"
		});
	}
	return htmlStr;
}

export {multipleChoiceBlock as MultipleChoiceBlock}
