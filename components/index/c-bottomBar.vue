<template>
  <view class="text-center d-flex position-fixed w-100 bb-color-1 position-fixed" style="height:90rpx; line-height: 90rpx;">
    

    
    <view class="text-center flex-1">
			  <!-- <text v-if="cartStatus" class="shop-cart-items" :class="{animated:animate, heartBeat: animate}"> -->
          <text v-if="cartStatus" class="shop-cart-items">
          <text class="red-point font-s">{{item_num}}</text>
          <!-- <text class="red-point">{{cartAnimation.itemNum(item_num)}}</text> -->
        </text>
      <!-- <text v-else class="shop-cart-noitem" :class="{animated:animate, heartBeat: animate}"></text> -->
      <text v-else class="shop-cart-noitem"></text>
			

    </view>
    <view class="bottom-item-right flex-4" style="line-height: 90rpx" @click="show">

			<text v-if="cartStatus" class="order-btn text-muted bb-color-2" :data-status="cartStatus" :data-itemnum="item_num">你命有了</text>
      <!-- <text v-if="cartStatus" @click="cartAnimation.orderButton" class="order-btn text-muted bb-color-2" :data-status="cartStatus" :data-itemnum="item_num"  @click="popUp">你命有了</text> -->
      
      <text class="text-muted" v-else @click="cartAnimation.orderButton" :data-status="cartStatus" :data-itemnum="item_num">购物车跟你脑子一样空空如也</text>
			
    </view>
    <view style="position: fixed;">
      <c-popup :popupClass="popupClass" @hide='hide' @forbidPenetration='forbidPenetration' @forbidScroll='forbidScroll'></c-popup>
    </view>
    
    
  <!-- 底部上拉弹出框 -->
<!--    <view class="_popup" :class="popupClass">
       <view class="_mask" @click.stop="hide" @touchmove.stop.prevent = "forbidScroll">
         <view class="_body" @click.stop="forbidPenetration">
           <view>
             <text>内容</text>
           </view>
           
         </view>
       </view>
     </view> -->
  </view>
  
</template>

<script module="cartAnimation" lang="wxs">
  
  // var itemNum = function(item_num) {
  //   return item_num
  // }
  


  function orderButton(event, ins) {
    // var scrollTimeout
    // 先判断当前cartStatus状况,根据状况选择不同class选择器
    var cartStatus = event.currentTarget.dataset.status
    // a = ins.callMethod('setCartStatusTrue')
    console.log(JSON.stringify(event))
    if (cartStatus) {
      var instance = ins.selectComponent('.shop-cart-items')
      // instance.removeClass('animated')
      // instance.removeClass('heartBeat')
      console.log('我是有,删除')
      instance.addClass('animated heartBeat')
      // scrollTimeout = setTimeout(function(){
      //   instance.removeClass('animated')
      //   instance.removeClass('heartBeat')
      // }, 1000);
      // instance.addClass('heartBeat')


    }else{
      var instance = ins.selectComponent('.shop-cart-noitem')
      // instance.removeClass('animated')
      // instance.removeClass('heartBeat')
      instance.addClass('animated heartBeat')
      // scrollTimeout = setTimeout(function(){
      //   instance.removeClass('animated')
      //   instance.removeClass('heartBeat')
      // }, 1000);
      // instance.removeClass('shop-cart-noitem')
      // instance.addClass('shop-cart-items')
    }

    ins.callMethod('setCartStatusTrue')
    // instance2.removeClass('animated')
    // instance2.removeClass('heartBeat')
    
  }
  module.exports = {
    orderButton: orderButton,
    // itemNum: itemNum
  }

</script>


<script>


import {debounce} from '../../utils/js/debounce'
import cPopup from '@/components/common/c-popup.vue'

// Popup components
// import uniPopup from "@/components/uni-popup/uni-popup.vue"


export default {
  components:{
    cPopup,
    // uniPopup
    // uniPopup,
  },
  data() {
		return {
      popupClass:"none",
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
        console.log(this.animate+'1111')
      },  1000)
    },

	methods: {
    // 绑定空函数，用来阻止穿透带来的滚动
    forbidScroll() {},
    // 绑定空函数，用来阻止穿透带来的其他非滚动效果
    forbidPenetration() {},
    
    hide(){
      console.log('this is hide')
      this.popupClass = 'hide'
      setTimeout(()=>{
        this.popupClass = 'none'
      },200)
    },
    
    show(){
      this.popupClass = 'show'
      console.log('this is show')
      
    },
    orderButton() {
        // this.item_num += 1;
        this.animate = true;
        this.debounceAnimate()
      },
    setCartStatusTrue() {
        // console.log(this.isItem)
        this.cartStatus = true
        this.item_num += 1
        this.animate = true;
        setTimeout(() => {
          this.animate = false;
        },1000)
        // this.debounceAnimate()
        console.log(this.animate)
        console.log(this.item_num)
      },
    // popUp() {
    //   this.$refs.popup.open()
    // }
    }
  };
</script>

<style scoped>

/* 无商品情况 */
.shop-cart-noitem {
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  bottom: 10rpx;
  left: 30rpx;
  box-sizing: border-box;
  border: 10rpx solid #444;
  /* 50rpx为宽度的一半 */
  background-image: radial-gradient(circle, #363636 50rpx, #444 0);
  border-radius: 100%;
	will-change: transform;
}

.shop-cart-noitem:before {
  content: "";
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
  position: absolute;
  width: 100rpx;
  height: 100rpx;
  bottom: 10rpx;
  left: 30rpx;
  box-sizing: border-box;
  border: 10rpx solid #444;
	background-color: #3190e8;
  border-radius: 100%;
	will-change: transform
}

.shop-cart-items:before {
  content: "";
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
  /* border-radius: 3.2vw; */
  border-radius: 32rpx;
  padding: 4rpx 10rpx;
}

.bottom-item-right text {
  position: absolute;
  right: 10rpx;
}

.bottom-item-right .order-btn {
	position: absolute;
	right: 0;
  padding: 0 60rpx;
}

/* 弹出框效果 */


</style>
