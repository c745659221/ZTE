$(function(){
	$(".favorable").on({
		mouseenter:function(){
			$(".favorable img").attr('src','img/shouqi.png');
		},
		mouseleave:function(){
			$(".favorable img").attr('src','img/zhankai.png');
		}
	});
	
	
	//判断
	console.log($.cookie('name'));
	if($.cookie('name')){
		$(".container").show();
		$('.empty-carts').hide();
		$('#wrap-nav').hide();
	}else{
		$(".container").hide();
		$('.empty-carts').show();
		$('#wrap-nav').show();
	}
	
	//购物车获取cookie
	//创建属性节点
	console.log($.cookie('name'));
	var arr = JSON.parse($.cookie('name'))[0]
	console.log(arr)
	createdElemen();
	
	function createdElemen(){
		$("<li></li>").appendTo($('.carts-item ul')).addClass('cart-f');
		$("<ul></ul>").appendTo($('.cart-f:last')).addClass('good');
		//添加第一个li，单选框
		$('<li></li>').appendTo($('.good:last')).addClass('check');
		$('<input type="checkbox" name="checkbox" id="" value="" checked=""/>').appendTo($('.check:last'));
		//添加第二个li，手机的简称
		$('<li></li>').appendTo($('.good:last')).addClass('product-name');
		$("<div></div>").appendTo($('.product-name:last')).addClass('pro-pic');
		$('<img/>').attr('src',arr.Url).appendTo($('.pro-pic:last'));
		$("<div></div>").appendTo($('.product-name:last')).addClass('pro-simple');
		$("<h4></h4>").appendTo($('.pro-simple:last'));
		$("<a href =''></a>").appendTo($('.pro-simple h4:last')).html(arr.title1);
		$("<h5></h5>").appendTo($('.pro-simple:last')).html(arr.title);
		//添加第三个li，单价
		$('<li>￥</li>').appendTo($('.good:last')).addClass('total');
		$('<span></span>').appendTo($('.total:last')).html(arr.price);
		//添加第四个li,增加和减少数量的按钮
		$('<li></li>').appendTo($('.good:last')).addClass('amount data');
		$('<button class="reduce" type="">-</button>').appendTo($('.amount:last'));
		$("<span class='number'></span>").appendTo($('.amount:last')).html(arr.Number);
		$("<button class='plus'>+</button>").appendTo($('.amount:last'));
		//第五个li，总价
		$('<li>￥<span></span></li>').appendTo($('.good:last')).addClass('subtotal sub');
		$(".sub:last span").html(arr.Number*arr.price);
		//第六个li，删除
		$("<li><a href='javascript:;'>删除</a></li>").appendTo($('.good:last')).addClass('handel');
		//遍历求总价
			var sum = 0;
			for(var i=1;i<$('.total span').length;i++){
				var cont = parseInt($('.total span').eq(i).html())*parseInt($('.number').eq(i).html())
				
				sum += cont;
				console.log(sum);
			}
			$(".text-price").html('￥' + sum + '.0' );
			//遍历求总数量
			var sumb = 0;
			for(var i=1;i<$('.number').length;i++){
				var cont = parseInt($('.number').eq(i).html())
				
				sumb += cont;
				console.log(sumb);
			}
			total();
	}
	
	//全选和取消全选的效果
	$(".all-select input").click(function(){
		
		if($(this).attr("checked")){
			$(".all-select input").prop("checked",true);
			$(".check input").prop("checked",true);
			$(".option").show();
			$('.total-acount').hide();
			$(".all-price").css('opacity',1);
			//调用求总价的方法
			total();
					
		}else{
			$(".all-select input").prop("checked",false);
			$(".check input").prop("checked",false)
			$(".option").hide();
			$('.total-acount').show();
			$(".all-price").css('opacity',0.7);
			$(".text-price").html('￥0.0' );
			$(".text-numb").html('0');
		}
		
	});
	
	//购物车加减效果
	$(".amount button").on({
		click:function(){
			var count = $(this).siblings('.number').html();
			$(this).hasClass('plus') ? ++count :--count;
//			console.log(count)
			$('.number').html(count);
			if($('.number').html() <=1){
				$('.number').html(1)
				count = 1;
			};
			$(".sub").each(function(index,value){
				var numb1 = parseInt($(value).siblings('.total').children().html());
				var numb2 = parseInt($(value).siblings('.data').find('span').html());
				$(value).html('￥'+ (numb1*numb2) + '.0');
			})
			total();
		}
	})
	
	function total(){
		//遍历求总价
		var sum = 0;
		for(var i=1;i<$('.total span').length;i++){
			var cont = parseInt($('.total span').eq(i).html())*parseInt($('.number').eq(i).html())
			
			sum += cont;
			console.log(sum);
		}
		$(".text-price").html('￥' + sum + '.0' );
		//遍历求总数量
		var sumb = 0;
		for(var i=1;i<$('.number').length;i++){
			var cont = parseInt($('.number').eq(i).html())
			
			sumb += cont;
			console.log(sumb);
		}
		$(".text-numb").html(sumb);
	}
	$(".handel a").on({
		click:function(){
			confirm('你确认要删除么？');
			$.removeCookie('name');
			$(this).parents('li').remove();
		}
	})
	$(".delete-select a").on({
		click:function(){
			confirm('你确认要删除全部么？');
			$(".check").prop('checked',function(){
				$(this).parents('li').remove();
			})
		}
	});
	if($.cookie('name')){
		//cookie中数量的叠加
		console.log(JSON.parse($.cookie('name')));
		var array = JSON.parse($.cookie('name'))[0];
		
		$(".small-data").html(array.Number)
		console.log(array.Number);
		$(".small-data").show();
		if($(".small-data").html() == 0){
			$(".small-data").hide();
		}
	}
})