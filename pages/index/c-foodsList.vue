<template>
	<view class='foods-wrapper'>
		
		<scroll-view scroll-y="true" class='side-left-wrapper'>
			<block v-for='item in foodsInfo'>
<view class='side-left-item'>{{item.category}}</view>
			<!-- <view class='side-left-item'>2</view>
			<view class='side-left-item'>3</view>
			<view class='side-left-item'>4</view>
			<view class='side-left-item'>5</view>
			<view class='side-left-item'>6</view>
			<view class='side-left-item'>7</view>
			<view class='side-left-item'>8</view>
			<view class='side-left-item'>9</view> -->
			</block>
	</scroll-view>
	

		<scroll-view scroll-y="true" class='side-right-wrapper'>
			<block v-for='item in foodsInfo'>
				<block v-for='item in item.detail'>
			<view class='side-right-item'>{{item}}</view>
<!-- 			<view class='side-right-item'>2</view>
			<view class='side-right-item'>3</view>
			<view class='side-right-item'>4</view>
			<view class='side-right-item'>5</view>
			<view class='side-right-item'>6</view>
			<view class='side-right-item'>7</view>
			<view class='side-right-item'>8</view>
			<view class='side-right-item'>9</view> -->
			</block>
			</block>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props:{
			'foodsInfo': {
				type: Array,
				default() {
					return []
				}
			}
		},
		data() {
			return {
				
			};
		}
	}

</script>

<style scoped>
	.foods-wrapper {
		display: flex;
		flex-direction: row;
		position: absolute;
		/* background-color: #C03189; */
		width: 100%;
		top: 350rpx;
		bottom: 88rpx;
	}

	.side-left-wrapper {
		/* background-color: #F0AD4E; */
		flex: 1;

	}

	.side-right-wrapper {
		/* background-color: #829fff; */
		flex: 3;
	}

	.side-left-item {
		background: #f8f8f8;
		/*每个高30px*/
		height: 80rpx;
		/*垂直居中*/
		line-height: 80rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #dedede; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
	}
	.side-right-item {
		background: #fff;
		/*每个高30px*/
		height: 80rpx;
		/*垂直居中*/
		line-height: 80rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #de5cd1; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
	}
</style>
