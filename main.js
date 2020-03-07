import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(MyRequest)

const app = new Vue({
    ...App,
    myRequest
})
app.$mount()
