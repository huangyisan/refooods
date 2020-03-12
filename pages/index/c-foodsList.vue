<template>
	<view class='foods-wrapper'>

		<scroll-view scroll-y="true" class='side-left-wrapper'>
			<block v-for='(item,index) in foodsInfo' :key='index'>
				<view  :data-index="index" class='side-left-item inner' @click="clickwxs.tapName">
					<text>{{item.category}}</text>
				</view>

			</block>
		</scroll-view>
	</view>
</template>

<script module="clickwxs" lang="wxs">
function tapName(event, ins) {
	console.log(event.currentTarget.dataset.index)
	console.log(JSON.stringify(event))
  var owner = ins.selectAllComponents('.side-left-item')
  console.log(owner)
  for (var i = 0; i < owner.length; i++) {
    owner[i].removeClass('active');
    console.log('.inner' + i)
  }
	var instance = ins.selectComponent('.inner' + event.currentTarget.dataset.index)
	// var instance = ins.selectComponent('.inner')
	console.log(instance)
  instance.addClass('active')
  instance.getDataset()
  console.log('done')
}
module.exports = {
  tapName: tapName
}
</script>

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
				scrollTop: 0,
				toprpx: [],
				scrollTopId: 'aa',
				vegetables: {
					'category': '川菜',
					'detail': ['麻婆豆腐', '回锅肉', '宫保鸡丁', '夫妻肺片', '蚂蚁上树', '蒜泥白肉', '口水鸡']
				},
				fruit: {
					'category': '粤菜',
					'detail': ['干炒牛河', '酸甜排骨', '铁板牛肉', '豉油鸡', '云吞面','广东粥','烧味']
				},
				wine: {
					'category': '鲁菜',
					'detail': ['奶汤蒲菜', '糖醋鲤鱼', '爆炒腰花', '锅烧肘子', '干烂虾仁', '油爆肚头']
				}
			};
		},
		methods: {
			itemClick(index) {
				console.log(this.toprpx)
				this.currentIndex = index

			},
		},
		computed:{
			inner(index) {
				return `inner${index}`
			}
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
		/* background: #f8f8f8; */
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
		/* background-color: #FFFFFF; */
	}

	.mytext {
		display: inline-block;
		background-color: #007AFF;
	}

</style>
