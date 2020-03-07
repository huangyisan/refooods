<template>
	<view class="content">
		<c-swiper :imgList='imgList'></c-swiper>
		<c-search></c-search>
		<c-foods-list :foodsCategory='foodsCategory'></c-foods-list>
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
				// 存放事物类型,左边栏
				foodsCategory: []
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
				const data = res.data.data.menu
				console.log(data)
				for(const index in data){
					this.foodsCategory.push(data[index].name)
				}
				console.log(this.foodsCategory)
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
