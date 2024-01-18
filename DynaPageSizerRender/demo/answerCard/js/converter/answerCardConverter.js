import {Converter} from "../../../../js/dynaPageSizerRender/core/converter/converter.js";
import {Utils} from "../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TestHeaderContentBlock} from "../../../comm/block/testHeaderContentBlock.js";
import {KindNodeBlock} from "../../../comm/block/kindNodeBlock.js";
import {TypeNodeBlock} from "../../../comm/block/typeNodeBlock.js";
import {AnswerCardConstants} from "../core/answerCardConstants.js";
import {GroupBlock} from "../../../comm/block/groupBlock.js";
import {MultipleChoiceBlock} from "../core/block/multipleChoiceBlock.js";
import {FillInTheBlankBlock} from "../core/block/fillInTheBlankBlock.js";
import {JudgmentBlock} from "../core/block/JudgmentBlock.js";
import {AnsweringAreaContentBlock} from "../../../comm/block/answeringAreaContentBlock.js";
import {ShortAnswerBlock} from "../core/block/shortAnswerBlock.js";
import {CompositionBlock} from "../core/block/compositionBlock.js";

var answerCardConverter = function (data) {
	Converter.call(this, data);
	this.blockMap = new Map();
}

Utils.extendObj(answerCardConverter, Converter);

answerCardConverter.prototype.buildContentBlocks = function (data) {
	var paperInfo = data.paperInfo;

	let contentBlockTemps = [
		new TestHeaderContentBlock(0, null, {
			paperName: paperInfo.name
		})
	];
	var preLevel;
	for (const nodeTemp of paperInfo.nodes) {
		let block;
		var parantBlock = this.blockMap.get(nodeTemp.parentNodeId);
		if (nodeTemp.level == 1 || nodeTemp.level == 2) {
			if (nodeTemp.level == 1) {
				block = new KindNodeBlock(contentBlockTemps.length, parantBlock, nodeTemp);
				contentBlockTemps.push(block);
			} else {
				block = new TypeNodeBlock(contentBlockTemps.length, parantBlock, nodeTemp);
				parantBlock.children.push(block);
			}
			this.blockMap.set(nodeTemp.nodeId, block);
		} else {
			this.buildQuestionBlock(nodeTemp);
		}
	}
	return contentBlockTemps;
}

answerCardConverter.prototype.getGroupBlock = function (nodeTemp, parantBlock, groupBlockKey, childMaxCount) {
	var groupBlock = this.blockMap.get(groupBlockKey);

	// 过滤大题
	if (groupBlock) {
		if (nodeTemp.level == 4) {
			var nodeParentBlock = this.blockMap.get(nodeTemp.parentNodeId);
			if (groupBlock.children.includes(nodeParentBlock)) {
				groupBlock.children.splice(groupBlock.children.indexOf(nodeParentBlock), 1);
			}
			parantBlock = nodeParentBlock.parentBlock.parentBlock;
		}
	}

	if (!groupBlock || groupBlock.children.length == groupBlock.childMaxCount) {
		let length = parantBlock.children.length;
		groupBlock = new GroupBlock(length > 0 ? length - 1 : length, parantBlock, childMaxCount);
		parantBlock.children.push(groupBlock);
		this.blockMap.set(groupBlockKey, groupBlock);
	}
	return groupBlock;
}
answerCardConverter.prototype.buildQuestionBlock = function (nodeTemp) {
	const question = nodeTemp.question;
	var parantBlock = this.blockMap.get(nodeTemp.parentNodeId);
	var nodeBlock;

	if (nodeTemp.level == 4) {
		var typeBlockTemp = parantBlock.parentBlock;
		if (typeBlockTemp instanceof TypeNodeBlock && typeBlockTemp.children.includes(parantBlock)) {
			typeBlockTemp.children.splice(typeBlockTemp.children.indexOf(parantBlock), 1)
		}
		parantBlock = typeBlockTemp;
	}

	if (question && question.type && question.type.code) {
		var typeCode = question.type.code;
		var activeMultipleGroupBlockKey = "activeMultipleGroupBlock"
		if (AnswerCardConstants.MULTIPLE_CHOICE_QUESTION_TYPES.includes(typeCode) > 0) {
			parantBlock = this.getGroupBlock(nodeTemp, parantBlock, activeMultipleGroupBlockKey, 5);
			var nodeBlock = new MultipleChoiceBlock(parantBlock.children.length - 1, parantBlock, nodeTemp, "choice");
		} else {
			this.blockMap.delete(activeMultipleGroupBlockKey);
			var activeJudgmentGroupBlockKey = "activeJudgmentGroupBlock"
			if (AnswerCardConstants.JUDGMENT_THE_BLANK_QUESTION_TYPES.includes(typeCode) > 0) {
				parantBlock = this.getGroupBlock(nodeTemp, parantBlock, activeJudgmentGroupBlockKey, 5);
				var nodeBlock = new JudgmentBlock(parantBlock.children.length - 1, parantBlock, nodeTemp, "choice");
			} else {
				this.blockMap.delete(activeJudgmentGroupBlockKey);
				if (AnswerCardConstants.FILLIN_THE_BLANK_QUESTION_TYPES.includes(typeCode) > 0) {
					nodeBlock = new FillInTheBlankBlock(parantBlock.children.length - 1, parantBlock, nodeTemp);
				} else if (AnswerCardConstants.COMPOSITION_THE_BLANK_QUESTION_TYPES.includes(typeCode) > 0) {
					nodeBlock = new CompositionBlock(parantBlock.children.length - 1, parantBlock, nodeTemp);
				}else {
					nodeBlock = new ShortAnswerBlock(parantBlock.children.length - 1, parantBlock, nodeTemp);
				}
			}
		}
	}
	if (nodeBlock) {
		this.blockMap.set(nodeTemp.nodeId, nodeBlock);
		parantBlock.children.push(nodeBlock);
	}
}

export {answerCardConverter as AnswerCardConverter}
