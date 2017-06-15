$(function(){
	$('.ZX-mobil li').on({
		mouseenter:function(){
			$(this).siblings('li').removeClass('select-mobil');
			$(this).addClass('select-mobil');
//			$(this).stop().animate({
//				'transform':'translate3d(0,-5px,0)',
//				'box-shadow':'0 15px 30px rgba(0,0,0,0.1)'
//			})
		},
		mouseleave:function(){
			$(this).removeClass('select-mobil');
//			$(this).stop().animate({
//				'transform':'translate3d(0,0,0)',
//				'box-shadow':0
//			})
		}
	})
	
})
