/*
* 单容器对象, 由该容器控制页面布局
*
* 单容器结构：
*   container
*     contentBlocks
*   container
*     contentBlocks
*  */


import {Utils} from "../../../utils/dynaPageSizerRenderUtils.js";
import {LayoutBlock} from "./layoutBlock.js";
import {OverflowBlock} from "../overflowBlock.js";

var containerBlock = function (index, parentBlock, pageContainerColumn, pageContainerRows) {
	var initSize = this.initSize(parentBlock, pageContainerColumn, pageContainerRows);
	LayoutBlock.call(this, index, parentBlock, initSize.width, initSize.height);
}
Utils.extendObj(containerBlock, LayoutBlock);

containerBlock.prototype.initSize = function (parentBlock, pageContainerColumn, pageContainerRows) {
	var parentWidth = parentBlock.widthPx;
	var parentHeight = parentBlock.heightPx;
	return {
		width: parentWidth/ pageContainerColumn,
		height: parentHeight/ pageContainerRows,
	}
}
containerBlock.prototype.addOverflowBlock = function (overflowDom, contentBlock) {
	return new OverflowBlock(this.children.length, this, $(overflowDom).prop("outerHTML"), contentBlock instanceof OverflowBlock ? contentBlock.sourceBlock : contentBlock);
}

containerBlock.prototype.getAxises = function (getThis) {
	if (getThis) return Utils.super(this);
	return this.rootBlock.getAxises();
}

containerBlock.prototype.buildDomComplte = function () {
	Utils.super(this);
	this.parentBlock.AddUseContainerSize(this);
}

export {containerBlock as ContainerBlock}
