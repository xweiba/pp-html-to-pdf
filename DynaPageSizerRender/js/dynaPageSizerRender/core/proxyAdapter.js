/*
* web 打印配置类,该对象全局持有
* 作为renderingConfig的中间代理层，所有renderingConfig变更都通过htmlDynamiBuildConfig操作。
*
*
* */

/*
* 配置和业务访问Render的代理类
* renderer渲染器持有htmlDynamiBuildConfig，
* 通过htmlDynamiBuildConfig代理访问renderingConfig，
* 修改renderingConfig通过htmlDynamiBuildConfig即可同步更新所有获取renderingConfig的位置。
* */
import {PageBlock} from "./block/layout/pageBlock.js";
import {ContainerBlock} from "./block/layout/containerBlock.js";
import {OverflowBlock} from "./block/overflowBlock.js";
import {Utils} from "../utils/dynaPageSizerRenderUtils.js";
import {Renderer} from "./renderer/renderer.js";

var proxyAdapter = function (renderConfig, newPageType, changeDomCallback) {
	// 页集合，页为最顶级的block
	this.pages = [];
	this.converterContentBlocks;
	// 当前页激活容器，所有的container都会往该页渲染，contentBlock会渲染至该页面的activeContainer上。
	this.activePage;
	this.activeContainer;
	this.activeOverflowBlock;
	if (!newPageType instanceof PageBlock) {
		throw new Error("newPageType is not a successor of pageBlock");
	}
	this.newPageType = newPageType;
	this.pageBlockAxises = [];
	// 渲染器配置
	this.renderConfig = renderConfig;
	this.renderer = new Renderer(this);
	this.changeDomCallback = changeDomCallback;
};

proxyAdapter.prototype = {
	init(converterContentBlocks) {
		this.converterContentBlocks = converterContentBlocks;
		this.rendererDestroyAndBuildBlocksStartByBlock();
	},
	async rendererDestroyAndBuildBlocksStartByBlock(startBlock) {
		this.destroyStartByBlock(startBlock);
		await this.buildBlocksStartByBlockId(startBlock ? startBlock.blockId : undefined);
	},
	async changeRenderConfig(renderConfig) {
		// 修改渲染配置需要重新刷新整个页面
		this.renderConfig = renderConfig;
		this.resetPage();
		await this.rendererDestroyAndBuildBlocksStartByBlock();
	},
	resetPage() {
		for (let i = this.pages.length-1; i >= 0; i--) {
			this.destroyLayout(i, this.pages);
		}
		this.activePage = undefined;
		this.activeContainer = undefined;
		this.activeOverflowBlock = undefined;
	},
	addPage() {
		var _this = this;
		// 新增页
		var pageBlock = new _this.newPageType(_this.pages.length, this.renderConfig);
		pageBlock.rootIndex = _this.pages.length;
		_this.activePage = pageBlock;
		_this.pages.push(pageBlock);
		_this.cleanOverFlowMark();
		return pageBlock;
	},
	addContainer() {
		var _this = this;
		var container = _this.activePage.addContainer();
		_this.activeContainer = container;
		_this.cleanOverFlowMark();
		return container;
	},
	cleanOverFlowMark() {
		var _this = this;
		if (!_this.activeOverflowBlock) return;
		_this.activeOverflowBlock.cleanMarkClass();
		_this.activeOverflowBlock = undefined;
	},
	addOverflowBlock(overflowDom, contentBlock) {
		// 溢出dom要带上父节点，否则样式可能丢失。
		this.activeOverflowBlock = this.activeContainer.addOverflowBlock(overflowDom, contentBlock);
		return this.activeOverflowBlock;
	},
	checkOverflow(contentBlock) {
		var _this = this;
		if (!(contentBlock instanceof PageBlock)) {
			var preClassName = _this.activeOverflowBlock && !(contentBlock instanceof OverflowBlock) ? _this.overFlowBlockMark : null;
			if (contentBlock instanceof ContainerBlock && _this.activePage.checkOverflow(contentBlock, preClassName)) {
				return 1;
			} else if (_this.activeContainer && _this.activeContainer.checkOverflow(contentBlock, preClassName)) {
				return 2;
			}
		}
		return 0;
	},
	getOverflowSize(contentBlock) {
		var _this = this;
		if (!(contentBlock instanceof PageBlock)) {
			var preClassName = _this.activeOverflowBlock && !(contentBlock instanceof OverflowBlock) ? _this.overFlowBlockMark : null;
			if (contentBlock instanceof ContainerBlock) {
				return _this.activePage.getOverflowSize(contentBlock);
			} else if (_this.activeContainer) {
				return _this.activeContainer.getOverflowSize(contentBlock);
			}
		}
		return {
			width: 0,
			height: 0,
		};
	},
	hasBlock(contentBlock) {
		if (contentBlock instanceof PageBlock) return true;
		return $(contentBlock.getClassName("", true)).length > 0;
	},
	getActiveBlock(contentBlock) {
		if (contentBlock instanceof PageBlock) return null;
		var rootBlock = this.activeContainer;
		if (contentBlock instanceof ContainerBlock) {
			rootBlock = this.activePage;
		}
		return rootBlock;
	},
	linkRootBlock(contentBlock) {
		var rootBlock = this.getActiveBlock(contentBlock);
		if (!rootBlock) return;

		if (this.hasBlock(contentBlock)) {
			contentBlock.rootIndex = rootBlock.children.length;
			rootBlock.children.push(contentBlock);
			contentBlock.rootBlock = rootBlock;
		}
	},
	getAllContentBlockData(addLayoutData) {
		var axises = [];
		for (var page of this.pages) {
			if (addLayoutData) axises.push(page.getAxises(true))
			for (var container of page.children) {
				if (addLayoutData) axises.push(container.getAxises(true))
				for (var contentBlock of container.children) {
					var axisesTemp = contentBlock.getAxises();
					if (axisesTemp) {
						axises.push(axisesTemp);
					}
				}
			}
		}
		return axises;
	},
	buildBlocksComplte() {
		this.lastBlockFillHeight();
		this.cleanOverFlowMark();
		if (this.renderConfig.debug) {
			this.showBlockAxise();
		}
	},
	lastBlockFillHeight() {
		var _this = this;
		var lastChildren = Utils.getLastChildren(_this.pages);
		if (lastChildren) {
			_this.renderer.containerLastBlockFillHeight(lastChildren);
		}
	},
	showBlockAxise() {
		this.cleanBlockAxises();
		this.pageBlockAxises = this.getAllContentBlockData(true);
		for (const pageBlockAxise of this.pageBlockAxises) {
			this.buildShowBlockAxise(pageBlockAxise);
			if (pageBlockAxise.children && pageBlockAxise.children.length > 0) {
				for (let children of pageBlockAxise.children) {
					this.buildShowBlockAxise(children);
				}
			}
		}
	},
	buildShowBlockAxise(pageBlockAxise) {
		var block = pageBlockAxise.block;
		var rootBlock = this.getAxiseRootBlock(block);
		var htmlStr = "<div class='debug_axise axise_" + block.blockId + " " + block.getTypeName() + "';" +
			" style='position: absolute;" +
			" top: {y}px; left:{x}px;width:{width}px; height:{height}px;'></div>";
		$(rootBlock.getClassName()).append(Utils.formatStr(htmlStr, pageBlockAxise));
	},
	cleanBlockAxises() {
		if (this.pageBlockAxises && this.pageBlockAxises.length > 0) {
			var pageBlockAxises = this.pageBlockAxises ? this.pageBlockAxises : this.getAllContentBlockData(true);
			for (const pageBlockAxise of pageBlockAxises) {
				this.cleanBlockAxise(pageBlockAxise.block);
			}
		}
		this.pageBlockAxises = [];
	},
	cleanBlockAxise(block) {
		var rootBlock = this.getAxiseRootBlock(block);
		$(rootBlock.getClassName() + " .axise_" + block.blockId).remove();
		this.pageBlockAxises = [];
	},
	getAxiseRootBlock(aiseBlock) {
		var rootBlock = aiseBlock.rootBlock;
		if (rootBlock && rootBlock instanceof ContainerBlock) {
			rootBlock = rootBlock.rootBlock;
		} else {
			rootBlock = aiseBlock;
		}
		return rootBlock;
	},
	destroyStartByBlock(startBlock) {
		// 销毁从startBlock开始及之后的所有block
		if (!startBlock) return;
		this.cleanBlockAxises();
		var rootIndex = startBlock.rootIndex;
		var rootBlock = startBlock.rootBlock;
		// 销毁在当前rootBlock下的dom

		// 清理当前节点及之后的节点
		this.destroyLayout(rootIndex, rootBlock.children);
		this.activeOverflowBlock = undefined;

		// 清理container和page
		if (rootBlock.rootBlock) {
			var page = rootBlock.rootBlock;
			if (rootBlock.rootIndex < page.children.length) { // container
				this.activeContainer = rootBlock;
				this.destroyLayout(rootBlock.rootIndex + 1, page.children);
			}
			if (page.rootIndex < this.pages.length) { // page
				this.activePage = page;
				this.destroyLayout(page.rootIndex + 1, this.pages);
				for (let pageTemp of this.pages) {
					pageTemp.resetUseContainerSize();
				}
			}
		}
	},
	destroyLayout(index, blocks) {
		this.destroyBlock(index, blocks);
		blocks.length = index;
	},
	destroyBlock(index, blocks) {
		for (let i = index; i < blocks.length; i++) {
			let contentBlock = blocks[i];
			if (contentBlock.children && contentBlock.children.length > 0) {
				this.destroyBlock(0, contentBlock.children);
			}
			contentBlock.destroy();
		}
	},
	async buildBlocksStartByBlockId(startBlockId) { // 支持从指定blockId重新渲染
		var _this = this;
		var contentBlocks = _this.converterContentBlocks;
		if (Utils.isEmpty(contentBlocks)) return;
		let contentBlockLength = contentBlocks.length;
		for (let i = 0; i < contentBlockLength; i++) {
			var contentBlock = contentBlocks[i];
			startBlockId = await _this.renderer.render(contentBlock, startBlockId);
		}
		this.buildBlocksComplte();
	},
	async changeDomEvent(startBlock) {
		var _this = startBlock.proxyAdapter;
		await _this.rendererDestroyAndBuildBlocksStartByBlock(startBlock);
		_this.changeDomCallback && _this.changeDomCallback(startBlock);
	},
}
export {proxyAdapter as ProxyAdapter};
