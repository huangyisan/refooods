<template>
	<view class="py-2 pl-2 d-flex">
		<image class="mr-2 rounded flex-1" style="height: 140rpx;" :src="iten.img" lazy-load=true @load="ifLoad">
		<view class="d-flex flex-3 flex-column">
		  <text class="font-weight of-h word-action-2 font">{{iten.name}}</text>
		  <text class="my font-sm of-h word-action-2 text-light-muted" style="max-width: 380rpx;">{{iten.description.trim()}}</text>
		  <text class="item-rate my font-sm of-h word-action-2 text-light-muted" style="max-width: 380rpx;">月售{{iten.month_sales + '份' + ' ' + '好评率' + iten.satisfy_rate + '%'}}</text>
			<view class='d-flex py-1 j-sb' style="max-width: 350rpx;">
		      <text class="font-price text-price">{{'￥' + iten.lowest_price}}</text>
		<!-- 点击后追加购物车 -->
			   <image class="add-icon-size" src="/static/img/icon/cart_add.svg" alt="" :data-info='[iten.name, iten.item_id, iten.lowest_price]' @click="foodAdd">		
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			iten:Object,
			
		},
		data() {
			return {
				cartList: {},
			}
		},
		methods:{
			ifLoad(){
				this.$emit("picLoad",".item-title")
			},
			
			foodAdd(event) {
			    // let num = 0
			    let itemName, itemId, itemPrice, itemNum, isFood
			    [itemName, itemId, itemPrice, itemNum] = event.currentTarget.dataset.info
			    isFood = this.cartList[itemId]
			    console.log(this.cartList[itemId])
			    if (isFood){
			      itemNum = isFood.item_num
			      itemNum += 1
			    }else{
			      itemNum = 1
			    }
			    this.cartList[itemId] = {item_name: itemName, item_price: itemPrice, item_num:itemNum, item_id: itemId}
			    console.log(this.cartList)
			},
		}
	}
</script>

<style>
</style>
