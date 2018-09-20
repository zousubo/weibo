<template>
	<div>
		<div class="main">
				 <div class="inset">
				 	<div class="social-icons">
		    			 <div class="span"><a href="#"><img src="../static/weixin.png" height="30" width="30" alt=""/><i>用微信账号登录</i><div class="clear"></div></a></div>
    					 <div class="span1"><a href="#"><img src="../static/qq.png" height="30" width="30" alt=""/><i>用QQ账号登录</i><div class="clear"></div></a></div>
    					 <div class="clear"></div>
					</div>
				 </div>	
				 <h2 class="text">或者成为注册新用户</h2>
				<form>
							<div class="lable">
		                     	<input type="text" class="text" placeholder="请输入您的姓" id="active">

		                     	<input type="text" class="text" placeholder="请输入您的名字">
		                    </div>
		                    <div class="clear"> </div>
		                    <div class="lable-2">
		                    <input type="text" class="text" placeholder="请输入您的邮箱 ">
		                     <input type="password" class="text" placeholder="请输入您的密码 ">
							</div>
							<div class="clear"> </div>
							 <h3>作为一名新注册的用户，您需要遵守<span><a href="#">以下条款和公约</a> </span></h3>
								 <div class="submit">
							<router-link to="/success" tag="li" active-class="active">注 册</router-link>
								</div>
									<div class="clear"> </div>
				</form>
		</div>
	</div>
</template>
<script>
export default{
  data(){
    return {
      active:false
    }
  }
}
</script>
<style>

.main{
	margin:7em auto 0;
	width:44%;
}
.inset {
	text-align: center;
	width: 100%;
}
.main h2,.main h3{
	font-size: 1em;
	text-align: center;
	color:#808080FF;
	padding:1em 0;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.main h3{
	font-size: 1em;
	text-align:center;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.main h3 span a{
	color:#1888A8;
	font-weight: bold;
}
.span {
	float:left;
	display: block;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	background:#3B5998;
	-webkit-transition: all 0.5s ease-out;
	-moz-transition: all 0.5s ease-out;
	-ms-transition: all 0.5s ease-out;
	-o-transition: all 0.5s ease-out;
	border:1px solid #3B5998;
	outline:none;
	width: 49.99%;
}
.span img {
	padding:11px 12px;
	float: left;
	
}
.span:hover{
	background:#5D7BBA;
	color:#fff;
}
.span i {
	color: #fff;
	padding: 14px 14px;
	float: left;
	font-size: 18px;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.span1 {
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	float:right;
	transition: all 0.5s ease-out;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	background: #55ACEE;
	outline:none;
	width: 49.7%;
}
.span1 img {
	padding: 12px 24px;
	float:left;
}
.span1 i {
	color: #fff;
	padding: 15px 14px;
	float: left;
	font-size: 18px;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
.span1:hover{
	background:#71B8ED;
	color:#fff;
}
.lable input[type="text"] {
	height:20px;
	padding: 16px;
	width: 43%;
	font-size: 1.1em;
	margin: 18px 0px;
	color: black;
	float: left;
	cursor: pointer;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	outline: none;
	font-weight: 600;
	margin-left: 3px;
	background: #FFFFFF;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	border-left: 6px solid #fff;
	border-bottom: none;
	border-right: none;
	border-top: none;
}
.lable input[type="text"]:hover,.lable-2 input[type="text"]:hover,input[type="Password"]:hover,#active {
	color:#DCDCDC;
	border-left:6px solid #40A46F;
}
.lable-2 input[type="text"],input[type="Password"] { 
	padding: 14px;
	width: 94%;
	font-size: 1em;
	margin: 18px 0px;
	border:none;
	color: #666666;
	cursor: pointer;
	background: none;
	float: left;
	outline: none;
	font-weight: 700;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	background: #ffffff;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	border-left: 6px solid #fff;
	border-bottom: none;
	border-right: none;
	border-top: none;
}

.submit{
	text-align: center;
}
.submit {
	padding: 15px 0px;
	color: #303030FF;
	float: right;
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	background: #40A46F;
	border: 1px solid #40A46F;
	cursor: pointer;
	font-size: 18px;
	transition: all 0.5s ease-out;
	-webkit-transition: all 0.5s ease-out;
	-moz-transition: all 0.5s ease-out;
	-ms-transition: all 0.5s ease-out;
	-o-transition: all 0.5s ease-out;
	outline:none;
	width: 100%;
}

.submit input[type=submit]:hover {
	 background:#07793D;
	 border:1px solid #07793D;
}

.copy-right {
	text-align: center;
	margin: 2em 0;
}
.copy-right p {
	color: #FFF;
	font-size:1em;
}
.copy-right p a {
	font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
	font-size:1em;
	font-weight:600;
	color:#55ACEE;
	-webkit-transition: all 0.3s ease-out;
	-moz-transition: all 0.3s ease-out;
	-ms-transition: all 0.3s ease-out;
	-o-transition: all 0.3s ease-out;
	transition: all 0.3s ease-out;
}
.copy-right a:hover{
	color:#fff;
}

@media (max-width:1440px){
	.main {
		width:46%;
		margin: 7em auto 0;
	}
}

@media (max-width:1366px){
	.main{
		width: 48%;
	}
	.span1 {
		width: 49.69%;
	}
}
@media (max-width:1280px){
	.main{
		width:53%;
	}
	
}
@media (max-width:1024px){
	.main{
		width: 66%;
		margin: 9em auto 0;
	}
	

}
@media (max-width:768px){
	.main {
	width:91%;
	margin: 6em auto 0;
	}
}

@media (max-width:640px){
	.main{
		width:90%;
		margin: 6em auto 0;
	}
	.span,.span1 {
		margin:0 auto;
		text-align:center;
		width: 100%;
		margin-bottom: 15px;
	}
	.main h2, .main h3 {
		padding: 0.5em 0;
		font-size: 1em;
	}
	.lable input[type="text"]:first-child {
	width: 92%;
	}
	.lable input[type="text"],.lable input[type="text"] {
		width:92%;
		font-size: 1em;
		text-align: left;
		margin: 10px 0px;
		margin-left:0;
	}
	.lable-2 input[type="text"], .lable-2 input[type="text"],input[type="Password"] { 
		width: 92.3%;
		font-size: 1em;
		margin: 10px 0px;
		text-align: left;
	}
	input[type=submit] {
		padding: 15px 15px;
		font-size: 1em;
		color: #fff;
		text-align:center;
		width: 100%;
	}
	.main h3 {
		text-align: center;
	}
}
@media (max-width:480px){
	.main{
		width:90%;
		margin: 6em auto 0;
	}
	.lable input[type="text"],.lable input[type="text"] {
		width:92%;
	
}
}
@media (max-width:320px){
	.main {
		width: 90%;
		margin: 3em auto 0;
	}
	.span i {
		font-size: 16px;
	}
	.span1 i {
		padding: 15px 0px;
		font-size: 16px;
	}
	.lable input[type="text"]:first-child {
		width: 90%;
		padding: 13px 10px;
	}
	.lable input[type="text"], .lable input[type="text"],.lable-2 input[type="text"], .lable-2 input[type="text"] { 
		width: 90%;
		font-size: 16px;
		padding:13px 10px;
	}
	input[type="Password"] {
		font-size: 16px;
		padding:13px 10px;
		width: 90%;
	}
	.main h3 {
	line-height: 28px;
	}
}
.main{
	position: absolute;
	top:-110px;
	left:25%
}
  .text{
    margin:60px 0px 0px 0px;
  }
  li{
    list-style: none;
    cursor: pointer;
    color: white;
  }
</style>
