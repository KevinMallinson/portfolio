import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import BootstrapVue from 'bootstrap-vue';
// import VueMq from 'vue-mq';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'linearicons/dist/web-font/style.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '@/assets/scss/main.scss';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

// Vue.use(VueMq, {
// 	breakpoints: {
// 		sm: 576,
// 		md: 768,
// 		lg: 992,
// 		xl: Infinity
// 	},
// 	defaultBreakpoint: 'sm'
// });

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app');
