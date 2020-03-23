<template>
	<view class='swiper-wrapper'>
		<swiper 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		:circular="true"
		>
			<swiper-item v-for='item in imgList' :key='item.imgUrl' class="text-center">
				<!-- <view class="swiper-item"> -->
					<image :src='item.imgUrl' alt="" class='swiper-img' style="height: 100%;" lazy-load>
				<!-- </view> -->
			</swiper-item>
		</swiper>
	</view>

</template>


<script>
	export default {
		props:{
			imgList: {
				type: Array,
				default() {
					return {}
				}
			}
		},
		data() {
			return {
			}
		}
	}
</script>

<style scoped>

</style>
