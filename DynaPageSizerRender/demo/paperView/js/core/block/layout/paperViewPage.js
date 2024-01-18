import {Utils} from "../../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {PaperViewContainer} from "./paperViewContainer.js";
import {PageBlock} from "../../../../../../js/dynaPageSizerRender/core/block/layout/pageBlock.js";

var paperViewPage = function (index, rootClassName) {
	PageBlock.call(this, index, rootClassName)
}
Utils.extendObj(paperViewPage, PageBlock);

paperViewPage.prototype.getContainerType = function () {
	return PaperViewContainer;
}

export {paperViewPage as PaperViewPage}
