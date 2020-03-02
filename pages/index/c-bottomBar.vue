<template>
	<view class='bottom-wrapper'>
		<view class="item-left">
			<text>点菜情况</text>
		</view>
		<view class="item-right">
			<text>下单</text>
		</view>
	</view>
</template>

<script scrop>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.bottom-wrapper {
		display: flex;
		position: relative;
		height: 88rpx;
		line-height: 88rpx;
		text-align: center;
		position: fixed;
		bottom: 0;
		width: 100%;
		
	}

	.item-left {
		background-color: #007AFF;
		flex: 3
		
	}
	.item-right {
		background-color: #F88000;
		/* position: relative; */
		flex: 1;
	}

</style>
