<template>
	<view>
		<block v-for="(item,index) in foods.detail" :key="index">
			<view class="food-item">
				<!-- <image src="" mode=""></image> -->
				<text>{{item}}</text>
				<!-- <text></text> -->
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props: {
			foods: {
				type: Object,
			}
		}
	}
</script>

<style scoped>
	
	.food-item {
		background: #fff;
		/*每个高170rpx*/
		height: 170rpx;
		/*垂直居中*/
		line-height: 170rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #de5cd1; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
		/* background-color: #007AFF; */
	}
</style>
