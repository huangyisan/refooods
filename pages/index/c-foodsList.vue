<template>
	<view class='foods-wrapper'>

		<scroll-view scroll-y="true" class='side-left-wrapper'>
			<block v-for='(item,index) in foodsCategory' :key='index'>
				<block v-for='(des,title) in item' :key='title'>
				<view class='side-left-item' @click="itemClick(index)" :class="{active: index === currentIndex}">
					<text>{{title}}</text>
				</view>
				<!-- 				<view class='side-left-item'>2</view>
			<view class='side-left-item'>3</view>
			<view class='side-left-item'>4</view>
			<view class='side-left-item'>5</view>
			<view class='side-left-item'>6</view>
			<view class='side-left-item'>7</view>
			<view class='side-left-item'>8</view>
			<view class='side-left-item'>9</view> -->
					</block>
			</block>
		</scroll-view>


		<scroll-view scroll-y="true" class='side-right-wrapper' :scroll-into-view="scrollTopId" :scroll-top="scrollTop"
		 scroll-with-animation="true" @scroll="scrollInfo">

			<block v-for="(item,index) in foodsCategory" :key='index'>
				<block v-for='(des,title) in item' :key='title'>
				<view class='itemTitle'>{{title}} {{des}}</view>
				<view v-for="(iten, indey) in foods[title]" :key='indey'>
					<text>{{iten.name}}</text>
					<text>{{iten.description}}</text>
					<text>{{iten.month_sales}}</text>
					<text>{{iten.materials}}</text>
					<text>{{iten.satisfy_rate}}</text>
					<text>{{iten.lowest_price}}</text>
					</view>
</block>

			</block>
			<!-- <block v-for="(item,index) in foods" :key='index'>
				<block v-for="(iten, indey) in item" :key='indey'>
				<view class='food-item'>
					<text>{{iten.name}}</text>
					<text>{{iten.description}}</text>
					<text>{{iten.month_sales}}</text>
					<text>{{iten.materials}}</text>
					<text>{{iten.satisfy_rate}}</text>
					<text>{{iten.lowest_price}}</text>
					</view>
				</block>
			</block> -->

			<view class="vegetables" id='vegetables'>
				<view class='itemTitle'>川菜系</view>
				<block v-for="(item,index) in foods.detail" :key="index">
			<view class="food-item">
				<image src="../static/img/foodlist/rightOne.jpg" mode="" class='itemPic'></image>
				<text class='itemTitle'>{{item}}</text>
				<text class='itemDescription'>麻婆豆腐，是四大中国菜系中代表川菜的一種。</text>
			</view>
		</block>
			</view>
			
		</scroll-view>
	</view>
</template>

<script>
	import foodItem from '../../components/foodItem.vue'

	export default {
		components: {
			foodItem
		},
		props: {
			'foodsCategory': {
				type: Array,
				default () {
					return []
				}
			},
			'foods': {
				type: Object,
				default() {
					return {}
				}
			},
			'testMessage':''
		},
		data() {
			return {
				wFoodsCategory: this.foodsCategory,
				wFoods: this.foods,
				lFoodsCategory:[],
				lFoods: {},


				currentIndex: 0,
				scrollTop: 0,
				// 存放组件自身高度
				toprpx: [],
				scrollTopId: 'vegetable',
				vegetables: {
					'category': '川菜',
					'detail': ['麻婆豆腐', '回锅肉', '宫保鸡丁', '夫妻肺片', '蚂蚁上树', '蒜泥白肉', '口水鸡']
				},
				fruit: {
					'category': '粤菜',
					'detail': ['干炒牛河', '酸甜排骨', '铁板牛肉', '豉油鸡', '云吞面', '广东粥', '烧味']
				},
				wine: {
					'category': '鲁菜',
					'detail': ['奶汤蒲菜', '糖醋鲤鱼', '爆炒腰花', '锅烧肘子', '干烂虾仁', '油爆肚头']
				}
			};
		},
		methods: {
			// 左侧点击, 改变样式, 并且同步右侧内容
			itemClick(index) {
				// console.log(index)
				this.currentIndex = index
				// this.scrollTop = -400
				switch (index) {
					case 0:
						this.scrollTopId = 'vegetables'
						break;
					case 1:
						this.scrollTopId = 'fruit'
						break;
					case 2:
						this.scrollTopId = 'wine'
				}
			},
			// getToprpx(selector) {
			// 	let view = this.createSelectorQuery().select(selector)
			// 	view.boundingClientRect(data => {
			// 		this.toprpx.push(data.top)
			// 	}).exec();

			// },

			// 监听滚动
			scrollInfo(position) {
				console.log(this.foods)
				let gapOne = this.toprpx[1] - this.toprpx[0]
				let gapTow = this.toprpx[2] - this.toprpx[0]
				if (position.target.scrollTop < gapOne ) {
					this.currentIndex = 0
					this.scrollTopId = 'default'
				}else if(position.target.scrollTop > gapOne && position.target.scrollTop < gapTow){
					this.currentIndex = 1
					this.scrollTopId = 'default'
				}else if(position.target.scrollTop > gapTow){
					this.currentIndex = 2
					this.scrollTopId = 'default'
				}
			}
		},

		mounted() {

		this.getToprpx('.vegetables')
		this.getToprpx('.fruit')
		this.getToprpx('.wine')

		console.log(this.foodsCategory) 
		console.log(this.testMessage)
		console.log(this.toprpx)
		},
	}
</script>

<style scoped>
	.foods-wrapper {
		display: flex;
		flex-direction: row;
		position: absolute;
		/* background-color: #C03189; */
		width: 100%;
		top: 350rpx;
		bottom: 88rpx;
	}

	.side-left-wrapper {
		/* background-color: #F0AD4E; */
		flex: 1;

	}

	.side-right-wrapper {
		/* background-color: #829fff; */
		flex: 3;
	}

	.side-left-item {
		background: #f8f8f8;
		/*每个高30px*/
		height: 80rpx;
		/*垂直居中*/
		line-height: 80rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #dedede; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
		text-align: center;
	}


	.active {
		color: red;
		background-color: #FFFFFF;
	}

	.mytext {
		display: inline-block;
		background-color: #007AFF;
	}

	.side-left-item:active {
		color: red
	}
	
	.itemTitle {
		/* height: 40rpx; */
		text-align: center;
		/* text-align: 40rpx; */
		margin: 40rpx auto;
		color: #007AFF;
	}


	/*  */
</style>
