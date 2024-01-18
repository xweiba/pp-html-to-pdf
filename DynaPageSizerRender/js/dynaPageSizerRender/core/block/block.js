/*
* 块基类
* */

import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";

var block = function (index, parentBlock, sourceData) {
	this.index = index;
	this.blockId = Utils.randomLenNumber(18);
	/*
	*  没有paren的contentBlock会被渲染至htmlDynamiBuildConfig的activeContainer上。
	*  有parentBlock的会被渲染至parentBlock.blockId上。
	* */
	this.parentBlock = parentBlock;
	this.data = {
		source: sourceData
	};
	this.children = [];
	this.init();
	// 渲染的根dom所在的block
	this.rootBlock;
	// 在根中的位置
	this.rootIndex;
	this.changeDomTimeOut = 500; // dom修改后，默认重新渲染等待时间。
	// 当block为当前页最后一个节点是，是否将block填充到container最大大小。
	this.isContainerLastBlockFillHeight = true;
}

block.prototype = {
	init() {
		var dynamiChildrenBlocks = this.dynamiChildrenBlocks();
		if (dynamiChildrenBlocks && dynamiChildrenBlocks.length > 0) {
			this.children.addAll(dynamiChildrenBlocks);
		}
	},
	htmlStr() {
		var htmlStrTemp = this.getTempleteStr();
		this.data.templete = this.buildTempleteData(this.data.source)
		htmlStrTemp = this.formatTemplete(htmlStrTemp);
		htmlStrTemp = this.buildTempleteBefore(htmlStrTemp);
		htmlStrTemp = this.buildTemplete(htmlStrTemp);
		return this.buildTempleteAfter(htmlStrTemp);
	},
	dynamiChildrenBlocks() {
	},
	getClassName(preClassName, isNotRootLink) {
		var className = "." + this.blockId;
		if (!Utils.isEmpty(preClassName)) {
			className = "." + preClassName + className;
		} else if (!isNotRootLink) {
			var rootBlock = this.rootBlock;
			if (!rootBlock && this.parentBlock) {
				rootBlock = this.parentBlock.rootBlock;
			}
			if (rootBlock) {
				className = rootBlock.getClassName() + " " + className;
			} else if (this.parentBlock && this.parentBlock.rootBlock) {
				className = " " + className;
			}
		}
		return className;
	},
	getAppendClassName(appendBlock) {
		if (!appendBlock) appendBlock = this;
		var appendClassName;
		if (appendBlock.parentBlock) {
			return appendBlock.parentBlock.blockId;
		}
		return appendClassName;
	},
	getTypeName(isNotSuperTypeName) {
		var name = this.__proto__.constructor.name.trim()
		if (isNotSuperTypeName) return name;
		var superTypeName = Utils.getParentTypeNames(this)
		if (superTypeName && name != superTypeName.trim()) {
			return superTypeName.trim() + " " + name;
		} else {
			return name;
		}
	},
	getTempleteStr() {
		return "<div><span class='_type_name'>" + this.getTypeName() + " Default Template</div></span>";
	},
	buildTempleteData(sourceData) {

	},
	getTempleteData() {
		return this.data?.templete ? this.data.templete : {};
	},
	buildTempleteBefore(templeteStr) {
		// 添加主键
		if (Utils.isEmpty(templeteStr)) templeteStr = "<div></div>";
		return $(templeteStr).addClass(this.buildTempleteClassName(this)).prop("outerHTML").trim();
	},
	buildTempleteClassName() {
		return this.blockId + " " + this.getTypeName();
	},
	buildTemplete(htmlStrTemp) {
		return htmlStrTemp;
	},
	formatTemplete(htmlStrTemp) { // 返回生成的 domHtmlStr
		return Utils.formatStr(htmlStrTemp, this.getTempleteData());
	},
	buildTempleteAfter(htmlStrTemp) {
		htmlStrTemp = this.buildTempleteFix(htmlStrTemp);
		htmlStrTemp = this.buildTempleteCss(htmlStrTemp);
		htmlStrTemp = this.dynamiChangeHtmlDom(htmlStrTemp);
		return htmlStrTemp;
	},
	dynamiChangeHtmlDom(htmlStrTemp) {
		return htmlStrTemp;
	},
	buildTempleteFix(htmlStrTemp) {
		if (!htmlStrTemp) {
			return htmlStrTemp;
		}
		htmlStrTemp = htmlStrTemp.replaceAll("\n", "");
		return htmlStrTemp.replaceAll("\\n", "");
	},
	buildTempleteCss(htmlStrTemp) {
		return $(htmlStrTemp).css(this.initCss()).prop("outerHTML").trim();
	},
	buildDomComplte() {
		// 在dom静态资源完全加载后执行。
	},
	getHeight(preClassName) {
		return $(this.getClassName(preClassName)).outerHeight();
	},
	getWidth(preClassName) {
		return $(this.getClassName(preClassName)).outerWidth();
	},
	renderBefore() {
		// htmlStr 渲染前
	},
	renderAfter() {
		// htmlStr 渲染后
	},
	beforeOverflow() {
		// 如有溢出，在处理溢出操作前执行
	},
	renderEvent() {
		// dom加载完毕，加载dom绑定事件，注意溢出dom中上下文会被替换为溢出的block，一定要适配动态上下文。
	},
	getBlockData() {
		// block所有业务数据
	},
	getAxises() {
		// 当前block的坐标数据
		var className = this.getClassName().trim();
		var thisDom = $($(className)[0]);

		var rootBlockAxises = this.rootBlock ? this.rootBlock.getAxises() : undefined;
		var domRect = this.buildAxises(rootBlockAxises, thisDom);

		// 获取子节点
		var childDoms = $(className + ">.content>.child_axises_item");
		for (let childDom of childDoms) {
			domRect.children.push(this.buildAxises(rootBlockAxises, $(childDom)));
		}
		return domRect;
	},
	buildAxises(rootBlockAxises, thisDom) {
		if (thisDom.length == 0) return null;
		var boundingClientRect = thisDom[0].getBoundingClientRect();

		// 判断宽度是否为100%，是的话需要减去padding的值
		if (Utils.isWidthOneHundredPercent(thisDom)) {
			/*var styleSubSizeTemp = this.styleSubSize(thisDom);
			var styleAddSizeTemp = this.styleAddSize(thisDom);
			boundingClientRect.width -= (styleSubSizeTemp.width);
			boundingClientRect.height -= (styleSubSizeTemp.height);
			boundingClientRect.width += (styleAddSizeTemp.width);
			if (styleAddSizeTemp.height > 0) {
				boundingClientRect.height += (styleAddSizeTemp.height);
				boundingClientRect.y -= styleAddSizeTemp.height;
			}*/
		}

		var domRect;
		if (rootBlockAxises) {
			domRect = {
				block: this,
				x: boundingClientRect.x - rootBlockAxises.x,
				y: boundingClientRect.y - rootBlockAxises.y,
				width: boundingClientRect.width,
				height: boundingClientRect.height,
				children: []
			}
		} else {
			domRect = {
				block: this,
				x: boundingClientRect.x,
				y: boundingClientRect.y,
				width: boundingClientRect.width,
				height: boundingClientRect.height,
				children: []
			}
		}
		return domRect;
	},
	styleAddSize(dom) {
		if (!dom) dom = $(this.getClassName());
		var width = Utils.getDomStyleAddWidth(dom);
		var height = Utils.getDomStyleAddHeight(dom);

		return {
			width: width,
			height: height,
		}
	},
	styleSubSize(dom) {
		if (!dom) dom = $(this.getClassName());
		var width = Utils.getDomStyleSubWidth(dom);
		var height = Utils.getDomStyleSubHeight(dom);
		return {
			width: width,
			height: height,
		}
	},
	initCss() {
		return {}
	},
	buildOverflowDomBefore(virtualDomTemp, overflowDomTemp, contentBlock) {
		// 自定义溢出dom， 每次溢出移出dom前回调

	},
	destroy() {
		let className = this.getClassName();
		$(className).remove();
		this.rootIndex = undefined;
		this.rootBlock = undefined;
	},
	changeDomEvent: function (_this) {
		// 会由render重写到DynaPageSizerRenderConfig中
	},
	delayChangeDom: function (_this) {
		clearTimeout(_this.setTimeoutIndex);
		_this.setTimeoutIndex = setTimeout(async function () {
			await _this.changeDomEvent(_this);
		}, this.changeDomTimeOut);
	},
}

export {block as Block}
