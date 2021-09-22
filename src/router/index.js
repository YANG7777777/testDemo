import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../views/LayOut/index.vue'

Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/dashboard',
    hidden: false,
    meta: { title: '首页', icon: 'el-icon-s-home' },
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      meta: { title: 'dashboard', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/dashboard')
    }]

  },
  {
    path: '/Api',
    component: Layout,
    redirect: '/Api/home',
    name: 'Api',
    meta: { title: 'Api', icon: 'el-icon-setting' },
    children: [{
      path: 'home',
      name: 'Home',
      meta: { title: 'mapMutations', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
    }, {
      path: 'about',
      name: 'About',
      meta: { title: '$set', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }, {
      path: 'extend',
      name: 'Extend',
      meta: { title: 'extend', icon: 'example' },
      component: () => import(/* webpackChunkName: "extend" */ '../views/extend')
    }, {
      path: 'tree',
      name: 'tree',
      meta: { title: 'tree', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/tree')
    }]
  },
  {
    path: '/form',
    name: 'form',
    component: Layout,
    meta: { title: '表单', icon: 'el-icon-s-order' },
    children: [{
      name: 'form',
      path: 'form',
      meta: { title: 'form', icon: 'example' },
      component: () => import(/* webpackChunkName: "form" */ '../views/form')
    }]
  },

  {
    path: '/tableLearn',
    name: 'TableLearn',
    component: Layout,
    redirect: '/tableLearn/table',
    meta: { title: '表格', icon: 'el-icon-s-cooperation' },
    children: [
      {
        path: 'table',
        name: 'table',
        meta: { title: '可编辑', icon: 'example' },
        component: () => import(/* webpackChunkName: "table" */ '../views/table')
      },
      {
        path: 'adjTable',
        name: 'AdjTable',
        meta: { title: '合并', icon: 'example' },
        component: () => import(/* webpackChunkName: "AdjTable" */ '../views/table/adjTable.vue')
      },
      {
        path: 'bias',
        name: 'bias',
        meta: { title: 'bias', icon: 'example' },
        component: () => import(/* webpackChunkName: "bias" */ '../views/table/bias.vue')
      }
    ]
  },

  {
    path: '/amap',
    name: 'Amap',
    component: Layout,
    meta: { title: '地图', icon: 'el-icon-location-information' },
    children: [{
      name: 'Amap',
      path: 'ampa',
      meta: { title: '地图', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/amap')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
