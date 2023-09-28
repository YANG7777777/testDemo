<template>
    <div>
        <h1>限制日期的组件(不可选择今天之后的日期)</h1>
        <el-date-picker
            @focus="rowBack"
            v-model="dataValue"
            :pickerOptions="pickerOptions"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
        ></el-date-picker>
        <div class="abd"></div>
        <div>
             <el-date-picker
                style="width: 320px;"
                v-model="value1"
                type="week"
                value-format="yyyy-MM-dd"
                :clearable="false"
                :picker-options="{ firstDayOfWeek: 1 }"
                @input="init"
            ></el-date-picker>
        </div>
        <div style="background: pink;">
            <h1>日期类型选择器</h1>
            <date-type-picker
                @handleDate="getDate"
            ></date-type-picker>
        </div>
    </div>
</template>

<script>
import moment from 'moment'
import dateTypePicker from '@/components/dateTypePicker/index.vue'
export default {
    name: 'dates',
    components: {
        dateTypePicker
    },
    data: function () {
        return {
            value1: "",
            dataValue: [],
            minDate: {},
            maxDate: {},
            pickerOptions: {
                disabledDate: (time) => {
                    try {
                        if (this.maxDate !== undefined && this.maxDate - time.getTime() > 7 * 24 * 3600 * 1000) {
                            return true
                        } else return this.minDate !== undefined && time.getTime() - this.minDate > 7 * 24 * 3600 * 1000;
                    } catch (err) {
                        console.log(err)
                    } finally {
                        const curDate = new Date().getTime()
                        const three = 90 * 24 * 3600 * 1000
                        const threeMonths = curDate - three
                        // eslint-disable-next-line no-unsafe-finally
                        return time.getTime() > Date.now() || time.getTime() < threeMonths
                    }
                    // console.log(this.maxDate,this.minDate)
                    // console.log(time.getTime())
                    // console.log(this.dataValue)
                }
            },
        }
    },
    mounted() {
        this.getCurrentDate()
    },
    methods: {
        getDate(val) {
            console.log('current select date', val)
        },
        formateDate(value){
            return moment(value).format("YYYY-MM-DD")
        },
        rowBack() {
            this.dataValue = []
            this.minDate = {}
            this.maxDate = {}
        },
        init() {
            console.log('1212121212',this.value1);
            let weekOfday = moment(this.value1).format("E");
            let Monday = moment(this.value1)
            .subtract(weekOfday - 1, "days")
            .format("YYYY-MM-DD"); //周一日期
            let Sunday = moment(this.value1)
            .add(7 - weekOfday, "days")
            .format("YYYY-MM-DD"); //周日日期
            console.log(Monday, Sunday);
        },
        getCurrentDate() {
            let cur = moment().format('YYYY-MM-DD')
            this.value1 = cur
            this.init()
        }
    }
}
</script>

<style lang='less' scoped>
</style>
