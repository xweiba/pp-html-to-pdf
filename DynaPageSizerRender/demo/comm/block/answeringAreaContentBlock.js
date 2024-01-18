import {Utils} from "../../../js/dynaPageSizerRender/utils/dynaPageSizerRenderUtils.js";
import {PaperConstants} from "../../paperView/js/core/paperConstants.js";
import {OverflowBlock} from "../../../js/dynaPageSizerRender/core/block/overflowBlock.js";
import {QuestionBlock} from "./questionBlock.js";

/* 选择题 */
var answeringAreaContentBlock = function (index, parentBlock, sourceData, isAddExternalNo, customTypeName) {
	this.rows = 8;
	this.minRows = 2;
	this.maxRows = 20;
	this.rowHeight = PaperConstants.ANSWERING_AREA_ROW_HEIGHT;
	QuestionBlock.call(this, index, parentBlock, sourceData, customTypeName);
	if (isAddExternalNo != undefined) {
		this.isAddExternalNo = isAddExternalNo;
	}
}

Utils.extendObj(answeringAreaContentBlock, QuestionBlock);

answeringAreaContentBlock.prototype.buildDomComplte = function (htmlStrTemp) {
	$(this.getClassName("", true) + " .row_value").attr("value", this.rows);
}
answeringAreaContentBlock.prototype.getTempleteData = function (htmlStrTemp) {
	return {
		rows: this.rows,
		minRows: this.minRows,
		maxRows: this.maxRows
	}
}
answeringAreaContentBlock.prototype.dynamiChangeHtmlDom = function (htmlStrTemp) {
	var htmlDom = $(htmlStrTemp);
	var answerRowsDom = htmlDom.find(".answer_rows");
	answerRowsDom.empty();
	var lineHtmlStr = "";
	for (let i = 0; i < this.rows; i++) {
		lineHtmlStr += '<div class="answer_row"></div>';
	}
	answerRowsDom.append(lineHtmlStr);
	return htmlDom.prop("outerHTML").trim();
}
answeringAreaContentBlock.prototype.renderEvent = function () {
	var _this = this;
	var _thisBlock = _this instanceof OverflowBlock ? _this.sourceBlock : _this;
	$(_this.getClassName()).find('.row_operation').bind('click', function () { // 请勿对dom做操作
		if (_thisBlock instanceof OverflowBlock) {
			_thisBlock = _thisBlock.sourceBlock;
		}
		var operation = $(this).attr('type');

		if (operation == 'add') {
			if (_thisBlock.rows == _thisBlock.maxRows) {
				return;
			}
			_thisBlock.rows += 1;
		} else {
			if (_thisBlock.rows == _thisBlock.minRows) {
				return;
			}
			_thisBlock.rows -= 1;
		}
		$(this).parent().find("input").val(_thisBlock.rows);
		_thisBlock.delayChangeDom(_this);
	});
	$(_this.getClassName()).find('.row_value').bind('change', function () { // 请勿对dom做操作，重新渲染时会自动计算高度
		if (_thisBlock instanceof OverflowBlock) {
			_thisBlock = _thisBlock.sourceBlock;
		}
		var rows = parseInt($(this).val());
		if (rows == undefined || isNaN(rows) || rows < 2) {
			rows = 2;
		} else if (rows > 20) {
			rows = 20;
		}
		$(this).val(rows);
		if (rows == _thisBlock.rows) return;
		_thisBlock.rows = rows;

		_thisBlock.delayChangeDom(_this);
	});
}

export {answeringAreaContentBlock as AnsweringAreaContentBlock}
