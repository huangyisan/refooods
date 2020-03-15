<template>
  <view class="bottom-wrapper">
    <view class="bottom-item-left" >
			  <text v-if="cartStatus" class="shop-cart-items" :class="{animated:animate, heartBeat: animate}">
          <text class="red-point">{{item_num}}</text>
        </text>
      <text v-else class="shop-cart-noitem" :class="{animated:animate, heartBeat: animate}"></text>
			

    </view>
    <view class="bottom-item-right">
			<text v-if="cartStatus" @click="cartAnimation.orderButton" class="order-btn" :data-status="cartStatus">你命有了</text>
      <text v-else @click="cartAnimation.orderButton" :data-status="cartStatus">购物车跟你脑子一样空空如也</text>
			
    </view>
  </view>
</template>

<script module="cartAnimation" lang="wxs">

  function orderButton(event, ins) {
    // 先判断当前cartStatus状况,根据状况选择不同class选择器
    var cartStatus = event.currentTarget.dataset.status
    // a = ins.callMethod('setCartStatusTrue')
    console.log(cartStatus)
    console.log(JSON.stringify(event))
    if (cartStatus) {
      var instance = ins.selectComponent('.shop-cart-items')
      instance.removeClass('animated')
      instance.removeClass('heartBeat')
      console.log('我是有,删除')
      instance.addClass('animated heartBeat')
      // instance.addClass('heartBeat')


    }else{
      var instance = ins.selectComponent('.shop-cart-noitem')
      instance.removeClass('animated')
      instance.removeClass('heartBeat')
      instance.addClass('animated heartBeat')
      // instance.removeClass('shop-cart-noitem')
      // instance.addClass('shop-cart-items')
    }

    ins.callMethod('setCartStatusTrue')


    
    // instance2.removeClass('animated')
    // instance2.removeClass('heartBeat')
    
  }
  module.exports = {
    orderButton: orderButton
  }

</script>


<script scrop>


import {debounce} from '../../utils/js/debounce'


export default {
  data() {
		return {
      item_num: 0,
      animate: false,
      debounceAnimate: null,
      // 控制底栏购物车行为
      cartStatus: false,
		}
  },
  created() {
      this.debounceAnimate = debounce(() => {
        this.animate = false
      },  1000)
    },

	methods: {
	// orderButton() {
  //     this.item_num += 1;
  //     this.animate = true;
  //     this.debounceAnimate()
  //   },
  setCartStatusTrue() {
      // console.log(this.isItem)
      this.cartStatus = true
      this.item_num += 1
    
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
  /* background: url(require("../../static/img/icon/shop_cart_full.svg")) no-repeat; */
  background: url(https://mock.kirakirazone.com/mock/shop_cart_empty.svg) no-repeat;
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
  background: url(https://mock.kirakirazone.com/mock/shop_cart_full.svg) no-repeat;
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
