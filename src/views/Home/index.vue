<template>
	<div class="home" style="background-image: url('/static/bg.jpg')">
		<div class="header-text">
			<div/>
			<p>爱优鲜 | 芙源记 | 阳澄湖大闸蟹协会  <br />
			联合荣誉出品</p>
			<div/>
		</div>
		<div class="logo-box">
			<img src="@/assets/logoe.png" class="logo-img">
		</div>
		<div class="input-box">
			<input v-model="code" placeholder="请输入礼券卡号" class="input-style home-input">
			<input v-model="password" placeholder="请输入礼券密码" class="input-style home-input">
			<div class="btn-style" @click="is_exchange">兑换礼券</div>
		</div>
		<div v-if="list.length > 0" class="list-box" >
			<div class="list-title">兑换记录</div>
			<div class="list-inner" v-for="(items,index) in list" :key="index">
				<div class="list-img" :style="'background-image: url('+items.img+')'"></div>
				<div class="text-style">
					{{items.name}}
				</div>
				<div class="text-time">{{moment(items.time)}}</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { Message } from 'element-ui'
	import {getCode}   from '../../api';
	import moment      from 'moment';
	export default {
		data() {
			return {
				code: '',
				password: '',
				list: [
					// {title: '兑换产品名称可能有十二个字1234', time: '2019年10月1日'},
				]
			}
		},
		methods : {
			is_exchange() {
				getCode({code : this.code, password : this.password})
				.then(doc => {
					console.log('doc --->', doc)
					if(typeof doc == 'string') {
						Message({
							message  : '没有找到礼券',
							type     : 'error',
							duration : 5 * 1000
						})
					} else if(doc.status) {
						Message({
							message  : '礼券已被使用',
							type     : 'error',
							duration : 5 * 1000
						})
					} else {
						localStorage.setItem("product", JSON.stringify(doc));
						this.$router.push({ path: '/exchange' })
					}
					
				})
				.catch(err => {
					console.log('err', err)
					Message({
						message  : '没有找到礼券',
						type     : 'error',
						duration : 5 * 1000
					})
				})
			},
			moment(date) {
				return moment(date).format('YYYY年MM月D日')
			}
		},
		beforeMount() {
			let log = localStorage.getItem("log");
			if(log) {
				this.list = JSON.parse(log);
				console.log('this.list', this.list)
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
		-webkit-user-select: auto;
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
		margin-left: 5px;
		overflow      : hidden;
		text-overflow : ellipsis;
		white-space   : nowrap;
	}
	.text-time {
		width : 105px;
	}
	.logo-box {
		margin-top: 20px;
	}
	.header-text {
		display: flex;
		align-content: center;
		flex-direction: row;
		justify-content: center;
		color: #F34111;
		font-size: 12px;
		line-height: 14px;
	}
	.header-text div{
		flex: 1;
		margin-top: 6px;
		height: 1px;
		background-color: #F34111;
	}
	.header-text p {
		margin:0 20px;
	}
</style>