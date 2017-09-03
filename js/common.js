;$(function(){
	
	var hrefStr = window.location.href;

	var pos = hrefStr.indexOf('?');
	if( pos > -1 )
	{
		pos+=1;
		var index = parseInt( hrefStr.substr(pos)) - 1;
		$("a.TopABtn:eq("+index+")").addClass('aTtopABtnhover');

	}
});