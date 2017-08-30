;$(function(){
	
	function Init()
	{
		$("div.sixdayItemImgDay1").css('backgroundPosition','-72px 0px');
	}

	Init();

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
});