import {Block} from "../block.js";
import {Utils} from "../../../utils/dynaPageSizerRenderUtils.js";

var layoutBlock = function (index, parentBlock, width, height) {
	this.width = width;
	this.height = height;
	this.heightPx = 0;
	this.widthPx = 0;
	Block.call(this, index, parentBlock);
}
Utils.extendObj(layoutBlock, Block);

layoutBlock.prototype.resetSize = function () {
	// 添加 box-sizing: border-box; 不需要计算边距
	// var styleSubWidth = 0;
	// var styleSubHeight = 0;
	//
	// var styleSubSize = this.styleSubSize();
	// if (styleSubSize) {
	// 	// *2 加上自己的
	// 	styleSubWidth = styleSubSize.width * 2;
	// 	styleSubHeight = styleSubSize.height * 2;
	// }
	//
	// var dom = $(this.getClassName());
	// dom.css("width", this.getWidth() - styleSubWidth + "px");
	// dom.css("height", this.getHeight() - styleSubHeight + "px");
	var dom = $(this.getClassName());
	this.widthPx = dom.width();
	this.heightPx = dom.height();
}
layoutBlock.prototype.buildDomComplte = function () {
	Utils.super(this);
	this.resetSize();
}

layoutBlock.prototype.getTempleteStr = function () {
	return "<div></div>";
}

layoutBlock.prototype.checkOverflow = function (contentBlock, preClassName) {
	if (contentBlock == this) return false;
	if (this.getChildrenSize().height > this.heightPx) {
		return true;
	}
	return false;
}

layoutBlock.prototype.getOverflowSize = function (contentBlock) {
	var childrenSize = this.getChildrenSize();
	return {
		height: this.heightPx - childrenSize.height,
		width: this.widthPx - contentBlock.getWidth(),
	}
}

layoutBlock.prototype.getChildrenSize= function (){
	var childrenHeight = 0;
	var childrenWidth = $(this.getClassName()).children().outerWidth(true);
	$(this.getClassName()).children().each(function() {
		var outerHeight = $(this).outerHeight(true);
		childrenHeight += outerHeight;
	});
	return {
		width: childrenWidth,
		height: childrenHeight,
	};
}

layoutBlock.prototype.initCss= function (){
	return $.extend(Utils.super(this), {
		width: this.width,
		height: this.height,
	});
}
layoutBlock.prototype.resetUse= function (){
	this.useWidth = 0;
	this.useHeight = 0;
}

export {layoutBlock as LayoutBlock}
