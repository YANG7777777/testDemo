import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/extend',
    name: 'extend',
    component: () => import(/* webpackChunkName: "extend" */ '../views/extend')
  },
  {
    path: '/form',
    name: 'form',
    component: () => import(/* webpackChunkName: "form" */ '../views/form')
  },
  {
    path: '/table',
    name: 'table',
    component: () => import(/* webpackChunkName: "table" */ '../views/table')
  },
  {
    path: '/adjTable',
    name: 'AdjTable',
    component: () => import(/* webpackChunkName: "AdjTable" */ '../views/table/adjTable.vue')
  },
  {
    path: '/bias',
    name: 'bias',
    component: () => import(/* webpackChunkName: "bias" */ '../views/table/bias.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
