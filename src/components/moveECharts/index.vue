<template>
  <div>
    <div :id="index" style="width: 100%; height: 200px"></div>
  </div>
</template>
 
<script>
let echarts = require("echarts");
export default {
  props: {
    option: {
      type: Object,
    },
    index: {
      type: Number,
    },
  },
  methods: {
    drawChart() {
      let myChart = echarts.init(document.getElementById(this.index));
      myChart.setOption(this.option);
    },
  },
  mounted() {
    this.drawChart();
  },
  watch: {
    option: {
      handler(newVal, oldVal) {
        this.$nextTick(() => {
          this.drawChart();
        });
      },
    },
  },
};
</script>

<style scoped>
</style>