;$(function(){

	$("div.fuhauDayListItem").hover(function(){

		var index = $(this).index();
		var arrayEle = $("div.fuhauDayListItem");

		for( var i=0; i<arrayEle.length; i++){
			$(arrayEle[i]).removeClass('fhdli'+(i+1)+'hover');
		}
		$(this).addClass('fhdli'+(index+1)+'hover');

		$("div.fuhuaDayContentItem:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});	

	/*教练切换*/
	$("div.coachlittleItem").hover(function(){

		var index = $(this).index();
		$("div.coachlittleItem").each(function(){
			$(this).find("img.coachLittleItemImg").removeClass('hidden').siblings().addClass('hidden');
		});
		$(this).find("img.coachLittleItemImgHover").removeClass('hidden').siblings().addClass('hidden');
		$("div.coachShowItem:eq("+index+")").removeClass('hidden').siblings().addClass('hidden')

	});

	$("#preBtn").click(function(){
		 
		 if( videoEleIndex == 0 )
		 {
		 	videoEleIndex = initConfig.length;
		 }

		 videoEleIndex--;

		 $("#videoEleContainer").html(initConfig[videoEleIndex].videoHTML);
		 $("#videoShopName").html(initConfig[videoEleIndex].shopName);
		 $("#videoshopType").html(initConfig[videoEleIndex].shopType);		 
		 $("#videoshopAfter").html(initConfig[videoEleIndex].afterText);

	});

	$("#nextBtn").click(function(){

		 videoEleIndex = (videoEleIndex+1)%initConfig.length;

		 $("#videoEleContainer").html(initConfig[videoEleIndex].videoHTML);
		 $("#videoShopName").html(initConfig[videoEleIndex].shopName);
		 $("#videoshopType").html(initConfig[videoEleIndex].shopType);
		 $("#videoshopAfter").html(initConfig[videoEleIndex].afterText);

	});


	var videoEleIndex = 0;

	/*视频播放*/
	var initConfig = [
		{
			shopName:'又壹点企业店',
			shopType:'厨房/餐饮用具',
			afterText:'让我们看清了整个行业，通过数据分析，能够把店铺问题完完全全的呈现。',
			videoHTML:'<embed play="false"  flashvars="autoplay=false&play=false" src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/34145542.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'三木贝贝亲子装店',
			shopType:'服装',
			afterText:'听完课程之后意识到自己团队存在的问题，增加与同事的沟通。同时，对于品牌的定位、产品规划也更加的明确。',
			videoHTML:'<embed play="false"  flashvars="autoplay=false&play=false" src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/61416493.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'俪彩时装',
			shopType:'服装',
			afterText:'听了课对整个行业，对竞争对手、市场环境有了一个全面的了解。作为一个电商人，只有不断学习才能顺应发展',
			videoHTML:'<embed play="false"  flashvars="autoplay=false&play=false" src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/61410539.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		
		{
			shopName:'陶趣居（极有家店铺）',
			shopType:'餐饮用具',
			afterText:'店铺的流量进入前3，转化率提高了50%。',
			videoHTML:'<embed play="false"  flashvars="autoplay=false&play=false" src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/34140686.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'友来福旗舰店',
			shopType:'餐饮用具',
			afterText:'1、店铺运营思路清晰化；2、市场分析，结合行情进行产品规划；3、团队管理能力提升，制定绩效，提升工作效率。',
			videoHTML:'<embed play="false"  flashvars="autoplay=false&play=false" src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/51674582.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		}

	];
});