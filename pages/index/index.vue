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
						'index': 0,
						'category': '荤菜',
						'detail': ['猪肉','羊肉','牛肉','鸡肉','狗肉']
					},
					{   'index': 1,
						'category': '蔬菜',
						'detail': ['青菜','白菜','西红柿','土豆','冬瓜']
					},
					{   'index': 2,
						'category': '水果',
						'detail': ['西瓜','香蕉','橘子','菠萝','桃子']
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
