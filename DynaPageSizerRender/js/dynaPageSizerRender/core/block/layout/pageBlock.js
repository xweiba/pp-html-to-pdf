/*
* 单页对象
*
* 单页结构：
* page
*   container
*     contentBlocks
*   container
*     contentBlocks
*  */
import {Utils} from "../../../utils/dynaPageSizerRenderUtils.js";
import {ContainerBlock} from "./containerBlock.js";
import {LayoutBlock} from "./layoutBlock.js";

var pageBlock = function (index, renderConfig) {
    if (!this.getContainerType() instanceof ContainerBlock) {
        throw new Error("newPageType is not a successor of containerBlock");
    }
    this.useWidth = 0;
    this.useHeight = 0;
    this.renderConfig = renderConfig;
    LayoutBlock.call(this, index, {
        blockId: renderConfig.rootClassName
    }, renderConfig.pageWidth, renderConfig.pageHeight);
}
Utils.extendObj(pageBlock, LayoutBlock);

pageBlock.prototype.buildTempleteAfter = function (htmlStrTemp) {
    htmlStrTemp = Utils.super(this, htmlStrTemp);
    var pageDom = $(htmlStrTemp);
    pageDom.addClass(this.renderConfig.fontType);
    return pageDom.prop("outerHTML").trim();
}
pageBlock.prototype.styleAddSize = function () {
    return {
        width: 0,
        height: 0
    }
}
pageBlock.prototype.getContainerType = function () {
    return ContainerBlock;
}

pageBlock.prototype.checkOverflow = function (contentBlock) {
    if (contentBlock == this) return false;
    if (this.useWidth > this.widthPx && this.useHeight > this.heightPx) {
        this.useWidth = contentBlock.widthPx;
        this.useHeight = contentBlock.heightPx;
        return true;
    }
    return false;
}

pageBlock.prototype.addContainer = function () {
    var containerType = this.getContainerType();
    var containerBlock = new containerType(this.children.length, this, this.renderConfig.pageContainerColumn, this.renderConfig.pageContainerRows);
    return containerBlock;
}

pageBlock.prototype.AddUseContainerSize = function (containerBlock) {
    var width = containerBlock.widthPx;
    if (this.useWidth + width > this.widthPx) {
        if (this.useHeight + containerBlock.heightPx >= this.heightPx) {
            this.useWidth += width;
            this.useHeight += this.heightPx;
        } else {
            this.useHeight += containerBlock.heightPx;
            this.useWidth = width;
        }
    } else {
        this.useWidth += width;
        if (this.useHeight == 0) this.useHeight = containerBlock.heightPx;
    }
}

pageBlock.prototype.resetUseContainerSize = function () {
    this.useHeight = 0;
    this.useWidth = 0;
    for (var child of this.children) {
        this.AddUseContainerSize(child);
    }
}

pageBlock.prototype.getAxises = function (getThis) {
    var axises = Utils.super(this);
    if (getThis) {
        axises.x = 0;
        axises.y = 0;
    }
    return axises;
}

export {pageBlock as PageBlock}
