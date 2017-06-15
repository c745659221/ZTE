$(function() {

	var count = 1;

	function timerAction() {

		count++;
		move();

	};
	var timer = setInterval(timerAction, 4000);
	$('.control-left').on({
		mouseenter: function() {
			$(this).css({
				opacity: 0.9,
			})
		},
		mouseleave: function() {
			$(this).css({
				opacity: 0.5,
			})
		},
		click: function() {
			//先判断点击的是左边还是右边
			$(this).hasClass('right') ? ++count : --count;
			console.log(count);
			move();
		}
	})

	$('.bottom-item li').on({
		click: function() {

			count = $(this).index('.bottom-item li') + 1;
			move();
		}
	});

	function move() {
		if(count == 7) {
			count = 1;
			$('.banner-img').css({
				left: 0
			})
		} else if(count == 0) {
			count = 6;
			$('.banner-img').css({
				left: -1905 * 7
			})
		}

		$('.bottom-item li').removeClass();
		$('.bottom-item li').eq(count - 1).addClass('select-bottom-item');

		$('.banner-img').stop().animate({
			left: -1905 * count,
		}, 700)
	}

	$('.nav-banner').on({
		mouseenter: function() {
			clearInterval(timer);
		},
		mouseleave: function() {

			timer = setInterval(timerAction, 4000)
		}
	})
})