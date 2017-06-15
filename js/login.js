$(function() {

	$('.user input').focus(function() {
		$(this).css({
			'outline': 'none',
			'border-color': '#A94442'
		})
		$('.user-tips-left').hide();
	}).blur(function() {
		$('.user-tips-bottom').hide();
		if($(this).val().length == 0) {
			$('.user-tips-left').show();
			$(this).css({
				'border-color': '#A94442'
			});
		} else if(!(/^[1-3]\d{10}$/ || /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/).test($('.user input').val())) {
			$('.user-tips-left').show().css('margin-right',-70);
			$('.tips-left').html('仅支持手机号/邮箱注册'),
			$(this).css({
				'border-color': '#A94442',
			});
		} else {
			$(this).css({
				'border-color': 'green'
			});
			$('.code').hide();
			$('.get-code').show();
		}
	})
	$('.get-code').on({
		click: function() {
			if($('.user input').val().length == 0) {
				$('.user-tips-left').show();
				$('.user input').css({
					'border-color': '#A94442'
				});
				$('.tips-password').show();
				$('.login-bottom').css('background-color', '#F2DEDE');
			}
			var timer = setTimeout(function() {
				$('.tips-password').hide();
				$('.login-bottom').css('background', 'none');
			}, 2000)
		}
	})
	$('.login-button ').on({
		click: function() {
			if($('.password input,.password-again input').val().length < 6 && $('.password input,.password-again input').val().length > 0) {
				$('.tips-password').show();
				$('.login-bottom').css('background-color', '#F2DEDE');
			} else if($('.password input,.password-again input').val().length == 0) {
				$('.tips-password').hide();
				$('.user-tips-right').show();
			}
			if($('.user input').val().length == 0) {
				$('.user .user-tips-bottom').show();
				$('.user input').css({
					'border-color': '#A94442'
				});
			}
			if($('.user input').val().length != 0 && $('.password input').val().length == 0) {
				$('.password .user-tips-bottom').show();
				$('.user input').css({
					'border-color': '#A94442'
				});
			}else if($('.user input').val().length != 0 && $('.password input').val().length != 0 && $('.password-again input').val().length == 0) {
				$('.password-again .user-tips-bottom').show();
				$('.user input').css({
					'border-color': '#A94442'
				});
			};
		}
	});
	
	$(".password input,.password-again input").focus(function(){
		if($(window).keydown()){
			$('.password .user-tips-bottom').hide();
			$('.password-again .user-tips-bottom').hide();
		}
	})
	var timer = setTimeout(function() {
		$('.tips-password').hide();
		$('.login-bottom').css('background', 'none');
	}, 2000)
})