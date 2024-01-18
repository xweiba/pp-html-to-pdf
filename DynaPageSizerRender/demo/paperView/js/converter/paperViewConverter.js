import {KindNodeBlock} from "../../../comm/block/kindNodeBlock.js";
import {TypeNodeBlock} from "../../../comm/block/typeNodeBlock.js";
import {QuestionNodeBlock} from "../core/block/questionNodeBlock.js";
import {ChildQuestionNodeBlock} from "../core/block/childQuestionNodeBlock.js";
import {Utils} from "../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {Converter} from "../../../../js/dynaPageSizerRender/core/converter/converter.js";
import {TestHeaderContentBlock} from "../../../comm/block/testHeaderContentBlock.js";
import {PaperUtils} from "../utils/PaperUtils.js";
import {OptionNodeContentBlock} from "../core/block/optionNodeContentBlock.js";
import {AnsweringAreaContentBlock} from "../../../comm/block/answeringAreaContentBlock.js";
import {PaperConstants} from "../core/paperConstants.js";
import {CompositionAreaContentBlock} from "../core/block/compositionAreaContentBlock.js";

var paperViewConverter = function (data) {
	Converter.call(this, data);
}

Utils.extendObj(paperViewConverter, Converter);

paperViewConverter.prototype.buildContentBlocks = function (data) {
	var paperInfo = data.paperInfo;

	let contentBlockTemps = [
		new TestHeaderContentBlock(0, null, {
			paperName: paperInfo.name
		})
	];
	var targetBlock = {};

	for (const nodeTemp of paperInfo.nodes) {
		switch (nodeTemp.level) {
			case 1:
				targetBlock = KindNodeBlock;
				break;
			case 2:
				targetBlock = TypeNodeBlock;
				break;
			case 3:
				targetBlock = QuestionNodeBlock;
				break;
			case 4:
				targetBlock = ChildQuestionNodeBlock;
				break;
		}
		var parantBlock = this.getParantBlock(contentBlockTemps, nodeTemp);
		var contentBlockTemp = new targetBlock(contentBlockTemps.length, parantBlock, nodeTemp);
		if (parantBlock == null) {
			contentBlockTemps.push(contentBlockTemp);
		} else {
			contentBlockTemp.index = parantBlock.children.length;
			parantBlock.children.push(contentBlockTemp);
		}

		this.buildChildBlock(contentBlockTemp);
	}
	return contentBlockTemps;
}

paperViewConverter.prototype.buildChildBlock = function (contentBlockTemp) {
	if (contentBlockTemp.data && contentBlockTemp.data.source) {
		let paperNode = contentBlockTemp.data.source;
		const question = paperNode.question;
		if (question && question.type && question.type.code && PaperConstants.QUESTION_NOT_CHILDREN_TYPE_CODES.indexOf("," + question.type.code + ",") < 0) {
			contentBlockTemp.children.push(new AnsweringAreaContentBlock(0, contentBlockTemp, paperNode, false));
			if (PaperConstants.MULTIPLE_CHOICE_QUESTION_TYPES.indexOf("," + question.type.code + ",") >= 0) {
				if (PaperUtils.checkRenderOptionBlocks(paperNode)) {
					contentBlockTemp.children.push(new OptionNodeContentBlock(0, contentBlockTemp, question.options));
				}
			} else if (PaperConstants.HAS_COMPOSITION_AREA_QUESTION_TYPES.indexOf("," + question.type.code + ",") >= 0) {
				contentBlockTemp.children.push(new CompositionAreaContentBlock(0, contentBlockTemp, paperNode));
			} else {
				if (PaperUtils.checkRenderAnsweringArea(paperNode)) {
					contentBlockTemp.children.push(new AnsweringAreaContentBlock(0, contentBlockTemp, paperNode, false));
				}
			}
		}
	}
}
paperViewConverter.prototype.getParantBlock = function (contentBlockTemps, nodeTemp) {
	if (contentBlockTemps.length == 0) return null;
	for (let i = contentBlockTemps.length; i >= 0; i--) {
		var contentBlockTemp = contentBlockTemps[i - 1];
		if (nodeTemp.parentNodeId && contentBlockTemp.data.source.nodeId == nodeTemp.parentNodeId) {
			return contentBlockTemp;
		} else {
			return this.getParantBlock(contentBlockTemp.children, nodeTemp);
		}
	}
}


export {paperViewConverter as PaperViewConverter}
