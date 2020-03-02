<template>
	<view class="content">
		<c-swiper></c-swiper>
		<c-search></c-search>
		<c-foods-list></c-foods-list>
		<c-bottom-bar></c-bottom-bar>

	</view>
</template>

<script>
	import cSwiper from './c-swiper.vue'
	import cSearch from './c-search.vue'
	import cFoodsList from './c-foodsList.vue'
	import cBottomBar from './c-bottomBar.vue'


	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		components: {
			cSwiper,
			cSearch,
			cFoodsList,
			cBottomBar,
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	@import '../../utils/css/base.css';



</style>
