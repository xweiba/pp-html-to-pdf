import {Utils} from "../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

var testHeaderContentBlock = function (index, parentBlock, sourceData) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(testHeaderContentBlock, TemplateContentBlock);

testHeaderContentBlock.prototype.buildTempleteData = function (sourceData) {
	return {
		paperName: sourceData.paperName
	}
}

export {testHeaderContentBlock as TestHeaderContentBlock}
