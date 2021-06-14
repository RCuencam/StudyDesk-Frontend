import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import routes from './routes/routes'

Vue.config.productionTip = false

const router=new VueRouter({
  mode:'history',
  routes
})
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
