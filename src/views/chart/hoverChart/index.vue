<template>
  <div class="card-box" v-resize="resize" @click="setBgColor" :class="showBgColor ? 'cardStyle' : ''">
    <div class="left_text">
      <div class="middle_box">
        <div class="top">
          超过30天未联系
        </div>
        <div class="bottom">
          <span class="num"><animate-number from="0" to="0" duration="700" /></span>
          <span class="wei">个客户</span>
        </div>
      </div>
    </div>
    <div class="right_chart">
<!--      <div class="middle_box">-->
        <div id='cardChartFour' style="width: 60%; height: 60%;"></div>
<!--      </div>-->
    </div>
  </div>
</template>

<script>
// import echarts from "echarts";
import * as echarts from "echarts";
export default {
  props: {
    chartOptions: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      showBgColor: false,
      myChart: null,
    }
  },
  directives: {
    resize: {
      bind(el, binding) {
        let width = '', height = '';
        function isReize() {
          const style = document.defaultView.getComputedStyle(el);
          if (width !== style.width || height !== style.height) {
            binding.value();
          }
          width = style.width;
          height = style.height;
        }
        el.__vueSetInterval__ = setInterval(isReize, 300);
      },
      unbind(el) {
        clearInterval(el.__vueSetInterval__);
      }
    }
  },
  mounted() {
    this.drawCardChart()
  },
  methods: {
    setBgColor() {
      this.showBgColor = !this.showBgColor
    },
    drawCardChart() {
      let myChart = echarts.init(document.getElementById('cardChartFour'))
      let option = {
        color: ['rgba(247, 195, 196, 1)'],
        grid: {
          left: '0',
          right: '0',
          top: '0',
          bottom: '0',
          containLabel: false
        },
        xAxis: {
          show: false,
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          show: false,
          type: 'value'
        },
        series: [{
          data: [
            {
              value: 130,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'
                }
              }
            },
            {
              value: 200,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'
                }
              }
            }, {
              value: 150,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'

                }
              }
            }, {
              value: 80,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'

                }
              }
            }, {
              value: 70,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'

                }
              }
            }, {
              value: 110,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'

                }
              }
            }, {
              value: 130,
              itemStyle: {
                normal: {
                  color: 'rgba(247, 195, 196, 1)',
                  barBorderRadius:[4, 4, 4, 4]
                },
                emphasis: {
                  color: 'rgba(245, 103, 136, 1)'

                }
              }
            }],
          type: 'bar',
        }]
      };
      myChart.setOption(option);
      this.myChart = myChart
    },
    resize() {
      this.myChart.resize({
        animation: {
          duration: 700,
          easing: 'linear',
          // delay: 500,
        },
      })
    },
  }
}
</script>

<style lang="less" scoped>
.card-box {
  height: 70%;
  width: 70%;
  padding: 28px 28px 28px 35px;
  border: 0.8px solid rgba(224, 224, 224, 1);
  border-radius: 8px;
  background-color: white;
  display: flex;
  .left_text {
    width: 108px;
    //background-color: red;
    padding: 15px 0 8px 0;
    position: relative;
    .middle_box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .top {
      font-size: 14px;
      font-weight: 600;
      color: rgba(32, 32, 32, 1);
    }
    .bottom {
      margin-top: 8px;
      .num {
        font-size: 24px;
        font-weight: 700;
        color: rgba(245, 103, 136, 1);
      }
      .wei {
        font-size: 12px;
        font-weight: 400;
        color: rgba(128, 128, 128, 1);
      }
    }
  }
  .right_chart{
    flex: 1;
    position: relative;
    .middle_box {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
.card-box:hover {
  border: 0.8px solid rgba(227, 60, 100, 1);
  box-shadow: 0 2px 10px 5px rgba(219, 219, 219, 0.25);
}
.cardStyle {
  background: rgba(255, 247, 247, 1);
  border: 0.8px solid rgba(227, 60, 100, 1);
  box-shadow: 0 2px 10px 5px rgba(219, 219, 219, 0.25);
}
</style>
