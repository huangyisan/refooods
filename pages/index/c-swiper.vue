<template>
	<view class='swiper-wrapper'>
		<swiper 
		:indicator-dots="true" 
		:autoplay="true" 
		:interval="3000" 
		:duration="1000"
		:circular="true"
		>
			<swiper-item v-for='item in imgList' :key='item.imgUrl'>
				<view class="swiper-item">
					<img :src='item.imgUrl' alt="">
				</view>
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
	
	.swiper-wrapper {
		/* position: relative; */
		/* top: 0; */
		/* swiper 存在默认高度为150px */
		/* height: 300rpx; */
	}

	.swiper-item {
		text-align: center;
		/* background-color: #007AFF; */
		/* height: 150rpx; */
		/* width: 100%; */
	}
	
	.swiper-item img {
		width:100%
	}
</style>
