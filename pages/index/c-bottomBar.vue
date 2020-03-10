<template>
  <view class="bottom-wrapper">
    <view class="bottom-item-left" >
			  <text v-if="item_num" class="shop-cart-items" :class="{animated:animate, heartBeat: animate}">
          <text class="red-point">{{item_num}}</text>
        </text>
      <text v-else class="shop-cart-noitem" :class="{animated:animate, heartBeat: animate}"></text>
			

    </view>
    <view class="bottom-item-right">
			<text v-if="item_num" @click="orderButton" class="order-btn">你命有了</text>
      <text v-else @click="orderButton">购物车跟你脑子一样空空如也</text>
			
    </view>
  </view>
</template>

<script scrop>
export default {
  data() {
		return {
      item_num: 0,
      animate: false,
		}
	},
	methods: {
		orderButton() {
      this.item_num += 1;
      this.animate = true;
      setTimeout(() => {
        this.animate = false
      },500)
		}
	}
};
</script>

<style>
.bottom-wrapper {
  display: flex;
  height: 88rpx;
  line-height: 88rpx;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: rgba(61, 61, 63, 0.9);
}

.bottom-item-left {
  position: relative;
  flex: 1;
  text-align: center;

}

/* 无商品情况 */
.shop-cart-noitem {
  /* position: relative; */
  /* display: inline-block; */
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  bottom: 10rpx;
  left: 30rpx;
  box-sizing: border-box;
  border: 1.333333vw solid #444;
  /* 50rpx为宽度的一半 */
  background-image: radial-gradient(circle, #363636 50rpx, #444 0);
  border-radius: 100%;
	will-change: transform;
	
}

.shop-cart-noitem:before {
  content: "";
  /* background: url(../../static/img/icon/shop_cart_full.svg) no-repeat; */
  background: url(http://mock.myzone.com/mock/shop_cart_empty.svg) no-repeat;
  background-size: 50%;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  top: 20rpx;
  right: 0;
  left: 20rpx;
  right: 0;
}

/* 有商品情况 */
.shop-cart-items {
	/* position: relative; */
  display: inline-block;
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  bottom: 10rpx;
  left: 30rpx;
  box-sizing: border-box;
  border: 1.333333vw solid #444;
	background-color: #3190e8;
  /* 50rpx为宽度的一半 */
  /* background-image: radial-gradient(circle, #363636 50rpx, #444 0); */
  border-radius: 100%;
	will-change: transform
}

.shop-cart-items:before {
  content: "";
  /* background: url(../../static/img/icon/shop_cart_full.svg) no-repeat; */
  background: url(http://mock.myzone.com/mock/shop_cart_full.svg) no-repeat;
  background-size: 50%;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  top: 20rpx;
  right: 0;
  left: 20rpx;
  right: 0;
}

/* 商品红色小点 */
.red-point {
	position: absolute;
	top:-10rpx;
	right:-10rpx;
	line-height: 1;
  background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);
  color: #fff;
  border-radius: 3.2vw;
  padding: .533333vw 1.333333vw;
	font-size: 18rpx;
}

/* 购物车动画效果 */

.cart-animate {
	animation-duration: 0.5s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  animation-play-state: running;
}

.bottom-item-right {
  position: relative;
  flex: 4;
}

.bottom-item-right text {
  position: absolute;
  right: 10rpx;
  color: #f8f8f8;
}

.bottom-item-right .order-btn {
	position: absolute;
	right: 0;
	padding: 0 60rpx;
	background-color: #38ca73;
}
</style>
