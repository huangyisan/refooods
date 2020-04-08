http://mock.myzone.com/mock/foodsinfo.json

## 高度 667px -> 1334rpx
1. swiper 150px -> 300rpx
2. search 25px -> 50rpx
3. line 2px -> 4rpx
4. list 385px -> 770rpx
5. buttom 45px -> 90rpx 


## 当前存在问题
1. ~~真机测试promise报错~~
2. ~~左侧栏点击反应过慢(已经定位问题,使用wxs解决.)~~
3. ~~background-image本地图片不显示(不支持)~~
4. ~~对动画需要防抖动处理(已完成)~~
5. scroll防抖
6. ~~真机图片不显示(已定位, ios不支持webp格式)~~
7. nextTick无效

## 想记录的笔记
1. animation的实现
2. 定位
3. 防抖动
4. wxs中传入js的内容


## Todo
1. + 点击追加食物. watch list
2. ~~hover修改伪类~~
3. 域名独立，直接拼接即可。包括image标签
4. 右边联动, 
5. 整理css
6. 改写搜索功能，采用uni的搜索

## 遇到的几个坑
1. promise 异常需要catch
2. ios不支持webp格式
