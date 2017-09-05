;$(function(){
	
	var hrefStr = window.location.href;

	var pos = hrefStr.indexOf('?');
	if( pos > -1 )
	{
		pos+=1;
		var index = parseInt( hrefStr.substr(pos)) - 1;
		$("a.TopABtn:eq("+index+")").addClass('aTtopABtnhover');
	}

	$('.gotoKefuBtn').click(function(){
		window.open('http://www10.53kf.com/webCompany.php?arg=10097681&style=1','_blank');
	});

	 $("#GoToTop").click(function () {
        $('html,body').animate({ scrollTop: '0px' }, 400);
    });

    $("#GoToBottom").click(function () {
        $('html,body').animate({ scrollTop: $('.main-footer').offset().top }, 800);
    });

    //返回
    $("button.backBtn").click(function () {
       window.location.href = $("#backUrl").attr('href').toString();
    });
});