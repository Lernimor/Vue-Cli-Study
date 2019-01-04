<template>
	<div class="goods_info_page">
		<carousel-img></carousel-img>
		<div class="goods_info show_box">
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
		<div class="empty"></div>
		<div class="shop_info show_box">
			<div class="shop_base_info">

			</div>
			<div class="shop_base_info"></div>
		</div>
		<div class="empty"></div>
		<div class="goods_tab show_box">
			<input type="radio" name="goods_tab" id="detail" checked="checked" />
			<input type="radio" name="goods_tab" id="comment" />
			<div class="widget-title">
				<ul>
					<li class="detail">
						<label for="detail">详情</label>
					</li>
					<li class="comment">
						<label for="comment">评价</label>
					</li>
				</ul>
			</div>
			<div class="widget-box">
				<ul class="detail-list">
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
					<li>new</li>
				</ul>
				<ul class="comment-list">
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
	.goods_info_page {
		background: rgba(216, 216, 216, 0.253);
	}

	.empty {
		height: 20px
	}

	.show_box {
		box-shadow: 0 5px 5px rgba(153, 153, 155, 0.377);
	}

/*goods_info*/
	.empty,
	.goods_info,
	.goods_name,
	.goods_price,
	.goods_otherdec,
	.shop_info {
		width: 100%;
	}

	.goods_info {
		height: 80px;
		background: white;
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

/*shop_info*/
	.shop_info {
		height: 150px;
		background: white;
	}

/*goods_tab*/
	.goods_tab>input[type="radio"] {
		display: none
	}

	.goods_tab {
		width: 100%;
	}

	.goods_tab .widget-box ul {
		background: white;
		display: none;
		width: 100%;
	}

	.goods_tab .widget-title ul {
		width: 100%;
	}

	.goods_tab .widget-title li {
		list-style: none;
		display: inline-block;
		margin-left: 1%;
		height: 36px;
		line-height: 36px;
		text-align: center;
		width: calc(48%);
		background: white;
		border: 1px solid rgba(47, 79, 79, 0.048);
		border-top-left-radius: 5px;
		border-top-right-radius: 5px;
		border-bottom: 0px;
	}

	#detail:checked~.widget-title .detail,
	/* #hot:checked~.widget-title .hot, */
	#comment:checked~.widget-title .comment {
		box-shadow: darkgrey 0px -5px 5px;
	}

	#detail:checked~.widget-box .detail-list,
	/* #hot:checked~.widget-box .hot-list, */
	#comment:checked~.widget-box .comment-list {
		display: block
	}
</style>