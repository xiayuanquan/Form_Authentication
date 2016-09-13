Form_Authentication
JavaScript：综合案例--表单验证
=========================

开发要求:
--------

### 要求定义一个雇员信息的增加页面，例如页面名称为"emp_add.htmnl",而后在此页面中要提供有输入表单，此表单定义要求如下: 

    雇员编号：必须是4位数字，按照正则进行验证；
    雇员姓名：不能为空；
    雇员职位：不能为空；
    雇员日期：按照"yyyy-mm-dd"的格式编写，按照正则进行验证；
    基本工资：按照小数编写，小数为最多2位，按照正则进行验证；
    佣金：难找小数编写，小数位数最多2位，按照正则进行验证。
　　

### 具体步骤：

第一：定义表单 

    1.将form.css文件拷贝到css目录之中；
    2.将emp_add.html页面之中编写表单，以及导入form.css文件的引用；

　　　　

第二：页面动态效果

  1.为表格增加一些显示的过渡效果

    <1>可以建立一个工具类文件util.js，难么在文件中提供有表格改变的处理函数；

    <2>既然现在是在emp_add.html文件进行处理，所以应该准备js/emp_add.js文件；

    <3>在emp_add.html文件中导入uitl.js与emp_add.js文件;

    <4>动态设置显示的效果，增加mouseover和mouseout事件，在表格行元素中增加。

 
 2.考虑到代码的可重用性问题，所以建议将具体的验证交给util.js来完成。

    <1>建立validateEmpty()、validateRegex()、validateNumber()、validateDate()；

    <2>建立完一个函数之后一定要对这个函数的可用性进行测试；

    <3>在emp_add.js文件里面动态绑定事件，使用的还是“onblur”事件;


3.分别绑定完事件处理之后，下面针对于表单进行事件的处理。


### 第三：使用日期选择组件

    对于日期的控制需要注意一个问题：正则只能够针对于日期的格式进行判断，但是无法对内容进行验证，而且日期这一操作，不应该让用户随意输入，最好的一个做法是由用户自己选择，也即使用日期组件直接选取日期，这个可以直接去网上下载将代码拷贝过来即可使用。
    例如My97DatePicker日期组件： http://files.cnblogs.com/files/XYQ-208910/My97DatePickerBeta.zip


### 效果图如下：

默认时：

![image](https://github.com/xiayuanquan/Form_Authentication/blob/master/screenshots/10.png)

信息全为空时，验证不通过：

![image](https://github.com/xiayuanquan/Form_Authentication/blob/master/screenshots/11.png)

信息任意一个为空时，验证不通过：

![image](https://github.com/xiayuanquan/Form_Authentication/blob/master/screenshots/14.png)

信息都不为空且符合格式时，验证全通过：

![image](https://github.com/xiayuanquan/Form_Authentication/blob/master/screenshots/13.png)

选取日期时：

![image](https://github.com/xiayuanquan/Form_Authentication/blob/master/screenshots/12.png)


