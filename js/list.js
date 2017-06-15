$(function() {
	float();
	$(".list a").on({
		click: function() {

			$(".list-nav li").removeClass('select-list');
			$(this).parent().addClass('select-list');
			console.log($(this).html())

			
		}
	})
	$('.list-button span').on({
		mouseenter: function() {
			$(this).addClass('select-button')
		},
		mouseleave: function() {
			$(this).removeClass('select-button')
		},
		click: function() {
			$('.list-button span').removeClass('button')
			$(this).addClass('button');
			$('.goods').eq($(this).index()).show();
			$('.goods').eq($(this).index()).siblings('.goods').hide()
		}
	});


	function float() {
		$(".goods-detail ul li").on({

			mouseenter: function() {
				$(".goods-detail ul li").removeClass('select-li');
				$(this).addClass('select-li');
			},
			mouseleave: function() {
				$(this).removeClass('select-li');
			}
		})
	}


	$.get('json/json.json',function(data){
		console.log(data);
		safari(data);
		$(".list").eq(2).find('a').toggle(
			function(){
				data=up(data,'price');
				safari(data);
			},
			function(){
				data=down(data,'price');
				safari(data);
			}
		);
		$(".list").eq(0).find('a').click(function(){
			$.get('json/json.json',function(data){
				console.log(data)
				safari(data);
			})
		});
		$(".list").eq(3).find('a').toggle(
			function(){
				data=up(data,'order');
				safari(data);
			},
			function(){
				data=down(data,'order');
				safari(data);
			}
		);
		
	});
	//升序方法
	function up(arr,key){
		return arr.sort(function(a,b){
			var x = a[key];
			var y=b[key];
			return (x<y)?-1:((x>y)?1:0 )
		})
	}
	//降序方法
	function down(arr,key){
		return arr.sort(function(a,b){
			var x = a[key];
			var y=b[key];
			return (x<y)?-1:((x>y)?1:0 )
		}).reverse();
	}
	
	function safari(data){
		for(var i = 0; i < data.length; i++) {
			var obj = data[i];
			$('.goods-detail').find('img').eq(i).attr('src', obj.src);
			$('.goods-detail').find('h4').eq(i).html(obj.name);
			$('.goods-detail').find('h5').eq(i).html('￥' + obj.price);
		}
	}
})