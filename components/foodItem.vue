<template>
	<view>
		<block v-for="(item,index) in foods.detail" :key="index">
			<view class="food-item">
				<image src="../static/img/foodlist/rightOne.jpg" mode="" class='itemPic'></image>
				<text class='itemTitle'>{{item}}</text>
				<text class='itemDescription'>麻婆豆腐，是四大中国菜系中代表川菜的一種。</text>
			</view>
		</block>
	</view>
</template>


<script>
import {EventBus} from '../utils/js/bus'
	export default {
		props: {
			foods: {
				type: Object,
			}
		},
		data() {
			return {
				food:{},
				isFood: true
			}
		},
		created() {
			if(this.isFood){
				// console.log(this.isFood)
			EventBus.$on('food', (food) =>{
				console.log('我是foodItem组件,on事件')
				console.log(food)
				
				
			})
			this.isFood = false
			console.log(this.isFood)
			}
			// EventBus.$off('food')
		}

	}
</script>

<style scoped>
	
	.food-item {
		background: #fff;
		/*每个高170rpx*/
		height: 170rpx;
		/*垂直居中*/
		/* line-height: 170rpx; */
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #de5cd1; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
		display: flex;
		flex-direction: row;
		/* background-color: #007AFF; */
		position: relative;
	}
	.itemPic {
		width: 140rpx;
		height: 140rpx;
		margin-right: 40rpx;
		vertical-align: middle;
	}
	
	.itemTitle {
		position: absolute;
		height: 60rpx;
		font-weight: 700;
		top: 4rpx;
		left: 180rpx;
		
	}
	.itemDescription {
		position: absolute;
		height: 100rpx;
		bottom: 0;
		left: 180rpx;
	}
</style>
