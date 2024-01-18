import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";
import {PaperConstants} from "../paperConstants.js";

/* 选择题 */
var compositionAreaContentBlock = function (index, parentBlock, sourceData) {
	this.words = 3;
	this.rowHeight = PaperConstants.ANSWERING_AREA_ROW_HEIGHT;
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(compositionAreaContentBlock, TemplateContentBlock);

export {compositionAreaContentBlock as CompositionAreaContentBlock}
