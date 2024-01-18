import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {QuestionBlock} from "../../../../comm/block/questionBlock.js";
import {OverflowBlock} from "../../../../../js/dynaPageSizerRender/core/block/overflowBlock.js";

var fillInTheBlankBlock = function (index, parentBlock, sourceData, customTypeName) {
	QuestionBlock.call(this, index, parentBlock, sourceData, customTypeName);
	this.blanks = [{
		sequencing: 0,
		width: 603
	}, {
		sequencing: 1,
		width: 629
	}, {
		sequencing: 2,
		width: 300
	}, {
		sequencing: 2,
		width: 323
	}, {
		sequencing: 2,
		width: 150
	}, {
		sequencing: 2,
		width: 200
	}, {
		sequencing: 2,
		width: 268
	}, {
		sequencing: 2,
		width: 629
	}, {
		sequencing: 2,
		width: 300
	}, {
		sequencing: 2,
		width: 323
	}, {
		sequencing: 2,
		width: 629
	}
	]
}

Utils.extendObj(fillInTheBlankBlock, QuestionBlock);

fillInTheBlankBlock.prototype.buildDomComplte = function (sourceData) {
	// 调整最大宽度
	Utils.super(this);
	var thisDom = $(this.getClassName("", true));
	var maxWidthTemp = thisDom.parent().width() - 5;
	let colums = thisDom.find(".fillInTheBlank_column");
	for (var i = 0; i < colums.length; i++) {
		var columMaxWidthTemp = maxWidthTemp;
		if (i == 0) {
			columMaxWidthTemp -= (thisDom.find(".question_external_no").outerWidth() + 1);
		}
		$(colums[i]).css("max-width", columMaxWidthTemp + "px");
		// 最后一个添加控制dom
		if (i == colums.length - 1) {
			$(colums[i]).append("<div class=\"control\">\n" +
				"                <img class=\"add\" src=\"img/add.png\">\n" +
				"                <img class=\"minus\" src=\"img/minus.png\">\n" +
				"            </div>");
		}
	}
}
fillInTheBlankBlock.prototype.renderEvent = function () {
	// 可能是溢出对象
	var _this = this;
	var _thisBlock = _this instanceof OverflowBlock ? _this.sourceBlock : _this;
	for (const findElement of $(_this.getClassName()).find(".fillInTheBlank_column")) {
		_thisBlock.renderChildrenTempleteEvent(findElement);
	}
}

fillInTheBlankBlock.prototype.renderChildrenTempleteEvent = function (findElement) {
	var _this = this;
	// 监听宽度
	Utils.listeningToDomAttributes(findElement, ['style', 'class'], function (element){
		var _thisBlock = _this;
		var childrenDomIndex = $(findElement).attr("sequencing");
		var currentWidth = element.clientWidth;
		var blank = _this.blanks[childrenDomIndex];
		if (currentWidth > 0 && currentWidth != blank.width) {
			console.log("changeWidth");
			blank.width = currentWidth;
			_thisBlock.delayChangeDom(_this);
		}
	});
	var jqDom = $(findElement);
	jqDom.find(".add").on("click", function (event) {
		var _thisBlock = _this;
		// 这个html只是用来好看的，delayChangeDom后会全部重新渲染
		jqDom.parent().append(_thisBlock.buildChildrenHtmlStr());
		_thisBlock.blanks.push({
			sequencing: _thisBlock.blanks.length - 1,
			width: jqDom.parent().children().last().width()
		});
		_thisBlock.delayChangeDom(_this);
	});
	jqDom.find(".minus").on("click", function (event) {
		var _thisBlock = _this;
		var childrenDomIndex =$(findElement).attr("sequencing");
		if (childrenDomIndex > 1) {
			jqDom.remove();
			_thisBlock.blanks.splice(childrenDomIndex, 1);
		}
		_thisBlock.delayChangeDom(_this);
	});
}
fillInTheBlankBlock.prototype.buildChildrenHtmlStr = function (sequencing, width) {
	var htmlStr = Utils.formatStr(this.childrenHtmlTemplateStr, {sequencing:sequencing});
	if (width) {
		htmlStr = $(htmlStr).width(width + "px").prop("outerHTML");
	}
	return htmlStr.trim();
}
fillInTheBlankBlock.prototype.buildChildrenTempleteStr = function (sourceData) {
	var htmlStr = "";
	if (this.blanks && this.blanks.length > 0) {
		for (let i = 0; i < this.blanks.length; i++) {
			htmlStr += this.buildChildrenHtmlStr(i, this.blanks[i].width);
		}
	} else {
		htmlStr = this.buildChildrenHtmlStr(0);
	}
	return htmlStr;
}
export {fillInTheBlankBlock as FillInTheBlankBlock}
