/*
* 渲染配置类，默认A4
* */
var renderConfig = function (rootClassName, fontType, pageSizeAndLayoutConfig) {

	// 根节点className
	this.rootClassName = rootClassName ? rootClassName : "_web_dynami_root";
	// 跨平台css
	this.defaultFontTypes = ["font-hei","font-kai","font-song","font-fang-song"];
	this.fontType = fontType;

	this.pageWidth = 0; // 单页宽度
	this.pageHeight = 0; // 单页高度
	this.pageContainerColumn = 1; // 一页中竖向容器个数
	this.pageContainerRows = 1; // 一页中横向容器个数

	this.pageSizeAndLayoutConfig = pageSizeAndLayoutConfig;
	if (!this.pageSizeAndLayoutConfig) {
		this.pageSizeAndLayoutConfig = {
			size: {
				unit: "mm",
				// A4 height: 296mm; width: 210mm; 297 会超高
				// A3 height: 296mm; width: 420mm; 297 会超高
				width: 210,
				// width: 420,
				height: 296
			},
			layout: {
				// 每页中总容器数为 pageContainerColumn * pageContainerRows
				pageContainerColumn: 1, // 页中可以有多少列容器，Page宽度/pageContainerColumn == ContainerWidth
				// pageContainerColumn: 2, // 页中可以有多少列容器，Page宽度/pageContainerColumn == ContainerWidth
				pageContainerRows: 1 // 页中可以有多少行容器，Page/pageContainerRows == ContainerHeight
			}
		}
	}
	this.initPageSizeAndLayout(this.pageSizeAndLayoutConfig);

	// 渲染器检测的最大次数
	this.checkDomLoadMaxCount = 200;
	// 渲染器检测周期
	this.checkDomLoadCycleTime = 10;

	// 在做溢出dom移动时无法拆分的元素, 会将其整个移动
	this.moveOverHtmlUnableSplitElements = "";
	this.indivisibleHtmlByElements = "";
	this.moveOverHtmlUnableSplitElementsDefault = "";

	// 在做溢出dom移动时无法拆分的class, 会将其整个移动
	this.moveOverHtmlUnableSplitClass = "";
	this.indivisibleHtmlByClassNames = "";
	this.moveOverHtmlUnableSplitClassDefault = ",indivisible,indivisible_control,";
	// debug模式会显示dom计算后的位置，相对所在页
	this.debug = false;
};

renderConfig.prototype = {
	initPageSizeAndLayout(pageSizeAndLayoutConfig) {
		try {
			this.pageWidth = pageSizeAndLayoutConfig.size.width + pageSizeAndLayoutConfig.size.unit;
		} catch (e) {
			this.pageWidth = "210mm";
		}
		try {
			this.pageHeight =  pageSizeAndLayoutConfig.size.height + pageSizeAndLayoutConfig.size.unit;
		} catch (e) {
			this.pageHeight = "296mm";
		}
		try {
			this.pageContainerColumn = pageSizeAndLayoutConfig.layout.pageContainerColumn;
		} catch (e) {
			this.pageContainerColumn = 1;
		}
		try {
			this.pageContainerRows = pageSizeAndLayoutConfig.layout.pageContainerRows;
		} catch (e) {
			this.pageContainerRows = 1;
		}
		return this;
	},
	getMoveOverHtmlIgnoreElements() {
		return this.moveOverHtmlUnableSplitElementsDefault + this.moveOverHtmlUnableSplitElements;
	},
	getMoveOverHtmlIgnoreClass() {
		return this.moveOverHtmlUnableSplitClassDefault + this.moveOverHtmlUnableSplitClass;
	}
}

Object.defineProperty(renderConfig.prototype, 'rootClassName', {
	get:function () {
		return this.lrootClassName;
	},
	set: function (rootClassName) {
		this.lrootClassName = rootClassName;
		if (this.lrootClassName != "_web_dynami_root") {
			$("." + rootClassName).addClass("_web_dynami_root");
		}
	}
})
Object.defineProperty(renderConfig.prototype, 'fontType', {
	get:function () {
		return this.lfontType;
	},
	set: function (lfontType) {
		this.lfontType = "font-fang-song";
		if (lfontType && this.defaultFontTypes.concat(lfontType)) {
			this.lfontCss = lfontType;
		}
	}
})
export {renderConfig as RenderConfig};
