var AnswerCardConstants = function () {
	this.EXTERNALNO_TEMPLETE = '<span class="{externalNoClass}">{externalNo}.&nbsp</span>'; // 题号模板
	this.MULTIPLE_CHOICE_QUESTION_TYPES = ",01,02,12,27,28," // 选择题类型
	this.FILLIN_THE_BLANK_QUESTION_TYPES = ",03,10,11,14," // 填空题
	this.JUDGMENT_THE_BLANK_QUESTION_TYPES = ",04," // 判断题
	this.COMPOSITION_THE_BLANK_QUESTION_TYPES = ",08," // 作文题
}

var answerCardConstants = new AnswerCardConstants();
Object.freeze(answerCardConstants);

export {answerCardConstants as AnswerCardConstants};
