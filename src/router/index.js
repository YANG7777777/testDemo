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
    path: '/Date',
    component: Layout,
    redirect: '/Date/dates',
    name: 'Date',
    meta: { title: '日期控件', icon: 'el-icon-s-home' },
    children: [{
      path: 'dates',
      name: 'dates',
      meta: { title: 'dates', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/Date/dates/index.vue')
    }]
  },
  {
    path: '/changeBox',
    component: Layout,
    redirect: '/changeBox/changeBox',
    name: 'changeBox',
    meta: { title: 'changeBox', icon: 'el-icon-s-home' },
    children: [{
      path: 'changeBox',
      name: 'changeBox',
      meta: { title: 'changeBox', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/changeBox/index.vue')
    }]
  },
  {
    path: '/Map',
    component: Layout,
    redirect: '/Map/mapMutations',
    name: 'Map',
    meta: { title: 'Map', icon: 'el-icon-coin' },
    children: [{
      path: 'mapMutations',
      name: 'MapMutations',
      meta: { title: 'mapMutations', icon: 'example' },
      component: () => import(/* webpackChunkName: "MapMutations" */ '../views/map/mapMutations.vue')
    }]
  },
  {
    path: '/Api',
    component: Layout,
    redirect: '/Api/home',
    name: 'Api',
    meta: { title: 'Api', icon: 'el-icon-setting' },
    children: [
      {
        path: 'about',
        name: 'About',
        meta: { title: '$set', icon: 'example' },
        component: () => import(/* webpackChunkName: "about" */ '../views/tools/About.vue')
      }, {
        path: 'extend',
        name: 'Extend',
        meta: { title: 'extend', icon: 'example' },
        component: () => import(/* webpackChunkName: "extend" */ '../views/tools/index.vue')
      }, {
        path: 'tree',
        name: 'tree',
        meta: { title: 'tree', icon: 'example' },
        component: () => import(/* webpackChunkName: "tree" */ '../views/tree')
      }, {
        path: 'filters',
        name: 'Filters',
        meta: { title: 'filters', icon: 'example' },
        component: () => import(/* webpackChunkName: "extend" */ '../views/tools/filters.vue')
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
        component: () => import(/* webpackChunkName: "table" */ '../views/table/index.vue')
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
      },
      {
        path: 'configTable',
        name: 'configTable',
        meta: { title: 'configTable', icon: 'example' },
        component: () => import(/* webpackChunkName: "configTable" */ '../views/table/configTable.vue')
      },
      {
        path: 'CheckBoxTable',
        name: 'CheckBoxTable',
        meta: { title: 'CheckBoxTable', icon: 'example' },
        component: () => import(/* webpackChunkName: "CheckBoxTable" */ '../views/table/checkboxTable.vue')
      }
    ]
  },

  {
    path: '/chart',
    name: 'Echart',
    component: Layout,
    meta: { title: '图形', icon: 'el-icon-location-information' },
    children: [{
      name: 'Amap',
      path: 'ampa',
      meta: { title: '地图', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/amap')
    }, {
      name: 'Canvas',
      path: 'canvas',
      meta: { title: 'Canvas', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/canvas')
    }]
  },

  {
    path: '/tree',
    name: 'Tree',
    component: Layout,
    meta: { title: '树形控件', icon: 'el-icon-location-information' },
    children: [{
      path: 'tree',
      name: 'tree',
      meta: { title: 'tree递归渲染', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/tree')
    }, {
      name: 'Radio',
      path: 'radioTree',
      meta: { title: 'tree单选', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/tree/radioTree')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
