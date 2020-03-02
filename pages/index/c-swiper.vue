<template>
	<view class='swiper-wrapper'>
<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
	<swiper-item>
		<view class="swiper-item">1</view>
	</swiper-item>
	<swiper-item>
		<view class="swiper-item">2</view>
	</swiper-item>
	<swiper-item>
		<view class="swiper-item">3</view>
	</swiper-item>
</swiper>
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

<style scrop>
	.swiper-wrapper {
		/* swiper 存在默认高度为150px */
		height: 300rpx;
	}
swiper-item {
	background-color: #007AFF;
	/* height: 150rpx; */
	width: 100%;
}
</style>
