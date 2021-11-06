<template>
  <div>
    <div
      class="item"
      v-for="(item, index) in divList"
      :key="index"
      draggable="true"
      @dragstart="handleDragStart($event, item)"
      @dragenter="handleDragEnter($event, item)"
      @dragover.prevent="handleDragover($event, item)"
      @drop="handleDrop($event, item)"
      @dragend="handleDragEnd($event, item)"
    >
      <moveCharts :option="item" :index="index"></moveCharts>
    </div>
  </div>
</template>

<script>
import moveCharts from '../../components/moveECharts'
export default {
  data () {
    return {
      divList: [
        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 150, 80, 70, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        },

        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 200, 10, 80, 170, 110, 130],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        },

        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [20, 400, 150, 80, 7, 610, 30],
              type: 'bar',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        },

        {
          xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
          },
          yAxis: {
            type: 'value'
          },
          series: [
            {
              data: [120, 20, 50, 80, 70, 110, 130],
              type: 'line',
              showBackground: true,
              backgroundStyle: {
                color: 'rgba(220, 220, 220, 0.8)'
              }
            }
          ]
        }
      ],
      dragging: null
    }
  },
  components: {
    moveCharts
  },
  methods: {
    // 当元素被拖动时
    handleDragStart (e, item) {
      this.dragging = item
    },
    // 当被鼠标拖动的对象进入其容器范围内时触发此事件
    handleDragEnter (e) {
      // 为需要移动的元素设置dragstart事件
      e.dataTransfer.effectAllowed = 'move'
    },
    // 当某被拖动的对象在另一对象容器范围内拖动时触发此事件
    handleDragover (e) {
      // 首先把div变成可以放置的元素，即重写dragenter/dragover
      // 在dragenter中针对放置目标来设置!
      e.dataTransfer.dropEffect = 'move'
    },
    // 当放置被拖元素时
    handleDrop (e, item) {
      e.dataTransfer.dropEffect = 'move'
      if (item === this.dragging) {
        return
      }
      const newItems = [...this.divList]
      const from = newItems.indexOf(this.dragging)
      const to = newItems.indexOf(item)
      newItems[from] = item
      newItems[to] = this.dragging
      this.divList = newItems
    },
    // 完成元素拖动后触发
    handleDragEnd () {
      this.dragging = null
    }
  }
}
</script>

<style lang='less' scoped>
.item {
  display: inline-block;
  margin-left: 20px;
  margin-bottom: 20px;
  width: 48%;
  height: 200px;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
</style>
