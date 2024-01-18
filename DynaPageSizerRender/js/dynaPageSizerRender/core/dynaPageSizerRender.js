/*
* converter数据转换器buildPrintData 获取转换好的内容块contentBlock对象。
* renderer 同步调用 buildHtml 开始渲染 contentBlocks 数据。
* 页面渲染完毕， eventHandle 事件处理器 buildEvent() 绑定全局事件。
*
*
* 页面结构为：
*   pageBlock
*   	containerBlock
*   		contentBlock
*   		contentBlock
*     	containerBlock
*   		contentBlock
*   		contentBlock
*   pageBlock
*     	containerBlock
*   		contentBlock
*   		contentBlock
*   ....
*
* pageBlock为页内容块，container为页中的容器块，可由此控制页内容布局，通过RenderingConfig的mode模式控制，contentBlock为container中的内容块。
*
* 渲染处理流程：
* 遍历contentBlocks，依次对contentBlock进行单个渲染。
* 1.渲染前
* 	1.初次会创建默认的pageBlock，设置为activePage，pageBlock创建时会创建默认的containerBlock，设置为activeContainer。
* 2.渲染
* 	1.遍历contentBlock并渲染至activeContainer。
* 2.渲染后
*   1.渲染完毕后做container溢出检测
* 		1.溢出
*       	1.溢出会创建containerBlock，设置为activeContainer并做page溢出检测，溢出则创建pageBlock设置为activePage,activeContainer添加至pageBlock。
* 	        2. 溢出的contentBlock添加至activeContainer。
*
* */

var dynaPageSizerRender = function (converter, proxyAdapter) {
	this.converter = converter;
	this.proxyAdapter = proxyAdapter;
}

dynaPageSizerRender.prototype = {
	async init() {
		var _this = this;
		var renderBlocks = _this.converter.buildRenderBlocks();
		await _this.proxyAdapter.init(renderBlocks);
	},
	getAllContentBlockData() {
		// 获取渲染后的dom坐标数据。
		return this.proxyAdapter.getAllContentBlockData();
	},
	async changeConfig(renderConfig) {
		var _this = this;
		await _this.proxyAdapter.changeConfig(renderConfig);
	}
}
export {dynaPageSizerRender as DynaPageSizerRender};
