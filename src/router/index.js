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
    path: '/pdfUse',
    component: Layout,
    redirect: '/pdfUse/pdfUse',
    name: 'pdfUse',
    meta: { title: 'pdfUse', icon: 'el-icon-s-home' },
    children: [{
      path: 'pdfUse',
      name: 'pdfUse',
      meta: { title: 'pdfUse', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/pdfUse/index.vue')
    }]
  },
  {
    path: '/videoPlay',
    component: Layout,
    redirect: '/videoPlay/videoPlay',
    name: 'videoPlay',
    meta: { title: 'videoPlay', icon: 'el-icon-s-home' },
    children: [{
      path: 'videoPlay',
      name: 'videoPlay',
      meta: { title: 'videoPlay', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/videoPlay/index.vue')
    },
    {
      path: 'videoLinkPlay',
      name: 'videoLinkPlay',
      meta: { title: 'videoLinkPlay', icon: 'example' },
      component: () => import(/* webpackChunkName: "about" */ '../views/videoPlay/videoLinkPlay.vue')
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
    },
    {
      name: 'cascade',
      path: 'cascade',
      meta: { title: '级联', icon: 'example' },
      component: () => import(/* webpackChunkName: "form" */ '../views/form/cascade.vue')
    }
  ]
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
      },
      {
        path: 'fixedShow',
        name: 'fixedShow',
        meta: { title: 'fixedShow', icon: 'example' },
        component: () => import(/* webpackChunkName: "CheckBoxTable" */ '../views/table/fixedShow.vue')
      }
    ]
  },

  {
    path: '/chart',
    name: 'Echart',
    component: Layout,
    redirect: '/chart/ampa',
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
    },
    {
      name: 'aniLie',
      path: 'aniLie',
      meta: { title: '折线填充', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/canvas/aniLine.vue')
    },
    {
      name: 'flexCanvas',
      path: 'flexCanvas',
      meta: { title: '自适应', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/canvas/flexCanvas.vue')
    },
    {
      name: 'clearLine',
      path: 'clearLine',
      meta: { title: 'clearRect', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/canvas/clearLine.vue')
    },{
      name: 'hoverChart',
      path: 'hoverChart',
      meta: { title: 'hoverChart', icon: 'example'},
      component: () => import(/* webpackChunkName: "amap" */ '../views/chart/hoverChart/index.vue')
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
    }, {
      name: 'backTree',
      path: 'backTree',
      meta: { title: 'backTree', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/tree/backTree')
    }, {
      name: 'rollTree',
      path: 'rollTree',
      meta: { title: 'rollTree', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/tree/rollTree')
    },{
      name: 'lazyTree',
      path: 'lazyTree',
      meta: { title: '懒加载tree', icon: 'example' },
      component: () => import(/* webpackChunkName: "amap" */ '../views/tree/lazyTree')
    },
    {
      name: 'handleTree',
      path: 'handleTree',
      meta: { title: '操作tree', icon: 'example'},
      component: () => import('../views/tree/handleTree')
    },
    {
      name: 'strictlyTree',
      path: 'strictlyTree',
      meta: { title: 'strictlyTree', icon: 'example'},
      component: () => import('../views/tree/strictlyTree')
    }
  ]
  },
  {
    path: '/Tabs',
    name: 'Tabs',
    component: Layout,
    meta: { title: 'Tabs', icon: 'el-icon-location-information' },
    children: [{
      path: 'tabs',
      name: 'tabs',
      meta: { title: 'tabs', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/tabs')
    }]
  },
  {
    path: '/JumpRouter',
    name: 'JumpRouter',
    component: Layout,
    meta: { title: 'JumpRouter', icon: 'el-icon-location-information' },
    children: [{
      path: 'Jump',
      name: 'Jump',
      meta: { title: 'Jump', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/JumpRouter')
    },
    {
      path: 'targetJump',
      name: 'targetJump',
      meta: { title: 'targetJump', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/JumpRouter/targetJump')
    }]
  },
  {
    path: '/Tabs',
    name: 'Tabs',
    component: Layout,
    meta: { title: 'Tabs', icon: 'el-icon-location-information' },
    children: [{
      path: 'tabs',
      name: 'tabs',
      meta: { title: 'tabs', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/tabs')
    }]
  }, {
    path: '/Cookies',
    name: 'Cookies',
    component: Layout,
    meta: { title: 'Cookies', icon: 'el-icon-location-information' },
    children: [{
      path: 'Cookies',
      name: 'Cookies',
      meta: { title: 'Cookies', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/cookies')
    }]
  }, {
    path: '/reLink',
    name: 'reLink',
    component: Layout,
    meta: { title: 'reLink', icon: 'el-icon-location-information' },
    children: [{
      path: 'reLink',
      name: 'reLink',
      meta: { title: 'reLink', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/routerLink')
    }, {
      path: 'targetView',
      name: 'targetView',
      hidden: true,
      meta: { title: 'targetView', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/routerLink/targetView')
    }]
  }, {
    path: '/upload',
    name: 'upload',
    component: Layout,
    meta: { title: 'upload', icon: 'el-icon-location-information' },
    children: [{
      path: 'upload',
      name: 'upload',
      meta: { title: 'upload', icon: 'example' },
      component: () => import(/* webpackChunkName: "tree" */ '../views/upload')
    }]
  }
]

const router = new VueRouter({
  routes
})

export default router
