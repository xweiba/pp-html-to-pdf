/*
* 内容块基类, 支持父子层级。
* */

import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";
import {ContentBlock} from "./contentBlock.js";
import {LayoutBlock} from "./layout/layoutBlock.js";

var overflowBlock = function (index, parentBlock, domStr, sourceBlock) {
	this.sourceBlock = sourceBlock;
	this.domStr = domStr;
	this.overFlowBlockMark = "move_to_overflow";
	ContentBlock.call(this, index, parentBlock, sourceBlock.data);
}
Utils.extendObj(overflowBlock, ContentBlock);

overflowBlock.prototype.getTypeName = function () {
	return this.sourceBlock.getTypeName() + " " + this.constructor.name;
}
overflowBlock.prototype.buildOverflowDomBefore = function (virtualDomTemp, overflowDomTemp) {
	this.sourceBlock.buildOverflowDomBefore(virtualDomTemp, overflowDomTemp, this);
}
overflowBlock.prototype.init = function () {
	Utils.super(this);
	this.blockId = this.sourceBlock.blockId;
}

overflowBlock.prototype.buildTempleteClassName = function () {
	return this.sourceBlock.buildTempleteClassName() + " " + Utils.super(this);
}
overflowBlock.prototype.getTempleteStr = function () {
	return this.domStr;
}
overflowBlock.prototype.buildTempleteAfter = function (htmlStrTemp) {
	htmlStrTemp = Utils.super(this, htmlStrTemp);
	var parantHtmlDom = this.getParantHtmlDom(this.sourceBlock.parentBlock, this.markOverFlow(this.blockId, $(htmlStrTemp)[0]));
	return parantHtmlDom ? parantHtmlDom.outerHTML() : htmlStrTemp;
}

overflowBlock.prototype.renderEvent = function () {
	// 绑定sourceBlock事件， 注意执行过程中使用正确的上下文
	Utils.bindContextExcuteMethod(this.sourceBlock, this, "renderEvent");
}
overflowBlock.prototype.getAppendClassName = function (appendBlock) {
	if (!appendBlock) appendBlock = this;
	var appendClassName;
	if (appendBlock.parentBlock) {
		return this.overFlowBlockMark + "." + appendBlock.parentBlock.blockId;
	}
	return appendClassName;
}

overflowBlock.prototype.cleanMarkClass = function () {
	for (var overParentDom of $("." + this.overFlowBlockMark)) {
		overParentDom.classList.remove(this.overFlowBlockMark);
	}
}
overflowBlock.prototype.markOverFlow = function (blockId, domTemp) {
	if (domTemp.classList != undefined) {
		if (!domTemp.classList.contains(this.overFlowBlockMark)) {
			domTemp.classList.add(this.overFlowBlockMark);
		}
	}
	return domTemp;
}

overflowBlock.prototype.cleanDom = function (tempDom) {
	if (tempDom.children().length == 0 && (tempDom.height() == 0 || tempDom.hasClass("containerLastBlockFillHeight")))  {
		tempDom.remove();
	}
}
overflowBlock.prototype.buildDomComplte = function () {
	Utils.super(this);
}
overflowBlock.prototype.getParantHtmlDom = function (block, childDom) {
	if (!block) {
		return undefined;
	}
	var rootClassName = "";
	if (!(block instanceof LayoutBlock)) {
		if (!block.rootBlock) {
			if (block.parentBlock && block.parentBlock.rootBlock) {
				rootClassName = "." + block.parentBlock.rootBlock.blockId;
			}
		} else {
			rootClassName = "." + block.rootBlock.blockId;
		}
	}
	var blockDom = Utils.buildVirtualDom(rootClassName +  " ." + block.blockId, false, true);
	if (!blockDom) return blockDom;
	if ($(blockDom.target).hasClass("containerLastBlockFillHeight")) {
		blockDom.style = {};
		$(blockDom.target).removeAttr("style");
	}
	blockDom = this.markOverFlow(block.blockId, blockDom)
	if (childDom && ((block instanceof LayoutBlock) || block.rootBlock)) {
		var childrenContentClassName = (block instanceof LayoutBlock ? "" : "." + block.rootBlock.blockId) +  " ." + block.blockId + ">._dyna_children_content";
		if ($(childrenContentClassName).length == 1) {
			var childrenContentDom = Utils.buildVirtualDom(childrenContentClassName, false, true);
			blockDom.childNodes.push(childrenContentDom);
			childrenContentDom.childNodes.push(childDom);
			this.cleanDom($(childrenContentClassName))
		} else {
			blockDom.childNodes.push(childDom);
		}
	}
	this.cleanDom($("." + block.blockId));
	if (block.parentBlock) {
		var parentDom = this.getParantHtmlDom(block.parentBlock, blockDom);
		if (parentDom) blockDom = parentDom;
	}
	return blockDom;
}
export {overflowBlock as OverflowBlock}
