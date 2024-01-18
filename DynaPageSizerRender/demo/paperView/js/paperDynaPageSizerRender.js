import {DynaPageSizerRenderBuilder} from "../../../js/dynaPageSizerRender/core/dynaPageSizerRenderBuilder.js";
import {PaperViewPage} from "./core/block/layout/paperViewPage.js";
import {PaperViewConverter} from "./converter/paperViewConverter.js";

var PaperDynaPageSizerRender = window.PaperDynaPageSizerRender = {
	paperInfo: {},
	dynaPageSizerRender: {},
	async init() {
		this.initTestData();
		await this.initDynaPageSizerRender();
	},
	async initDynaPageSizerRender() {
		var paperBuildDynaPageSizerRender = this.initBuildDynaPageSizerRender();
		this.dynaPageSizerRender = await paperBuildDynaPageSizerRender.init();
	},
	initBuildDynaPageSizerRender() {
		var buildDynaPageSizerRender = new DynaPageSizerRenderBuilder("paper_view", PaperViewPage, PaperViewConverter, this.buildConverterData(), this.changeDomCallback);
		buildDynaPageSizerRender.getMoveOverHtmlUnableSplitClass = this.getMoveOverHtmlUnableSplitClass;
		return buildDynaPageSizerRender;
	},
	changeDomCallback(changeBlock) {
		var _this = PaperDynaPageSizerRender;
		console.log("PaperDynaPageSizerRender changeDomCallback");
	},
	buildConverterData() {
		this.initTestData();
		var data = {
			paperInfo: this.paperInfo
		}
		return data;
	},
	getMoveOverHtmlUnableSplitClass() {
		return ",question_external_no,";
	},
	initTestData() {
		/*http://50.xcenable.com:50000/manager/package/ppr/answercard/composing/preedit?paperId=1568916088576647168&userId=1123160274627567616*/
		this.paperInfo = {
			"name": "20230526初中七年级语文考试",
			"totalPoints": 158,
			"nodes": [
				{
					"nodeId": "1568916089625223168",
					"parentNodeId": null,
					"name": "第1卷",
					"description": null,
					"sequencing": 1,
					"level": 1,
					"internalNo": 1,
					"externalNo": "1",
					"points": 158,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223169",
					"parentNodeId": "1568916089625223168",
					"name": "一、单选题",
					"description": null,
					"sequencing": 2,
					"level": 2,
					"internalNo": 2,
					"externalNo": "2",
					"points": 22,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223170",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "1",
					"points": 2,
					"question": {
						"questionId": "1282458093778669568",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.23.2",
								"knowledgeName": "诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N1.23-310113VER72N1.23.2",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310213VER145N6.3.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER145",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310213VER145NR811-310213VER145N813-310213VER145N6.3-310213VER145N6.3.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "\\n   选出下列表述有误的一项 <span style=\"display:inline-block\">（　　）</span> <br /> <questionoption type=\"single\"> <opt id=\"optionA\"> <radio></radio>A.《最后一课》中小弗郎士从韩麦尔先生身上学到了深挚的爱国之情。 </opt> <br /> <opt id=\"optionB\"> <radio></radio>B.《十一月四日风雨大作》作者是陆游，这是一首七言绝句。 </opt> <br /> <opt id=\"optionC\"> <radio></radio>C.朱自清的《背影》开头点出背影，中间叙事描写背影，收笔处借回忆照应背影，因此可以说背影是全文的线索。 </opt> <br /> <opt id=\"optionD\"> <radio></radio>D.《人琴俱亡》的作者是南宋文学家刘义庆，选自《世说新语》，文中展现了兄弟的手足之情。 </opt> </questionoption>\\n  ",
							"plaintext": "选出下列表述有误的一项 （　　）    A.《最后一课》中小弗郎士从韩麦尔先生身上学到了深挚的爱国之情。    B.《十一月四日风雨大作》作者是陆游，这是一首七言绝句。    C.朱自清的《背影》开头点出背影，中间叙事描写背影，收笔处借回忆照应背影，因此可以说背影是全文的线索。    D.《人琴俱亡》的作者是南宋文学家刘义庆，选自《世说新语》，文中展现了兄弟的手足之情。"
						},
						"options": [
							{
								"optionId": 1282458096236531700,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1282458096236531700,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1282458096236531700,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1282458096236531700,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1282458093778669600,
							"label": "D",
							"strategy": "D\\n  ",
							"analysis": "D 项中刘义庆应为南朝宋文学家。\\n  "
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "yw-kd1-7-02.html-39",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223171",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 3,
					"internalNo": 2,
					"externalNo": "2",
					"points": 3,
					"question": {
						"questionId": "1213034702152175616",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N3.2.5",
								"knowledgeName": "3.2.5 山水田园类",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N3-13VER132N3.2-13VER132N3.2.5",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列对古诗句的理解，<span style=\"font-weight: bold;\">错误</span>的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.《归园田居》中“但使愿无违”的“愿”指诗人想按照自己的意愿生活，不想在污浊的现实世界中失去自我。</opt><br><opt id=\"optionB\"><radio></radio>B.《过零丁洋》中“人生自古谁无死？留取丹心照汗青”表现了诗人愿意以死明志、为国捐躯的豪情壮志。</opt><br><opt id=\"optionC\"><radio></radio>C.《使至塞上》中“大漠孤烟直，长河落日圆”以传神的笔墨刻画了奇特壮美的塞外风光。</opt><br><opt id=\"optionD\"><radio></radio>D.《行路难》中“停杯投箸不能食，拔剑四顾心茫然”表现了诗人因离开朋友而产生的无限思念之情。</opt></questionoption></div>",
							"plaintext": "下列对古诗句的理解，错误的一项是（　　）A.《归园田居》中“但使愿无违”的“愿”指诗人想按照自己的意愿生活，不想在污浊的现实世界中失去自我。B.《过零丁洋》中“人生自古谁无死？留取丹心照汗青”表现了诗人愿意以死明志、为国捐躯的豪情壮志。C.《使至塞上》中“大漠孤烟直，长河落日圆”以传神的笔墨刻画了奇特壮美的塞外风光。D.《行路难》中“停杯投箸不能食，拔剑四顾心茫然”表现了诗人因离开朋友而产生的无限思念之情。"
						},
						"options": [
							{
								"optionId": 1213034702311559200,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1213034702311559200,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1213034702311559200,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1213034702311559200,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1213034702152175600,
							"label": "D",
							"strategy": "<div>D</div>",
							"analysis": "<div>“停杯投箸不能食，拔剑四顾心茫然”形象地表现了诗人内心的苦闷、抑郁之情。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2015FJFuZhou-16[3]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223172",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 3,
					"internalNo": 3,
					"externalNo": "3",
					"points": 2,
					"question": {
						"questionId": "1213034701866962944",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N1.8",
								"knowledgeName": "1.8 名著阅读",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N1-13VER132N1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>选出下列关于课外名著的说法有误的一项<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.因三打白骨精，唐僧将孙悟空赶回花果山，继续西行，在宝象国被变成一只斑斓猛虎。</opt><br><opt id=\"optionB\"><radio></radio>B.在《父亲的病》中，鲁迅先生觉得，自己在父亲临终时照习俗不断呼叫是“对于父亲的最大的错处”。</opt><br><opt id=\"optionC\"><radio></radio>C.鲁滨孙渴望航海，十九岁时背着父母登上了一艘开往伦敦的船，结果船只遇风暴沉没，他初次出海失败，只得放弃梦想，回到家乡。</opt><br><opt id=\"optionD\"><radio></radio>D.保尔因救朱赫来而被告发入狱，侥幸出狱后，怕再次被捕不敢回家，就躲进了冬妮亚家的花园，冬妮亚发现后求母亲偷偷收留了他。</opt></questionoption></div>",
							"plaintext": "选出下列关于课外名著的说法有误的一项（　　）A.因三打白骨精，唐僧将孙悟空赶回花果山，继续西行，在宝象国被变成一只斑斓猛虎。B.在《父亲的病》中，鲁迅先生觉得，自己在父亲临终时照习俗不断呼叫是“对于父亲的最大的错处”。C.鲁滨孙渴望航海，十九岁时背着父母登上了一艘开往伦敦的船，结果船只遇风暴沉没，他初次出海失败，只得放弃梦想，回到家乡。D.保尔因救朱赫来而被告发入狱，侥幸出狱后，怕再次被捕不敢回家，就躲进了冬妮亚家的花园，冬妮亚发现后求母亲偷偷收留了他。"
						},
						"options": [
							{
								"optionId": 1213034702051512300,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1213034702051512300,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1213034702051512300,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1213034702051512300,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1213034701866963000,
							"label": "C",
							"strategy": "<div>C</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2015LNFuShun-5[6]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223173",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 3,
					"internalNo": 4,
					"externalNo": "4",
					"points": 2,
					"question": {
						"questionId": "1213034701615304704",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N1.7",
								"knowledgeName": "1.7 文学常识",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N1-13VER132N1.7",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列关于文学作品的表述有误的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.《西游记》中“三打白骨精”“真假美猴王”“三借芭蕉扇”等故事家喻户晓。</opt><br><opt id=\"optionB\"><radio></radio>B.《童年》《在人间》《我的大学》都是高尔基以自身经历为原型创作的自传体小说。</opt><br><opt id=\"optionC\"><radio></radio>C.“其实地上本没有路，走的人多了，也便成了路”是鲁迅《社戏》中的一句名言。</opt><br><opt id=\"optionD\"><radio></radio>D.《变色龙》刻画了奥楚蔑洛夫这个见风使舵、趋炎附势、媚上欺下的忠实走狗形象。</opt></questionoption></div>",
							"plaintext": "下列关于文学作品的表述有误的一项是（　　）A.《西游记》中“三打白骨精”“真假美猴王”“三借芭蕉扇”等故事家喻户晓。B.《童年》《在人间》《我的大学》都是高尔基以自身经历为原型创作的自传体小说。C.“其实地上本没有路，走的人多了，也便成了路”是鲁迅《社戏》中的一句名言。D.《变色龙》刻画了奥楚蔑洛夫这个见风使舵、趋炎附势、媚上欺下的忠实走狗形象。"
						},
						"options": [
							{
								"optionId": 1213034701757911000,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1213034701757911000,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1213034701757911000,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1213034701757911000,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1213034701615304700,
							"label": "C",
							"strategy": "<div>C</div>",
							"analysis": "<div>本题考查识记文学常识的能力。这句话是鲁迅作品《故乡》中的名言。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2016HaiNan-32[5]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223174",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 3,
					"internalNo": 5,
					"externalNo": "5",
					"points": 3,
					"question": {
						"questionId": "1213034701321703424",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N1.8",
								"knowledgeName": "1.8 名著阅读",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N1-13VER132N1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.9",
								"knowledgeName": "名著阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.9",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列关于文学名著表述不正确的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.“孙悟空三打白骨精”“铁扇公主使诈假借芭蕉扇”“武松大闹飞云浦”“火云洞智取红孩儿”，都是明代作家吴承恩长篇小说《西游记》里脍炙人口的故事。</opt><br><opt id=\"optionB\"><radio></radio>B.《童年》中外祖母对阿廖沙影响最大，她如一盏明灯，照亮阿廖沙敏感而孤独的心，她还经常讲一些怜悯穷人和弱者、歌颂正义和光明的民间故事给阿廖沙听。</opt><br><opt id=\"optionC\"><radio></radio>C.《繁星》《春水》是冰心在印度诗人泰戈尔《飞鸟集》的影响下写成的，内容包括对母爱与童真的歌颂，对大自然的崇拜和赞颂，对人生的思考和感悟等。</opt><br><opt id=\"optionD\"><radio></radio>D.丹尼尔 • 笛福创作的《鲁滨孙漂流记》告诉我们：在遇到困难时，必须用坚强的意志和顽强的生命力去战胜它，而首先要战胜的是自己的怯懦和悲观。</opt></questionoption></div>",
							"plaintext": "下列关于文学名著表述不正确的一项是（　　）A.“孙悟空三打白骨精”“铁扇公主使诈假借芭蕉扇”“武松大闹飞云浦”“火云洞智取红孩儿”，都是明代作家吴承恩长篇小说《西游记》里脍炙人口的故事。B.《童年》中外祖母对阿廖沙影响最大，她如一盏明灯，照亮阿廖沙敏感而孤独的心，她还经常讲一些怜悯穷人和弱者、歌颂正义和光明的民间故事给阿廖沙听。C.《繁星》《春水》是冰心在印度诗人泰戈尔《飞鸟集》的影响下写成的，内容包括对母爱与童真的歌颂，对大自然的崇拜和赞颂，对人生的思考和感悟等。D.丹尼尔 • 笛福创作的《鲁滨孙漂流记》告诉我们：在遇到困难时，必须用坚强的意志和顽强的生命力去战胜它，而首先要战胜的是自己的怯懦和悲观。"
						},
						"options": [
							{
								"optionId": 1213034701514641400,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1213034701514641400,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1213034701514641400,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1213034701514641400,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1213034701321703400,
							"label": "A",
							"strategy": "<div>A</div>",
							"analysis": "<div>“孙悟空三打白骨精”“铁扇公主使诈假借芭蕉扇”“火云洞智取红孩儿”是明代作家吴承恩小说《西游记》中的故事，而“武松大闹飞云浦”是明末清初作家施耐庵小说《水浒传》中的故事。做该类题要求考生在平时的学习中，多阅读名著，并能记清楚其中的人物和相关的故事，不能张冠李戴。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2016XinJiangWWEZZQ-33[6]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223175",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 6,
					"level": 3,
					"internalNo": 6,
					"externalNo": "6",
					"points": 2,
					"question": {
						"questionId": "1294144227579564032",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.1",
								"knowledgeName": "字音",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.1",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.1",
								"knowledgeName": "字音",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.1",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列各项中加粗字的注音完全正确的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\">\\n<table width=\"100%\">\\n            <tbody>\\n              <tr id=\"optionA\">\\n<td style=\"width:1.2em;\"><radio></radio><br></td>\\n                <td>\\n                  A.<span style=\"font-weight: bold;\">怅</span>然（chàng）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">藐</span>小（mǎo）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">歧</span>斜（qí）\\n                </td>\\n                <td>\\n                  水波<span style=\"font-weight: bold;\">粼</span>粼（líng）\\n                </td>\\n              </tr>\\n              <tr id=\"optionB\">\\n<td style=\"width:1.2em;\"><radio></radio><br></td>\\n                <td>\\n                  B.<span style=\"font-weight: bold;\">镀</span>金（dù）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">虐</span>待（nüè）\\n                </td>\\n                <td>\\n                  大<span style=\"font-weight: bold;\">窘</span>（jǒng）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">苫</span>蔽成丘（shàn）\\n                </td>\\n              </tr>\\n              <tr id=\"optionC\">\\n<td style=\"width:1.2em;\"><radio></radio><br></td>\\n                <td>\\n                  C.惊<span style=\"font-weight: bold;\">愕</span>（è）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">嗔</span>怪（chēn）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">坍</span>塌（tān）\\n                </td>\\n                <td>\\n                  怪<span style=\"font-weight: bold;\">诞</span>不经（yán）\\n                </td>\\n              </tr>\\n              <tr id=\"optionD\">\\n<td style=\"width:1.2em;\"><radio></radio><br></td>\\n                <td>\\n                  D.暮<span style=\"font-weight: bold;\">霭</span>（ǎi）\\n                </td>\\n                <td>\\n                  <span style=\"font-weight: bold;\">旭</span>日（xù）\\n                </td>\\n                <td>\\n                  狭<span style=\"font-weight: bold;\">隘</span>（ài）\\n                </td>\\n                <td>\\n                  无所顾<span style=\"font-weight: bold;\">忌</span>（jì）</td>\\n              </tr>\\n            </tbody>\\n          </table></questionoption></div>",
							"plaintext": "下列各项中加粗字的注音完全正确的一项是（　　）\\n\\n            \\n              \\n\\n                \\n                  A.怅然（chàng）\\n                \\n                \\n                  藐小（mǎo）\\n                \\n                \\n                  歧斜（qí）\\n                \\n                \\n                  水波粼粼（líng）\\n                \\n              \\n              \\n\\n                \\n                  B.镀金（dù）\\n                \\n                \\n                  虐待（nüè）\\n                \\n                \\n                  大窘（jǒng）\\n                \\n                \\n                  苫蔽成丘（shàn）\\n                \\n              \\n              \\n\\n                \\n                  C.惊愕（è）\\n                \\n                \\n                  嗔怪（chēn）\\n                \\n                \\n                  坍塌（tān）\\n                \\n                \\n                  怪诞不经（yán）\\n                \\n              \\n              \\n\\n                \\n                  D.暮霭（ǎi）\\n                \\n                \\n                  旭日（xù）\\n                \\n                \\n                  狭隘（ài）\\n                \\n                \\n                  无所顾忌（jì）"
						},
						"options": [
							{
								"optionId": 1294144227722170400,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1294144227722170400,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1294144227722170400,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1294144227722170400,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1294144227579564000,
							"label": "D",
							"strategy": "<div>D</div>",
							"analysis": "<div>A.藐 miǎo，粼 lín。B.窘 jiǒng。C.诞 dàn。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[68]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223176",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 7,
					"level": 3,
					"internalNo": 7,
					"externalNo": "7",
					"points": 2,
					"question": {
						"questionId": "1294144227327905792",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.2",
								"knowledgeName": "字形",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.2",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.2",
								"knowledgeName": "字形",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.2",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列字词书写全对的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\">\\n<opt id=\"optionA\"><radio></radio>A.灯笼　迷罔　胸襟　一本正经</opt><br>\\n<opt id=\"optionB\"><radio></radio>B.温煦　俊俏　褴褛　垉根问底</opt><br>\\n<opt id=\"optionC\"><radio></radio>C.攫取　污涩　萦绕　见异思迁</opt><br>\\n<opt id=\"optionB\"><radio></radio>D.驯养　红菱　恩赐　大相径庭</opt>\\n</questionoption></div>",
							"plaintext": "下列字词书写全对的一项是（　　）\\nA.灯笼　迷罔　胸襟　一本正经\\nB.温煦　俊俏　褴褛　垉根问底\\nC.攫取　污涩　萦绕　见异思迁\\nD.驯养　红菱　恩赐　大相径庭"
						},
						"options": [
							{
								"optionId": 1294144227470512000,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1294144227470512000,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1294144227470512000,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1294144227470512000,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1294144227327905800,
							"label": "C",
							"strategy": "<div>C</div>",
							"analysis": "<div>A.罔→惘。B.垉→刨。D.菱→绫。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[69]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223177",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 8,
					"level": 3,
					"internalNo": 8,
					"externalNo": "8",
					"points": 2,
					"question": {
						"questionId": "1294144227076247552",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.3",
								"knowledgeName": "词语",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.3",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.3",
								"knowledgeName": "词语",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.3",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下面加粗词语使用正确的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\">\\n<opt id=\"optionA\"><radio></radio>A.看到四岁小侄女模仿《芈月传》中人物的表演，全家人都<span style=\"font-weight: bold;\">忍俊不禁</span>地笑了。</opt><br>\\n<opt id=\"optionB\"><radio></radio>B.他上课经常迟到，老师批评了好几次还是改不了，已经到了<span style=\"font-weight: bold;\">不可救药</span>的地步。</opt><br>\\n<opt id=\"optionC\"><radio></radio>C.2016 年 4 月 15 日是科比退役后第一天，他早早去自己公司上班，精神饱满，<span style=\"font-weight: bold;\">神采奕奕</span>。</opt><br>\\n<opt id=\"optionB\"><radio></radio>D.阳春三月，微风还带着寒意。西湖边的垂柳却<span style=\"font-weight: bold;\">花枝招展</span>，嫩叶满枝，翩翩起舞，仿佛在迎候来自远方的早春客人。</opt>\\n</questionoption></div>",
							"plaintext": "下面加粗词语使用正确的一项是（　　）\\nA.看到四岁小侄女模仿《芈月传》中人物的表演，全家人都忍俊不禁地笑了。\\nB.他上课经常迟到，老师批评了好几次还是改不了，已经到了不可救药的地步。\\nC.2016 年 4 月 15 日是科比退役后第一天，他早早去自己公司上班，精神饱满，神采奕奕。\\nD.阳春三月，微风还带着寒意。西湖边的垂柳却花枝招展，嫩叶满枝，翩翩起舞，仿佛在迎候来自远方的早春客人。"
						},
						"options": [
							{
								"optionId": 1294144227218854000,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1294144227218854000,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1294144227218854000,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1294144227218854000,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1294144227076247600,
							"label": "C",
							"strategy": "<div>C</div>",
							"analysis": "<div>A.“忍俊不禁”含有“笑”的意思，不能再与“笑了”搭配。B.“不可救药”比喻人或事物坏到无法挽救的地步，不能与“迟到”搭配。D.“花枝招展”形容女子打扮得十分艳丽，使用对象不当。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[70]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223178",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 9,
					"level": 3,
					"internalNo": 9,
					"externalNo": "9",
					"points": 2,
					"question": {
						"questionId": "1294144226832977920",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.10",
								"knowledgeName": "排序与语境的衔接、连贯",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.10",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.10",
								"knowledgeName": "排序与语境的衔接、连贯",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.10",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下列句子排序最恰当的一项是<span style=\"white-space: nowrap;\">（　　）</span><br>①现在，科技治霾已经成为共识，希望科技可以治理雾霾，还我们一个蓝天。<br>②与此同时，各个省市环保部门也在加快推进科技治霾的进程。<br>③如果舍本而逐末，那么雾霾的治理效果将大打折扣。<br>④雾霾是当今各大舆论场不可避免的热点，而日新月异的新科技、新手段为雾霾问题的解决带来一道曙光。<br>⑤但环境污染的主体在人，根治雾霾在于约束人的行为，科技只能为治理雾霾提供依据和手段。<br>⑥很久以来，科技部就已经开始探索科技治霾的路径。<br><questionoption type=\"single\">\\n            <table width=\"100%\">\\n              <tbody>\\n                <tr>\\n                  <td width=\"50%\" id=\"optionA\"><radio></radio> A.④⑥②①⑤③ </td>\\n                  <td width=\"50%\" id=\"optionB\"><radio></radio> B.④①⑥②⑤③ </td>\\n                </tr>\\n                <tr>\\n                  <td width=\"50%\" id=\"optionC\"><radio></radio> C.①⑤③④⑥② </td>\\n                  <td width=\"50%\" id=\"optionD\"><radio></radio> D.①⑥②⑤③④ </td>\\n                </tr>\\n              </tbody>\\n            </table>\\n          </questionoption></div>",
							"plaintext": "下列句子排序最恰当的一项是（　　）①现在，科技治霾已经成为共识，希望科技可以治理雾霾，还我们一个蓝天。②与此同时，各个省市环保部门也在加快推进科技治霾的进程。③如果舍本而逐末，那么雾霾的治理效果将大打折扣。④雾霾是当今各大舆论场不可避免的热点，而日新月异的新科技、新手段为雾霾问题的解决带来一道曙光。⑤但环境污染的主体在人，根治雾霾在于约束人的行为，科技只能为治理雾霾提供依据和手段。⑥很久以来，科技部就已经开始探索科技治霾的路径。\\n            \\n              \\n                \\n                   A.④⑥②①⑤③ \\n                   B.④①⑥②⑤③ \\n                \\n                \\n                   C.①⑤③④⑥② \\n                   D.①⑥②⑤③④"
						},
						"options": [
							{
								"optionId": 1294144226975584300,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1294144226975584300,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1294144226975584300,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1294144226975584300,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1294144226832978000,
							"label": "A",
							"strategy": "<div>A</div>",
							"analysis": "<div>先确定第一句是④还是①，那么就可以确定其中两项。第①句总结意味更浓，所以应该选④句作为首句，答案应该在 A、B 中选。“很久以来”“与此同时”和“现在”是三个表示时间的词语，可以确定先后顺序是⑥②①，最终答案确定为 A。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[72]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223179",
					"parentNodeId": "1568916089625223169",
					"name": null,
					"description": null,
					"sequencing": 10,
					"level": 3,
					"internalNo": 10,
					"externalNo": "10",
					"points": 2,
					"question": {
						"questionId": "1294144226354827264",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.14",
								"knowledgeName": "口语交际与书面表达",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.14",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.14",
								"knowledgeName": "口语交际与书面表达",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.14",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": 0,
						"stem": {
							"richText": "<div>在抗战胜利七十周年之际，某校学生会发起了给抗战老兵网上留言的活动。学生的下列留言中<span style=\"font-weight: bold;\">不得体</span>的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\">\\n<opt id=\"optionA\"><radio></radio>A.中华儿女将永远铭记你们的功勋，向你们致以最崇高的敬意！</opt><br>\\n<opt id=\"optionB\"><radio></radio>B.你们的事迹让我深受感动，我要求你们老当益壮，为祖国再立新功！</opt><br>\\n<opt id=\"optionC\"><radio></radio>C.你们的精神将激励我们为中华民族的伟大复兴而努力学习！</opt><br>\\n<opt id=\"optionB\"><radio></radio>D.你们的浴血奋战赢得了中华民族的解放，我们感谢你们！</opt>\\n</questionoption></div>",
							"plaintext": "在抗战胜利七十周年之际，某校学生会发起了给抗战老兵网上留言的活动。学生的下列留言中不得体的一项是（　　）\\nA.中华儿女将永远铭记你们的功勋，向你们致以最崇高的敬意！\\nB.你们的事迹让我深受感动，我要求你们老当益壮，为祖国再立新功！\\nC.你们的精神将激励我们为中华民族的伟大复兴而努力学习！\\nD.你们的浴血奋战赢得了中华民族的解放，我们感谢你们！"
						},
						"options": [
							{
								"optionId": 1294144226723926000,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1294144226723926000,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1294144226723926000,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1294144226723926000,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1294144226354827300,
							"label": "B",
							"strategy": "<div>B</div>",
							"analysis": "<div>“我要求你们”不得体，向抗战老兵提出要求不符合学生身份。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[74]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223180",
					"parentNodeId": "1568916089625223168",
					"name": "二、填空题",
					"description": null,
					"sequencing": 13,
					"level": 2,
					"internalNo": 13,
					"externalNo": "13",
					"points": 30,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223181",
					"parentNodeId": "1568916089625223180",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "11",
					"points": 7,
					"question": {
						"questionId": "1545685164800118784",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.20.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N5.20-310113VER404N5.20.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.20.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N1.20-310113VER72N1.20.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 7,
						"childAmount": 0,
						"stem": {
							"richText": "<div>文学常识填空。<br>郭沫若，原名<u style=\"display:inline-block\">　　　</u>，中国现代<u style=\"display:inline-block\">　　　</u>、<u style=\"display:inline-block\">　　　</u>家、历史学家、考古学家、古文字学家、社会<u style=\"display:inline-block\">　　　</u>家，是继<u style=\"display:inline-block\">　　　</u>之后中国文化战线上的又一面光辉旗帜。代表作有诗集《<u>　　　　　</u>》《<u>　　　　　</u>》等。</div>",
							"plaintext": "文学常识填空。郭沫若，原名　　　，中国现代　　　、　　　家、历史学家、考古学家、古文字学家、社会　　　家，是继　　　之后中国文化战线上的又一面光辉旗帜。代表作有诗集《　　　　　》《　　　　　》等。"
						},
						"options": [],
						"answer": {
							"questionId": 1545685164800118800,
							"label": "郭开贞　诗人　剧作　活动　鲁迅　女神　星空",
							"strategy": "<div>郭开贞　诗人　剧作　活动　鲁迅　女神　星空</div>",
							"analysis": "<div>平时要注意积累文学常识，避免写错别字。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[29]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223182",
					"parentNodeId": "1568916089625223180",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 3,
					"internalNo": 2,
					"externalNo": "12",
					"points": 6,
					"question": {
						"questionId": "1545685168583380992",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL132",
							"name": "积累运用能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.22.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N5.22-310113VER404N5.22.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.22.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N1.22-310113VER72N1.22.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 6,
						"childAmount": 0,
						"stem": {
							"richText": "<div>《伊索寓言》是一部<u style=\"display:inline-block\">　　　</u>集。相传伊索是公元前 6 世纪<u style=\"display:inline-block\">　　　</u>人，善于讲<u style=\"display:inline-block\">　　　</u>故事。现存的《伊索寓言》是<u style=\"display:inline-block\">　　　</u>、<u style=\"display:inline-block\">　　　</u>时代流传下来的故事，经后人汇集，统归在<u style=\"display:inline-block\">　　　</u>名下。</div>",
							"plaintext": "《伊索寓言》是一部　　　集。相传伊索是公元前 6 世纪　　　人，善于讲　　　故事。现存的《伊索寓言》是　　　、　　　时代流传下来的故事，经后人汇集，统归在　　　名下。"
						},
						"options": [],
						"answer": {
							"questionId": 1545685168583381000,
							"label": "寓言故事　古希腊　寓言　古希腊　古罗马　伊索",
							"strategy": "<div>寓言故事　古希腊　寓言　古希腊　古罗马　伊索</div>",
							"analysis": "<div>注意别写错别字。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[38]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223183",
					"parentNodeId": "1568916089625223180",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 3,
					"internalNo": 3,
					"externalNo": "13",
					"points": 5,
					"question": {
						"questionId": "1545685169959112704",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.22.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N5.22-310113VER404N5.22.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.22.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N1.22-310113VER72N1.22.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 5,
						"childAmount": 0,
						"stem": {
							"richText": "<div>《伊索寓言》往往简洁客观地叙述一个故事，最后以一句话揭示①<u>　　　　　</u>。《狐狸和山羊》讲了掉在井里的狐狸哄骗山羊下井，然后踩着山羊的背跳出井，却扔下山羊不管的故事，警示人们②<u>　　　　　　　</u>。《乌龟与老鹰》讲了乌龟非要学老鹰飞翔，结果摔死的故事，说明③<u>　　　　　　　　</u>。</div>",
							"plaintext": "《伊索寓言》往往简洁客观地叙述一个故事，最后以一句话揭示①　　　　　。《狐狸和山羊》讲了掉在井里的狐狸哄骗山羊下井，然后踩着山羊的背跳出井，却扔下山羊不管的故事，警示人们②　　　　　　　。《乌龟与老鹰》讲了乌龟非要学老鹰飞翔，结果摔死的故事，说明③　　　　　　　　。"
						},
						"options": [],
						"answer": {
							"questionId": 1545685169959112700,
							"label": "①蕴含的道理　②做好事也要看对象，以免上当受骗　③任何事物都有自己的规律，不可违背规律（大意对即可）",
							"strategy": "<div>①蕴含的道理　②做好事也要看对象，以免上当受骗　③任何事物都有自己的规律，不可违背规律（大意对即可）</div>",
							"analysis": "<div>根据题干提示写寓意，表达得当，意思相近即可。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[41]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223184",
					"parentNodeId": "1568916089625223180",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 3,
					"internalNo": 4,
					"externalNo": "14",
					"points": 4,
					"question": {
						"questionId": "1545685170353377280",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.2",
								"knowledgeName": "字形",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.2",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.2",
								"knowledgeName": "字形",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.2",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": 0,
						"stem": {
							"richText": "<div>根据拼音写出相应的字词。<br>（1）后来发生了 fēn qí：母亲要走大路，大路平顺；我的儿子要走小路，小路有意思。（　　　　）<br>（2）chéng chè 的池水照见了她的面容和身影。（　　　　）<br>（3）去年春上到延安，后来到五台山工作，不幸以身 xùn 职。（　　　　）<br>（4）冬天的早晨，门口 quán 伏着一只很可怜的小猫，毛色是花白的，但并不好看，又很瘦。（　　　　）</div>",
							"plaintext": "根据拼音写出相应的字词。（1）后来发生了 fēn qí：母亲要走大路，大路平顺；我的儿子要走小路，小路有意思。（　　　　）（2）chéng chè 的池水照见了她的面容和身影。（　　　　）（3）去年春上到延安，后来到五台山工作，不幸以身 xùn 职。（　　　　）（4）冬天的早晨，门口 quán 伏着一只很可怜的小猫，毛色是花白的，但并不好看，又很瘦。（　　　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1545685170353377300,
							"label": "（1）分歧　（2）澄澈　（3）殉　（4）蜷",
							"strategy": "<div>（1）分歧　（2）澄澈　（3）殉　（4）蜷</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[52]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223185",
					"parentNodeId": "1568916089625223180",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 3,
					"internalNo": 5,
					"externalNo": "15",
					"points": 8,
					"question": {
						"questionId": "1568916081798582272",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.23.1",
								"knowledgeName": "诗歌默写",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N5.23-310113VER404N5.23.1",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.23.1",
								"knowledgeName": "诗歌默写",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N1.23-310113VER72N1.23.1",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 8,
						"childAmount": 0,
						"stem": {
							"richText": "<div>名句默写填空。<br>\\n<div>（1）何当共剪西窗烛，<u>　　　　　　　　</u>。<span style=\"text-align: center;\">（李商隐《夜雨寄北》）</span></div>（2）孔子认为做到<u>　　　　　　　</u>，就可以做老师了。<br>\\n<div style=\"text-align: right;\">（用《〈论语〉十二章》中的话回答）</div>（3）《观沧海》中最能反映作者博大胸襟的句子是：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u>。<br>（4）《次北固山下》中写新生事物取代旧的事物的诗句是：<u>　　　　　　</u>，<u>　　　　　　　</u>。<br>（5）<u>　　　　　　　</u>，便引诗情到碧霄。（刘禹锡《秋词》）<br>（6）当有远方的朋友到来时，我们常借用《论语》中的“<u>　　　　　　　</u>，<u>　　　　　　　</u>”来表达喜悦的心情。</div>",
							"plaintext": "名句默写填空。\\n（1）何当共剪西窗烛，　　　　　　　　。（李商隐《夜雨寄北》）（2）孔子认为做到　　　　　　　，就可以做老师了。\\n（用《〈论语〉十二章》中的话回答）（3）《观沧海》中最能反映作者博大胸襟的句子是：　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　。（4）《次北固山下》中写新生事物取代旧的事物的诗句是：　　　　　　，　　　　　　　。（5）　　　　　　　，便引诗情到碧霄。（刘禹锡《秋词》）（6）当有远方的朋友到来时，我们常借用《论语》中的“　　　　　　　，　　　　　　　”来表达喜悦的心情。"
						},
						"options": [],
						"answer": {
							"questionId": 1568916081798582300,
							"label": "（1）却话巴山夜雨时（2）温故而知新（3）日月之行，若出其中；星汉灿烂，若出其里（4）海日生残夜　江春入旧年（5）晴空一鹤排云上（6）有朋自远方来　不亦乐乎",
							"strategy": "<div>（1）却话巴山夜雨时<br>（2）温故而知新<br>（3）日月之行，若出其中；星汉灿烂，若出其里<br>（4）海日生残夜　江春入旧年<br>（5）晴空一鹤排云上<br>（6）有朋自远方来　不亦乐乎</div>",
							"analysis": "<div>此题主要考查名句的积累默写、理解运用的能力。解答此类题，要注意平日应通过反复诵读、归纳联想等方法对名句进行积累，还要注意生僻难写的字、语句的顺序等问题。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[59]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223186",
					"parentNodeId": "1568916089625223168",
					"name": "三、判断题",
					"description": null,
					"sequencing": 19,
					"level": 2,
					"internalNo": 19,
					"externalNo": "19",
					"points": 7,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223187",
					"parentNodeId": "1568916089625223186",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "16",
					"points": 4,
					"question": {
						"questionId": "1294144232495288320",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL131",
							"name": "判断修改能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N714-310113VER404N5.14-310113VER404N5.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N714-310113VER72N1.14-310113VER72N1.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": 4,
						"stem": {
							"richText": "<div>根据课文内容和写作目的，判断下面说法的正误。正确的画“√”，错误的画“×”。</div>",
							"plaintext": "根据课文内容和写作目的，判断下面说法的正误。正确的画“√”，错误的画“×”。"
						},
						"options": [],
						"answer": {
							"questionId": 1294144232495288300,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-RJ2016-7S-01[382]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223188",
					"parentNodeId": "1568916089625223187",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 4,
					"internalNo": 1,
					"externalNo": "16.1",
					"points": 1,
					"question": {
						"questionId": "1294144232621117440",
						"parentId": "1294144232495288320",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL131",
							"name": "判断修改能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N714-310113VER404N5.14-310113VER404N5.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N714-310113VER72N1.14-310113VER72N1.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（1）作者之所以要写小时候脱险的事，是因为这件事回忆起来十分有趣，表现了童趣童乐。（　　）</div>",
							"plaintext": "（1）作者之所以要写小时候脱险的事，是因为这件事回忆起来十分有趣，表现了童趣童乐。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1294144232621117400,
							"label": "F",
							"strategy": "<div>×</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223189",
					"parentNodeId": "1568916089625223187",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 4,
					"internalNo": 2,
					"externalNo": "16.2",
					"points": 1,
					"question": {
						"questionId": "1294144232621117441",
						"parentId": "1294144232495288320",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL131",
							"name": "判断修改能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N714-310113VER404N5.14-310113VER404N5.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N714-310113VER72N1.14-310113VER72N1.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（2）作者之所以要写小时候脱险的事，是因为这件事中蕴涵了一种生活的哲理。<span style=\"white-space: nowrap;\">（　　）</span></div>",
							"plaintext": "（2）作者之所以要写小时候脱险的事，是因为这件事中蕴涵了一种生活的哲理。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1294144232621117400,
							"label": "T",
							"strategy": "<div>√</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223190",
					"parentNodeId": "1568916089625223187",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 4,
					"internalNo": 3,
					"externalNo": "16.3",
					"points": 1,
					"question": {
						"questionId": "1294144232621117442",
						"parentId": "1294144232495288320",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL131",
							"name": "判断修改能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N714-310113VER404N5.14-310113VER404N5.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N714-310113VER72N1.14-310113VER72N1.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（3）父亲看到孩子在悬崖上下不来却不上去救，是因为怕惊吓了孩子，由此可见父亲的细心。（　　）</div>",
							"plaintext": "（3）父亲看到孩子在悬崖上下不来却不上去救，是因为怕惊吓了孩子，由此可见父亲的细心。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1294144232621117400,
							"label": "F",
							"strategy": "<div>×</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223191",
					"parentNodeId": "1568916089625223187",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 4,
					"externalNo": "16.4",
					"points": 1,
					"question": {
						"questionId": "1294144232621117443",
						"parentId": "1294144232495288320",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL131",
							"name": "判断修改能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N714-310113VER404N5.14-310113VER404N5.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.14.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N714-310113VER72N1.14-310113VER72N1.14.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（4）父亲看到孩子在悬崖上下不来却不上去救，是因为父亲想让孩子自己下来，经受一次磨炼，增长勇气和经验。（　　）</div>",
							"plaintext": "（4）父亲看到孩子在悬崖上下不来却不上去救，是因为父亲想让孩子自己下来，经受一次磨炼，增长勇气和经验。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1294144232621117400,
							"label": "T",
							"strategy": "<div>√</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223192",
					"parentNodeId": "1568916089625223186",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 3,
					"internalNo": 2,
					"externalNo": "17",
					"points": 3,
					"question": {
						"questionId": "1228084909084545024",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N711-310113VER404N6.1-310113VER404N6.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N711-310113VER72N2.1-310113VER72N2.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": 3,
						"stem": {
							"richText": "<div>判断正误（正确的打“√”，错误的打“ × ”）。</div>",
							"plaintext": "判断正误（正确的打“√”，错误的打“ × ”）。"
						},
						"options": [],
						"answer": {
							"questionId": 1228084909084545000,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-06[16]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223193",
					"parentNodeId": "1568916089625223192",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 4,
					"internalNo": 1,
					"externalNo": "17.1",
					"points": 1,
					"question": {
						"questionId": "1228084909201985536",
						"parentId": "1228084909084545024",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N711-310113VER404N6.1-310113VER404N6.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N711-310113VER72N2.1-310113VER72N2.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（1）“杨花落尽子规啼，闻道龙标过五溪”是宋代诗人李白《闻王昌龄左迁龙标遥有此寄》中的诗句。（　　）</div>",
							"plaintext": "（1）“杨花落尽子规啼，闻道龙标过五溪”是宋代诗人李白《闻王昌龄左迁龙标遥有此寄》中的诗句。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1228084909201985500,
							"label": "F",
							"strategy": "<div>× </div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223194",
					"parentNodeId": "1568916089625223192",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 4,
					"internalNo": 2,
					"externalNo": "17.2",
					"points": 1,
					"question": {
						"questionId": "1228084909201985537",
						"parentId": "1228084909084545024",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N711-310113VER404N6.1-310113VER404N6.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N711-310113VER72N2.1-310113VER72N2.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（2）“乡书何处达？归雁洛阳边”是唐代诗人王湾《次北固山下》中的诗句。（　　）</div>",
							"plaintext": "（2）“乡书何处达？归雁洛阳边”是唐代诗人王湾《次北固山下》中的诗句。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1228084909201985500,
							"label": "T",
							"strategy": "<div>√</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223195",
					"parentNodeId": "1568916089625223192",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 3,
					"externalNo": "17.3",
					"points": 1,
					"question": {
						"questionId": "1228084909201985538",
						"parentId": "1228084909084545024",
						"providerCode": null,
						"type": {
							"code": "04",
							"name": "判断题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL81",
							"name": "识记能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "2",
							"name": "低",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N711-310113VER404N6.1-310113VER404N6.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.1.8",
								"knowledgeName": "文学常识",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N711-310113VER72N2.1-310113VER72N2.1.8",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 1,
						"childAmount": null,
						"stem": {
							"richText": "<div>（3）“客路青山外，行舟绿水前”出自曹操的《观沧海》。（　　）</div>",
							"plaintext": "（3）“客路青山外，行舟绿水前”出自曹操的《观沧海》。（　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1228084909201985500,
							"label": "F",
							"strategy": "<div>× </div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223196",
					"parentNodeId": "1568916089625223168",
					"name": "四、简答题",
					"description": null,
					"sequencing": 29,
					"level": 2,
					"internalNo": 29,
					"externalNo": "29",
					"points": 25,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223197",
					"parentNodeId": "1568916089625223196",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "18",
					"points": 4,
					"question": {
						"questionId": "1532649972418252800",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "05",
							"name": "简答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.5.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N6.5-310113VER404N6.5.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.5.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N2.5-310113VER72N2.5.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": 0,
						"stem": {
							"richText": "<div>下面的两枚猴票图样，你喜欢哪一枚？请结合票面内容和链接材料说明理由。<br>\\n<div style=\"text-align: center;\"><img width=\"405px\" height=\"187px\" src=\"http://50.xcenable.com:50000/microservice/storageservice/v1/files/download/2023/n/v/p/1aee469d70504dcab31ac428fb866287.jpg\" alt=\"\" title=\"image\" style=\"width: 17.61em; height: 8.13em; vertical-align: middle;\"></img></div>　　<span style=\"font-weight: bold;\">［链接材料］</span>　1980 年，黄永玉设计了我国第一枚生肖邮票<span class=\"text-songt\" style=\"font-family: 宋体;\">——</span>猴票。时隔 36 年，黄永玉再次执笔，为丙申猴年设计了两枚猴票：左边这枚寓意为“捧桃献瑞”，右边这枚寓意为“合家欢乐”。<br>答：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u><span class=\"text-songt\" style=\"font-family: 宋体;\"></span></div>",
							"plaintext": "下面的两枚猴票图样，你喜欢哪一枚？请结合票面内容和链接材料说明理由。\\n　　［链接材料］　1980 年，黄永玉设计了我国第一枚生肖邮票——猴票。时隔 36 年，黄永玉再次执笔，为丙申猴年设计了两枚猴票：左边这枚寓意为“捧桃献瑞”，右边这枚寓意为“合家欢乐”。答："
						},
						"options": [],
						"answer": {
							"questionId": 1532649972418252800,
							"label": "（示例 1）喜欢左边这枚。票面中，一只猴子一手攀住枝条，一手托着桃子，一条长尾巴缠绕在枝条上，画面活泼可爱。这枚猴票寓意为“捧桃献瑞”，是对健康长寿的美好祝福。（示例 2）喜欢右边这枚。票面中，一只大猴盘腿坐在中间，两手各抱着一只小猴，两只小猴亲吻着大猴，画面温馨祥和。这枚猴票寓意为“合家欢乐”，是对幸福生活的美好祝愿。",
							"strategy": "<div>（示例 1）喜欢左边这枚。票面中，一只猴子一手攀住枝条，一手托着桃子，一条长尾巴缠绕在枝条上，画面活泼可爱。这枚猴票寓意为“捧桃献瑞”，是对健康长寿的美好祝福。<br>（示例 2）喜欢右边这枚。票面中，一只大猴盘腿坐在中间，两手各抱着一只小猴，两只小猴亲吻着大猴，画面温馨祥和。这枚猴票寓意为“合家欢乐”，是对幸福生活的美好祝愿。</div>",
							"analysis": "<div>本题考查图画赏析能力。要仔细观察邮票的画面，结合链接材料的介绍，用白描的手法描绘画面中的主要事物以及事物之间的关系、给人的感受等。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[17]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223198",
					"parentNodeId": "1568916089625223196",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 3,
					"internalNo": 2,
					"externalNo": "19",
					"points": 6,
					"question": {
						"questionId": "1545685172626690048",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "05",
							"name": "简答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N5.17-310113VER404N5.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N1.17-310113VER72N1.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 6,
						"childAmount": 3,
						"stem": {
							"richText": "<div>学习了《动物笑谈》一文后，某班举办了一个“语文中的动物”主题班会，请你参加并完成下面题目。</div>",
							"plaintext": "学习了《动物笑谈》一文后，某班举办了一个“语文中的动物”主题班会，请你参加并完成下面题目。"
						},
						"options": [],
						"answer": {
							"questionId": 1545685172626690000,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[19]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223199",
					"parentNodeId": "1568916089625223198",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 4,
					"internalNo": 1,
					"externalNo": "19.1",
					"points": 2,
					"question": {
						"questionId": "1545685173012566016",
						"parentId": "1545685172626690048",
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N5.17-310113VER404N5.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N1.17-310113VER72N1.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>（1）写出两个与动物有关的成语或俗语。<br><u>　　　　　</u>　<u>　　　　　</u></div>",
							"plaintext": "（1）写出两个与动物有关的成语或俗语。"
						},
						"options": [],
						"answer": {
							"questionId": 1545685173012566000,
							"label": "（示例）鸡鸣狗盗　兔死狐悲　狼吞虎咽　蜻蜓点水　螳螂捕蝉，黄雀在后　热锅上的蚂蚁",
							"strategy": "<div>（示例）鸡鸣狗盗　兔死狐悲　狼吞虎咽　蜻蜓点水　螳螂捕蝉，黄雀在后　热锅上的蚂蚁</div>",
							"analysis": "<div>所写成语或俗语跟动物有关即可，注意不要出现错别字。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223200",
					"parentNodeId": "1568916089625223198",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 4,
					"internalNo": 2,
					"externalNo": "19.2",
					"points": 2,
					"question": {
						"questionId": "1545685173012566017",
						"parentId": "1545685172626690048",
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N5.17-310113VER404N5.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N1.17-310113VER72N1.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>（2）读下面的诗谜然后打一昆虫的名字。<br>谜面：和雨还窗户，经风忽过墙。虽缘草成质，不惜月为光。解识幽人意，请今聊处囊。君看落空阔，何异大星芒。<br>谜底：<u>　　　　　</u></div>",
							"plaintext": "（2）读下面的诗谜然后打一昆虫的名字。谜面：和雨还窗户，经风忽过墙。虽缘草成质，不惜月为光。解识幽人意，请今聊处囊。君看落空阔，何异大星芒。谜底："
						},
						"options": [],
						"answer": {
							"questionId": 1545685173012566000,
							"label": "萤火虫",
							"strategy": "<div>萤火虫</div>",
							"analysis": "<div>理解谜面的意思，根据自己的生活经验和所掌握的昆虫的特点推断。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223201",
					"parentNodeId": "1568916089625223198",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 3,
					"externalNo": "19.3",
					"points": 2,
					"question": {
						"questionId": "1545685173012566018",
						"parentId": "1545685172626690048",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N5.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N5.17-310113VER404N5.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N1.17.4",
								"knowledgeName": "篇章积累与感悟",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N1.17-310113VER72N1.17.4",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>（3）写出两句与动物有关的诗（或词）句。<br>答：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "（3）写出两句与动物有关的诗（或词）句。答："
						},
						"options": [],
						"answer": {
							"questionId": 1545685173012566000,
							"label": "（示例）①银烛秋光冷画屏，轻罗小扇扑流萤。②稻花香里说丰年，听取蛙声一片。",
							"strategy": "<div>（示例）①银烛秋光冷画屏，轻罗小扇扑流萤。②稻花香里说丰年，听取蛙声一片。</div>",
							"analysis": "<div>所写诗（或词）句跟动物有关，不出现错别字即可。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223202",
					"parentNodeId": "1568916089625223196",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 3,
					"internalNo": 3,
					"externalNo": "20",
					"points": 4,
					"question": {
						"questionId": "1568916083568578560",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "05",
							"name": "简答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N6.5-310113VER404N6.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N2.5-310113VER72N2.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": 2,
						"stem": {
							"richText": "<div>仔细观察下边的漫画，回答问题。<br>\\n<div style=\"text-align: center;\"><img width=\"287px\" height=\"189px\" src=\"http://50.xcenable.com:50000/microservice/storageservice/v1/files/download/2023/r/e/x/1c8d7cf2d5f244a1a3618aba3b3b43b5.jpg\" alt=\"\" title=\"image\" style=\"width: 12.48em; height: 8.22em; vertical-align: middle;\"></img></div></div>",
							"plaintext": "仔细观察下边的漫画，回答问题。"
						},
						"options": [],
						"answer": {
							"questionId": 1568916083568578600,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[24]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223203",
					"parentNodeId": "1568916089625223202",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 4,
					"internalNo": 1,
					"externalNo": "20.1",
					"points": 2,
					"question": {
						"questionId": "1568916083761516544",
						"parentId": "1568916083568578560",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N6.5-310113VER404N6.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N2.5-310113VER72N2.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>（1）请为这幅漫画拟一个恰当的标题。（不能以“无题”为题，不超过 6 个字）<br>答：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "（1）请为这幅漫画拟一个恰当的标题。（不能以“无题”为题，不超过 6 个字）答："
						},
						"options": [],
						"answer": {
							"questionId": 1568916083761516500,
							"label": "（示例 1）耐心等待；（示例 2）守株待“伐”。",
							"strategy": "<div>（示例 1）耐心等待；（示例 2）守株待“伐”。</div>",
							"analysis": "<div>本题考查对漫画内容的理解分析能力及概括表述能力。从已被砍伐的树桩和刚抽出嫩芽的小树以及虎视眈眈、手拿斧子的蛮汉，再看那汉子双臂环抱、悠闲地静坐的样子，可看出他在等待小树长大后对其进行砍伐。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223204",
					"parentNodeId": "1568916089625223202",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 2,
					"externalNo": "20.2",
					"points": 2,
					"question": {
						"questionId": "1568916083761516545",
						"parentId": "1568916083568578560",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N6.5-310113VER404N6.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.5.15",
								"knowledgeName": "图表漫画徽标",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N2.5-310113VER72N2.5.15",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>（2）请用简洁的语言说出这幅漫画的寓意。<br>答：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "（2）请用简洁的语言说出这幅漫画的寓意。答："
						},
						"options": [],
						"answer": {
							"questionId": 1568916083761516500,
							"label": "（示例 1）鞭挞人们的贪婪和对自然无情的破坏；（示例 2）呼吁人们要保护自然，与自然和谐相处。",
							"strategy": "<div>（示例 1）鞭挞人们的贪婪和对自然无情的破坏；（示例 2）呼吁人们要保护自然，与自然和谐相处。</div>",
							"analysis": "<div>本题考查对漫画寓意的把握能力。解答这类题，一般从两方面入手：一是揭示其讽刺意义，二是从社会发展的现实意义入手，分析漫画作者所要表达的思想情感。从画面上分析可突出其贪婪和对自然的破坏；从作者情感上分析能感受到作者的希望<span class=\"text-songt\" style=\"font-family: 宋体;\">——</span>希望人们重视自然、爱护自然。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223205",
					"parentNodeId": "1568916089625223196",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 3,
					"internalNo": 4,
					"externalNo": "21",
					"points": 8,
					"question": {
						"questionId": "1568916084877201408",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "05",
							"name": "简答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 8,
						"childAmount": 2,
						"stem": {
							"richText": "<div>综合性学习。<br>　　刚刚获得“国际安徒生奖”的中国作家曹文轩说：“希望有更多的人像我一样，利用中国经验，利用中国资源，讲述属于全人类的中国故事。”小英、林子、阿莲决定以“讲述我们的中国故事”为主题开展综合探究。他们选定的话题分别是：中国文学、中国制造、中国力量。<br>　　<span style=\"font-weight: bold;\">［小英统计的数据］</span>　历届“国际安徒生奖”获奖统计表<br>\\n<table cellspacing=\"0\" cellpadding=\"0\" border=\"1\" style=\"width: 100%;\">\\n<tbody>\\n<tr>\\n<td style=\"width: 110px; height: 74px; background-image: url(\"image/YW-XRJ-7S-04-010.jpg\");\">　　时间<br>地区</td>\\n<td style=\"text-align: center; width: 110px;\">1956<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>1966</td>\\n<td style=\"text-align: center; width: 110px;\">1968<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>1976</td>\\n<td style=\"text-align: center; width: 110px;\">1978<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>1986</td>\\n<td style=\"text-align: center; width: 110px;\">1988<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>1996</td>\\n<td style=\"text-align: center; width: 110px;\">1998<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>2006</td>\\n<td style=\"text-align: center; width: 110px;\">2008<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>2016</td>\\n<td style=\"text-align: center; width: 110px;\">总计</td></tr>\\n<tr>\\n<td style=\"text-align: center;\">中国</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td></tr>\\n<tr>\\n<td style=\"text-align: center;\">日本</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">2</td></tr>\\n<tr>\\n<td style=\"text-align: center;\">美国</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">6</td></tr>\\n<tr>\\n<td style=\"text-align: center;\">欧洲</td>\\n<td style=\"text-align: center;\">5</td>\\n<td style=\"text-align: center;\">5</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">18</td></tr>\\n<tr>\\n<td style=\"text-align: center;\">其他</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">0</td>\\n<td style=\"text-align: center;\">2</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">1</td>\\n<td style=\"text-align: center;\">5</td></tr></tbody></table>　　<span style=\"font-weight: bold;\">［林子写成的新闻］</span>　中国航天已呈领跑之势。今年三季度，天宫二号即将发射升空，对接神舟十一号飞船，并与货运飞船天舟一号对接，计划于 2020 年初步建成中国载人空间站。届时，或将是人类唯一的在轨太空家园。不仅如此，中国高铁也成为中国走向世界的名片。截至目前，国内运营里程已达 1.9 万公里，居世界第一！总体技术水平居世界前列，中国高铁正在走进俄国、美国、泰国和印度尼西亚<span class=\"text-songt\" style=\"font-family: 宋体;\">……</span></div>",
							"plaintext": "综合性学习。　　刚刚获得“国际安徒生奖”的中国作家曹文轩说：“希望有更多的人像我一样，利用中国经验，利用中国资源，讲述属于全人类的中国故事。”小英、林子、阿莲决定以“讲述我们的中国故事”为主题开展综合探究。他们选定的话题分别是：中国文学、中国制造、中国力量。　　［小英统计的数据］　历届“国际安徒生奖”获奖统计表\\n\\n\\n\\n　　时间地区\\n1956—1966\\n1968—1976\\n1978—1986\\n1988—1996\\n1998—2006\\n2008—2016\\n总计\\n\\n中国\\n0\\n0\\n0\\n0\\n0\\n1\\n1\\n\\n日本\\n0\\n0\\n0\\n0\\n1\\n1\\n2\\n\\n美国\\n1\\n2\\n1\\n1\\n1\\n0\\n6\\n\\n欧洲\\n5\\n5\\n2\\n2\\n2\\n2\\n18\\n\\n其他\\n0\\n0\\n2\\n1\\n1\\n1\\n5　　［林子写成的新闻］　中国航天已呈领跑之势。今年三季度，天宫二号即将发射升空，对接神舟十一号飞船，并与货运飞船天舟一号对接，计划于 2020 年初步建成中国载人空间站。届时，或将是人类唯一的在轨太空家园。不仅如此，中国高铁也成为中国走向世界的名片。截至目前，国内运营里程已达 1.9 万公里，居世界第一！总体技术水平居世界前列，中国高铁正在走进俄国、美国、泰国和印度尼西亚……"
						},
						"options": [],
						"answer": {
							"questionId": 1568916084877201400,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[47]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223206",
					"parentNodeId": "1568916089625223205",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 1,
					"externalNo": "21.1",
					"points": 4,
					"question": {
						"questionId": "1568916085170802688",
						"parentId": "1568916084877201408",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": null,
						"stem": {
							"richText": "<div>（1）读小英提供的图表，说说你的发现：<br>初读图表，令人惊喜的是：①<u>　　　　　　　　　　　　　</u>；<br>细读图表，引人深思的是：②<u>　　　　　　　　　　　　　</u>。</div>",
							"plaintext": "（1）读小英提供的图表，说说你的发现：初读图表，令人惊喜的是：①　　　　　　　　　　　　　；细读图表，引人深思的是：②　　　　　　　　　　　　　。"
						},
						"options": [],
						"answer": {
							"questionId": 1568916085170802700,
							"label": "（示例）①曹文轩获奖，使中国在此奖项上有了零的突破②此奖项大多被欧美所得，我们还要努力追赶（或我们和欧美国家还有很大的差距，还要努力追赶）",
							"strategy": "<div>（示例）①曹文轩获奖，使中国在此奖项上有了零的突破<br>②此奖项大多被欧美所得，我们还要努力追赶（或我们和欧美国家还有很大的差距，还要努力追赶）</div>",
							"analysis": "<div>首先要抓住图表中的数字和文字信息，留意主要内容。然后把信息进行横向和纵向比较，找出所表现事物的特点、规律。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223207",
					"parentNodeId": "1568916089625223205",
					"name": null,
					"description": null,
					"sequencing": 6,
					"level": 4,
					"internalNo": 2,
					"externalNo": "21.2",
					"points": 4,
					"question": {
						"questionId": "1568916085170802689",
						"parentId": "1568916084877201408",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL122",
							"name": "理解能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.20",
								"knowledgeName": "综合性学习",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.20",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": null,
						"stem": {
							"richText": "<div>（2）林子写成的新闻还差一个标题，他想采用对偶句式，请你帮帮他。<br>答：<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "（2）林子写成的新闻还差一个标题，他想采用对偶句式，请你帮帮他。答："
						},
						"options": [],
						"answer": {
							"questionId": 1568916085170802700,
							"label": "示例：中国航天领跑全球，中国高铁位居前列；中国航天领跑，中国高铁超前；中国航天成就辉煌，中国高铁走向世界。（任选一个即可）",
							"strategy": "<div>示例：中国航天领跑全球，中国高铁位居前列；中国航天领跑，中国高铁超前；中国航天成就辉煌，中国高铁走向世界。（任选一个即可）</div>",
							"analysis": "<div>要分别围绕“中国航天”和“中国高铁”来写；内容基本合乎新闻事实即可。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223208",
					"parentNodeId": "1568916089625223196",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 3,
					"internalNo": 5,
					"externalNo": "22",
					"points": 3,
					"question": {
						"questionId": "1568916085263077376",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "05",
							"name": "简答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL132",
							"name": "积累运用能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.6.11",
								"knowledgeName": "仿写、对联",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N716-310113VER404N6.6-310113VER404N6.6.11",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.11",
								"knowledgeName": "仿写、对联",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.11",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": 0,
						"stem": {
							"richText": "<div>请你仿照画线的例句，在横线上补写两个句子。<br>　　读书是一个奇妙的过程，<span style=\"text-decoration: underline;\">可以使软弱的性格变得坚强</span>，<u>　　　　　　　　</u>，<u>　　　　　　　　</u>。</div>",
							"plaintext": "请你仿照画线的例句，在横线上补写两个句子。　　读书是一个奇妙的过程，可以使软弱的性格变得坚强，　　　　　　　　，　　　　　　　　。"
						},
						"options": [],
						"answer": {
							"questionId": 1568916085263077400,
							"label": "可以使卑微的生命变得高尚　可以使单调的生活变得多彩",
							"strategy": "<div>可以使卑微的生命变得高尚　可以使单调的生活变得多彩</div>",
							"analysis": "<div>此题主要考查在具体语境中仿写句子的能力。解答此类题，要注意两点：一是仿句的句式和修辞手法的运用要与例句一致；二是所仿写句子的内容要与所给出的例句构成一个整体，表达一个完整的意思，合理通畅。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-05[53]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223209",
					"parentNodeId": "1568916089625223168",
					"name": "五、阅读题",
					"description": null,
					"sequencing": 42,
					"level": 2,
					"internalNo": 42,
					"externalNo": "42",
					"points": 15,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223210",
					"parentNodeId": "1568916089625223209",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "23",
					"points": 15,
					"question": {
						"questionId": "1555854587632586752",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "06",
							"name": "阅读题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 15,
						"childAmount": 5,
						"stem": {
							"richText": "<div>阅读下面两段文言文，完成[1]<span class=\"text-songt\" style=\"font-family: 宋体;\">—</span>[5]题。<br>　　<span style=\"font-weight: bold;\">【甲】</span>忽一人大呼“火起”，夫起大呼，妇亦起大呼。两儿齐哭。俄而百千人大呼，百千儿哭，百千犬吠。中<span style=\"font-weight: bold;\">间</span>力拉崩倒之声，火爆声，呼呼风声，百千齐作；又夹百千求救声，曳屋许许声，抢夺声，泼水声。凡所应有，无所不有。虽人有百手，手有百指，不能指<span style=\"font-weight: bold;\">其</span>一端；人有百口，口有百舌，不能<span style=\"font-weight: bold;\">名</span>其一处也。于是宾客无不变色离席，<span style=\"text-decoration: underline;\">奋袖出臂，两股战战，几欲先走。</span><br>\\n<div style=\"text-align: right;\">（林嗣环《口技》）</div>　　<span style=\"font-weight: bold;\">【乙</span><span style=\"font-weight: bold;\">】</span>光绪十六年<sup style=\"font-size: 0.65em;\">①</sup>春闰二月甲子，余游巴黎蜡人<sup style=\"font-size: 0.65em;\">②</sup>馆。见所制蜡人，悉仿生人<sup style=\"font-size: 0.65em;\">③</sup>。形体态度，发肤颜色，长短丰瘠，无不毕<span style=\"font-weight: bold;\">肖</span>。自王公卿相以至工艺杂流，凡有名<span style=\"font-weight: bold;\">者</span>，往往留像<span style=\"font-weight: bold;\">于</span>馆。或立或卧，或坐或俯，或笑或哭，或饮或博，<span style=\"text-decoration: underline;\">骤视之，无不惊为生人者。</span>余亟<sup style=\"font-size: 0.65em;\">④</sup>叹其技<span style=\"font-weight: bold;\">之</span>奇妙。<br>\\n<div style=\"text-align: right;\">（薛福成《观巴黎油画记》）</div><span style=\"font-weight: bold;\">【</span>注<span style=\"font-weight: bold;\">】</span>①光绪十六年：公元 1890 年。②蜡人：用蜡做成的人的形象。③生人：活人。④亟（qì）：屡次，不断地。</div>",
							"plaintext": "阅读下面两段文言文，完成[1]—[5]题。　　【甲】忽一人大呼“火起”，夫起大呼，妇亦起大呼。两儿齐哭。俄而百千人大呼，百千儿哭，百千犬吠。中间力拉崩倒之声，火爆声，呼呼风声，百千齐作；又夹百千求救声，曳屋许许声，抢夺声，泼水声。凡所应有，无所不有。虽人有百手，手有百指，不能指其一端；人有百口，口有百舌，不能名其一处也。于是宾客无不变色离席，奋袖出臂，两股战战，几欲先走。\\n（林嗣环《口技》）　　【乙】光绪十六年①春闰二月甲子，余游巴黎蜡人②馆。见所制蜡人，悉仿生人③。形体态度，发肤颜色，长短丰瘠，无不毕肖。自王公卿相以至工艺杂流，凡有名者，往往留像于馆。或立或卧，或坐或俯，或笑或哭，或饮或博，骤视之，无不惊为生人者。余亟④叹其技之奇妙。\\n（薛福成《观巴黎油画记》）【注】①光绪十六年：公元 1890 年。②蜡人：用蜡做成的人的形象。③生人：活人。④亟（qì）：屡次，不断地。"
						},
						"options": [],
						"answer": {
							"questionId": 1555854587632586800,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2016SDLinYi-36[11]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223211",
					"parentNodeId": "1568916089625223210",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 4,
					"internalNo": 1,
					"externalNo": "23.1",
					"points": 3,
					"question": {
						"questionId": "1555854587875856384",
						"parentId": "1555854587632586752",
						"providerCode": null,
						"type": {
							"code": "03",
							"name": "填空题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": null,
						"stem": {
							"richText": "<div>[1]解释下列句子中加粗的词语。<br>（1）中<span style=\"font-weight: bold;\">间</span>力拉崩倒之声（　　　　）<br>（2）不能<span style=\"font-weight: bold;\">名</span>其一处也（　　　　）<br>（3）无不毕<span style=\"font-weight: bold;\">肖</span>（　　　　）</div>",
							"plaintext": "[1]解释下列句子中加粗的词语。（1）中间力拉崩倒之声（　　　　）（2）不能名其一处也（　　　　）（3）无不毕肖（　　　　）"
						},
						"options": [],
						"answer": {
							"questionId": 1555854587875856400,
							"label": "（1）夹杂　（2）说出　（3）相像（相似）",
							"strategy": "<div>（1）夹杂　（2）说出　（3）相像（相似）</div>",
							"analysis": "<div>本题考查理解实词在文中的用法的能力。做该类型题时，首先要理解所提供的文言语句的整体意思，然后再根据语境对加粗词的意义和用法加以判断。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223212",
					"parentNodeId": "1568916089625223210",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 4,
					"internalNo": 2,
					"externalNo": "23.2",
					"points": 2,
					"question": {
						"questionId": "1555854587875856385",
						"parentId": "1555854587632586752",
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>[2]下列句子中加粗虚词的意义和用法不同的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.①不能指<span style=\"font-weight: bold;\">其</span>一端　　　　　②<span style=\"font-weight: bold;\">其</span>一犬坐于前（《狼》）</opt><br><opt id=\"optionB\"><radio></radio>B.①凡有名<span style=\"font-weight: bold;\">者</span>　　　　　　　②念无与为乐<span style=\"font-weight: bold;\">者</span>（《记承天寺夜游》）</opt><br><opt id=\"optionC\"><radio></radio>C.①往往留像<span style=\"font-weight: bold;\">于</span>馆　　　　　②求石兽<span style=\"font-weight: bold;\">于</span>水中（《河中石兽》）</opt><br><opt id=\"optionD\"><radio></radio>D.①余亟叹其技<span style=\"font-weight: bold;\">之</span>奇妙　　　②属予作文以记<span style=\"font-weight: bold;\">之</span>（《岳阳楼记》）</opt></questionoption></div>",
							"plaintext": "[2]下列句子中加粗虚词的意义和用法不同的一项是（　　）A.①不能指其一端　　　　　②其一犬坐于前（《狼》）B.①凡有名者　　　　　　　②念无与为乐者（《记承天寺夜游》）C.①往往留像于馆　　　　　②求石兽于水中（《河中石兽》）D.①余亟叹其技之奇妙　　　②属予作文以记之（《岳阳楼记》）"
						},
						"options": [
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1555854587875856400,
							"label": "D",
							"strategy": "<div>D</div>",
							"analysis": "<div>本题考查理解文言文虚词的意义和用法的能力。A.都是代词，“其中”。B.都是代词，“<span class=\"text-songt\" style=\"font-family: 宋体;\">……</span>的人”。C.都是介词，“在”。D.①助词，用在主谓之间，取消句子独立性；②代词，指代“重修岳阳楼这件事”。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223213",
					"parentNodeId": "1568916089625223210",
					"name": null,
					"description": null,
					"sequencing": 4,
					"level": 4,
					"internalNo": 3,
					"externalNo": "23.3",
					"points": 5,
					"question": {
						"questionId": "1555854587875856390",
						"parentId": "1555854587632586752",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 5,
						"childAmount": null,
						"stem": {
							"richText": "<div>[3]用现代汉语翻译下列句子。<br>（1）奋袖出臂，两股战战，几欲先走。<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u><br>（2）骤视之，无不惊为生人者。<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "[3]用现代汉语翻译下列句子。（1）奋袖出臂，两股战战，几欲先走。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　（2）骤视之，无不惊为生人者。"
						},
						"options": [],
						"answer": {
							"questionId": 1555854587875856400,
							"label": "（1）（客人们）扬起衣袖，露出手臂，两腿打哆嗦，几乎想争先恐后地逃跑。（2）猛然看到他们，没有不惊叹像是活人的。",
							"strategy": "<div>（1）（客人们）扬起衣袖，露出手臂，两腿打哆嗦，几乎想争先恐后地逃跑。（2）猛然看到他们，没有不惊叹像是活人的。</div>",
							"analysis": "<div>本题考查翻译文中重要句子的能力。做此类题时，首先要找出句子中的重要实词和虚词，以及文言现象，先通读再翻译，做到无错别字，没有语病。翻译时还要注意相应的文言句式。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223214",
					"parentNodeId": "1568916089625223210",
					"name": null,
					"description": null,
					"sequencing": 5,
					"level": 4,
					"internalNo": 4,
					"externalNo": "23.4",
					"points": 2,
					"question": {
						"questionId": "1555854587875856391",
						"parentId": "1555854587632586752",
						"providerCode": null,
						"type": {
							"code": "01",
							"name": "单选题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>[4]下列句子中不能表现口技表演者或蜡人制作者高超技艺的一项是<span style=\"white-space: nowrap;\">（　　）</span><br><questionoption type=\"single\"><opt id=\"optionA\"><radio></radio>A.凡所应有，无所不有。</opt><br><opt id=\"optionB\"><radio></radio>B.余亟叹其技之奇妙。</opt><br><opt id=\"optionC\"><radio></radio>C.见所制蜡人，悉仿生人。</opt><br><opt id=\"optionD\"><radio></radio>D.形体态度，发肤颜色，长短丰瘠，无不毕肖。</opt></questionoption></div>",
							"plaintext": "[4]下列句子中不能表现口技表演者或蜡人制作者高超技艺的一项是（　　）A.凡所应有，无所不有。B.余亟叹其技之奇妙。C.见所制蜡人，悉仿生人。D.形体态度，发肤颜色，长短丰瘠，无不毕肖。"
						},
						"options": [
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "A",
								"label": "",
								"sequencing": 0
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "B",
								"label": "",
								"sequencing": 1
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "C",
								"label": "",
								"sequencing": 2
							},
							{
								"optionId": 1555854587875856400,
								"questionId": null,
								"alias": "D",
								"label": "",
								"sequencing": 3
							}
						],
						"answer": {
							"questionId": 1555854587875856400,
							"label": "C",
							"strategy": "<div>C</div>",
							"analysis": "<div>本题考查对文言文内容的理解能力。A、D 两项从正面表现口技表演者、蜡人制作者高超技艺，B 项从侧面表现蜡人制作者高超技艺，C 项只是客观叙述。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223215",
					"parentNodeId": "1568916089625223210",
					"name": null,
					"description": null,
					"sequencing": 6,
					"level": 4,
					"internalNo": 5,
					"externalNo": "23.5",
					"points": 3,
					"question": {
						"questionId": "1555854587875856396",
						"parentId": "1555854587632586752",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "4",
							"name": "高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N4.3.6",
								"knowledgeName": "4.3.6 民间技艺篇",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N4-13VER132N4.3-13VER132N4.3.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.6.18",
								"knowledgeName": "文言文阅读",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N716-310113VER72N2.6-310113VER72N2.6.18",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": null,
						"stem": {
							"richText": "<div>[5]【甲】【乙】两段文字在写法上有什么共同点？请简要分析。<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "[5]【甲】【乙】两段文字在写法上有什么共同点？请简要分析。"
						},
						"options": [],
						"answer": {
							"questionId": 1555854587875856400,
							"label": "【甲】【乙】两段文字都运用了正面描写和侧面描写相结合的写法。描写口技艺人的精彩表演和蜡人的逼真形象、姿态，是正面表现口技表演者、蜡人制作者的高超技艺；描写听众、参观者的反应是从侧面表现艺人们技艺的高超。（意思对即可）",
							"strategy": "<div>【甲】【乙】两段文字都运用了正面描写和侧面描写相结合的写法。描写口技艺人的精彩表演和蜡人的逼真形象、姿态，是正面表现口技表演者、蜡人制作者的高超技艺；描写听众、参观者的反应是从侧面表现艺人们技艺的高超。（意思对即可）</div>",
							"analysis": "<div>本题考查分析判断文段所使用的描写手法的能力。做该类型题时，首先要全面阅读两段文言语段，把握好作者叙述的角度、意图等，然后仔细分辨作者所使用的描写方法，并能够对这两段文字进行比较，得出答案。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223216",
					"parentNodeId": "1568916089625223168",
					"name": "六、赏析题",
					"description": null,
					"sequencing": 49,
					"level": 2,
					"internalNo": 49,
					"externalNo": "49",
					"points": 9,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223217",
					"parentNodeId": "1568916089625223216",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "24",
					"points": 5,
					"question": {
						"questionId": "1555854588110737408",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "07",
							"name": "赏析题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N3.2.6",
								"knowledgeName": "3.2.6 忧国伤时类",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N3-13VER132N3.2-13VER132N3.2.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N712-310113VER404N6.2-310113VER404N6.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N712-310113VER72N2.2-310113VER72N2.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 5,
						"childAmount": 2,
						"stem": {
							"richText": "<div>阅读下面的词，完成 [1]~[2] 题。<br>\\n<div style=\"text-align: center;\"><span style=\"font-weight: bold;\">相见欢</span></div>\\n<div style=\"text-align: center;\">李　煜</div>\\n<div style=\"text-align: center;\">无言独上西楼，月如钩。寂寞梧桐深院锁清秋。</div>\\n<div style=\"text-align: center;\">   剪不断，理还乱，是离愁。别是一般滋味在心头。</div></div>",
							"plaintext": "阅读下面的词，完成 [1]~[2] 题。\\n相见欢\\n李　煜\\n无言独上西楼，月如钩。寂寞梧桐深院锁清秋。\\n   剪不断，理还乱，是离愁。别是一般滋味在心头。"
						},
						"options": [],
						"answer": {
							"questionId": 1555854588110737400,
							"label": null,
							"strategy": null,
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2014HNChangDe-8[10]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223218",
					"parentNodeId": "1568916089625223217",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 4,
					"internalNo": 1,
					"externalNo": "24.1",
					"points": 2,
					"question": {
						"questionId": "1555854588404338688",
						"parentId": "1555854588110737408",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N3.2.6",
								"knowledgeName": "3.2.6 忧国伤时类",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N3-13VER132N3.2-13VER132N3.2.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N712-310113VER404N6.2-310113VER404N6.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N712-310113VER72N2.2-310113VER72N2.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 2,
						"childAmount": null,
						"stem": {
							"richText": "<div>[1]上片中的“锁”字用得好，说说它好在哪里。<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "[1]上片中的“锁”字用得好，说说它好在哪里。"
						},
						"options": [],
						"answer": {
							"questionId": 1555854588404338700,
							"label": "“锁”字将秋色秋意比拟为可锁之物，生动形象，突出了梧桐深院的萧瑟凄凉；被锁的不单是清秋，还有词人的自由和无可解脱的孤寂。（从“锁景”和“锁情”两方面回答即可）",
							"strategy": "<div>“锁”字将秋色秋意比拟为可锁之物，生动形象，突出了梧桐深院的萧瑟凄凉；被锁的不单是清秋，还有词人的自由和无可解脱的孤寂。（从“锁景”和“锁情”两方面回答即可）</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223219",
					"parentNodeId": "1568916089625223217",
					"name": null,
					"description": null,
					"sequencing": 3,
					"level": 4,
					"internalNo": 2,
					"externalNo": "24.2",
					"points": 3,
					"question": {
						"questionId": "1555854588404338689",
						"parentId": "1555854588110737408",
						"providerCode": null,
						"type": {
							"code": "09",
							"name": "解答题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": null,
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N3.2.6",
								"knowledgeName": "3.2.6 忧国伤时类",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N3-13VER132N3.2-13VER132N3.2.6",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N712-310113VER404N6.2-310113VER404N6.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.2.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N712-310113VER72N2.2-310113VER72N2.2.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 3,
						"childAmount": null,
						"stem": {
							"richText": "<div>[2]全词表达了作者怎样的感情？<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "[2]全词表达了作者怎样的感情？"
						},
						"options": [],
						"answer": {
							"questionId": 1555854588404338700,
							"label": "既有远离故土的离愁别绪，又有独处清冷深院的孤独寂寞，还有无可名状的亡国之痛。",
							"strategy": "<div>既有远离故土的离愁别绪，又有独处清冷深院的孤独寂寞，还有无可名状的亡国之痛。</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": null,
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223220",
					"parentNodeId": "1568916089625223216",
					"name": null,
					"description": null,
					"sequencing": 2,
					"level": 3,
					"internalNo": 2,
					"externalNo": "25",
					"points": 4,
					"question": {
						"questionId": "1558938065509060608",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "07",
							"name": "赏析题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL305",
							"name": "阅读鉴赏能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "3",
							"name": "中",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "13VER132N3.2.3",
								"knowledgeName": "3.2.3 羁旅行役类",
								"materialVersion": "VER132",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "13VER132NR1-13VER132N3-13VER132N3.2-13VER132N3.2.3",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER320N4.6.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER320",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER320NR721-310113VER320N726-310113VER320N4.6-310113VER320N4.6.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.5.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N715-310113VER404N6.5-310113VER404N6.5.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.5.16",
								"knowledgeName": "古代诗歌赏析",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N715-310113VER72N2.5-310113VER72N2.5.16",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 4,
						"childAmount": 0,
						"stem": {
							"richText": "<div>阅读下面一首宋诗，回答问题。<br>\\n<div align=\"center\">\\n<div align=\"center\" style=\"width: 18em; text-align: left;\">\\n<div align=\"center\"><span style=\"font-weight: bold;\">鲁山山行</span></div>\\n<div align=\"center\">梅尧臣</div>　　　适与野情惬，千山高复低。<br>　　　好峰随处改，幽径独行迷。<br>　　　霜落熊升树，林空鹿饮溪。<br>　　　人家在何许，云外一声鸡。</div></div>\\n\\n\\n\\n\\n\\n\\n （1）颔联“好峰随处改，幽径独行迷”中“迷”字用得巧妙，请加以赏析。<br><u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u><br>（2）这首诗表达了作者怎样的情感？\\n　　　　　　　　　　　　　　　　　　　　　　<u style=\"word-break:break-all\">　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　</u></div>",
							"plaintext": "阅读下面一首宋诗，回答问题。\\n\\n\\n鲁山山行\\n梅尧臣　　　适与野情惬，千山高复低。　　　好峰随处改，幽径独行迷。　　　霜落熊升树，林空鹿饮溪。　　　人家在何许，云外一声鸡。\\n\\n\\n\\n\\n\\n\\n （1）颔联“好峰随处改，幽径独行迷”中“迷”字用得巧妙，请加以赏析。　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　（2）这首诗表达了作者怎样的情感？"
						},
						"options": [],
						"answer": {
							"questionId": 1558938065509060600,
							"label": "（1）迷，迷路，暗含“迷恋”之意，逼真地表现出诗人独自行走山间欣赏美景的陶醉。（仅从“迷路”层面作答）（2）表达了作者对山野风光的喜爱之情及置身其中的喜悦、闲适的心境。（意思对即可）",
							"strategy": "<div>（1）迷，迷路，暗含“迷恋”之意，逼真地表现出诗人独自行走山间欣赏美景的陶醉。（仅从“迷路”层面作答）<br>（2）表达了作者对山野风光的喜爱之情及置身其中的喜悦、闲适的心境。（意思对即可）</div>",
							"analysis": "<div>本题考查理解作品中重要词语含义和作者的思想情感的能力。要求考生平时多读书，在阅读的过程中，多批注，多思考，感受这些词语在文中的深刻含义和它们在文中的重要作用。</div>"
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-2016SDLinYi-36[10]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223221",
					"parentNodeId": "1568916089625223168",
					"name": "七、作文题",
					"description": null,
					"sequencing": 54,
					"level": 2,
					"internalNo": 54,
					"externalNo": "54",
					"points": 50,
					"question": null,
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				},
				{
					"nodeId": "1568916089625223222",
					"parentNodeId": "1568916089625223221",
					"name": null,
					"description": null,
					"sequencing": 1,
					"level": 3,
					"internalNo": 1,
					"externalNo": "26",
					"points": 50,
					"question": {
						"questionId": "1568916085548290048",
						"parentId": null,
						"providerCode": null,
						"type": {
							"code": "08",
							"name": "作文题",
							"relationCode": null
						},
						"stage": null,
						"grade": null,
						"subject": {
							"code": "13",
							"name": "语文",
							"relationCode": null
						},
						"ability": {
							"code": "ABL103",
							"name": "写作能力",
							"relationCode": null
						},
						"difficulty": {
							"code": "5",
							"name": "最高",
							"relationCode": null
						},
						"knowledgeList": [
							{
								"questionId": null,
								"knowledgeId": "310113VER404N6.1.21",
								"knowledgeName": "写作",
								"materialVersion": "VER404",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER404NR711-310113VER404N711-310113VER404N6.1-310113VER404N6.1.21",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							},
							{
								"questionId": null,
								"knowledgeId": "310113VER72N2.1.21",
								"knowledgeName": "写作",
								"materialVersion": "VER72",
								"materialVersionName": null,
								"textbookId": null,
								"textbookName": null,
								"searchCode": "310113VER72NR711-310113VER72N711-310113VER72N2.1-310113VER72N2.1.21",
								"creator": null,
								"createTime": null,
								"updator": null,
								"updateTime": null
							}
						],
						"points": 50,
						"childAmount": 0,
						"stem": {
							"richText": "<div>题目：我眼中的<u>　　　　　</u><br>提示：在横线上填上春、夏、秋、冬四季之中任何一个季节。<br>要求：抓住该季节景物的特点，恰当运用比喻、拟人等修辞手法，写一篇 500 字左右的散文。</div>",
							"plaintext": "题目：我眼中的　　　　　提示：在横线上填上春、夏、秋、冬四季之中任何一个季节。要求：抓住该季节景物的特点，恰当运用比喻、拟人等修辞手法，写一篇 500 字左右的散文。"
						},
						"options": [],
						"answer": {
							"questionId": 1568916085548290000,
							"label": "略。",
							"strategy": "<div>略。</div>",
							"analysis": null
						},
						"listen": null,
						"sequencing": null,
						"affixId": null,
						"questionNo": "YW-XRJ-7S-01[69]",
						"creator": null,
						"createTime": null,
						"updator": null,
						"updateTime": null,
						"children": null,
						"downloadNumber": null,
						"axises": null
					},
					"children": null,
					"childAmount": null,
					"creator": null,
					"createTime": null,
					"updator": null,
					"updateTime": null
				}
			],
			"knowledgeList": [
				{
					"knowledgeId": "310113VER72NR711",
					"knowledgeName": "语文七年级上",
					"materialVersion": "VER72",
					"materialVersionName": "人教部编版",
					"textbookId": "cmltmt7ue5odbh0lnzt4de0p8h1qsr56",
					"textbookName": "语文七年级上",
					"searchCode": "310113VER72NR711"
				}
			],
			"userId": null,
			"files": [
				{
					"fileId": "b7d6871d521c4b69a846385bd9b637d1",
					"fileName": "20230526初中七年级语文考试.ppr",
					"fileExt": "ppr",
					"url": "http://50.xcenable.com:50000/microservice/storageservice/v1/files/download/2023/c/g/7/b7d6871d521c4b69a846385bd9b637d1.ppr",
					"md5": "c36db848bcfc5c54a13eb7dcf7da1cc8",
					"size": 74997,
					"sizeDisplay": "73.24KB",
					"fileOrder": 0
				}
			],
			"paperWorkFiles": [],
			"answerCard": null,
			"opener": null,
			"useType": "0",
			"subtitle": null,
			"examStypeinfoPO": null,
			"sumBigtopic": null
		}
	}
}
