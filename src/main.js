import Vue from 'vue'
import App from './App.vue'
import "@/mobile/flexible"
import "@/styles/reset.css"
import router from '@/router/index'
import {recommendMusicAPI} from '@/api'
import {Tabbar,TabbarItem,NavBar,Col,Row,Image as VanImage,Cell,Icon,Search,List} from 'vant'




async function fn(){
  const res = await recommendMusicAPI()
  console.log(res)
}
fn()
Vue.use(VanImage)
Vue.use(Col);
Vue.use(Row);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(NavBar);
Vue.use(Cell);
Vue.use(Icon);
Vue.use(Search);
Vue.use(List)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
