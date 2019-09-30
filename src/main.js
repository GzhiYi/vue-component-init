import Vue from 'vue'
import App from './App.vue'
import ComponentName from './components/index'

Vue.use(ComponentName)

new Vue({
  el: '#app',
  render: h => h(App)
})
