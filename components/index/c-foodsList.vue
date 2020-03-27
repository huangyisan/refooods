<template>
  <view class="d-flex" style="height: 766rpx;">
    <scroll-view scroll-y="true" class="flex-1">
      <block v-for="(item,index) in foodsCategory" :key="index">
        <block v-for="(des,title) in item" :key="title">
          <!-- 第一个元素展现样式 -->
          <view v-if="index === 0"
            :class='[
				"side-left-item", 
				"active", 
				"inner_" + index,
				"d-flex", "flex-column", "j-center", "h-60", "py-2", "word-action-1", "font-sm","bg-muted","text-light-muted"
				]'
            :data-index="index"
			:data-toprpx="toprpx"
            @click="leftItem.btnClick"
          >
            <text class="p-2">{{title.trim()}}</text>
          </view>

          <view v-else
            :class='[
				"side-left-item", 
				"inner_" + index,
				"d-flex", "flex-column", "j-center", "h-60", "py-2", "word-action-1", "font-sm","bg-muted","text-light-muted"
			]'
            :data-index="index"
			:data-toprpx="toprpx"
            @click="leftItem.btnClick"
          >
            <text class="p-2">{{title.trim()}}</text>
          </view>
        </block>
      </block>
    </scroll-view>

    <scroll-view
      scroll-y="true"
      class="side-right-wrapper flex-4"
      :scroll-into-view="scrollTopId"
      :scroll-top="scrollTop"
      :data-toprpx="toprpx"
      scroll-with-animation="true"
      @scroll="leftItem.scrollInfo"
    >
	
      <block v-for="(item,index) in foodsCategory" :key="index">
        <block v-for="(des,title) in item" :key="title">
          <view class="item-title" :id='"item_" + index'>
			  <item-title :title=title :des=des></item-title>
		  </view>
          <block v-for="(iten, indey) in foods[title]" :key="indey"> 
			  <item-content :iten=iten @picLoad="getToprpx"></item-content>
          </block>
        </block>
      </block>
    </scroll-view>
  </view>
</template>

<script module="leftItem" lang="wxs">

  function btnClick(event, ins) {
    var owner = ins.selectAllComponents('.side-left-item')
    for (var i = 0; i < owner.length; i++) {
      owner[i].removeClass('active');
    }
    var instance = ins.selectComponent('.inner_' + event.currentTarget.dataset.index)
    instance.addClass('active')
	
	// 计算之后的高度用来对比
	var dataset = event.instance.getDataset();
	var wxsToprpx = dataset.toprpx
	var index = dataset.index
	if(index === 0){
		ins.callMethod("setScrollTopId", "item_0")
	}else if(index === 1){
		ins.callMethod("setScrollTopId", "item_1")
	}else if (index === 2){
		ins.callMethod("setScrollTopId", "item_2")
	}
	var newWxsToprpx = []
	var firstToprpx = wxsToprpx[0]
	for(var i=0; i<wxsToprpx.length; i++){
		newWxsToprpx.push(wxsToprpx[i] - firstToprpx)
	}
	
	var n1 = newWxsToprpx[0]
	var n2 = newWxsToprpx[1]
	var n3 = newWxsToprpx[2]
	
  }



  function scrollInfo(event,ins) {
    // toprpx = ins.callMethod("reToprpx")
	var dataset = event.instance.getDataset();
	// console.log(JSON.stringify(dataset))
	// 当前滚动距离
	var wxsScrollTop = event.detail.scrollTop
	var wxsToprpx = dataset.toprpx
	var firstToprpx = wxsToprpx[0]
	// 计算之后的高度用来对比
	var newWxsToprpx = []
	for(var i=0; i<wxsToprpx.length; i++){
		newWxsToprpx.push(wxsToprpx[i] - firstToprpx - 1)
	}
	var n1 = newWxsToprpx[0]
	var n2 = newWxsToprpx[1]
    var n3 = newWxsToprpx[2]
  
  var youhui = ins.selectComponent('.inner_0')
  var renqi = ins.selectComponent('.inner_1')
  var rexiao = ins.selectComponent('.inner_2')
	
	if (wxsScrollTop >= 0 && wxsScrollTop < n2){
    var youhui = ins.selectComponent('.inner_0')
    youhui.addClass('active')
    renqi.removeClass('active')
    rexiao.removeClass('active')
	}else if(wxsScrollTop >= n2 && wxsScrollTop < n3){
    youhui.removeClass('active')
    renqi.addClass('active')
    rexiao.removeClass('active')
  }else if(wxsScrollTop >= n3){
    youhui.removeClass('active')
    renqi.removeClass('active')
    rexiao.addClass('active')
  }
  }
  module.exports = {
    btnClick: btnClick,
    scrollInfo: scrollInfo
  }



</script>

<script>
	
import itemTitle from './c-itemTitle.vue'
import itemContent from './c-itemContent.vue'

export default {
  components: {
	  itemTitle,
	  itemContent,
  },
  props: {
    foodsCategory: {
      type: Array,
      default() {
        return [];
      }
    },
    foods: {
      type: Object,
      default() {
        return {};
      }
    },
    testMessage: ""
  },
  data() {
    return {
	  toprpx: [],
      currentIndex: 0,
      scrollTop: 0,
      // 存放组件自身高度
      scrollTopId: "item_0",
      cartList: {},
    };
  },
  methods: {
    // 左侧点击, 改变样式, 并且同步右侧内容
    itemClick(index) {
      // console.log(this.currentIndex)
      this.currentIndex = index;
      // this.scrollTop = -400
      switch (index) {
        case 0:
          this.scrollTopId = "vegetables";
          break;
        case 1:
          this.scrollTopId = "fruit";
          break;
        case 2:
          this.scrollTopId = "wine";
      }
    },
	
	print(e) {
		console.log(e)
		console.log(11111111111)
	},
	
    // + 图片点击追加
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

    // resetCurrentIndex(){
    //   this.currentIndex = null
    // },

    getToprpx(selector) {
      if (this.toprpx.length === 0){
      const titleTopArray = []
      const query = uni.createSelectorQuery().in(this);
      query.selectAll(selector).boundingClientRect(data => {
        for(let i = 0; i<data.length; i++){
          const top = data[i].top
          if (top > 0) {
            titleTopArray.push(top)
          }
        }
      }).exec();
	  // titleTopArray = titleTopArray.map(x => x-firstTitleTopArray)
      this.toprpx = titleTopArray
      console.log(this.toprpx)
      }	
    },
	
	setScrollTopId(id) {
		this.scrollTopId = id
	},

    reToprpx(){
      return this.toprpx
    },

    // 监听滚动
    scrollInfo(position) {
      // console.log(this.toprpx);
      let gapOne = this.toprpx[1] - this.toprpx[0];
      let gapTow = this.toprpx[2] - this.toprpx[0];
      if (position.target.scrollTop < gapOne) {
        this.currentIndex = 0;
        this.scrollTopId = "default";
      } else if (
        position.target.scrollTop > gapOne &&
        position.target.scrollTop < gapTow
      ) {
        this.currentIndex = 1;
        this.scrollTopId = "default";
      } else if (position.target.scrollTop > gapTow) {
        this.currentIndex = 2;
        this.scrollTopId = "default";
      }
    },

    ifLoad(){
      this.getToprpx(".item-title");
    }
  },

  mounted() {
    // this.$nextTick(() => {
    //   // this.getToprpx("#title");
    //   this.getToprpx("#热销");
    // })
    // setTimeout(() => {
    //   this.getToprpx("#title");
    // },2000)
    
    
    // this.getToprpx("#人气搭配 誉村套餐");
    // 

    // console.log(this.foodsCategory);
    // console.log(this.testMessage);
    // console.log(this.toprpx);
  },
};
</script>

<style scoped>

</style>
