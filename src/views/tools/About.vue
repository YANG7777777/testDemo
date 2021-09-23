<template>
  <div class="about">
    <p v-bgColor='{color: "red"}'>{{host}}</p>
    <button @click="getHost">获取host</button>
    <p></p>
    <ul>
      <li
        v-for="(item, index) in setObj"
        :key="index"
      >
        {{item}}
      </li>
    </ul>
    <button @click="setData">添加数据</button>
    <button @click="delData">删除age</button>
  </div>
</template>

<script>

import mixins from '../../mixins'
import Vue from 'vue'

Vue.directive('imgUrl', function (el, binding) {
  el.style.backgroundColor = '#eee' // 图片加载前显示灰色背景
  var img = new Image()
  img.onload = function () {
    el.style.backgroundColor = ''
    el.src = binding.value
  }
  img.src = binding.value
})

export default {
  name: 'about',
  mixins: [mixins], // 混入对象的使用
  data () {
    return {
      url: '../assets/logo.png',
      setObj: {
        name: 'xiaohua',
        age: 28,
        sex: '男'
      }
    }
  },
  directives: {
    bgColor: {
      bind (el, binding, vnode) {
        // console.log(el)
        el.style.backgroundColor = binding.value.color
      }
    }
  },
  methods: {
    setData () {
      // this.setObj.people = 78 // 这样增加是无效的
      this.$set(this.setObj, 'people', 78)
    },
    delData () {
      this.$delete(this.setObj, 'age')
    }
  }
}
</script>

<style>
</style>
