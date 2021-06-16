import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router=new VueRouter({
  mode:'history',
  routes,
  scrollBehavior(){
    return {x:0,y:0}
  }
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
