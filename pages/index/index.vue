<template>
	<view class="content">
		<c-swiper :imgList='imgList'></c-swiper>
		<uni-searchBar></uni-searchBar>
		<!-- <c-search></c-search> -->
		<c-line></c-line>
		<c-foods-list :foodsCategory='foodsCategory' :foods='foods' :testMessage='testMessage'></c-foods-list>
		<c-bottom-bar></c-bottom-bar>
	</view>
</template>

<script>
	// import cSwiper from './c-swiper.vue'
	import cSwiper from '@/components/index/c-swiper.vue'
	import cSearch from '@/components/index/c-search.vue'
	import {uniSearchBar} from '@dcloudio/uni-ui'
	import cLine  from '@/components/common/c-line.vue'
	import cFoodsList from '@/components/index/c-foodsList.vue'
	import cBottomBar from '@/components/index/c-bottomBar.vue'

	// network request
	import {getFoodsInfo, Foods} from '../../utils/network/foods'
	import {request} from '../../utils/network/request'

	// bus
	import {EventBus} from '../../utils/js/bus'


	export default {
		data() {
			return {
				imgList: [{
						'imgUrl': "/static/img/swiper/swiper-01.jpg"
					},
					{
						'imgUrl': "/static/img/swiper/swiper-02.jpg"
					},
					{
						'imgUrl': "/static/img/swiper/swiper-03.jpg"
					}
				],
				// 存放食物类型,左边栏
				foodsCategory: [],

				// 存放食物信息,右侧栏
				foods: {},
				// 测试信息
				testMessage:'测试信息'

		} 
	},
	components: {
			cSwiper,
			cSearch,
			cLine,
			cFoodsList,
			cBottomBar,
			uniSearchBar,
		},
	onShow() {
		this.selfGetFoodsInfo()
		},



	methods: {
			selfGetFoodsInfo() {
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
					const food_name = data[index].name
					const food_description = data[index].description
					foodsCategory.push({[food_name]:[food_description]})
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
							img: info.image_path,
							py_name: info.pinyin_name,

							})
							// console.log(info.image_path)
					}
				}
				// 将foodDict赋值给this.foodsCategory
				this.foods = foodDict
				this.foodsCategory = foodsCategory

				// 通过事件总线发射foods属性出去
			// console.log(EventBus)
			// EventBus.$emit('food', this.foods)
			}).catch(e => {
				console.log(e)
			})
			}
		}
	}
</script>

<style>
	
</style>
