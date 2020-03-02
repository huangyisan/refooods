<template>
	<view class='foods-wrapper'>
		<scroll-view scroll-y="true" class='side-left-wrapper'>
			<view class='side-left-item'>1</view>
			<view class='side-left-item'>2</view>
			<view class='side-left-item'>3</view>
			<view class='side-left-item'>4</view>
			<view class='side-left-item'>5</view>
			<view class='side-left-item'>6</view>
			<view class='side-left-item'>7</view>
			<view class='side-left-item'>8</view>
			<view class='side-left-item'>9</view>
	</scroll-view>

		<scroll-view scroll-y="true" class='side-right-wrapper'>
			<view class='side-right-item'>1</view>
			<view class='side-right-item'>2</view>
			<view class='side-right-item'>3</view>
			<view class='side-right-item'>4</view>
			<view class='side-right-item'>5</view>
			<view class='side-right-item'>6</view>
			<view class='side-right-item'>7</view>
			<view class='side-right-item'>8</view>
			<view class='side-right-item'>9</view>
		</scroll-view>
	</view>
</template>

<script>

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
		background: #fff;
		/*每个高30px*/
		height: 80rpx;
		/*垂直居中*/
		line-height: 80rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		border-bottom: 1px solid #dedede;
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
		border-bottom: 1px solid #de5cd1;
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
	}
</style>
