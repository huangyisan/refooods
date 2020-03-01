<template>
	<view>
		<view class='side-bar-wrapper'>
			<text>我是侧边栏</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
.side-bar-wrapper {
	position: absolute;
	display: inline-block;
	width: 30%;
	/* height: 100%; */
	bottom: 88rpx;
	height: 100%;
	background-color: #F0AD4E;
	/* text-align: center; */
	left:0;
	top:0;
	flex:1;
	/* bottom:88rpx */
	z-index: 9;
	
	
}
</style>
