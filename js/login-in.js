$(function(){
	
	$(".login-button").click(function(){
		
		if($(".user input").val().length == 0){
			$(".user .user-tips-bottom").show();
		}
		if($(".user input").val().length != 0 && $(".password input").val().length == 0){
			$(".password .user-tips-bottom").show();
		}
		if($(".user input").val().length != 0 && $(".password input").val().length != 0 && $(".captcha input").val().length == 0){
			$(".captcha .user-tips-bottom").show();
		}
	});
	$(".form-login input").blur(function(){
		$('.user-tips-bottom').hide()
	})
	
})