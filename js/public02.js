$(function() {

	//	header的JS效果
	$('.header a,.footer-bottom ul a').on({
		mouseenter: function() {
		$(this).css('color', '#000')
	},
	mouseleave: function() {
		$(this).css('color', '#787878')

	}
})
		//小型购物车
	$('.shopping-cart').on({
		mouseenter: function() {
			$(this).css({
				'border-bottom': 0,
				'background-color': '#fff',
				'color': '#000',
			})
			$('.cart-bottom').show().css('border-top', 0).on({
				mouseenter: function() {
					$('.cart-bottom').show();
					$('.shopping-cart').css({
						'border-bottom': 0,
						'background-color': '#fff',
						'color': '#000',
					})
				}
			});
		},
		mouseleave: function() {

			$(this).css({
				'border-bottom': '1px solid #EDEDED',
				'background-color': '#F9C81D',
				'color': '#787878',
			})
			$('.cart-bottom').hide();
		}
	})
	$('.cart-bottom').on({
		mouseleave: function() {

			$(this).hide()

			$('.shopping-cart').css({
				'border-bottom': '1px solid #EDEDED',
				'background-color': '#F9C81D',
				'color': '#787878',
			})
		}
	});
	//导航
	$('.small-title,.news-block a').on({
		mouseenter: function() {
			$(this).css('color', 'orange')
		},
		mouseleave: function() {
			$(this).css('color', '#fff')
		}

	});
	$('.nav-product').on({
		mouseenter: function() {
			$('.nav-second').eq($(this).index('.nav-product')).show();
//			$(this).index()
		},
		mouseleave: function() {
			$('.nav-second').eq($(this).index('.nav-product')).hide();
//			$('.nav-second').eq($(this).index('.nav-product')).on({
//				mouseenter: function() {
//					$('.second-detail li').on({
//						mouseenter:function(){
//							$(this).css({
//								'margin-top':-8
//							})
//						}
//					})
//					
//				},
//				mouseleave: function() {
//
//					
//				}
//			}).hide()
		}
	});
	$('.second-detail li').on({
		mouseenter:function(){
			$(this).siblings('li').removeClass('select-detil');
			$(this).addClass('select-detil')
		}
	})
	$('.second-detail li').on({
		mouseleave:function(){
		$(this).removeClass('select-detil')
		}
	})
	$('.nav-all').on({
		mouseenter:function(){
			$('.nav-fl').show()
		},
		mouseleave:function(){
			$('.nav-fl').hide();
		}
		
	})
	$('.nav-all-second').on({
		mouseenter: function() {
			$(this).css({
				'background-color': '#fff',
			})
			$('.more-goods').eq($(this).index('.nav-all-second')).show();
		},
		mouseleave: function() {
			$(this).css({
				'background-color': '#adeaff',
			});
			$('.more-goods').eq($(this).index('.nav-all-second')).hide();
		}
	})
	$('.more-goods a').on({
		mouseenter: function() {
			$(this).css('color', 'orange')
		},
		mouseleave: function() {
			$(this).css('color', '#999')
		}

	});
	//广播道的轮播
	$(function() {

			var count = 0;

			function timerAction() {

				count++;
				move();

			};
			var timer = setInterval(timerAction, 4000);

			function move() {
				if(count == 3) {
					count = 0;
					$('.news-block ul').css({
						top: 0,
					})
				}

				$('.news-block ul').stop().animate({
					top: -24 * count,
				}, 1000)

			}
			console.log(top)
			$('.news-block ul').on({
				mouseenter: function() {
					clearInterval(timer);
				},
				mouseleave: function() {
					timer = setInterval(timerAction, 4000)
				}
			})
		})
		//footer
	$('.help-list a').on({
		mouseenter: function() {
			$(this).css('color', 'orange')
		},
		mouseleave: function() {
			$(this).css('color', '#767676')
		}

	});

	//侧边栏的动态效果

	$('.toolbar a').on({
		mouseenter: function() {
			$(this).stop().animate({
				"background-position-y": -61,
			}, 800);
			$('.toolbar a span').eq($(this).index()).stop().toggle(800);
		},
		mouseleave: function() {
			$(this).stop().animate({
				"background-position-y": 0,
			}, 800)
			$('.toolbar a span').eq($(this).index()).stop().toggle(500);
		}
	})
	if($.cookie('name')){
		//cookie中数量的叠加
		var array = JSON.parse($.cookie('name'))[0];
		$(".small-data").html(array.Number)
		console.log(array.Number);
		$(".small-data").show();
		if($(".small-data").html() == 0){
			$(".small-data").hide();
		}
	}
})