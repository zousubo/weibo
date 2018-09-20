<template>
	 <div class="wrapper">
        <img src="./assets/logo.png" class="icon" >
        <h2>{{msg}}</h2>
        <form action="#" method="post">
            <div class="loginBox">
                <div class="loginBoxCenter">
                    <p class="text"><label for="username" >用户名：</label></p>
                    <p><input type="text" id="text" name="text" class="loginInput" autofocus="autofocus" required="required" autocomplete="off" placeholder="请输入邮箱/手机号" value="" /></p>
                    <p class="text"><label for="password" >密码：</label></p>
                    <p><input type="password" id="password" name="password" class="loginInput" required="required" placeholder="请输入密码" value="" /></p>
                    <p><a class="forgetLink" href="#">忘记密码?</a></p>
                    <p class="text">
                    <input id="remember" type="checkbox" name="remember" />
                    <label for="remember">记住登录状态</label>	
                    </p>
                </div>
                <div class="loginBoxButtons">
                    <router-link to="/main" tag="li" active-class="active">登录</router-link>
                    <div class="text">
                    <router-link :to="{name:'register'}" tag="li" class="creat" active-class="active">新用户注册</router-link>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<script>
	export default{
        data(){
            return {
                msg: '欢迎进入最右app,游客请先登录',
                active:false
            }
        }
	}
</script>

<style scoped>
       .wrapper {
            margin: 137px 0 0px auto;
            width: 400px;
            position:absolute;
            top:60px;
            left:240px;
        }
        
        .loginBox {
            background-color: #F0F4F6;
            border: 1px solid #BfD6E1;
            border-radius: 5px;
            color: #444;
            font: 14px 'Microsoft YaHei', '微软雅黑';
            margin: 0 auto;
            width: 388px
        }
        
        .loginBox .loginBoxCenter {
            border-bottom: 1px solid #DDE0E8;
            padding: 24px;
        }
        
        .loginBox .loginBoxCenter p {
            margin-bottom: 10px
        }
        
        .loginBox .loginBoxButtons {
            border-top: 0px solid #FFF;
            border-bottom-left-radius: 5px;
            border-bottom-right-radius: 5px;
            line-height: 28px;
            overflow: hidden;
            padding: 20px 24px;
            vertical-align: center;
            filter: alpha(Opacity=80);
            -moz-opacity: 0.5;
            opacity: 0.5;
        }
        
        .loginBox .loginInput {
            border: 1px solid #D2D9dC;
            border-radius: 2px;
            color: #444;
            font: 12px 'Microsoft YaHei', '微软雅黑';
            padding: 8px 14px;
            margin-bottom: 8px;
            width: 310px;
        }
        
        .loginBox .loginInput:FOCUS {
            border: 1px solid #B7D4EA;
            box-shadow: 0 0 8px #B7D4EA;
        }
        
        .loginBox .loginBtn {
            background-image: -moz-linear-gradient(to bottom, blue, #85CFEE);
            border: 1px solid #98CCE7;
            border-radius: 20px;
            box-shadow: inset rgba(255, 255, 255, 0.6) 0 1px 1px, rgba(0, 0, 0, 0.1) 0 1px 1px;
            color: #444;
            cursor: pointer;
            float: right;
            font: bold 13px Arial;
            padding: 10px 50px;
        }
        
        .loginBox .loginBtn:HOVER {
            background-image: -moz-linear-gradient(to top, blue, #85CFEE);
        }
        
        .loginBox a.forgetLink {
            color: #ABABAB;
            cursor: pointer;
            float: right;
            font: 11px Arial;
            text-decoration: none;
            vertical-align: middle;
        }
        
        .loginBox a.forgetLink:hover {
            color: #000000;
            text-decoration: none;
        }
        
        .loginBox input#remember {
            vertical-align: middle;
        }
        
        .loginBox label[for="remember"] {
            font: 11px Arial;
        }
        .text{
        	text-align:left
        }
        li{
          list-style: none;
          cursor: pointer;
          border-width:0px ;
          border-radius: 3px;
          display: inline-block;
          outline: none;
          font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial, sans-serif;
          color: #3a3a3a;
          float: right;
        }
        li:hover{
          background: #00aa00;
        }
        .creat{
          float:left
        }
         .icon{
          width: 100px;
          height: 100px;
        }
        h2{
          font-weight:900;
          margin:10px;
          padding:0;
        }
</style>
