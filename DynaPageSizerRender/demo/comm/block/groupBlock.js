import {Utils} from "../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

var groupBlock = function (index, parentBlock, childMaxCount) {
	this.childMaxCount = childMaxCount;
	TemplateContentBlock.call(this, index, parentBlock);
}

Utils.extendObj(groupBlock, TemplateContentBlock);

groupBlock.prototype.buildTempleteData = function (sourceData) {
	var childType = this.children && this.children.length > 0 ? this.children[0].getTypeName() : "";
	return {
		childType: childType
	}
}

export {groupBlock as GroupBlock}
