import {QuestionBlock} from "../../../../comm/block/questionBlock.js";
import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {OverflowBlock} from "../../../../../js/dynaPageSizerRender/core/block/overflowBlock.js";

var compositionBlock = function (index, parentBlock, sourceData, customTypeName) {
	this.wordSize = 800;
	QuestionBlock.call(this, index, parentBlock, sourceData, customTypeName);
}

Utils.extendObj(compositionBlock, QuestionBlock);

compositionBlock.prototype.setWordSize = function (wordSizeTemp) {
	var wordSize = Utils.getNumberByStr(wordSizeTemp);
	if (wordSize < 500) {
		wordSize = 500;
	} else if (wordSize > 2000) {
		wordSize = 2000;
	}
	this.wordSize = wordSize;
	$(this.getClassName() + " ._btn._input").text(this.wordSize);
	$(this.getClassName() + " ._btn").siblings().removeClass("_active");
	for (var domTemp of $(this.getClassName() + " ._btn").not("._input")) {
		if ($(domTemp).text() == this.wordSize) {
			$(domTemp).addClass("_active");
		}
	}
}
compositionBlock.prototype.eventChangeWordSize = function (_this, _thisBlock, dom) {
	_thisBlock.setWordSize($(dom).text());
	_thisBlock.delayChangeDom(_this);
}
compositionBlock.prototype.renderEvent = function () {
	// 可能是溢出对象
	var _this = this;
	var _thisBlock = _this instanceof OverflowBlock ? _this.sourceBlock : _this;
	$(_this.getClassName() + " ._btn").not("._input").off("click").click(function (event) {
		_thisBlock.eventChangeWordSize(_this, _thisBlock, $(this));
	});
	$(_this.getClassName() + " ._btn._input").off("input").on("input", function (event) {
		_thisBlock.eventChangeWordSize(_this, _thisBlock, $(this));
	});
}

compositionBlock.prototype.buildWordIndexStr = function (i) {
	var childrenHtmlTemplateStrTemp = this.childrenHtmlTemplateStr;
	if (i % 100 === 0) {
		childrenHtmlTemplateStrTemp = Utils.spliceByStr(this.childrenHtmlTemplateStr,
			"<span class=\"_word_box indivisible\">", '<span class="_word_index">' + i + '字</span>', true)
	}
	return childrenHtmlTemplateStrTemp;
}
compositionBlock.prototype.buildChildrenTempleteStr = function (sourceData) {
	var htmlStr = "";
	for (let i = 1; i <= this.wordSize; i++) {
		htmlStr += this.buildWordIndexStr(i);
	}
	return htmlStr;
}


compositionBlock.prototype.boxFilling = function () {
	// 往dom中加元素，如果高度发生变化则说明换行了
	var compositionWordsDomTemp= $(this.getClassName()).find(".composition_words");
	var height = compositionWordsDomTemp.height();
	while (true) {
		var boxTemp = $(this.buildWordIndexStr(compositionWordsDomTemp.find("._word_box").length + 1));
		compositionWordsDomTemp.append(boxTemp);
		if (height != compositionWordsDomTemp.height()) {
			boxTemp.remove();
			break;
		}
	}
}
compositionBlock.prototype.buildDomComplte = function () {
	/* 填充写字格 直到满行 */
	this.boxFilling();
	this.setWordSize(this.wordSize);
}


export {compositionBlock as CompositionBlock}
