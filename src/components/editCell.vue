<template>
  <div class="editCell">
    <div class="canEdit" v-if="CanEdit" @click="beginEdit">
      <label v-show="!editStatus">
        <span
          v-if="this.value!== null && this.value !== undefined && this.value !== ''"
        >{{ value }}{{this.suffix}}</span>
        <span v-else style="padding-left: 100%;padding-top: 100%;" />
      </label>
      <label v-show="editStatus">
        <input
          class="inputClass"
          :type="(this.targetValue.columnName === 'bei' ||this.targetValue.columnName === 'xiaozu')? 'text': 'number'"
          ref="input"
          v-on:keyup.13="loseFocus"
          :value="value"
          @blur="loseFocus"
        />
      </label>
    </div>

    <label class="cannotEdit" v-else>
      <span>{{ value }}{{ suffix }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'EditCell',
  props: {
    /**
     * 绑定值
     */
    value: {
      required: true
    },
    targetValue: {
      type: Object
    },
    /**
     * 是否可编辑单元格
     */
    CanEdit: {
      type: Boolean,
      default: false
    },
    /**
     * 是否可编辑table
     */
    isEditTable: {
      type: Boolean,
      default: false
    },
    /**
     * 格式化函数
     */
    formatData: {
      type: Function,
      default: value => {
        return value
      }
    },
    /**
     * 编辑后事件
     */
    afterEdit: {
      type: Function,
      default: () => { }
    },
    /**
     * 是否初始格式化
     */
    initFormat: {
      type: Boolean,
      default: false
    },
    suffix: {
      default: ''
    }
  },
  data () {
    return {
      editStatus: false,
      showData: '',
      defaultData: '',
      timeout: null
    }
  },
  methods: {
    /**
     * 单击开始编辑
     */
    beginEdit () {
      if (!this.isEditTable) { return }
      this.editStatus = this.CanEdit
      setTimeout(() => {
        this.$refs.input.focus()
      }, 1)
    },

    /**
     * @param {event} event
     * 丢失焦点关闭编辑状态，并保存数据
     */
    loseFocus (event) {
      const value = this.formatData(event.target.value)
      this.editData(value)
      this.closeEditStatus(value)
      if (this.value === value) { return } // 增加判断如果值没有变化 则不执行下面的函数，无需修改
      this.afterEdit(this.targetValue)
    },

    /**
     * 发布input事件修改数据
     * @param value
     */
    editData (value) {
      this.$emit('input', value)
    },

    /**
     * 关闭编辑状态
     * @param value
     */
    closeEditStatus (value) {
      this.editStatus = false
    },
    /**
     * 初始格式化数据
     */
    initData () {
      const newValue = this.formatData(this.value)
      this.$emit('input', newValue)
    }
  },
  mounted () {
    if (this.initFormat) {
      this.initData()
    }
  },
  watch: {
    value: function (newVal) {
      this.$emit('input', this.formatData(newVal))
    }
  }
}
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

input[type="number"] {
  -moz-appearance: textfield;
}
.editCell {
  height: 100%;
  width: 100%;
}
.inputClass {
  height: 30px;
  width: 100%;
  background-color: #fff;
  border-radius: 4px;
  border: 1px solid #dcdfe6;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  line-height: 30px;
  outline: 0;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  overflow: visible;
  touch-action: manipulation;
  margin: 0;
}
</style>
