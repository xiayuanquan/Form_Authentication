window.onload = function(){

	//1、为表格的行增加动态效果
	var trObj = eleAll("empTr");
	for (var i = 0; i < trObj.length; i++) {
		bindEvent("mouseover",trObj[i],function(){
			changeColor(this,'FFFFFF');
		});
		bindEvent("mouseout",trObj[i],function(){
			changeColor(this,'F2F2F2');
		});
	}

	//2、设置验证事件
	bindEvent("blur",ele("empNo"),function(){
		validateEmpNo();
	});
	bindEvent("blur",ele("empName"),function(){
		validateEmpName();
	});
	bindEvent("blur",ele("empJob"),function(){
		validateEmpJob();
	});
	bindEvent("blur",ele("empDate"),function(){
		validateEmpDate();
	});
	bindEvent("blur",ele("empSal"),function(){
		validateEmpSal();
	});
	bindEvent("blur",ele("empCom"),function(){
		validateEmpCom();
	});

	//3、处理表单的绑定
	bindEvent("submit",ele("empForm"),function(e){
		if (validateForm()) {
			this.submit(); //提交表单
		}else{
			if(e && e.preventDefault){ //现在是在W3C标准下执行
				e.preventDefault(); //阻止浏览器的执行
			}else{ //专门针对于IE浏览器的处理
				window.event.returValue = false;
			}
		}
	});
}

//验证雇员编号
function validateEmpNo(){
	return validateRegex("empNo",/^\d{4}$/);
}

//验证雇员姓名
function validateEmpName(){
	return validateEmpty("empName");
}

//验证雇员职位
function validateEmpJob(){
	return validateEmpty("empJob");
}

//验证雇佣日期
function validateEmpDate(){
	return validateDate("empDate");
}

//验证基本工资
function validateEmpSal(){
	return validateSal("empSal");
}

//验证佣金
function validateEmpCom(){
	return validateCom("empCom");
}

//表单事件
function validateForm(){
	return validateEmpNo() && validateEmpName() && validateEmpJob() && validateEmpDate() && validateEmpSal() && validateEmpCom();
}