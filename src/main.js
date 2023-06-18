import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from '../routes';
import App from './App.vue';
import fonts from './assets/fonts/fonts.scss'
import Carousel3d from 'vue-carousel-3d';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(VueRouter);
Vue.use(Carousel3d);
Vue.use(Vuetify);

const vuetify = new Vuetify({
  theme: {
    dark: true
  }
});

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  Vuetify,
  vuetify,
  fonts,
  router,
  render: h => h(App)
}).$mount('#app');
