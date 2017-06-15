$(function() {
var isClick = false;
	$('.enlarge-glass,show').on({
		mousemove: function(e) {
			$('.show').show();
			$('.main-box .small-box').show().css({
				left: function() {
					var left = e.pageX - $(this).parent().offset().left - 100;
					if(left < 0) {
						left = 0;
					} else if(left > $(this).parent().width() - 200) {
						left = $(this).parent().width() - 200;
					}
					console.log(left);
					var scale = $(this).width() / $('.show').width();
					console.log(scale);
					$('.show').css('background-position-x', -left / scale);
					return left;

				},

				top: function() {
					var top = e.pageY - $(this).parent().offset().top - 100;
					if(top < 0) {
						top = 0;
					} else if(top > $(this).parent().height() - 200) {
						top = $(this).parent().height() - 200;
					}
					console.log(top);
					//现求出比例
					var scale = $(this).height() / $('.show').height();
					//利用比例求出大图的坐标值
					$('.show').css('background-position-y', -top / scale);
					return top;

				}
			});
		},
		mouseleave: function() {
			$('.show').hide();
			$('.small-box').hide();
		}
	})
	
	var count = 2;

		function timerAction() {

			count++;
			move();

		};
		$('.slid').on({
			
			click: function() {
				if(isClick){
					return;
				}
				//先判断点击的是左边还是右边
				isClick = true;
				$(this).hasClass('slid-right') ? ++count : --count;
				console.log(count);
				move();
			},
		})

		function move() {
			if(count == 7) {
				count = 1;
				$('.small-banner ul').css({
					left: 0
				})
			} else if(count == 0) {
				count = 6;
				$('.small-banner ul').css({
					left: -86 * 7
				})
			}

			$('.small-banner ul').stop(true).animate({
				left: -86 * count,
			},200,function(){
				isClick = false;
			})
		}
//	$('.small-banner ul .main-box').css('background-image','url('+ $('.first-pic').eq(0).find('img').attr('src') +')')
//	$('.small-banner ul .show').css('background-image','url('+ $('.first-pic').eq(0).find('img').attr('src') +')')
//	$(".main-box").css('background-img','url(' + $('.first-pic').attr('src') + ') no-repeat');
//	$(".show").css('background-img','url(' + $('.first-pic').attr('src') + ') no-repeat');
	$(".small-banner ul li").on({
		click:function(){
			$(".small-banner ul li").removeClass('select-slid');
			$(this).addClass('select-slid');
			$('.main-box').css('background-image','url('+ $(this).find('img').attr('src') +')')
			
			console.log('url(../'+ $(this).find('img').attr('src') +')');
			$('.show').css('background-image','url('+ $(this).find('img').attr('src') +')')
//			$('.main-box').get(0).style.backgroundImage = 'url(img/show03.jpg)';
			
		},
	})
	$('.versions ul li a').on({
		click:function(){
			$('.versions ul li a').removeClass('select-a');
			$(this).addClass('select-a');
			$('.last-title').html($(".goods-detile-block h3").html() + $(".product-color .select-a").html()  + '/全网通/'+ $(this).html())
			$(".goods-detile-block h4").html($(".select-a").html() + '/全网通/' + $(this).html() );
			console.log($(".select-a").html());
			if($(this).html() == '4GB+64GB'){
				$('.goods-detile-block h2').html('￥<span>3099.0</span>');
				
			}else if($(this).html() == '4GB+128GB'){
				$('.goods-detile-block h2').html('￥<span>3299.0</span>');
				
			}else {
				$('.goods-detile-block h2').html('￥<span>4099.0</span>');
				
			}
		}
	})
	$('.product-color ul li a').on({
		click:function(){
			$('.product-color ul li a').removeClass('select-a');
			$(this).addClass('select-a');
			$(".goods-detile-block h4").html($(this).html() + '/全网通/' + $('.versions .select-a').html() );
			$('.last-title').html($(".goods-detile-block h3").html() + $(this).html()  + '/全网通/'+ $('.versions .select-a').html())
			$('.versions ul').eq($(this).parent('li').index()).show();
			$('.versions ul').eq($(this).parent('li').index()).siblings('ul').hide();
			$(".small-banner ul").eq($(this).parent('li').index()).show();
			$(".small-banner ul").eq($(this).parent('li').index()).siblings('ul').hide();
			
//			$('.small-banner ul .main-box').css('background-image','url('+ $('.first-pic').eq($(this).parent('li').index()).find('img').attr('src') +')')
//			$('.small-banner ul .show').css('background-image','url('+ $('.first-pic').eq($(this).parent('li').index()).find('img').attr('src') +')')
		}
	});
//	$(".product-color ul li a").eq(1).click(function(){
//		$(".small-banner ul .first-pic").attr('src','img/grey-mobil.jpg');
//		
//	})
//	
	
	$('.combo-parts li').on({
		click:function(){
			
			if($(this).hasClass('select-parts')){
				$(this).removeClass('select-parts');
				$('.show-img').hide();
			}else {
				$('.combo-parts li').removeClass('select-parts');
				$(this).addClass('select-parts');
				$('.show-img').show();
				$('.show-img ul li').eq($(this).index()).show();
				$('.show-img ul li').eq($(this).index()).siblings('li').hide();
			}
		}
	});
	$(".show-img ul li span img ").on({
		mouseenter:function(){
			$(this).css('border-color','#000')
		},
		mouseleave:function(){
			$(this).css('border-color','#ccc')
		},
		click:function(){
			$(this).css('border-color','#000')
		},
	});
	$(".saoma").on({
		mouseenter:function(){
			$('.erweima').stop().slideToggle('slow');		
		},
		mouseleave:function(){
			$('.erweima').stop().slideToggle('slow');
			
		}
		
	});
	
	$(".nav-minus li").on({
		click:function(){
			$(".nav-minus li").removeClass('select-minus')
			$(this).addClass('select-minus')
		}
		
	});
	
	$('.detail-banner ul li a').on({
		click:function(){
			$(".detail-banner ul li a").removeClass('select-detail');
			$(this).addClass('select-detail');
			
			$(".detail-p").eq($(this).parent().index()).fadeIn();
			$(".detail-p").eq($(this).parent().index()).siblings('.detail-p').fadeOut();
			console.log($(this).parent().index());
		}
	});
	var i = 1 ;
	$('.add button').on({
		click:function(){
			$(this).hasClass('plus') ? ++i : --i;
			$('.add span').html(i);
			if($('.add span').html() <= 1 ){
				$('.add span').html(1);
				i=1;
			}
		}
		
	});
	
	//购物车cookie的保存
	
	$(".add-carts a").click(function(){
		var mobil1 = {
			'Url':$('.first-pic img').attr('src'),
			'title1':$(".goods-detile-block h3").html(),
			'title':$(".goods-detile-block h4").html(),
			'price':$('.goods-detile-block h2 span').html(),
			'Number':parseInt($(".add span").html()) + parseInt($(".small-data").html()),
		}
		var arr = [mobil1];
		var obj = JSON.stringify(arr);
		console.log(obj);
		$.cookie('name',obj,{expires:7});
		var array = JSON.parse($.cookie('name'))[0];
		$(".small-data").html(array.Number)
		$(".small-data").show();
//		if($.cookie('name')){
//			//cookie中数量的叠加
//			var array = JSON.parse($.cookie('name'))[0];
//			$(".small-data").html(array.Number)
//			$(".small-data").show();
//			if($(".small-data").html() == 0){
//				$(".small-data").hide();
//			}
//		}
	});
	
})