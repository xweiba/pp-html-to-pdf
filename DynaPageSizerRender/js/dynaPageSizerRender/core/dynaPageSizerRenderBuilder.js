import {DynaPageSizerRender} from "./dynaPageSizerRender.js";
import {ProxyAdapter} from "./proxyAdapter.js";
import {RenderConfig} from "./config/renderConfig.js";
import {Utils} from "../utils/dynaPageSizerRenderUtils.js";

var dynaPageSizerRenderBuilder = function (rootClassName, papePageType, converterType, converterData, changeDomCallback, fontType, pageSizeAndLayoutConfig) {
	this.rootClassName = rootClassName;
	this.papePageType = papePageType;
	this.converterType = converterType;
	this.converterData = converterData;
	if (changeDomCallback) this.changeDomCallback = changeDomCallback;
	this.fontType = fontType;
	this.pageSizeAndLayoutConfig = pageSizeAndLayoutConfig;
	this.dynaPageSizerRender;
}

dynaPageSizerRenderBuilder.prototype = {
	async init() {
		await this.initDynaPageSizerRender();
		return this.dynaPageSizerRender;
	},
	changeDomCallback(changeBlock) {
		console.log("DynaPageSizerRender changeDomCallback");
	},
	getRootClassName() {
		return this.rootClassName;
	},
	getPageBlockType() {
		return this.papePageType;
	},
	getConverterType() {
		return this.converterType;
	},
	buildConverterData() {
		return this.converterData;
	},
	getFontType() {
		return this.fontType ? this.fontType : "font-fang-song";
	},
	getPageSizeAndLayoutConfig() {
		return this.pageSizeAndLayoutConfig;
	},
	getRenderConfig() {
		return [this.getRootClassName(), this.getFontType(), this.getPageSizeAndLayoutConfig()];
	},
	initRenderConfig(renderConfig) {
		var debug = Utils.getUrlParam("debug", window);
		if (debug != undefined) {
			renderConfig.debug = debug == 'true' ? true : false;
		}
		renderConfig.moveOverHtmlUnableSplitClass = this.getMoveOverHtmlUnableSplitClass();
	},
	getMoveOverHtmlUnableSplitClass() {
		return "";
	},
	async initDynaPageSizerRender() {
		this.dynaPageSizerRender = this.buildDynaPageSizerRender();
		await this.dynaPageSizerRender.init();
	},
	buildDynaPageSizerRender() {
		var proxyAdapter = this.buildDynaPageSizerRenderProxyAdapter();
		var dataConverter = this.buildDynaPageSizerRenderConverter();
		var dynaPageSizerRender = new DynaPageSizerRender(dataConverter, proxyAdapter);
		return dynaPageSizerRender;
	},
	buildDynaPageSizerRenderConverter() {
		var data = this.buildConverterData();
		var converterType = this.getConverterType();
		var dataConverter = new converterType(data);
		return dataConverter;
	},
	buildDynaPageSizerRenderProxyAdapter() {
		var renderConfig = this.buildRenderConfig();
		var proxyAdapter = new ProxyAdapter(renderConfig, this.getPageBlockType(), this.changeDomCallback);
		return proxyAdapter;
	},
	buildRenderConfig() {
		// renderConfigs格式：[rootClassName, fontType, pageSizeAndLayoutConfig]
		let renderConfigs = this.getRenderConfig();
		// 展开参数
		var renderConfig = new RenderConfig(...renderConfigs);
		this.initRenderConfig(renderConfig);
		return renderConfig;
	},
}

export {dynaPageSizerRenderBuilder as DynaPageSizerRenderBuilder}
