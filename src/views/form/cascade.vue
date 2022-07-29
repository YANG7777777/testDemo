<template>
    <div>
        <el-radio v-model="radio" label="1">数字</el-radio>
        <el-radio v-model="radio" label="0">汉字</el-radio>

        <el-form :model="numberValidateForm"  :rules="rules" ref="numberValidateForm" label-width="100px" class="demo-ruleForm">
            <el-form-item
                label="年龄"
                prop="age"
            >
                <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off" style="width: 200px;"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
                <el-button @click="resetForm('numberValidateForm')">重置</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
  export default {
    data() {
        var checkNumber =(rule, value, callback) =>{
            if(!value) {
                return callback(new Error('请输入'));
            }else if (this.radio == '1' && !/^[0-9]*$/g.test(value)) {
                return callback(new Error('只能输入数字'))
            } else if (this.radio == '0' && /[^\u4E00-\u9FA5]/g.test(value)) {
                return callback(new Error('只能输入汉字'))
            }else {
                callback()
            }
        }
      return {
        numberValidateForm: {
          age: ''
        },
        radio: '1',
        rules: {
            age: [
                {required:true,validator:checkNumber,trigger: 'blur'}
            ],
        }
      }
     
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>