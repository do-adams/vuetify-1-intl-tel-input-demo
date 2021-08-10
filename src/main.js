import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';

import 'intl-tel-input/build/css/intlTelInput.css';
import './main.css';

Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App)
}).$mount('#app');
