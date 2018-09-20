<template>
  <div id="wrap">
  	<ul class="navigator">
  		<li class="navigatoritems">头条</li>
  		<li class="navigatoritems">政治</li>
  		<li class="navigatoritems">体育</li>
  		<li class="navigatoritems">经济</li>
  		<li class="navigatoritems">科技</li>
  	</ul>
    <ul>
      <li v-for="items in datas.data" style="listStyle:none" class="nice">	
   			<div class="contain">
<!--    			<div class="img" v-for="img in items.imageUrls">
				<img :src="img" height="150" width="150" class="images">
			</div> -->
	      		<a class="title" :href="items.url">{{items.title}}</a>
	      		<a class="content" :href="items.url">{{items.content}}</a>
	      		<a :href="items.url" class="website">查看详情</a>
	      		<div class="text">来源:</div>
	      		<a class="man" :href="items.posterId">{{items.posterScreenName}}</a>
	      		<div class="textone">发表于:</div>
	      		<div class="time">{{items.publishDateStr}}</div>
      		</div>
      	</li>
    </ul>
  </div>
</template>

<script>
import newsdata from '../static/data.json'
export default {
data(){
  return {
    datas:newsdata,
  }
},
}
</script>


<style scoped>
.nice{
	list-style:none;
	margin:0;
	padding:0;
	text-align:left;
	height: 100px;
	width: 800px;
}
.images:after{
	display:block;
	clear:both;
	height: 0;
	content:""
}
.content{
	float:left;
	text-decoration:none;
	display:inline-block;
	height: 40px;
	width:  800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowarp;
	-webkit-line-clamp: 2;
	font-size:14px;
	color:#999;
	margin:10px 0px;
}
.content:hover{
	text-decoration:underline;
	cursor:pointer
}
.title{

	text-decoration:none;
	font-weight:400;
	font-size:1.5em;
	color:#333;
}
.title:hover{
	color:#E4921AFF;
	text-decoration:underline;
	cursor:pointer
}
.website{
	position:absolute;
	text-decoration:none;
	color:#999;
	top:7px;
	left:735px;
}
.man{
	text-decoration:none;
	color:#afafaf;
	position:absolute;
	left:42px;
	top:85px;
}
.man:hover{
	text-decoration:underline;
	color:orange;
	cursor:pointer
}
.time{
	color:#afafaf;
	font-size:14px
}
.contain{
	width: 800px;
	height: 100px;
	margin:0 0 0 auto;
	position:relative;
	left:80px;
	margin:25px;

}
.text{
	text-decoration:none;
	color:#afafaf;
	position:absolute;
	left:0px;
	top:85px;
}
.textone{
	text-decoration:none;
	color:#afafaf;
	position:absolute;
	left:55%;
	top:85px;
}
.time{
	text-decoration:none;
	color:#afafaf;
	position:absolute;
	left:60%;
	top:88px;
}
#wrap{
	position:absolute;
	height: 500px;
	top:10px;

}

.navigatoritems{
list-style:none;
position:relative;
left:15px;
top:280px;
position:inline-block;
width: 100px;
height: 50px;
}
</style>
