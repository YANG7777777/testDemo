<template>
  <div class="mapMutations">
    <HelloWorld />
    <h3>mapMutations</h3>
    <button @click="add">+</button>
    {{ count }}
    <button @click="minus">-</button>
    <p>{{arrayData | setArray | sortArray}}</p>

    <ul>
      <li
        v-for="(item, index) in arrayData"
        :key="index"
      >{{ item | filterOne(item, 20) }}</li>
    </ul>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'
import { mapMutations, mapGetters } from 'vuex'
import Vue from 'vue'
Vue.filter('filterOne', function (value, one) {
  // console.log(value, one)
  return (value + one)
})

export default {
  name: 'MapMutations',
  data () {
    return {
      extendCount: 0,
      arrayData: [1, 2, 4, 9, 3, 2, 6, 0, 7, 5]
    }
  },
  filters: {
    setArray (array) {
      return Array.from(new Set(array)) // 数组去重
    },
    sortArray (array) { // 数组排序
      return array.sort((a, b) => {
        return a - b
      })
    }
  },
  methods: {
    ...mapMutations(['add', 'minus']),
    getCount: () => {
      this.extendCount = 2000
    }
  },
  mounted () {
    this.$nextTick(() => {
      // console.log('dom更新延迟回调')
    })
  },
  computed: {
    ...mapGetters([
      'count'
    ])
  },
  components: {
    HelloWorld
  }
}
</script>
