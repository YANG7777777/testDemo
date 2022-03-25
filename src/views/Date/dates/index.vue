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
    </div>
</template>

<script>
export default {
    name: 'dates',
    data: function () {
        return {
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
            }
        }
    },
    methods: {
        rowBack() {
            this.dataValue = []
            this.minDate = {}
            this.maxDate = {}
        }
    }
}
</script>

<style lang='less' scoped>
</style>
