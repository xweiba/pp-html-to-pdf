import {Utils} from "../../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {PageBlock} from "../../../../../../js/dynaPageSizerRender/core/block/layout/pageBlock.js";
import {AnswerCardContainer} from "./answerCardContainer.js";

var answerCardPage = function (index, rootClassName) {
	PageBlock.call(this, index, rootClassName)
}
Utils.extendObj(answerCardPage, PageBlock);

answerCardPage.prototype.getContainerType = function () {
	return AnswerCardContainer;
}

export {answerCardPage as AnswerCardPage}
