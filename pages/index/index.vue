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
	import {getFoodsInfo, Foods} from '../../utils/network/foods'
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
				// 存放食物类型,左边栏
				foodsCategory: [],

				// 存放食物信息,右侧栏
				foods: {}

		} 
	},
	components: {
			cSwiper,
			cSearch,
			cFoodsList,
			cBottomBar,
		},
		onLoad() {
			// const vm = this
			getFoodsInfo('/foodsinfo.json').then(res => {
				const data = res.data.data.menu
				
				/**
				 * 数据结构如下
				 * {
				 *	"标题1":[{"name":1},{"name":2}],
				 *	"标题2":[{"name":1},{"name":2}],
				 *  "标题3":[{"name":1},{"name":2}],
				 *	"标题4":[{"name":1},{"name":2}]
				 *	}
				 * 
				 */
				// 左栏数据和右侧栏数据
				const foodDict = {}
				const foodsCategory = []
				for(const index in data){
					const foods = data[index].foods
					// 初始化标题层,置为array类型
					foodsCategory.push(data[index].name)
					foodDict[data[index].name] = []

					// 如果采用这种方式,foodsCategory最后依旧为[]
					// this.foodsCategory[data[index].name] = []

					// 往array里面存放字典
					for(const indey in foods){
						const info = foods[indey]
						foodDict[data[index].name].push({
							name: info.name,
							item_id: info.item_id,
							description: info.description,
							month_sales: info.month_sales,
							materials: info.materials,
							satisfy_rate: info.satisfy_rate,
							lowest_price: info.lowest_price,
							})
					}
				}
				// 将foodDict赋值给this.foodsCategory
				this.foods = foodDict
				this.foodsCategory = foodsCategory


				console.log(222)
				console.log(this.foods)
				console.log(this.foodsCategory)
			})
		},

		methods: {

		}
	}
</script>

<style>
	@import '../../utils/css/base.css';
</style>
