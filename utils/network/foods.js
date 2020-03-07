import {request} from './request'

export function getFoodsInfo(url) {
  return request.get(url)
}


export class Foods {
  constructor(title,info) {
    //  顶栏title
    this.title = title
    // item id
    this.item_id = info.item_id
    // 商品信息
    this.name = info.name
    // 描述
    this.description = info.description
    // 月售
    this.month_sales = info.month_sales
    // 原材料
    this.materials = info.materials
    // 好评率
    this.satisfy_rate = info.satisfy_rate
    // 价格
    this.lowest_price = info.lowest_price
  }
}