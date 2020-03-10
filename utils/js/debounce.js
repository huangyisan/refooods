// 防抖函数
// 在delay时间后,执行传入的func函数, 如果再次出发, 则因为存在timer, 被clearTimeout函数给取消, 前一次等待执行的func函数, 依次类推, 直到最后一次, 等待delay中, 没有新的触发, 则执行func.

export function debounce(func, delay) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}