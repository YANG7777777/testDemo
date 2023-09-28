<template>
  <div class="container">
<!--      类型选择-->
      <el-select v-model="dataInfo.type" @change="typeChange">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
<!--      置灰状态-->
      <el-date-picker
        v-if="dataInfo.type == null"
        disabled
        style="margin-left: 10px;border-radius: 2px;"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        value-format="yyyy-MM-dd"
      >
      </el-date-picker>

<!--       选择日 -->
      <el-date-picker
        v-if="dataInfo.type === 1"
        style="margin-left: 10px;"
        class="pickerStyle"
        v-model="dateOne"
        type="date"
        @change="pickerDateOne"
        format="yyyy-MM-dd"
        value-format="yyyy-MM-dd"
        :clearable="false"
        placeholder="选择日期">
      </el-date-picker>

<!--      选择周-->
      <div class="weekBox" v-if="dataInfo.type === 2">
        <el-date-picker
          v-model="pickerWeek"
          :editable="false"
          style=" opacity: 0;position: absolute;z-index: 100;margin-left: 10px;"
          size="small"
          :picker-options="{ 'firstDayOfWeek': 1 }"
          type="week"
          format="yyyy/MM/dd"
          :clearable="false"
          :default-time="['00:00:00', '23:59:59']"
          placeholder="选择查询时间"
          @change="changeWeek"
        >
        </el-date-picker>
        <div class="weekStyle">
          <el-input
            v-model="weekTime"
            value-format="yyyy/MM/dd"
            style="width: 210px;"
            suffix-icon="el-icon-date"
            :clearable="false"
            placeholder="请选择日期">
          </el-input>
        </div>
      </div>

      <!-- 选择月 -->
      <el-date-picker
        v-if="dataInfo.type === 3"
        style="margin-left: 10px;"
        v-model="pickerMonth"
        format="yyyy/MM"
        value-format="yyyy-MM"
        type="month"
        @change="pickerDateMonth"
        :clearable="false"
        placeholder="选择月">
      </el-date-picker>

      <!-- 自定义 -->
      <el-date-picker
        v-if="dataInfo.type === 4"
        style="margin-left: 10px;"
        v-model="selectDate"
        type="daterange"
        range-separator="-"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        format="yyyy/MM/dd"
        value-format="yyyy-MM-dd"
        :picker-options="pickerOptions"
        :clearable="false"
        @change="pickerDate"
        @input="change($event)"
      >
      </el-date-picker>
  </div>
</template>

<script>
import moment from "moment";
export default {
  props: {
    type: {
      type: Number,
      default: 1
    }
  },
  watch: {
    dataInfo:{
      handler(newVal) {
        this.$emit('handleDate', newVal)
      },
      deep: true
    }
  },
  data() {
    return {
      typeOptions: [ // 日期类型
        {
          label: '日',
          value: 1,
        },{
          label: '周',
          value: 2,
        },{
          label: '月',
          value: 3,
        },{
          label: '自定义',
          value: 4,
        },
      ],
      dataInfo: {
        type: null,
        startDate: '',
        endDate: ''
      },
      selectDate: [],
      dateOne: '',
      pickerWeek: '',
      weekTime: '',
      startTimeNum: '',
      endTimeNum: '',
      pickerMonth: '',
      choiceDate: '',
      pickerOptions: {
        onPick: ({ maxDate, minDate }) => {
          this.choiceDate = minDate.getTime()
          if (maxDate) {
            this.choiceDate = ''
          }
        },
        disabledDate: time => {
          if (this.choiceDate) {
            const startDay =
              (new Date(this.choiceDate).getDate() - 1) * 24 * 3600 * 1000
            const endDay =
              (new Date(
                  new Date(this.choiceDate).getFullYear(),
                  new Date(this.choiceDate).getMonth() + 1,
                  0
                ).getDate() -
                new Date(this.choiceDate).getDate()) *
              24 *
              3600 *
              1000
            const minTime = this.choiceDate - startDay
            const maxTime = this.choiceDate + endDay
            return time.getTime() < minTime || time.getTime() > maxTime
          }
        }
      },
    }
  },
  methods: {
    // 限制日期选中范围
    change(val) {
      this.$emit('input', val)
    },
    typeChange(val) {
      this.dataInfo.startDate = ''
      this.dataInfo.endDate = ''
      this.dataInfo.type = val
      this.selectDate = []
      if(val === 1) {
        this.dateOne = moment().format("YYYY-MM-DD") // 当前日期
        this.dataInfo.startDate = this.dateOne
        this.dataInfo.endDate = this.dateOne
      } else if(val === 2) {
        let val = moment().format('YYYY-MM-DD') //如果要回显的话只需传入开始时间
        this.changeWeek(val)
      } else if(val === 3) {
        let month = moment().format("Y") + '-' + moment().format("M")
        this.pickerMonth = month
        this.pickerDateMonth(month)
      } else {
        let cur = moment().format("YYYY-MM-DD");
        this.selectDate = [cur, cur]
        this.dataInfo.startDate = cur
        this.dataInfo.endDate = cur
      }

    },
    pickerDateOne(val) {
      this.dataInfo.startDate = val
      this.dataInfo.endDate = val
    },
    initWeek() {
      let weekOfDay = moment(this.pickerWeek).format("E");
      let Monday = moment(this.pickerWeek)
        .subtract(weekOfDay - 1, "days")
        .format("YYYY-MM-DD"); //周一日期
      let Sunday = moment(this.pickerWeek)
        .add(7 - weekOfDay, "days")
        .format("YYYY-MM-DD"); //周日日期
      this.dataInfo.startDate = Monday
      this.dataInfo.endDate = Sunday
    },
    // 周选择器开始时间和结束时间
    changeWeek(val) {
      let todayDay = val ? new Date(val) : new Date()
      let todayOfWeek = todayDay.getDay()
      let spendDay = 1
      if (todayOfWeek !== 0) {
        spendDay = 7 - todayOfWeek // 开始时间到结束时间还有几天
      }
      //  86400000为一天的毫秒数
      this.startTimeNum = todayDay.valueOf() - (6 - spendDay) * 86400000 // 开始时间时间戳
      this.endTimeNum = todayDay.valueOf() + spendDay * 86400000 // 结束时间时间戳

      let startTimeStr = moment(this.startTimeNum).format("YYYY-MM-DD") // 时间戳转字符串
      let endTimeStr = moment(this.endTimeNum).format("YYYY-MM-DD")
      this.weekTime = startTimeStr + '  -  ' + endTimeStr // 选择的范围
      this.dataInfo.startDate = startTimeStr.replace(/\//g, "-")
      this.dataInfo.endDate = endTimeStr.replace(/\//g, "-")

    },
    pickerDateMonth(val) {
      this.dataInfo.startDate = moment(val).startOf('month').format('YYYY-MM-DD')
      this.dataInfo.endDate = moment(val).endOf('month').format('YYYY-MM-DD')
    },
    pickerDate(val) {
      this.dataInfo.startDate = val[0]
      this.dataInfo.endDate = val[1]
    },
  }
}
</script>

<style lang="less" scoped>
.container {
  display: inline-block;
  .weekBox {
    display: inline-block;
  }
}
</style>
