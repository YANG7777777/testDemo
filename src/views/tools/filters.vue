<template>
  <div class="filters">
    <div>数组排序： {{arrayData | setArray | sortArray}}</div>
  </div>
</template>

<script>
export default {
  name: 'Filters',
  data () {
    return {
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
  }

}
</script>

<style>
</style>
