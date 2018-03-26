/*
	全站入口
		采用 hash 路由
*/

import App from '../../../component/page/app/app.vue';
import routes from '../../routes/index.js';
// import { sync } from 'vuex-router-sync';





const router = new VueRouter({
	routes: routes,
	mode: 'hash',
	linkExactActiveClass: 'active',
	scrollBehavior: function (to, from, savedPosition) {
		return savedPosition || { x: 0, y: 0 }
	}
})


// Some middleware to help us ensure the user is authenticated.
router.beforeEach((to, from, next) => {
	next();
})

// sync(store, router)

new Vue({
	el: '#app',
	router: router,
	render: h => h(App)
});
