<template>
	<view class='search-wrapper'>
		<text>搜索功能</text>
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
.search-wrapper {
	position: absolute;
	top: 300rpx;
	/* 暂时给一个inline-block属性，后面要继续调整 */
	/* display: inline-block; */
	line-height: 50rpx;
	height: 50rpx;
	text-align: center;
	/* background-color: #4CD964; */
	/* border-bottom: solid 2px #f77; */
	width: 100%;
	z-index: 9;
}
</style>
