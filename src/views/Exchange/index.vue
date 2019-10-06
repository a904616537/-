<template>
	<div class="exchange">
		<div class="img-style"></div>
		<div class="content">
			<p class="title-style">礼券兑换的礼盒名称</p>
			<div class="tips">大闸蟹礼盒，4公4母，4两一只，净含量xxx克。</div>
			<div class="infor">
				<div class="title">收货信息</div>	
				<input v-model="name" placeholder="姓名" class="input-style infor-input">
				<input v-model="phone" placeholder="联系电话" class="input-style infor-input">
				<input v-model="address" placeholder="收货地址" class="input-style infor-input">
			</div>
			<div class="btn-style" @click="to_exchange">确认兑换</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				phone: '',
				address: ''
			}
		},
		methods: {
			to_exchange() {
				console.log('确认兑换');
			}
		}
	}
</script>

<style>
	.exchange {
		text-align: left;
	}
	.exchange .content {
		margin: 0 20px;
		font-size: 14px;
		overflow: hidden;
	}
	.exchange .title {
		margin-top: 50px;
		font-size: 14px;
	}
	.exchange .title-style {
		font-size: 16px;
		font-weight: bold;
	}
	.img-style {
		background-color: #f4f6fc;
		width: 100%;
		height: 220px;
		background-position: center;
		background-size: contain;
	}
	.infor {
		overflow: hidden;
	}
	.infor-input {
		border-bottom: 1px solid #ccc;
		width: 100%;
	}
	.exchange .btn-style {
		font-size   : 14px;
		color       : #333;
		line-height : 40px;
		margin      : 0 auto;
		margin-top  : 20px;
		font-weight : bold;
		text-align  : center;
	}
</style>