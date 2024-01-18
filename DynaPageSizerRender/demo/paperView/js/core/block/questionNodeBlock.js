import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";
import {PaperConstants} from "../paperConstants.js";

var questionNodeBlock = function (index, parentBlock, sourceData) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(questionNodeBlock, TemplateContentBlock);

questionNodeBlock.prototype.getTempleteStr = function () {
	var templateNodeClassName = ".template_html .questionNodeBlock";
	if ($(templateNodeClassName).length > 0) {
		return $(templateNodeClassName).prop("outerHTML").trim();
	}
	return Utils.super(this);
}

questionNodeBlock.prototype.buildTempleteBefore = function (templeteStr) {
	templeteStr = Utils.super(this, templeteStr);
	if (this.data.source && this.data.source.question) {
		templeteStr = this.addExternalNoPoints(templeteStr);
	}
	return templeteStr;
}

questionNodeBlock.prototype.buildTempleteData = function (sourceData) {
	return {
		quesitonContent: sourceData.question.stem.richText
	}
}

questionNodeBlock.prototype.addExternalNoPoints = function (htmlStrTemp){ // 添加题号分数
	var htmlTextStr = $(htmlStrTemp).text().trim();
	var isInsert = false;
	var externalNoClass = "question_external_no";
	if (htmlTextStr == '') { // 题干为空，可能只有图片信息
		htmlTextStr = $(htmlStrTemp).find(".content").html().trim();
		if (htmlTextStr == '') {// 大小题的大题，大题题干为空
			htmlTextStr = '</div>'; // 插入点为默认模板的content结尾处
		} else { // 只有图片时让题号与图片换行显示
			externalNoClass += " is_block"
		}
	} else if (Utils.isNumber(htmlTextStr)) { // 内容只有数字时
		var contentHtmlStr = $(htmlStrTemp).find(".content").html().trim();
		var indexOf = contentHtmlStr.indexOf(htmlTextStr);
		htmlTextStr = contentHtmlStr.slice(0, contentHtmlStr.indexOf(htmlTextStr));
		isInsert = true;
	} else { // 内容不为空直接插入content中
		htmlTextStr =  $(htmlStrTemp).find(".content").html().trim();
		if (htmlTextStr.startsWith("<div>")) { // div包裹正文使用插入模式
			isInsert = true;
		}
	}
	var externalNo = this.data.source.externalNo;
	if (this.data.source.level == 4 && externalNo.indexOf(".") < 0) { // 小题题号
		externalNo += ("." + this.data.source.internalNo)
	}
	return Utils.spliceByStr(htmlStrTemp, htmlTextStr.slice(0,5), Utils.formatStr(PaperConstants.EXTERNALNO_POINTS_TEMPLETE, {
		externalNoClass: externalNoClass,
		externalNo: externalNo,
		questionScore: this.data.source.points
	}), isInsert)
}

export {questionNodeBlock as QuestionNodeBlock}
