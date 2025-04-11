# PP-HtmlToPdf 

## DynaPageSizerRender PDF 前端生成框架
一个前端动态生成自定义大小Html的小框架，以页为单位，将内容字符级自动分页，支持动态修改及坐标位置获取，配合Chrome打印功能，输出A3、A4等自定义大小的PDF文档，支持内容快坐标获取，查看示例：PaperView.html

## Puppeteer-Microservice PDF后台生成服务
通过Puppeteer实现HTML转PDF服务，与Chrome中打印功能一致。 使用express实现restFul接口，调用Puppeteer的打印API，完成PDF输出, 使用generic-pool实现多线程处理，线程池可配置。

