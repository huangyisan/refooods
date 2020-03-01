<template>
	<view class="content">
		<c-swiper></c-swiper>
		<c-search></c-search>
		<view class='nav'>
			<!-- <c-side-bar></c-side-bar> -->
			<!-- <c-side-content></c-side-content> -->
		</view>


		<c-bottom-bar class='bottom-bar'></c-bottom-bar>



	</view>
</template>

<script>
	import cSwiper from '../../components/c-swiper.vue'
	import cSearch from '../../components/c-search.vue'
	import cBottomBar from '../../components/c-bottomBar.vue'
	import cSideBar from '../../components/c-sideBar.vue'
	import cSideContent from '../../components/c-sideContent.vue'

	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			cSwiper,
			cSearch,
			cBottomBar,
			cSideBar,
			cSideContent
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	/* 总体盒子 */
	.content {
		display: flex;
		/* position: relative; */
		/* direction: row; */
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
		/* position: relative; */
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
	}

	.bottom-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
	}

	.nav {
		position: relative;
		display: flex;
		background-color: #333333;
		width: 100%;
		height: 200rpx;
		/* bottom: 88rpx; */
	}
</style>
