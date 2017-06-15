$(function(){
	
	$('.buy-product a').on({
		mouseenter: function() {
			$(this).css('background', '#FC6822')
		},
		mouseleave:function(){
			$(this).css('background', '#FF3B3C')
		}
	});
	$('.product-more a').on({
		mouseenter: function() {
			$(this).css('color', '#FC6628')
		},
		mouseleave: function() {
			$(this).css('color', '#767676')
		}

	});
	$('.fitting-nav li').on({
		mouseenter: function() {
			$('.fitting-nav li').removeClass();
			$(this).addClass('fitting-select');
			$('.ZX-fitting ul').eq($(this).index()).show();
			$('.ZX-fitting ul').eq($(this).index()).siblings().hide();
		},
	});
	
})