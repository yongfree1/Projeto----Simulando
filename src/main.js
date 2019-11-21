import Vue from 'vue'
import VueLocalStorage from 'vue-ls'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import { ValidationProvider } from 'vee-validate';
import Meta from 'vue-meta';
 
// Register it globally
// main.js or any entry file.
Vue.use(Meta);

Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false

Vue.use(VueLocalStorage)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
