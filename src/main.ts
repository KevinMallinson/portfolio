import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'linearicons/dist/web-font/style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/scss/main.scss';

import './directives/firstElement.js';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
