import {Utils} from "../../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {ContainerBlock} from "../../../../../../js/dynaPageSizerRender/core/block/layout/containerBlock.js";

var paperViewContainer = function (index, pageBlock, width, height) {
	ContainerBlock.call(this, index, pageBlock, width, height);
}
Utils.extendObj(paperViewContainer, ContainerBlock);

export {paperViewContainer as PaperViewContainer}
