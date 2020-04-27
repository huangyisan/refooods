<template>
  <view class="_popup" :class="popupClass">
    <view class="_mask" @click.stop="hide" @touchmove.stop.prevent = "forbidScroll">
      <view class="_body" @click.stop="forbidPenetration">
        <view>
          <text>内容</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props:{
      popupClass: {
        type: String,
        default: 'show'
      }
    }
  }
</script>

<style scoped>
._popup, ._mask {
  position: fixed;
  top:0;
  height: 100%;
  width: 100%;
}

._popup {
  z-index: 2000;
  display: none;
  
}
._mask {
  z-index: 2002;
  background-color: rgba(255,0,0,0.5);
}

._popup ._body {
  position: fixed;
  bottom: -1035rpx;
  /* bottom: 0; */
  
  /* 左右残留一点内边距 */
  width: 100%;
  /* left:4%; */
  padding: 0, 4%;
  border-radius: 20rpx 20rpx 0 0;
  height: 1035rpx;
  background-color: #FFFFFF;
  display: flex;
  flex-direction: column;
  z-index: 2003;
  
}

._popup.show {
  display: block;
}

.show ._mask {
  animation: showPopupMask 0.2s linear both;
}

.show ._body {
  animation: showPopupBody 0.2s linear both;
}

._popup.hide {
  display: block;
}

.hide ._mask {
  animation: hidePopupMask 0.2s linear both;
}

.hide ._body {
  animation: hidePopupBody 0.2s linear both;
}

._popup.none {
  display: none;
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
  0%{ transform: translateY(0); }
  100%{ transform: translateY(-100%);}
}

@keyframes hidePopupBody{
  /* 下滑退出效果 */
  0%{ transform: translateY(-100%); }
  100%{ transform: translateY(0); }
}

._popup .none {
  display: none;
}
</style>
