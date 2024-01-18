import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {QuestionNodeBlock} from "./questionNodeBlock.js";

var childQuestionNodeBlock = function (index, parentBlock, sourceData) {
	QuestionNodeBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(childQuestionNodeBlock, QuestionNodeBlock);

export {childQuestionNodeBlock as ChildQuestionNodeBlock}
