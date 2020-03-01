<template>
	<view class="content">
		<c-swiper></c-swiper>
			<c-search></c-search>
			<c-side-bar></c-side-bar>
			
			<c-bottom-bar class='bottom-bar'></c-bottom-bar>


		
	</view>
</template>

<script>
	import cSwiper from '../../components/c-swiper.vue'
	import cSearch from '../../components/c-search.vue'
	import cBottomBar from '../../components/c-bottomBar.vue'
	import cSideBar from '../../components/c-sideBar.vue'
	
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components:{
			cSwiper,
			cSearch,
			cBottomBar,
			cSideBar
		},
		onLoad() {
			
		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		/* direction: row; */
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
	}
	.bottom-bar {
		position: fixed;
		bottom: 0;
		width: 100%;
	}




</style>
