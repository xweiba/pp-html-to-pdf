var PaperConstants = function () {
	this.EXTERNALNO_POINTS_TEMPLETE = '<span class="{externalNoClass}">{externalNo}.({questionScore}分)&nbsp</span>'; // 题号分数模板
	this.QUESTION_NOT_CHILDREN_TYPE_CODES = ",03,04,10,11,12" // 不需要子节点的题目类型集
	this.MULTIPLE_CHOICE_QUESTION_TYPES = ",01,02,12,27,28" // 选择题类型
	this.HAS_ANSWERING_AREA_QUESTION_TYPES =  ",09," // 答题区类型
	this.ANSWERING_AREA_ROW_HEIGHT = 30 // 答题区每行的高度
	this.HAS_COMPOSITION_AREA_QUESTION_TYPES = ",08," // 作文题

}

var paperConstants = new PaperConstants();
Object.freeze(paperConstants);

export {paperConstants as PaperConstants};
