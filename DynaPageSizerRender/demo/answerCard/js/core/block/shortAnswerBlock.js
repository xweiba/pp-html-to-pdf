import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {AnsweringAreaContentBlock} from "../../../../comm/block/answeringAreaContentBlock.js";
import {OverflowBlock} from "../../../../../js/dynaPageSizerRender/core/block/overflowBlock.js";

var shortAnswerBlock = function (index, parentBlock, sourceData, customTypeName) {
	this.images = [];
	this.imageHtmlStrTemplate = $(".template_html .shortAnswerBlock_image").html();
	AnsweringAreaContentBlock.call(this, index, parentBlock, sourceData, true, "answeringAreaContentBlock");
}

Utils.extendObj(shortAnswerBlock, AnsweringAreaContentBlock);

shortAnswerBlock.prototype.dynamiChangeHtmlDom = function (htmlStrTemp) {
	htmlStrTemp = Utils.super(this, htmlStrTemp);
	return htmlStrTemp;
}
shortAnswerBlock.prototype.buildOverflowDomBefore = function (virtualDomTemp, overflowDomTemp, contentBlock) {
}

shortAnswerBlock.prototype.renderEvent = function () {
	Utils.super(this);
	var _this = this;
	var _thisBlock = _this instanceof OverflowBlock ? _this.sourceBlock : _this;

	Utils.uploadBindToClickDom($(_this.getClassName()).find('.upload_image'), 'image/*', function (file) {
		var reader = new FileReader();
		// 读取文件内容并生成DOM
		reader.onload = function(e) {
			var imageUrl = e.target.result;

			var imageTemp = {
				index: _this.images.length == 0 ? 0 : _this.images.length - 1,
				url: imageUrl,
				title: file.name,
				size: {
					top: "0px",
					left: "0px",
					width: "0px",
					height: "0px"
				}
			};
			_thisBlock.renderImage(_this, _thisBlock, imageTemp);
		}
		reader.readAsDataURL(file);
	});

}

shortAnswerBlock.prototype.renderImage = function (_this, _thisBlock, imageTemp) {
	// buildDom
	var imageDragDom = $(_this.imageHtmlStrTemplate);
	imageDragDom.attr("index", imageTemp.index);
	imageDragDom.find(".image").attr('src', imageTemp.url);
	imageDragDom.find(".image_name").text(imageTemp.title);

	if (imageTemp.width && Utils.getNumberByStr(imageTemp.width) > 0) {
		imageDragDom.width(imageTemp.width);
	}
	if (imageTemp.height && Utils.getNumberByStr(imageTemp.height) > 0) {
		imageDragDom.height(imageTemp.height);
	}
	if (imageTemp.top && Utils.getNumberByStr(imageTemp.top) != 0) {
		if (Utils.getNumberByStr(imageTemp.top) < 0) imageTemp.top = "0px";
		imageDragDom.style("top", imageTemp.top);
	}
	if (imageTemp.left && Utils.getNumberByStr(imageTemp.left) != 0) {
		if (Utils.getNumberByStr(imageTemp.left) < 0) imageTemp.left = "0px";
		imageDragDom.style("left", imageTemp.left);
	}

	var blockContentDom = $(_this.getClassName() + ">.content");
	blockContentDom.prepend(imageDragDom);
	imageDragDom = $(imageDragDom);
	var width = blockContentDom.width();
	var height = blockContentDom.height();
	imageTemp.size.width = width + "px";
	imageTemp.size.height = height + "px";

	_this.images.push(imageTemp);

	// 监听高度和宽度，防止超出dom
	Utils.listeningToDomAttributes(imageDragDom[0], ['style'], function (element){
		let index = Utils.getNumberByStr($(imageDragDom).attr("index"));
		var imageData = _this.images[index];
		if ($(element).width() + Utils.getNumberByStr($(element).css("left")) > width) {
			$(element).width(width - Utils.getNumberByStr($(element).css("left")));
		}
		if ($(element).height() + Utils.getNumberByStr($(element).css("top")) > height) {
			$(element).height(height - Utils.getNumberByStr($(element).css("top")));
		}
		imageData.size.width = $(element).outerWidth() + "px";
		imageData.size.height = $(element).outerHeight() + "px";
		imageData.size.top = $(element).css("top");
		imageData.size.left = $(element).css("left");
	});
	Utils.dragDomEvent(imageDragDom[0], imageDragDom.find(".image")[0], blockContentDom[0]);
	Utils.domEditEvent($(imageDragDom.find('.image_name')));
	$(imageDragDom).find(".close-icon").click(function () {
		_this.images.splice(Utils.getNumberByStr($(imageDragDom).attr("index")), 1);
		$(imageDragDom).remove();
	});
}
export {shortAnswerBlock as ShortAnswerBlock}
