<template>
	<div class="home" style="background-image: url('/static/bg.jpg')">
		<div class="logo-box">
			<img src="@/assets/logoe.png" class="logo-img">
		</div>
		<div class="input-box">
			<input v-model="code" placeholder="请输入礼券卡号" class="input-style home-input">
			<input v-model="pwd" placeholder="请输入礼券密码" class="input-style home-input">
			<div class="btn-style" @click="is_exchange">兑换礼券</div>
		</div>
		<div class="list-box">
			<div class="list-title">兑换记录</div>
			<div class="list-inner" v-for="(items,index) in list" :key="index">
				<div class="list-img"></div>
				<div class="text-style">
					{{items.title}}
				</div>
				<div class="text-time">{{items.time}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				code: '',
				pwd: '',
				list: [
					{title: '兑换产品名称可能有十二个字1234', time: '2019年10月1日'},
					{title: '兑换产品名称', time: '2019年10月1日'},
					{title: '兑换产品名称有十个字', time: '2019年10月1日'},
					{title: '兑换产品名不可超过十二个字', time: '2019年10月1日'},
				]
			}
		},
		methods : {
			is_exchange() {
				this.$router.push({ path: '/exchange' })
			}
		}
	}
</script>

<style>
	.home {
		background-size     : cover;
		background-position : center;
		font-size           : 14px;
		position            : absolute;
		left                : 0;
		right               : 0;
		height              : 100%;
	}
	.logo-img {
		width : 120px;
	}
	.input-box {
		margin   : 40px 60px 0;
		overflow : hidden;
	}
	.home-input {
		background-color : rgba(255, 255, 255, 0.1);
		color            : #fff;
	}
	.btn-style {
		font-size       : 14px;
		color           : #fff;
		line-height     : 40px;
		margin          : 0 auto;
		margin-top      : 20px;
		font-weight     : bold;
		text-decoration : underline;
	}
	.list-box {
		color      : #fff;
		text-align : left;
		margin-top : 50px;
		padding    : 0 20px;
		font-size  : 14px;
	}
	.list-img {
		width               : 40px;
		height              : 40px;
		background-color    : #f6f6f6;
		background-size     : cover;
		background-position : center;
		border-radius       : 20px;
	}
	.list-inner {
		display         : flex;
		flex            : 1;
		justify-content : space-between;
		align-items     : center;
		border-bottom   : 1px solid #999;
		padding         : 10px 0;
	}
	.list-title {
		font-size   : 16px;
		font-weight : bold;
		line-height : 40px;
	}
	.text-style {
		flex          : 1;
		overflow      : hidden;
		text-overflow : ellipsis;
		white-space   : nowrap;
	}
	.text-time {
		width : 105px;
	}
</style>