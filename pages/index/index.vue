<template>
	<view class="content">
		<c-swiper :imgList='imgList'></c-swiper>
		<!-- <c-search></c-search> -->
    <uni-search-bar @confirm="search" @input="input" ></uni-search-bar>
		<c-line></c-line>
		<c-foods-list :foodsCategory='foodsCategory' :foods='foods' :testMessage='testMessage'></c-foods-list>
		<c-bottom-bar></c-bottom-bar>
    
    <!-- 底部上拉弹出框 -->
    <view class="_popup">
      <view class="_mask">
        <view class="_body">
          <text>内容</text>
        </view>
      </view>
    </view>
    
	</view>
</template>

<script>
	// import cSwiper from './c-swiper.vue'
	import cSwiper from '@/components/index/c-swiper.vue'
	import cSearch from '@/components/index/c-search.vue'
	import cLine  from '@/components/common/c-line.vue'
	import cFoodsList from '@/components/index/c-foodsList.vue'
	import cBottomBar from '@/components/index/c-bottomBar.vue'
  
  // third component
  import uniSearchBar from '@/components/uni-search-bar/uni-search-bar.vue'


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
			cFoodsList,
			cBottomBar,
      cSearch,
      cLine,
      // Third component
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
  
  ._popup, ._mask {
    position: fixed;
    top:0;
    height: 100%;
    width: 100%;
  }
  
  ._popup {
    z-index: 8;
    
  }
  ._mask {
    z-index: 9;
    background-color: rgba(0,0,0,0.5);
  }
  
  ._popup ._body {
    position: fixed;
    bottom: 0;
    /* 左右残留一点内边距 */
    width: 92%;
    left:4%;
    /* padding: 0, 4%; */
    border-radius: 20rpx 20rpx 0 0;
    height: 1035rpx;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    z-index: 10;
    
  }
  
  ._popup .show {
    display: block;
  }
  
  .show ._mask {
    animation: showPopupMask 0.2s linear both;
  }
 
  .show ._body {
    animation: showPopupBody 0.2s linear both;
    
  }
  
  ._popup .hide {
    display: block;
  }
  
  .hide ._mask {
    animation: hidePopupMask 0.2s linear both;
    
  }
  
  .hide ._body {
    animation: hidePopupBody 0.2s linear both;
    
  }
  
  /* 控制mask遮罩动画 */
  @keyframes showPopupMask{
    /* 开始透明度为0 */
    0%{ opacity: 0; }
    /* 最终透明度为1 */
    100%{ opacity: 1;}
  }
  
  @keyframes hidePopupMask{
    /* 开始透明度为1 */
    0%{ opacity: 1; }
    /* 最终透明度为0 */
    100%{ opacity: 0;}
  }
  
  /* 控制body层动画 */
  @keyframes showPopupBody{
  /* 上滑呈现效果 */
    0%{ transform: rotateY(0); }
    100%{ transform: rotateY(-100%);}
  }
  
  @keyframes hidePopupBody{
    /* 下滑退出效果 */
    0%{ transform: rotateY(-100%); }
    100%{ transform: rotateY(0); }
  }
  
  ._popup .none {
    display: none;
  }
	
</style>
