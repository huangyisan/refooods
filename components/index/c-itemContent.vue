<template>
	<view class="food-info-wrapper py-2 pl-2">
		<image class="item-pic" :src="iten.img" lazy-load=true @load="ifLoad">
		<view class="food-info">
		  <text class="item-name">{{iten.name}}</text>
		  <text class="item-des">{{iten.description.trim()}}</text>
		  <text class="item-rate">月售{{iten.month_sales + '份' + ' ' + '好评率' + iten.satisfy_rate + '%'}}</text>
			<view class='price-cart-add'>
		      <text class="item-lowest-price">{{'￥' + iten.lowest_price}}</text>
		<!-- 点击后追加购物车 -->
			   <image class="item-cart-add-icon" src="../../static/img/icon/cart_add.svg" alt="" :data-info='[iten.name, iten.item_id, iten.lowest_price]' @click="foodAdd">		
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
	/* foods style */
	  .food-info-wrapper {
			
	    /* padding: 20rpx 0; */
	    /* padding-left: 2.666667vw; */
			/* padding-left: 20rpx; */
	
	    /* margin-bottom: 4rpx; */
	
	    display: flex;
	
	    min-height: 27.466667vw;
	    position: relative;
	  }
		.item-pic {
			width: 140rpx;
			height: 140rpx;
			margin-right: 20rpx;
			vertical-align: middle;
			border-radius: .533333vw;
			flex: 1
		}
	
		.food-info {
			display: flex;
			flex-direction: column;
			flex: 3
		}
	
		.item-name {
			font-weight: 700;
	    overflow: hidden;
	    font-size: 24rpx;
	    white-space: nowrap;
	    /* width: 40vw; */
	    text-overflow: ellipsis;
		}
		.item-des {
	
	    margin: 1.333333vw 0;
	    font-size: 22rpx;
	    color: #999;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	
	    width: 42.666667vw;
		}
	
		.item-rate {
			margin: 1.333333vw 0;
	    font-size: 22rpx;
	    color: #999;
	    overflow: hidden;
	    text-overflow: ellipsis;
	    white-space: nowrap;
	
	    width: 42.666667vw;
		}
	
		.item-lowest-price {
			color: #ff5339;
			font-size: 26rpx;
		}
	
		/* 物品添加图标 */
		.price-cart-add {
			width: 100%;
			position: relative;
		}
	  .item-cart-add-icon {
	    display: inline-block;
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 50rpx;
			bottom: 4rpx;
	  }
</style>
