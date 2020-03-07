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

	// network request
	import {getFoodsInfo} from '../../utils/network/foodsInfo'
	import {request} from '../../utils/network/request'


	export default {
		data() {
			return {
				imgList: [{
						'imgUrl': "../../static/img/swiper/swiper-01.jpg"
					},
					{
						'imgUrl': "../../static/img/swiper/swiper-02.jpg"
					},
					{
						'imgUrl': "../../static/img/swiper/swiper-03.jpg"
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
			getFoodsInfo('/foodsinfo.json').then(res => {
				// console.log(res)
			})
			// .then(res =>{
			// 	console.log(res)
			// })
			// .catch(err =>{
			// 	console.log(err)
			// })
			// console.log(data)
				
		},

		methods: {

		}
	}
</script>

<style>
	@import '../../utils/css/base.css';
</style>
