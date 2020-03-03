<template>
	<view class='foods-wrapper'>

		<scroll-view scroll-y="true" class='side-left-wrapper'>
			<block v-for='(item,index) in foodsInfo' :key='item.category'>
				<view class='side-left-item' @click="itemClick(index)" :class="{active: index === currentIndex}">
					<text>{{item.category}}</text>
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
		</scroll-view>


		<scroll-view scroll-y="true" class='side-right-wrapper'>
			<block>
				<view class="vegetables">
					<food-item :foods="vegetables"></food-item>
				</view>
			</block>
			<block>
				<view class="fruit">
					<food-item :foods="fruit"></food-item>
				</view>
			</block>
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
			'foodsInfo': {
				type: Array,
				default () {
					return []
				}
			}
		},
		data() {
			return {
				currentIndex: 0,
				toprpx: [],
				vegetables: {
					'category': '蔬菜',
					'detail': ['青菜', '白菜', '西红柿', '土豆', '冬瓜']
				},
				fruit: {
					'category': '水果',
					'detail': ['西瓜', '香蕉', '橘子', '菠萝', '桃子']
				}
			};
		},
		methods: {
			// itemClick(index) {
			// 	// console.log(this.getToprpx('.test'))
			// 	console.log(this.toprpx)
			// 	this.currentIndex = index

			// },
			// getToprpx(selector) {
			// 	let view = this.createSelectorQuery().select(selector)
			// 	view.boundingClientRect(data => {
			// 		this.toprpx = data.top
			// 	}).exec();

			// },

			// onReady() {
			// 	this.toprpx.push(this.getToprpx('.test'))
			// }
		}
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

	.side-right-item {
		background: #fff;
		/*每个高30px*/
		height: 80rpx;
		/*垂直居中*/
		line-height: 80rpx;
		/*再设上下padding增加高度，总高42px*/
		padding: 15rpx 0;
		/*只设下边线*/
		/* border-bottom: 1px solid #de5cd1; */
		/*文字14px*/
		font-size: 29rpx;
		color: #101010;
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
</style>
