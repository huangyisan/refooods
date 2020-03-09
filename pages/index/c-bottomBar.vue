<template>
  <view class="bottom-wrapper">
    <view class="bottom-item-left">
      <text class="shop-cart"></text>
    </view>
    <view class="bottom-item-right">
      <text>立即下单</text>
    </view>
  </view>
</template>

<script scrop>
export default {
  data() {
    return {};
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

.shop-cart {
  position: relative;
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
}

.shop-cart:before {
  content: "";
  /* background: url(../../static/img/icon/shop_cart_full.svg) no-repeat; */
  background: url(http://mock.myzone.com/mock/shop_cart_empty.svg) no-repeat;
  background-size: 50%;
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 9;
  top: 16rpx;
  right: 0;
  left: 16rpx;
  right: 0;
}

.bottom-item-right {
  position: relative;
  flex: 4;
}

.bottom-item-right text {
  position: absolute;
  right: 80rpx;
  color: #f8f8f8;
}
</style>
