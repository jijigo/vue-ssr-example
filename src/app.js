import Vue from 'vue';
import { sync } from 'vuex-router-sync'

import App from './App.vue';
import { createStore } from './store'
import { createRouter } from './router'

export function createApp () {
	// 创建 router 实例
	const router = createRouter()
	const store = createStore()

	// 同步路由状态(route state)到 store
	sync(store, router)

  const app = new Vue({
		router,
		store,
    render: h => h(App)
  })
  return { app, router, store }
}