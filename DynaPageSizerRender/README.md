# DynaPageSizerRender
一个前端动态生成自定义大小Html的小框架，以页为单位，将内容字符级自动分页，支持动态修改及坐标位置获取，配合Chrome打印功能，输出A3、A4等各种标准大小的PDF文档，查看示例：PaperView.html

## DynaPageSizerRender
>  入口，构造方法传入Converter和ProxyAdapter实例，业务应只与该对象交互。

- init
  - 执行Converter的buildRenderBlocks方法获取待渲染的ContentBlocks。
  - 调用ProxyAdapter的init方法，循环渲染ContentBlocks;
- getAllContentBlockData 获取所有的ContentBlock的数据，包含ContentBlock对象及坐标和大小。
- changeConfig 修改配置信息，该方法会触发整个页重新渲染。

## Block
> 所有渲染对象都为block子类，共有三个大类型，分别为布局块（layoutBlock），内容块（contentBlock)，溢出内容块（overflowBlock）。页（pageBlock)和容器（containerBlock)为layoutBlock的子类。支持父子结构，实际渲染时dom也会映射为父子结构。

- pageBlock 大小和实际类型由配置文件控制，内容由一个个容器组成，默认渲染模式为从左往右依次渲染，超出宽度换行渲染，通过容器大小来控制页面的布局。
- containerBlock 大小由配置文件控制，实际类型由页的实际类型控制，它的内容由一个个内容块组成，默认渲染模式为从左往右依次渲染，超出宽度换行渲染，通过内容块大小来控制页面的布局。
- contentBlock 由实际业务定义，通过html模板生成dom，动态渲染至容器中，支持子节点渲染。
- overflowBlock 当contentBlock渲染后会做溢出检测，当有溢出内容时会判断当前是container溢出还是page溢出，page溢出先渲染新的page，再渲染新的container
  ，最后将溢出的内容通过溢出算法生成overflowBlock，移动至新的container中，为避免样式丢失，溢出的html将会携带contentBlock所有的父dom信息，并且contentBlock剩下的dom
  高度不足以撑满container时，会将dom高度调整至撑满整个container。

## RenderConfig
> 渲染配置，在渲染时会使用该对象的各种配置做对应处理.

- debug:false, 为true时会绘制所有Block的位置dom。
- rootClassName在渲染时为以该dom为根节点，开始渲染。
- classType默认必须为css/fonts.css中的一种，因为存在跨平台渲染不一致的问题，还有一种方法就是使用本地字体，使用本地字体需要自定义defaultFontTypes。
- pageSizeAndLayoutConfig
  - size: 页面大小 (默认A4)
    - unit：mm
    - width：210
    - height：296
  - layout：页面布局，每页中总容器数为 pageContainerColumn * pageContainerRows
    - pageContainerColumn: 1,页中可以有多少列容器，PageWidth/pageContainerColumn == ContainerWidth
    - pageContainerRows: 1，页中可以有多少行容器，PageHeight/pageContainerRows == ContainerHeight
- indivisibleHtmlByElements: "", 无法分隔的Dom，在做分页时，将超出的dom移动至下一页时如果在此列表中，会直接将整个dom移动至下一页，格式：",table,"
- indivisibleHtmlByClasses: ",indivisible,indivisible_control,",
  无法分隔的className，在做分页时，将超出的dom移动至下一页时如果在此列表中，会直接将整个dom移动至下一页。
- 
## Converter
> 转换接口，需要业务实现，主要功能为将业务数据转换为对应的内容块ContentBlock。

- beforeParseData build前做验证或其他处理。
- buildContentBlocks 子类必须实现，生成待渲染Block，父子结构的必须设置父block及children。
- afterParseData build后做统一的fix或其他处理。
- buildRenderBlocks 调用上面的三个方法，并返回afterParseData的返回值。

## ProxyAdapter
> 对象为代理适配对象，用于对外接口的具体实现，业务调用DynaPageSizerRender接口，DynaPageSizerRender接口调用proxyAdapter去执行对应的实现，不需要额外实现。
- renderConfig: 渲染配置
- newPageType: PageBlock的实际类型，创建页时使用，PageBlock必须实现
- changeDomCallback: 当block的delayChangeDom方法被调用时，会触发该方法。
