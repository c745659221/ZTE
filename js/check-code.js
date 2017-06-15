$(function(){
	checkCode();
	function checkCode(){
		var count = parseInt(Math.random()*23 +1);
		$('.code-img img').removeAttr('src');
		$('.code-img').append('<img src="img/check-img/check (' + count + ').jpg"/>')
	};
	$('.click-button').on({
		click:function(){
//		$(this).css("outline","none")
		checkCode();
			return false;
		
		
			
		}
	})
})