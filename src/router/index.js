import Vue from 'vue'
import VueRouter from 'vue-router'
// 1 metoda routingu
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

// 3 metoda routingu
const NewPage = () => import('../views/NewPageView.vue')

const routes = [
  {
    // 1 metoda routingu
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    // 2 metoda routingu
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    // 3 metoda routingu
    path: '/new-page',
    name: 'new-page',
    component: NewPage//() => import('../views/NewPageView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
