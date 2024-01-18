/*
* Html 渲染器
* */

import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";
import {PageBlock} from "../block/layout/pageBlock.js";
import {ContainerBlock} from "../block/layout/containerBlock.js";
import {LayoutBlock} from "../block/layout/layoutBlock.js";

var renderer = function (proxyAdapter) {
	this.proxyAdapter = proxyAdapter;
	this.childContentClassName = "_dyna_children_content";
}

renderer.prototype = {
	getParantSliceBlocks(contentBlock) {
		let parentBlock = contentBlock.parentBlock;
		var parentChildrens = [];
		if (parentBlock) {
			parentChildrens = contentBlock.parentBlock.children.slice(contentBlock.index, contentBlock.parentBlock.children.length);
		} else {
			parentChildrens;
		}
		return parentChildrens
	},
	async render(contentBlock, destroyStartBlockId) {
		var _this = this;

		// 不能往上层移动 动态添加的block的changeDomEvent需要在这里处理
		if (contentBlock.changeDomEvent != _this.proxyAdapter.changeDomEvent) {
			contentBlock.changeDomEvent = _this.proxyAdapter.changeDomEvent;
			contentBlock.proxyAdapter = _this.proxyAdapter;
		}

		if (!destroyStartBlockId || contentBlock.blockId == destroyStartBlockId) {
			destroyStartBlockId = undefined;
			// 渲染前处理
			await _this.renderBefore(contentBlock);
			// 先渲染当前节点
			await _this.renderHtml(contentBlock);
			// 渲染完成
			_this.buildDomComplte(contentBlock);

			// 溢出处理
			var overFlowType = _this.checkOverflow(contentBlock);
			if (overFlowType) {
				var overflowDom = _this.getOverflowDom(contentBlock);
				// 渲染后处理
				// 本contentBlock 可能整个都溢出了，会被清除掉，此时contentBlock才算构建完成
				_this.renderAfter(contentBlock, true);
				if (overflowDom) {
					contentBlock.beforeOverflow();
					// 1. 先创建新的容器
					if (contentBlock instanceof ContainerBlock) {
						var addPage = _this.proxyAdapter.addPage();
						await _this.render(addPage);
					}
					var addContainer = _this.proxyAdapter.addContainer();
					await _this.render(addContainer);

					if (!(contentBlock instanceof ContainerBlock)) { // 非ContainerBlock
						var addOverflowBlock = _this.proxyAdapter.addOverflowBlock(overflowDom, contentBlock);
						// 溢出dom渲染
						await _this.render(addOverflowBlock);
					}
				}
			} else {
				// 渲染后处理
				_this.renderAfter(contentBlock);
			}
		}

		if (contentBlock.children && contentBlock.children.length > 0) {
			for (const child of contentBlock.children) {
				destroyStartBlockId = await _this.render(child, destroyStartBlockId);
			}
		}
		return destroyStartBlockId;
	},
	async renderHtml(contentBlock) {
		var _this = this;
		var htmlStr = contentBlock.htmlStr();

		var appendClassName = _this.getAppendClassName(contentBlock);
		_this.htmlAppend(appendClassName, htmlStr, contentBlock);
		// 等待渲染完成
		await _this.checkRenderDoneExecute(_this.checkDomLoadDone, contentBlock);
	},
	htmlAppend(appendClassName, htmlStr, contentBlock) {
		var appendByDom = $(appendClassName);
		if (!(contentBlock instanceof LayoutBlock)) {
			appendClassName = appendClassName + ">." + this.childContentClassName;
			var childrenContentDom = $(appendClassName);
			if (childrenContentDom.length == 0) {
				appendByDom.append('<div class="' + this.childContentClassName + '"></div>')
			}
		}
		$(appendClassName).append(htmlStr);
	},
	buildDomComplte(contentBlock) {
		contentBlock.buildDomComplte();
	},
	getAppendClassName(contentBlock) {
		var _this = this;
		var appendClassName;
		if (contentBlock instanceof PageBlock || contentBlock instanceof ContainerBlock) {
			appendClassName = contentBlock.parentBlock.blockId;
		} else {
			if (_this.proxyAdapter.activeOverflowBlock) {
				appendClassName = _this.proxyAdapter.activeOverflowBlock.getAppendClassName(contentBlock);
			}
			if (Utils.isEmpty(appendClassName) || $("." + appendClassName).length == 0) {
				appendClassName = _this.proxyAdapter.activeContainer.blockId + " ." + contentBlock.getAppendClassName();
			}
			if (Utils.isEmpty(appendClassName) || $("." + appendClassName).length == 0) {
				appendClassName = _this.proxyAdapter.activeContainer.blockId;
			}
		}
		return "." + appendClassName;
	},
	renderAfter(contentBlock, isContainerLastBlockFillHeight) {
		this.proxyAdapter.linkRootBlock(contentBlock);
		var _contentBlock;
		if (this.proxyAdapter.hasBlock(contentBlock)) { // 溢出后可能dom都不存在了，后面的处理就不需要了
			_contentBlock = contentBlock;
			// 渲染后处理
			contentBlock.renderAfter();
			// 事件绑定
			contentBlock.renderEvent();
		} else if (isContainerLastBlockFillHeight) {
			var activeBlock = this.proxyAdapter.getActiveBlock(contentBlock);
			// 扩充上一个
			let _index = activeBlock.children.length - 1;
			if (_index >= 0) {
				_contentBlock = activeBlock.children[_index]
			}
		}
		if (isContainerLastBlockFillHeight && _contentBlock && !(contentBlock instanceof LayoutBlock)) {
			this.containerLastBlockFillHeight(_contentBlock);
		}
	},
	containerLastBlockFillHeight(contentBlock) {
		if (contentBlock && contentBlock.isContainerLastBlockFillHeight) {
			var overflowSize = this.getOverflowSize(contentBlock);
			if (overflowSize.height != 0 || overflowSize.width != 0) {
				var dom = $(contentBlock.getClassName());
				if (dom.length > 0) {
					var height = contentBlock.getHeight() + overflowSize.height;
					var width = contentBlock.getWidth() + overflowSize.width;
					dom.css("width", width + "px");
					dom.css("height", height + "px");
					dom.addClass("containerLastBlockFillHeight");
				}
			}
		}
	},
	async checkRenderDoneExecute(checkDomLoadCallBack, contentBlock) {
		if (Utils.isEmpty(checkDomLoadCallBack)) return;
		var _this = this;
		var isLoadComplete = checkDomLoadCallBack(params);
		var i = 0;
		while (!isLoadComplete) {
			if (i >= this.proxyAdapter.renderConfig.checkDomLoadMaxCount) {
				console.error("dom 加载等待时间超过最大检测上限, contentBlock:\n" + (contentBlock != undefined ? contentBlock.htmlStr() : ""));
				break;
			}
			i++;
			isLoadComplete = checkDomLoadCallBack(params);
			console.log("checkRenderSucceed count: " + i)
			await Utils.sleep(this.proxyAdapter.renderConfig.checkDomLoadCycleTime);
		}
	},
	checkDomLoadDone(contentBlock) { // 待子类重写
		var _this = this;
		return true;
	},
	async renderBefore(contentBlock) {
		var _this = this;
		// 默认新增页
		if (_this.proxyAdapter.pages == undefined || _this.proxyAdapter.pages.length == 0) {
			await _this.addPage();
		}
		await contentBlock.renderBefore();
	},
	async addPage() {
		var _this = this;
		var pageBlock = _this.proxyAdapter.addPage();
		await _this.render(pageBlock);
		await _this.addContainer();
		return pageBlock;
	},
	async addContainer() {
		var _this = this;
		var containerBlock = _this.proxyAdapter.addContainer();
		await _this.render(containerBlock);
		return containerBlock;
	},
	getOverflowDom: function (contentBlock) {
		// 获取OverflowDom并原来的删除，添加到overflowDom返回。
		var _this = this;
		// 1. 生成虚拟dom
		var contentDomTemp = $(contentBlock.getClassName("", true) + ":last");
		var virtualDom = Utils.buildVirtualDom(contentDomTemp, true);

		// 2. 虚拟溢出Dom, 初始化初始化溢出Dom
		var overflowDom = Utils.buildVirtualDom(contentDomTemp, false, true);
		if (overflowDom.classList != undefined) overflowDom.classList.remove(contentBlock.blockId);

		// 构建溢出dom
		_this.buildOverflowDom(virtualDom, overflowDom, contentBlock);

		if (overflowDom != undefined) {
			// 添加父节点结构
			overflowDom = $(overflowDom.outerHTML());
		}

		return overflowDom;
	},
	checkOverflow(contentBlock) {
		return this.proxyAdapter.checkOverflow(contentBlock);
	},
	getOverflowSize(contentBlock) {
		return this.proxyAdapter.getOverflowSize(contentBlock);
	},
	async renderOverflowHtml(contentBlock) {
		var _this = this;
		var isCheckOverflow = _this.checkOverflow(contentBlock);
		if (isCheckOverflow) {
			// 先获取溢出contentBlock
			var overflowBlock = _this.buildOverflowBlock(contentBlock);
			if (contentBlock instanceof ContainerBlock) {
				await _this.addPage();
			} else {
				await _this.addContainer();
			}
			_this.render(overflowBlock);
		}
	},
	buildOverflowDom: function (virtualDomTemp, overflowDomTemp, contentBlock) {
		if (virtualDomTemp == undefined || overflowDomTemp == undefined || contentBlock == undefined) return;

		var _this = this;
		var isSuccess = false;

		contentBlock.buildOverflowDomBefore(virtualDomTemp, overflowDomTemp);

		if (virtualDomTemp.nodeType == "3") { // 文字
			isSuccess = _this.removeOverflowDomText(virtualDomTemp, overflowDomTemp, contentBlock);
		} else if (virtualDomTemp.nodeType == "1") { // 元素
			if (virtualDomTemp.childNodes.length == 0 || _this.isUnableSplitDom(virtualDomTemp)) {
				// 当前溢出节点已添加，只需要移除当前页面真是dom即可, 移除之前需要将子节点复制到溢出节点，因为溢出节点默认是不包含子节点信息的。
				overflowDomTemp.childNodes = Utils.buildVirtualDom(virtualDomTemp.target, true, true).childNodes;
				this.removeParentEmptyNode(virtualDomTemp.target, 1, contentBlock);
				virtualDomTemp.target.remove();
			} else {
				this.batchOverflowDoms(virtualDomTemp, overflowDomTemp, contentBlock);
				for (let i = virtualDomTemp.childNodes.length - 1; i >= 0; i--) {
					var childNodeTemp = virtualDomTemp.childNodes[i];
					// 先将当前子节点当做溢出节点插入，当其还有子节点时将子节点插入该溢出节点，没有时移除该溢出节点
					var childOverflowDomTemp = Utils.buildVirtualDom(childNodeTemp.target, false, true);

					// 预插入头部
					overflowDomTemp.childNodes.unshift(childOverflowDomTemp);
					if (_this.buildOverflowDom(childNodeTemp, childOverflowDomTemp, contentBlock)) {
						// 处理完成后判断是否溢出
						if (!this.checkOverflow(contentBlock)) {
							if (!virtualDomTemp.target.contains(childNodeTemp.target)) {
								// 同一层级下，如果只剩下dom的处理控件，将其一起溢出
								let prevIndex = i - 1;
								if (prevIndex >= 0) {
									let prevChildNodeTemp = virtualDomTemp.childNodes[prevIndex];
									var prevChildNodeDoms = $(prevChildNodeTemp.target).siblings();
									if (prevChildNodeDoms.length == 1) {
										var prevChildNodeDom = prevChildNodeDoms[0];
										// 过滤换行text
										while (prevIndex >= 0) {
											if (prevChildNodeTemp.target == prevChildNodeDom) break;
											prevChildNodeTemp = virtualDomTemp.childNodes[prevIndex]
											prevIndex--;
										}
										var prevOverflowDomTemp = Utils.buildVirtualDom(prevChildNodeDom, false, true);
										overflowDomTemp.childNodes.unshift(prevOverflowDomTemp);
										_this.buildOverflowDom(prevChildNodeTemp, prevOverflowDomTemp, contentBlock);
									}
								}
							}
							break;
						}
					} else {
						// 未处理时移除当前节点
						overflowDomTemp.childNodes.shift();
					}
				}
			}
			isSuccess = true;
		} else {
			throw new Error("未定义Node类型：" + JSON.stringify(virtualDomTemp));
		}
		return isSuccess;
	},
	batchOverflowDoms: function (virtualDomTemp, overflowDomTemp, contentBlock) {
		// 子节点过多批量处理
		var childNodeStartIndex = virtualDomTemp.childNodes.length - 1;
		if (childNodeStartIndex > 100) {
			var operateNodeSize = 50;
			var overDomLenght = 0;
			for (let i = childNodeStartIndex; i >= 0; i -= operateNodeSize) {
				var sliceStart = Math.max(i - operateNodeSize + 1, 0);
				var sliceEnd = i+1;
				const childNodeTemps = virtualDomTemp.childNodes.slice(sliceStart, sliceEnd);

				// 移除dom
				var childOverflowVirtualDomTemps = [];
				for (const childNodeTemp of childNodeTemps) {
					childOverflowVirtualDomTemps.push(Utils.buildVirtualDom(childNodeTemp.target, true));
					childNodeTemp.target.remove();
				}
				// 预插入头部
				overflowDomTemp.childNodes.unshift(...childOverflowVirtualDomTemps);

				// 移除到只剩一个节点，后面的细分由后面做
				if (!this.checkOverflow(contentBlock)) {
					// 往回加
					for (const childOverflowVirtualDomTemp of childOverflowVirtualDomTemps) {
						var appenDomTemp = $(childOverflowVirtualDomTemp.outerHTML());
						$(virtualDomTemp.target).append(appenDomTemp);
						virtualDomTemp.childNodes[sliceStart] = Utils.buildVirtualDom(appenDomTemp[0], true);;
						overflowDomTemp.childNodes.shift();
						sliceStart ++;
						if (this.checkOverflow(contentBlock)) {
							break;
						}
					}
					break;
				}
			}
			virtualDomTemp.childNodes = virtualDomTemp.childNodes.splice(0, $(virtualDomTemp.target).children().length)
		}
	},
	buildBatchOverflowDoms: function (virtualDomTemp, overflowDomTemp, childNodeTemps, childOverflowDomTemps) {
		// 预插入头部
		overflowDomTemp.childNodes.unshift(childOverflowDomTemps);
		// 全部删除
		for (const childNodeTemp of childNodeTemps) {
			childNodeTemp.target.remove();
		}
		if (!this.checkOverflow(contentBlock)) { // 未溢出
			var splice = childOverflowDomTemps.splice(0, Math.floor(childOverflowDomTemps.length/2));
			virtualDomTemp.append(splice);
		}
	},
	removeOverflowDomText: function (virtualDom, overflowDomTemp, contentBlock) {
		// 为空不处理
		if (virtualDom.nodeValue.indexOf('\n') == 0 || virtualDom.nodeValue == '') return false; // 过滤换行符和空白符

		var nodeValueTemp = virtualDom.nodeValue;

		var overflowDomTextTemp = "";
		var addOverflowDomTextTemp = "";
		// 2分法使用的下标
		var dichotomyIndex;
		var nodeValueTempLength = nodeValueTemp.length;

		/* 溢出的文字对半拆，拆到不溢出再往回加，直到加到正好不溢出或字被拆完结束。*/
		while (nodeValueTemp != "" && (dichotomyIndex > 1 || this.checkOverflow(contentBlock))) {
			if (this.checkOverflow(contentBlock)) {
				// 2分法
				if (addOverflowDomTextTemp == "") { // 移除溢出字段
					dichotomyIndex = Math.ceil(nodeValueTemp.length / 2);
					if (dichotomyIndex == 1) dichotomyIndex = 0;
					overflowDomTextTemp = (nodeValueTemp.substring(dichotomyIndex, nodeValueTemp.length) + overflowDomTextTemp);
					nodeValueTemp = nodeValueTemp.substring(0, dichotomyIndex);
				} else { // 追加后处理
					dichotomyIndex = Math.ceil(dichotomyIndex / 2);
					overflowDomTextTemp = (nodeValueTemp.substring(nodeValueTemp.length - dichotomyIndex, nodeValueTemp.length) + overflowDomTextTemp);
					nodeValueTemp = nodeValueTemp.substring(0, nodeValueTemp.length - dichotomyIndex);
				}
				virtualDom.setNodeValue(nodeValueTemp);
			} else { // 溢出已移除，但是可能多移除了一部分，这里得加回去
				dichotomyIndex = Math.ceil(dichotomyIndex / 2);
				addOverflowDomTextTemp = overflowDomTextTemp.substring(0, dichotomyIndex);
				overflowDomTextTemp = overflowDomTextTemp.substring(dichotomyIndex, overflowDomTextTemp.length);
				nodeValueTemp += addOverflowDomTextTemp;
				virtualDom.setNodeValue(nodeValueTemp);
			}
		}
		overflowDomTemp.setNodeValue(overflowDomTextTemp);
		if (nodeValueTemp == "") {
			// 如果当前为空，当前节点的父节点下为空，清理父节点
			this.removeParentEmptyNode(virtualDom.target, 0, contentBlock);
		}
		return true;
	},
	removeParentEmptyNode: function (virtualDomTarget, childrenLength, contentBlock) {
		// 防止清理到block的父节点了
		if (virtualDomTarget.classList && virtualDomTarget.classList.contains(contentBlock.blockId)) return false;
		if (virtualDomTarget.parentNode && virtualDomTarget.parentNode.children.length == childrenLength) {
			if (!this.removeParentEmptyNode(virtualDomTarget.parentNode, 1, contentBlock)) { // 当父节点的父节点下只有一个子节点时，也就是只有要移除的这个节点的父节点，清理父节点的父节点。
				virtualDomTarget.parentNode.remove();
				return true;
			}
		}
		return false;
	},
	isUnableSplitDom: function (virtualDomTemp) {
		var _this = this;
		var isUnableSplitDom = false;
		if (_this.proxyAdapter.renderConfig.getMoveOverHtmlIgnoreElements().indexOf("," + virtualDomTemp.localName + ",") >= 0) {
			isUnableSplitDom = true;
		} else if (virtualDomTemp.classList != undefined) {
			for (var className of virtualDomTemp.classList) {
				if (_this.proxyAdapter.renderConfig.getMoveOverHtmlIgnoreClass().indexOf("," + className + ",") >= 0) {
					isUnableSplitDom = true;
					break;
				}
			}
		}
		return isUnableSplitDom;
	},
}
export {renderer as Renderer};
