<template>
  <div>
    <div class="dashboard" :style="{'--bgColor' : changeFlag ? 'pink' : 'blue'}">
      <el-button type="primary" @click="handleCommit" v-preventReClick>防止多次点击</el-button>
    </div>
    <div>
      <el-button type="primary" @click="showLoading">loadingShow</el-button>
      <el-button type="primary" @click="closeLoading">loadingclose</el-button>
      <el-table
        :data="tableData"
        v-loading="loading"
        style="width: 100%">
          <div></div>
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址">
        </el-table-column>
      </el-table>
    </div>
    <div class="countTo">
      <count-to 
        :startVal='0' 
        :endVal='2017' 
        :duration='4000' 
        :autoplay='true' 
        :prefix="'+'" 
        :suffix="'个'"
      ></count-to>
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';
export default {
  name: 'DashBoard',
  components: { countTo },
  data() {
    return {
      changeFlag: false,
      loading: false,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    easingFn(item) {
      console.log('1212',item)
    },
    handleCommit() {
      this.changeFlag = !this.changeFlag
      console.log(123)
    },
    showLoading() {
      this.loading = true
    },
    closeLoading() {
      this.loading = false
    }
  },
  // 局部防止el-button重复点击
  directives: {
    preventReClick: {
      // 指令的定义
      inserted(el, binding) {
        el.addEventListener('click', () => {
          if (!el.disabled) {
            el.disabled = true
            setTimeout(() => {
              el.disabled = false
            }, binding.value || 2000)
          }
        })
      }
    }
  },
  mounted() {
    let cost = [[5,4],[3,6],[1,8],[3,9]]
    console.log(cost)
    // 有多少种组合方式
    for(var i = 0; i < cost.length; i ++) {
      console.log(cost[i])
    }

  }

}
</script>

<style>
.dashboard {
   background-color: var(--bgColor);
}
.el-loading-spinner {
    /*这个是自己想设置的 gif 加载动图*/
    background-image: url('../../directives/loading/logo_rot.svg');
    background-repeat: no-repeat;
    height: 100px;
    width: 100%;
    background-position: center;
    /*覆盖 element-ui  默认的 50%    因为此处设置了height:100%,所以不设置的话，会只显示一半，因为被top顶下去了*/
    top: 40%;
    animation: rotate 1s infinite linear;
  }
  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  .el-loading-spinner .circular {
    /*隐藏 之前  element-ui  默认的 loading 动画*/
    display: none;
  }

  .el-loading-spinner .el-loading-text {
    /*为了让文字在loading图下面*/
    margin: 106px 0px;
    color: #da70a0;
  }
  .countTo {
    margin-top: 20px;
    width: 100%;
    height: 200px;
    line-height: 200px;
    text-align: center;
    background-color: white;
    color: #da70a0;
    font-size: 30px;
    font-weight: 600;
  }
</style>
