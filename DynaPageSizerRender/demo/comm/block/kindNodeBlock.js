import {Utils} from "../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

var kindNodeBlock = function (index, parentBlock, sourceData) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(kindNodeBlock, TemplateContentBlock);

kindNodeBlock.prototype.getTempleteStr = function () {
	return "";
}

export {kindNodeBlock as KindNodeBlock}
