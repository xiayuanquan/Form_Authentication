//改变颜色
function changeColor(obj,color) {
	if (obj != undefined) {
        obj.bgColor = color;
    };
}


//获取HTML元素
function ele(eleID) {
	return document.getElementById(eleID);
}
function eleAll(eleID) {
	return document.all(eleID);
}

//为HTML元素动态绑定事件
function bindEvent(eventType,obj,fun) {
	obj.addEventListener(eventType,fun,false);
}


//建立validateNumber()方法进行数字验证
function validateNumber(eleID) {
	return validateRegex(eleID,/^\d+(\.\d+)?$/);
}

//建立validateDate()方法进、进行日期验证
function validateDate(eleID) {
	return validateRegex(eleID,/^\d{4}-\d{2}-\d{2}$/);
}


//建立validateSal()方法基本工资验证
function validateSal(eleID) {
	return validateRegex(eleID,/^\d{1,5}(\.\d{1,2})?$/);
}

//建立validateCom()方法基本佣金验证
function validateCom(eleID) {
	return validateRegex(eleID,/^\d{1,5}(\.\d{1,2})?$/);
}


//建立validateEmpty()方法验证数据是否为空
function validateEmpty(eleID) {
	var obj = ele(eleID);//取得指定名称的对象
	if (obj != null) {
		if (obj.value == "") {  //数据验证出错
			setFailureStyle(obj);
			return false;
		}else{   //数据验证成功
			setSuccessStyle(obj);
			return true;
		}
	}
	return false;
}


//建立validateRegex()方法进行正则的验证
function validateRegex(eleID,regex) {
	var obj = ele(eleID);//取得指定名称的对象
	if (validateEmpty(eleID)) {  //有数据
		if (!regex.test(obj.value)) { //没有通过
			setFailureStyle(obj);
			return false;
		}else{ //数据验证成功
			setSuccessStyle(obj);
			return true;
		}
	}
}


//设置成功时的样式与信息提示
function setSuccessStyle(obj) {
	if (obj != null) {
		obj.className = "success";
		var spanObj = ele(obj.id + "Span");
		if (spanObj != null) { //给出了提示元素位置
			spanObj.innerHTML = "<font color='green'>√</font>";
		}
	}	
}

//设置失败时的样式与信息提示
function setFailureStyle(obj) {
	if (obj != null) {
		obj.className = "failure";
		var spanObj = ele(obj.id + "Span");
		if (spanObj != null) { //给出了提示元素位置
			spanObj.innerHTML = "<font color='red'>×</font>";
		}
	}	
}
