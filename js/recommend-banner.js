$(function() {
	$(function() {

		var count = 1;

		function timerAction() {

			count++;
			move();

		};
		$('.etn').on({
			
			click: function() {
				//先判断点击的是左边还是右边
				$(this).hasClass('right') ? ++count : --count;
				console.log(count);
				move();
			},
			mouseenter: function(){
				$(this).addClass('etn-select');
			},
			mouseleave:function(){
				$(this).removeClass('etn-select');
			}
		})

		function move() {
			if(count == 6) {
				count = 1;
				$('.recommend-product ul').css({
					left: 0
				})
			} else if(count == -1) {
				count = 4;
				$('.recommend-product ul').css({
					left: -309 * 5
				})
			}

			$('.recommend-product ul').stop().animate({
				left: -309 * count,
			},200)
		}
	})
	$('.recommend-product ul li').on({
		mouseenter:function(){
			$(this).siblings('li').removeClass('select-recommend');
			$(this).addClass('select-recommend');
		},
		mouseleave:function(){
			$(this).removeClass('select-recommend');
		}
	})

})