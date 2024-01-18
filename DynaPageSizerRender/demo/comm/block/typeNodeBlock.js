import {Utils} from "../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";
import {GroupBlock} from "./groupBlock.js";

var typeNodeBlock = function (index, parentBlock, sourceData) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(typeNodeBlock, TemplateContentBlock);

typeNodeBlock.prototype.childTypeName = function (obj) {
	if (obj.children && obj.children.length > 0) {
		let child = obj.children[0];
		if (child instanceof GroupBlock) {
			return this.childTypeName(child);
		} else {
			return child.getTypeName();
		}
	}
	return "";
}
typeNodeBlock.prototype.buildTempleteData = function (sourceData) {
	return {
		childType: this.childTypeName(this),
		name: sourceData.name,
		points: sourceData.points
	}
}
export {typeNodeBlock as TypeNodeBlock}
