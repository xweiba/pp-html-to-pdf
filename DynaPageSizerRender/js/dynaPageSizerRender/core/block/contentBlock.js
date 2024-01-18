/*
* 内容块基类, 支持父子层级。
* */

import {Utils} from "../../utils/dynaPageSizerRenderUtils.js";
import {Block} from "./block.js";

var contentBlock = function (index, parentBlock, sourceData) {
	Block.call(this, index, parentBlock, sourceData);
}
Utils.extendObj(contentBlock, Block);

export {contentBlock as ContentBlock}
