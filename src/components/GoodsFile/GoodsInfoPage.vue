<template>
	<div class="goods_info_page">
		<carousel-img></carousel-img>
		<div class="goods_info">
			<div class="goods_name"><span>美国进口-莱泽曼26工具手链</span></div>
			<div class="goods_otherdec">
				<span class="old_price">原价:￥1330</span> <span class="discount">钜惠9折</span>
				<div class="count_change">
					<span>数量：</span>
					<img :src="require('../../../public/img/buyCar/add_enable.png')">
					<input type="text" />
					<img :src="require('../../../public/img/buyCar/rm_enable.png')">
				</div>
			</div>
			<div class="goods_price">
				<span class="now_price">现价:￥998</span>
				<div class="otherDesc">距离结束:1天23小时51分</div>
			</div>
		</div>
		<div class="goods_tab">
			<input type="radio" name="goods_tab" id="new" checked="checked" />
			<input type="radio" name="goods_tab" id="hot" />
			<input type="radio" name="goods_tab" id="random" />
			<div class="widget-title">
				<ul>
					<li class="new">
						<label for="new">最新博文</label>
					</li>
					<li class="hot">
						<label for="hot">热评博文</label>
					</li>
					<li class="random">
						<label for="random">随机博文</label>
					</li>
				</ul>
			</div>
			<div class="widget-box">
				<ul class="new-list">
					<li>new</li>
				</ul>
				<ul class="hot-list">
					<li>hot</li>
				</ul>
				<ul class="random-list">
					<li>random</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	import carouselImg from "../Tools/CarouselImg.vue";
	export default {
		components: {
			carouselImg
		}
	}
</script>

<style>
/*goods_info*/
	.goods_info,
	.goods_name,
	.goods_price,
	.goods_otherdec {
		width: 100%;
	}

	.goods_info {
		height: 80px;
		background: #f5f5f5;
		box-shadow: 0 0 10px rgb(153, 153, 155);
	}

	.goods_name {
		height: 40%;
		font-weight: bold;
	}

	.goods_price {
		height: 30%;
	}

	.goods_otherdec {
		height: 25%;
	}

	.goods_name span {
		padding-left: 8px;
		vertical-align: middle
	}

	.now_price {
		float: left;
		font-weight: bolder;
		color: #fc4040;
		padding-left: 15px;
	}

	.otherDesc {
		float: right;
		color: #c58091;
		padding-right: 18%;
		margin-top: 5px;
		font-size: 12px;
		vertical-align: middle
	}

	.old_price {
		float: left;
		text-decoration: line-through;
		font-size: 13px;
		color: #6b6b6b;
		padding-left: 8px;
		padding-right: 8px;
	}

	.discount {
		font-size: 13px;
		float: left;
		color: white;
		background: #7b93ff;
		padding: 0 3px 0 3px;
	}

	.count_change {
		float: right;
		width: 35%;
		height: 100%;
		text-align: center;
		padding-right: 5%;
	}

	.count_change span {
		font-size: 14px;
		display: inline-block;
	}

	.count_change input {
		display: inline-block;
		width: 30px;
		height: 16px;
		border-radius: 10px;
		outline: none;
		border-color: #b3b3b3;
		text-align: center;
	}

	.count_change img {
		display: inline-block;
		height: 100%;
		vertical-align: top
	}
/*goods_tab*/
	.goods_tab>input[type="radio"] {
		display: none
	}

	.goods_tab {
		width: 100%;
		padding-top: 5%;
	}

	.goods_tab .widget-box ul {
		display: none;
		width: 100%;
	}

	.goods_tab .widget-title li{
		list-style: none;
		display: inline-block;
		text-align: center;
		width: 33.3%;
	}

	.goods_tab .widget-title label{
	}
	

	#new:checked~.widget-title .new,
	#hot:checked~.widget-title .hot,
	#random:checked~.widget-title .random {
		background: rgb(128, 127, 127)
	}

	#new:checked~.widget-box .new-list,
	#hot:checked~.widget-box .hot-list,
	#random:checked~.widget-box .random-list {
		display: block
	}
</style>