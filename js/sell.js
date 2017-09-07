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
	$('div.courseItem').hover(function(){
		var index = $(this).index();
		$(this).addClass('courseItemhover').siblings().removeClass('courseItemhover');
		$("div.surperCourseCon:eq("+index+")").removeClass('hidden').siblings().addClass('hidden');
	});


	//coach
	$("div.coachNewItem").hover(function(){

		var index = $(this).index();

		$(this).siblings().find('.coachTeacherHeadShadow').stop().fadeIn();
		$(this).siblings().find('.coiachTeacherHeadImg').css('border','1px solid #8f9399');		
		$(this).siblings().find('.coachNewItemIntroCon').css({'border':'1px solid #8f9399','color':'#8f9399'});
		$(this).siblings().find('.coachNewItemName').css('background-color','#8f9399');		


	},function(){

		$(this).siblings().find('.coachTeacherHeadShadow').stop().fadeOut();
		$(this).siblings().find('.coiachTeacherHeadImg').css('border','1px solid #0562fd');
		$(this).siblings().find('.coachNewItemIntroCon').css({'border':'1px solid #0562fd','color':'#0e1445'});
		$(this).siblings().find('.coachNewItemName').css('background-color','#0562fd');		
	});
});