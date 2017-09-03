;$(function(){
	
	function Init()
	{
		$("div.sixdayItemImgDay1").css('backgroundPosition','-72px 0px');
	}

	Init();


	$("div.sixdayItem").hover(function(){
		//$(this).find('.sixdayItemImgCon').css('backgroundPosition','-72px 0px');
	},function(){		
	});

	$("div.sixdayItem").click(function(){
		var that = this;
		var index = $(this).index();
		$("div.sixdayItemImgCon").each(function(index,ele,array){
			$(this).css('backgroundPosition','0px 0px');
		});

		$("div.hidetraingleD").each(function(){ $(this).removeClass('hidetraingleDhover');});
		var nowObj = $("div.sixdayItem:eq("+index+")");
		$("div.sixdayItemImgDay"+(index+1)).css('backgroundPosition','-72px 0px');
		$(nowObj).addClass('sixdayItemhover').siblings().removeClass('sixdayItemhover');
		$("div.dayShowCon:eq("+index+")").removeClass('hidenDiv').siblings().addClass('hidenDiv');
		$("div.hidetraingleD:eq("+index+")").addClass('hidetraingleDhover');
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
		 $("#videoshopBefore").html(initConfig[videoEleIndex].beforeText);
		 $("#videoshopAfter").html(initConfig[videoEleIndex].afterText);

	});

	$("#nextBtn").click(function(){

		 videoEleIndex = (videoEleIndex+1)%initConfig.length;

		 $("#videoEleContainer").html(initConfig[videoEleIndex].videoHTML);
		 $("#videoShopName").html(initConfig[videoEleIndex].shopName);
		 $("#videoshopType").html(initConfig[videoEleIndex].shopType);
		 $("#videoshopBefore").html(initConfig[videoEleIndex].beforeText);
		 $("#videoshopAfter").html(initConfig[videoEleIndex].afterText);

	});


	var videoEleIndex = 0;

	/*视频播放*/
	var initConfig = [
		{
			shopName:'酷孩旗舰店',
			shopType:'3C数码',
			beforeText:'没有运营思路，不知从何下手。',
			afterText:'店铺运营思路清晰化，能找准问题关键。  精细化数据分析及运营；团队实行绩效管理，员工职责明确化。',
			videoHTML:'<embed src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/51837381.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'幂思内衣旗舰店',
			shopType:'内衣内裤',
			beforeText:'运营知识不成体系，混乱，没节奏。',
			afterText:'店铺运营思路清晰，运营节奏把控并得到开拓;爆款打造能力提升;淘客和直通车做基础销量能力提升。',
			videoHTML:'<embed src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/51834337.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'鸿星母婴官方店',
			shopType:'母婴',
			beforeText:'有公司品牌和商品，但没有运营方向，跟不上运营节奏，整个团队都很累。',
			afterText:'团队管理方面，优化人员结构；运营思路连贯性，找到了切入点；数据化分析及运营。',
			videoHTML:'<embed src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/50004094147.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'露行者旗舰店',
			shopType:'户外烧烤架',
			beforeText:'2015年开始做淘宝时，连什么是UV,什么是直通车都不懂。',
			afterText:'以市场的数据做店铺视觉思维逻辑；推广以盈利为导向做预算；店铺规划、运营思路、营销策略做更深入时间节点把控；团队所有人实行KPI考核：询单转化率提高了30%。',
			videoHTML:'<embed src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/51837381.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		},
		{
			shopName:'南榕家居灯饰官方店',
			shopType:'灯饰灯具',
			beforeText:'主要是刷单，月销售额2万多。',
			afterText:'学后两个月达到20多万，店铺做到第五层级；电商运营体系化，店铺操作思路更加清晰，解决问题能力逐步提升。',
			videoHTML:'<embed src="http://cloud.video.taobao.com/play/u/1016142758/e/1/t/1/p/1/50004088646.swf" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>'
		}

	];
});