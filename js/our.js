;$(function(){
	
	$("div.CoachItem").hover(function(){
		//$(this).find('div.coachItemHoverBlack').addClass('hidden');
		$(this).siblings().find('div.coachItemHoverBlack').stop().fadeIn(200);//.removeClass('hidden');
	},function(){
		$(this).siblings().find('div.coachItemHoverBlack').stop().fadeOut(200);//.addClass('hidden');
	});


	$("a.brandItemImg").click(function(){

		var elestr = $(this).attr('data-href');

		var innerStr = '<embed src="'+ elestr+'" quality="high" width="100%" height="100%" align="middle" allowScriptAccess="never" allowFullScreen="true" type="application/x-shockwave-flash"></embed>';

		$("#videoShadow").show();
		$("#vidoeShowContainer").show();
		$("#videoEleContainer").html(innerStr);
	});

	//关闭
	$("#closeVideo").click(function(){
		$("#videoShadow").hide();
		$("#vidoeShowContainer").hide();
		$("#videoEleContainer").html('');
	});


	$("img.fgic1l").click(function(){

		var imgEle = $(this).parent().parent().find("img.boxImgItem");

		var containObj = $(this).parent().parent().find("div.boxContainer");
		for(var i=0; i<3; i++)
		{
			$(containObj).append($(imgEle[i]).clone());
		}

		var now = parseInt($(containObj).css('margin-left'));
		now = now - (197+8)*3;
		$(containObj).animate({'marginLeft':now+'px'},200);
		for(var i=0; i<3; i++)
		{
			$(imgEle[i]).remove();
		}

		setTimeout(reset,200,containObj);
	});

	$("img.fgic1r").click(function(){

		var containObj = $(this).parent().parent().find("div.boxContainer");
		
		$(containObj).stop().css('margin-left', ( -(197+8)*3 ) + 'px');

		var imgEle = $(this).parent().parent().find("img.boxImgItem");

		for(var i=6; i>=3; i--)
		{
			$(containObj).prepend($(imgEle[i]).clone());
		}

		var now = parseInt($(containObj).css('margin-left'));
		$(containObj).animate({'marginLeft': '0px'},200);

		for(var i=6; i>=3; i--)
		{
			$(imgEle[i]).remove();
		}
	});

	function reset(obj)
	{
		$(obj).stop().css('margin-left','0px');
	}

	//五项
	// $("div.foregoerItemCon").hover(function(){
	// 		var index = $(this).index();
	// 		var eleArray = $("div.foregoerItemCon");

	// 		$('a.foregoerABtn').each(function(){
	// 			for( var i=1; i<=5; i++)
	// 			{
	// 				$(this).removeClass('foregoerABtn'+(i)+'hover');
	// 			}
	// 		});
	// 		$(this).find('a.foregoerABtn').addClass('foregoerABtn'+(index+1)+'hover');

	// },function(){

	// 	// var eleArray = $("div.foregoerItemCon");
	// 	// for( var i=0; i<eleArray.length; i++)
	// 	// {
	// 	// 	$(eleArray[i]).find('a.foregoerABtn').addClass('foregoerABtn'+(i+1)+'hover');
	// 	// }
	// });
});