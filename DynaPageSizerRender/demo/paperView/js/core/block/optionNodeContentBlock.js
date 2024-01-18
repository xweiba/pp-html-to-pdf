import {Utils} from "../../../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {TemplateContentBlock} from "../../../../../js/dynaPageSizerRender/core/block/templateContentBlock.js";

/* 选择题 */
var optionNodeContentBlock = function (index, parentBlock, sourceData) {
	TemplateContentBlock.call(this, index, parentBlock, sourceData);
}

Utils.extendObj(optionNodeContentBlock, TemplateContentBlock);

optionNodeContentBlock.prototype.getTempleteStr = function () {
	return this.buildOptionsHtmlStr();
}

optionNodeContentBlock.prototype.buildOptionsHtmlStr = function () {
	var optionsHtmlStr = "<table style='width: 100%'>";
	var options = data.source;
	if (!options || options.length == 0) throw new Error("options is null");
	for (var index = 0; index < options.length; index++) {
		var opt = options[index];
		if (!Utils.isEmpty(opt.label)) {
			/* 两个选项一行 */
			if ((index) % 2 == 0) {
				optionsHtmlStr += "<tr>";
			}
			optionsHtmlStr += Utils.formatStr("<td width=\"50%\"><radio>{alias}.&nbsp</radio>{label}</td>", {
				"label": opt.label,
				"alias": opt.alias,
			});
			if ((index) % 2 != 0 || index == options.length-1) {
				optionsHtmlStr += "</tr>";
			}
		}
	}
	optionsHtmlStr += "</table>";
	return optionsHtmlStr;
}

export {optionNodeContentBlock as OptionNodeContentBlock}
