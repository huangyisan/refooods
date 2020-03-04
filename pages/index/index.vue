<template>
	<view class="content">
		<c-swiper :imgList='imgList'></c-swiper>
		<c-search></c-search>
		<c-foods-list :foodsInfo='foodsInfo'></c-foods-list>
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
				imgList: [{
						'imgUrl': "../../static/img/swiper-01.jpg"
					},
					{
						'imgUrl': "../../static/img/swiper-02.jpg"
					},
					{
						'imgUrl': "../../static/img/swiper-03.jpg"
					}
				],
				foodsInfo: [
					{
						'category': '川菜',
					},
					{
						'category': '粤菜',
					},
					{
						'category': '鲁菜',
					}
				]
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
