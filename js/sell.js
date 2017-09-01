;
$(function(){
	
	/*课程表*/
	$("li.gainPlanTimeLineLi").hover(function(){
		var index = $(this).index();
		$("ul.gpTimeLineUl").removeClass('gptlul1').removeClass('gptlul2').removeClass('gptlul3').removeClass('gptlul4');
		$("ul.gpTimeLineUl").addClass('gptlul'+(index+1));
		$("li.gpTimeLineLi:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});	

	$("div.viewItemTop").hover(function(){
		var index = $(this).index();
		$(".viewShowImg:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});

	$("div.viewItemBottom").hover(function(){
		var index = $(this).index()+4;
		$(".viewShowImg:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});

	/*切换大咖*/
	$(".dakateacherItem").hover(function(){
		var index = $(this).index();
		$("table.dakaIntroTable:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});

	/*切换超级课程*/
	$('div.courseItem').click(function(){
		var index = $(this).index();
		$(this).addClass('courseItemhover').siblings().removeClass('courseItemhover');
		$("div.surperCourseCon:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});
});