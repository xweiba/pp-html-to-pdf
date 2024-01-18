/* printWebpage 工具类，为避免依赖扩散 printWebpage 中使用的自定义工具类请全都定义在此类 */

var dynaPageSizerRenderUtils = function () {
	// 定时任务执行器
	this.sleepPromise = ms => new Promise(res => setTimeout(res, ms));
}
dynaPageSizerRenderUtils.prototype = {
	sleep: async function (time) {
		await this.sleepPromise(time);
	},
	asyncFunction: function (checkCallback, params, waitMaxCount, waitTime) {
		asyncFunctionExecute(checkCallback, params, waitMaxCount, waitTime);
	},
	randomLenNumber: function (len) { // 生成固定长度随机数
		len = len || 18;
		var time = new Date().getTime();
		len = len - time.toString().length;
		var chars = '0123456789';
		var maxPos = chars.length;
		var str = '';
		for (var i = 0; i < len; i++) {
			str += Math.floor(Math.random() * maxPos);
		}
		return time + str;
	},
	extendObj: function (child, parent) {
		var prototype = this.createObj(parent.prototype);
		prototype.constructor = child;
		child.prototype = prototype;
	},
	getTypeName: function (obj) {
        var name = obj.constructor.name;
        if (name == "Object") return "";
		return name;
	},
	getParentTypeNames: function (obj) {
		var prototypeOf = obj.constructor.prototype;
		if (prototypeOf == null || obj == prototypeOf || prototypeOf.__proto__ == null) return undefined;
		var parentTypeName = prototypeOf.__proto__.constructor.name;
		var parentConTypeName = prototypeOf.constructor.name;
		if (parentTypeName == "Object") {
			if (parentConTypeName == "Object") {
				parentTypeName = obj.constructor.name;
			} else {
				parentTypeName = parentConTypeName;
			}
		}
		if (prototypeOf.constructor.prototype) {
			var parentTypeNameTemp = this.getParentTypeNames(prototypeOf);
			return parentTypeNameTemp == undefined ? parentTypeName : parentTypeName + " " + parentTypeNameTemp;
		}
		return parentTypeName;
	},
	getParentTypeName: function (obj) {
		var prototypeOf = Object.getPrototypeOf(obj.constructor.prototype);
		if (!prototypeOf || prototypeOf.constructor) return "";
		return prototypeOf.constructor.name;
	},
	getParentType: function (obj) {
		return Object.getPrototypeOf(obj.constructor.prototype);
	},
	super: function (obj, ...params) {
		var methodName = this.stacktrace()[1].methodName;
		var objPrototype = obj.constructor.prototype;
		var parentPrototype = Object.getPrototypeOf(objPrototype);
		// 没有父类
		if (!parentPrototype[methodName]) return undefined;
		while (objPrototype[methodName]==parentPrototype[methodName]) {
			var parentPrototypeTemp = Object.getPrototypeOf(parentPrototype);
			if (!parentPrototypeTemp[methodName]) { // 不存在
				break;
			}
			parentPrototype = parentPrototypeTemp;
		}

		var parentMethod = obj.constructor.prototype[methodName];
		obj.constructor.prototype = parentPrototype;
		var parentMethod = obj.constructor.prototype[methodName];
		var newMethod = parentMethod.bind(obj);
		var result = newMethod(...params);
		obj.constructor.prototype = objPrototype;
		return result;
	},
	bindContextExcuteMethod: function (sourceObj, excuteObj, methodName, ...params) {;
		var sourceMethod = sourceObj.constructor.prototype[methodName];
		var newMethod = sourceMethod.bind(excuteObj);
		var result = newMethod(...params);
		return result;
	},
	stacktrace: function () {
		var stack = new Error().stack;
		var stackList = [];
		var stackSources = stack.split("\n");
		for (let i = 2; i < stackSources.length; i++) {
			var stackSourceTemp = stackSources[i];
			if (stackSourceTemp.trim().concat("at ")) {
				var stackInfoTemp = stackSourceTemp.trim().split("at ")[1].trim().split(" ");
				var length = stackInfoTemp.length;
				if (length < 2) continue;
				var typeInfo = stackInfoTemp[length - 2].split(".");
				var async = length == 3 ? true : false;
				var trace = stackInfoTemp[length - 1];
				stackList.push({
					async: length == 3 ? true : false,
					trace: stackInfoTemp[length - 1].substr(1, stackInfoTemp[length - 1].length - 1),
					methodName: typeInfo[1],
					typeName: typeInfo[0],
				})
			}
		}
		return stackList;
	},
	createObj: function (o) {
		function F() {
		};
		F.prototype = o;
		return new F();
	},
	classOuterHtml: function (tagClassName) {
		return $(tagClassName).prop("outerHTML").trim();
	},
	formatStr: function () {
		var args = Array.prototype.slice.apply(arguments);
		var that = this;
		if (args.length == 0) {
			return null;
		} else if (args.length == 1) {
			return args[0];
		} else {
			var template = args[0];
			args.splice(0, 1);
			if (typeof args[0] == 'object') {
				$.each(args[0], function (key, value) {
					template = template.replace(new RegExp("{" + key + "}", "g"), that.isEmpty(value) ? '' : value);
				})
			} else {
				$.each(args, function (key, value) {
					template = template.replace(eval("/({)" + key + "(})/g"), that.isEmpty(value) ? '' : value);
				})
			}
			return template;
		}
	},
	isEmpty: function (arg) {
		if (arg == undefined || arg == null) {
			return true;
		}
		if (typeof arg == 'string') {
			return arg == '' ? true : false;
		} else if (typeof arg == 'object') {
			if (arg instanceof Array && arg.length == 0) {
				return true;
			} else {
				return false;
			}
		} else if (typeof arg == 'number') {
			return false;
		} else if (typeof arg == 'boolean') {
			return false;
		} else {
			return !!arg;
		}
	},
	getLastChildren(obj) {
		if (obj) {
			var children;
			if (obj instanceof Array) {
				children = obj;
			} else {
				children = obj.children;
			}
			if (children && children instanceof Array && children.length > 0) {
				return this.getLastChildren(children[children.length-1]);
			}
		}
		return obj;
	},
	spliceByStr: function (str, byStr, addStr, isInsert) {
		var startIndex = str.indexOf(byStr);
		if (isInsert) {
			startIndex += byStr.length;
		}
		return str.slice(0, startIndex) + addStr + str.slice(startIndex);
	},
	onMessage: function (callback, params) { //Monitor messages sent to this window
		if (window.addEventListener) {
			window.addEventListener('message', function (event) {
				callback && callback(event, params);
			}, false);
		} else if (window.attachEvent) {
			window.attachEvent("onmessage", function (event) {
				callback && callback(event, params);
			});
		}
	},
	getDisplay: function (obj) {
		// 浏览器兼容
		if (obj.currentStyle) {
			return obj.currentStyle.display;
		} else {
			return window.getComputedStyle(obj, false).display;
		}
	},
	isNumber: function (val) {
		//判断是否是数字。
		if ((val * 1).toString() == "NaN") {
			return false;
		} else {
			return true;
		}
	},
	checkRenderQuestionOptions: function (question) {
		var isRenderQuestionOptions = false;
		if (question != null && question.options != null && question.options.length > 0) {
			isRenderQuestionOptions = true;
			// 如果选项在题干中, 则不渲染选项
			if (question.stem != null && question.stem.richText != null && (question.stem.richText.indexOf('id="option') >= 0 || question.stem.richText.indexOf('name="optionsTable') >= 0)) {
				isRenderQuestionOptions = false;
			}
		}
		return isRenderQuestionOptions;
	},
	buildVirtualDom: function (classId, isAppendChild, isClone) {
		var domTemp = $(classId)[0];
		if (domTemp == undefined) return;
		var _this = this;
		if (isClone) {
			if (domTemp.nodeType == "1") {
				var outerDomTemp = $(domTemp.outerHTML);
				if (!isAppendChild) { // 清理子节点
					outerDomTemp.empty();
				}
				domTemp = outerDomTemp[0];
			} else {
				// 置空
				var domTempTest = $("<div>" + domTemp.nodeValue + "</div>");
				if (domTempTest.children().length > 0 && !isAppendChild) { // 清理子节点
					domTemp = domTempTest[0].childNodes[0];
					domTemp.textContent = "";
				}
			}
		}
		var virtualDom = {
			"target": domTemp,
			"localName": domTemp.localName ? domTemp.localName : "", // div
			"nodeValue": domTemp.nodeValue ? domTemp.nodeValue : "",
			"nodeType": domTemp.nodeType, // https://developer.mozilla.org/zh-CN/docs/Web/API/Node/nodeType#节点类型常量, 基本只有1和3 1元素节点，3为文字
			"hidden": domTemp.hidden ? domTemp.hidden : false,
			"classList": domTemp.classList ? domTemp.classList : [],
			"style": domTemp.style ? domTemp.style : {},
			"childNodes": [], // virtualDom
			outerHTML: function () {
				var outerHTML = "";
				if (this.nodeType == "1") {
					if (this.target.childNodes && this.target.childNodes.length == 0) {
						for (var childNodeTemp of this.childNodes) {
							if (childNodeTemp.outerHTML instanceof Function) {
								this.target.appendChild($(childNodeTemp.outerHTML())[0])
							} else {
								this.target.appendChild($(childNodeTemp)[0]);
							}
						}
					}
					outerHTML = this.target.outerHTML;
				} else {
					outerHTML = this.target;
				}
				return outerHTML;
			},
			setNodeValue: function (newNodeValue) {
				this.nodeValue = this.target.textContent = newNodeValue;
			}
		}

		if (isAppendChild && domTemp.childNodes && domTemp.childNodes.length > 0) {
			for (var childNode of domTemp.childNodes) {
				virtualDom.childNodes.push(_this.buildVirtualDom(childNode, true));
			}
		}
		return virtualDom;
	},
	getNumberByStr(str) {
		if (this.isNumber(str)) return str;
		if (!str) return 0;
		return parseFloat(str.replace(/[^\d.]/g, ''));
	},
	getDomStyleSubWidth(dom) {
		return (this.getNumberByStr(dom.css("padding-right")) + this.getNumberByStr(dom.css("padding-left")))
			+ this.getNumberByStr(dom.css("border-right-width")) + this.getNumberByStr(dom.css("border-left-width"))
			;
	},
	getDomStyleSubHeight(dom) {
		return (this.getNumberByStr(dom.css("padding-top")) + this.getNumberByStr(dom.css("padding-bottom")))
			+ this.getNumberByStr(dom.css("border-top-width")) + this.getNumberByStr(dom.css("border-bottom-width"))
			;
	},
	getDomStyleAddWidth(dom) {
		return this.getNumberByStr(dom.css("margin-right")) + this.getNumberByStr(dom.css("margin-left"));
	},
	getDomStyleAddHeight(dom) {
		return this.getNumberByStr(dom.css("margin-top")) + this.getNumberByStr(dom.css("margin-bottom"));
	},
	getUrlParam: function (paramName, win) {
		if (!win) win = window;
		var query = decodeURI(win.location.search.substring(1));
		var vars = query.split("&");
		var _paramName = paramName.toLowerCase();
		for (var i = 0; i < vars.length; i++) {
			var pair = vars[i].split("=");
			if (pair[0].toLowerCase() == _paramName) { return pair[1]; }
		}
		return null;
	},
	isWidthOneHundredPercent(dom) {
		let _style = $(dom).attr("style");
		let width = $(dom).css("width");
		var isWidthOneHundredPercent = false;
		if ($(dom).css("width", "100%").css("width") == width) {
			isWidthOneHundredPercent = true;
		}
		if (this.isEmpty(_style)) {
			$(dom).removeAttr("style");
		} else {
			$(dom).attr("style", _style);
		}
		return isWidthOneHundredPercent;
	},
	listeningToDomAttributes(element, attributeNames, callback) {
		var observer = new MutationObserver(function(mutationsList) {
			for (var mutation of mutationsList) {
				if (mutation.type === 'attributes' && attributeNames.includes(mutation.attributeName)) {
					callback && callback(element);
					break;
				}
			}
		});
		var config = { attributes: true, attributeFilter: attributeNames };
		observer.observe(element, config);
	},
	getChildrenDomIndex(element) {
		var parent = element.parentNode;
		var children = parent.childNodes;
		return  Array.prototype.indexOf.call(children, element);
	},
	dragDomEvent(dragDom, dragEventDom, relativeDom) {
		$(dragEventDom).mousedown(startDrag);
		function stopDrag() {
			$(relativeDom).off("mouseup mousemove mouseleave blur");
		}
		function startDrag(event) {
			stopDrag();
			$(relativeDom).on("mouseup mouseleave blur", stopDrag);
			$(relativeDom).on("mousemove", moveImage);

			// 取消浏览器的默认拖动行为, 否则会出现禁止图标
			event.preventDefault();

			// 记录鼠标开始位置
			var mouseX = event.clientX;
			var mouseY = event.clientY;

			function moveImage(event) {
				// 鼠标移动位置
				var mouseMoveX = event.clientX - mouseX;
				var mouseMoveY = event.clientY - mouseY;

				// relativeDom当前位置
				var relativeDomBoundingClientRect = relativeDom.getBoundingClientRect();

				// dragDom当前位置
				var dragDomBoundingClientRect = dragDom.getBoundingClientRect();
				var dragDomRelativeX = dragDomBoundingClientRect.x - relativeDomBoundingClientRect.x;
				var dragDomRelativeY = dragDomBoundingClientRect.y- relativeDomBoundingClientRect.y;

				// 重新设置鼠标位置
				mouseX = event.clientX;
				mouseY = event.clientY;

				// dragDom新的坐标
				var x = dragDomRelativeX + mouseMoveX;
				var y = dragDomRelativeY + mouseMoveY;

				// 防止移动到relativeDom外
				if (x < 0) {
					x = 0;
				}
				if (y < 0) {
					y = 0;
				}
				if (x > (relativeDomBoundingClientRect.width - dragDomBoundingClientRect.width)) {
					x = relativeDomBoundingClientRect.width - dragDomBoundingClientRect.width;
				}
				if (y > (relativeDomBoundingClientRect.height - dragDomBoundingClientRect.height)) {
					y = relativeDomBoundingClientRect.height - dragDomBoundingClientRect.height;
				}
				$(dragDom).css({top: y + "px", left: x + "px"});
			}
		}
	},
	domEditEvent(editDom) {
		$(editDom).mousedown(function (event){
			event.stopPropagation();
			$(this).attr("contenteditable", "true");
			$(editDom).on("blur mouseleave", function (event) {
				event.stopPropagation();
				$(this).attr('contentEditable', false);
				$(editDom).off("blur mouseleave");
			});
		});
	},
	uploadBindToClickDom(uploadDom, uploadFileAccept, callback) {
		$(uploadDom).on('click', function() {
			// 创建一个input元素
			var input = document.createElement('input');
			input.type = 'file';
			input.accept = uploadFileAccept;

			// 监听文件选择事件
			input.onchange = function(event) {
				var file = event.target.files[0];
				callback && callback(file);
			};
			// 模拟点击选择文件
			input.click();
		});
	}
}

var utils = new dynaPageSizerRenderUtils();

export {utils as Utils}
