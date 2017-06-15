
//设置cookie
function setCookie(name,value,expires){
	
	//键
	var key = encodeURIComponent(name);
	//值
	var stringValue = encodeURIComponent(value);
	
	var cookieText = key + '=' + stringValue;
	
	//判断是否为日期类型的对象
	if(expires instanceof Date){
		
		cookieText += ';expires=' + expires; 
	}
	
	//保存到cookie当中
	document.cookie = cookieText;
	
	//输出保存的结果
	return decodeURIComponent(document.cookie);
}


//获取cookie
function getCookie(name){
	
	//第一步，吧；和空格看成一个整体
	var arr1 = decodeURIComponent(document.cookie).split('; ');
	for(var i = 0; i < arr1.length;i++){
		//再分割一次
		var tempString = arr1[i];
		var arr2 = tempString.split('=');
		
		if(name == arr2[0]){
			//返回这个键所对应的值
			return arr2[1];
		}
	}
	
	//没找到就返回一个空串
	return '';
	
}

//删除cookie
function removeCookie(name){
	
	//设置超时时间为当前时间
	var date = new Date();
	
	document.cookie = encodeURIComponent(name) + '=;expires=' + date;
	
}
