<template>
	<view class='bottom-wrapper'>
		<view class="bottom-item-left">
			<text>点菜情况</text>
		</view>
		<view class="bottom-item-right">
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
		background-color: rgba(61,61,63,.9);
		
	}

	.bottom-item-left {
		/* background-color: #575757; */
		/* background-color: #000; */
		/* opacity:0.3; */
		flex: 1;
		

	}

	
	.bottom-item-right {
		/* background-color: #686868; */
		/* position: relative; */
		flex: 4;
	}

</style>
