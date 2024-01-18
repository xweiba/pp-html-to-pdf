import {PaperConstants} from "../core/paperConstants.js";

var paperUtils = function () {
}

paperUtils.prototype = {
	checkRenderOptionBlocks: function (paperNode) { // 检测题目选项是否存在，有的题目选项在题干中
		if (!paperNode || !paperNode.question) return false;
		var question = paperNode.question;
		var isOptionBlocks = false;
		if (PaperConstants.MULTIPLE_CHOICE_QUESTION_TYPES.indexOf("," + question.type.code + ",") >= 0) {
			if (!(question.stem != null && question.stem.richText != null && (question.stem.richText.indexOf('id="option') >= 0 || question.stem.richText.indexOf('name="optionsTable') >= 0))) {
				if (paperNode && question && question.options && question.options.length > 0) {
					for (var option of question.options) {
						let label = option.label;
						if (option.label && option.label != null && option.label != "" && option.label.toLowerCase() != "null") {
							isOptionBlocks = true; // 一个不为空 全部渲染
							break;
						}
					}
				}
			}
		}
		if (isOptionBlocks) { // 题型错误，实际为选择题
			let stemDom = $("<div>" + paperNode.question.stem.richText + "</div>");
			if (stemDom.find("questionoption").length > 0 && stemDom.find("opt").length > 0 && stemDom.find("opt")[0].id.indexOf('option') >= 0) {
				isOptionBlocks = false;
			}
		}
		return isOptionBlocks;
	},
	checkRenderAnsweringArea:  function (paperNode) { // 检测题目答题区是否存在
		var isRenderAnsweringArea = true;

		if (paperNode && paperNode.question && paperNode.question.stem && paperNode.question.stem.richText && paperNode.question.stem.richText.length > 0) {
			if ((paperNode.question.children && paperNode.question.children.length) || (paperNode.question.childAmount && paperNode.question.childAmount > 0)) {
				isRenderAnsweringArea = false;
			}

			if (isRenderAnsweringArea) {
				let stemDom = $("<div>" + paperNode.question.stem.richText + "</div>");
				if (stemDom.find("u").length > 0) { // 判断下划线
					let uText = stemDom.find("u").text();
					if (uText.length > 0 && uText.trim() == 0) { // u下划线内容为空格时设置为存在答案区
						isRenderAnsweringArea = false;
					}
				} else if (stemDom.text().indexOf("___") > 0) { // 下划线空
					isRenderAnsweringArea = false;
				}
				if (isRenderAnsweringArea) { // <span style="text-decoration: underline;">　　　　　　　　　　　　　　　　　　　　　　　　　　</span>
					for (let spanTemp of stemDom.find('span')) {
						let sText = $(spanTemp).text();
						if (sText.length > 0 && sText.trim() == 0) { // 内容为空字符串
							let cssArray = spanTemp.style.cssText.split(";");
							if (cssArray.length > 0) {
								for (let i = 0; i < cssArray.length; i++) {
									if (cssArray[i].trim() == '') continue;
									let cssPropertyValue = cssArray[i].trim().split(":");
									if (cssPropertyValue[0].trim() == 'text-decoration' && cssPropertyValue[1].trim() == 'underline') {
										isRenderAnsweringArea = false;
										break;
									}
								}
							}
						}
					}
				}
			}
		}
		return isRenderAnsweringArea;
	}
}
var paperUtils = new paperUtils();
Object.freeze(paperUtils);
export {paperUtils as PaperUtils}
