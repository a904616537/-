<template>
	<div class="exchange">
		<div class="img-style" :style="'background-image: url('+product.img+')'"></div>
		<div class="content">
			<p class="title-style">{{product.name}}</p>
			<div class="tips">{{product.desc}}</div>
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
	import { MessageBox, Message } from 'element-ui'
	import {verificationCode} from '../../api';
	export default {
		data() {
			return {
				name: '',
				phone: '',
				address: '',
				product : {},
				code : {}
			}
		},
		computed : {
			validation : function() {
				if(this.name == '') return false;
				if(this.address == '') return false;
				if(this.phone == '') return false;
				else return true
			},
			validationPhone : function() {
				if(!(/^1[3456789]\d{9}$/.test(this.phone))){ 
			        return false; 
			    }else return true;
			}
		},
		methods: {
			to_exchange() {
				if(!this.validation) {
					Message({
						message  : '请填写正确的联系信息',
						type     : 'error',
						duration : 3 * 1000
					})
					return;
				}
				if(!this.validationPhone) {
					Message({
						message  : '手机号码格式输入错误！',
						type     : 'error',
						duration : 3 * 1000
					})
					return
				}

				const model = {
					code : this.code.code,
					password : this.code.password,
					address : {
						province : this.name,
						address  : this.address,
						phone    : this.phone
					}
				}
				verificationCode(model)
				.then(doc => {
					let logs = localStorage.getItem('log');
					const model = { _id : doc._id, name : this.product.name, time : doc.verification.CreateTime, img : this.product.img};
					if(logs) {
						logs = JSON.parse(logs);
						logs.push(model);
						localStorage.setItem("log", JSON.stringify(logs));
					} else localStorage.setItem("log", JSON.stringify([model]));
					
					Message({
						message: '兑换成功',
						type: 'success',
						duration: 3 * 1000
					})
				})
				.catch(err => {
					Message({
						message  : err,
						type     : 'error',
						duration : 3 * 1000
					})
				})
				.finally(() => {
					setTimeout(() => {
						this.$router.replace('/')
					}, 3000);
				})
			}
		},
		beforeMount() {
			let product = localStorage.getItem("product");
			if(product) {
				this.code = JSON.parse(product);
				this.product = JSON.parse(product).product;
			} else this.$router.replace('/');
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
		background-repeat: no-repeat;
	}
	.infor {
		overflow: hidden;
	}
	.infor-input {
		border-bottom: 1px solid #ccc;
		width: 100%;
		-webkit-user-select: auto;
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