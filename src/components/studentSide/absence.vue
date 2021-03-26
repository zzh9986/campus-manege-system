<template>
    <div>
        <div class="absence-form-box">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="absence-ruleform">
                <el-form-item label="请假类型" prop="type">
                    <el-select :style="{width: '276px'}" v-model="ruleForm.type" placeholder="请选择请假类型">
                        <el-option v-for="item in type" :key="item.value" :label="item.value" :value="item.type"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="是否离校" prop="leave">
                    <el-select :style="{width: '276px'}" v-model="ruleForm.leave" placeholder="请选择是否离校">
                        <el-option v-for="item in yesorno" :key="item.key" :label="item.value" :value="item.value"/>
                    </el-select>
                </el-form-item>
                <el-form-item label="请假时间" prop="date">
                    <el-date-picker
                        :style="{width: '276px'}"
                        v-model="ruleForm.date"
                        type="datetimerange"
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="销假地点" prop="location">
                    <el-radio-group v-model="ruleForm.location">
                        <el-radio label="长安校区"></el-radio>
                        <el-radio label="雁塔校区"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="紧急联系人" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                </el-form-item>
                <el-form-item label="请假情况说明" prop="desc">
                    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">申请请假</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import info from '../../static/data'
  export default {
    data() {
      return {
        ruleForm: {
          phone: '',
          date: '',
          type: '',
          location: '',
          desc: '',
          leave: ''
        },
        rules: {
          phone: [
            { min: 7, max: 11, message: '长度在 7 到 11 个字符', trigger: 'blur' }
          ],
          date: [
            { required: true, message: '请选择请假时间', trigger: 'blur' },
          ],
          type: [
            { required: true, message: '请选择请假类型', trigger: 'blur' }
          ],
          leave: [
            { required: true, message: '请选择是否离校', trigger: 'blur' }
          ],
          location: [
            { required: true, message: '请选择销假地点', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写请假情况说明', trigger: 'blur' }
          ]
        },
        type: [],
        yesorno: [],
        value1: []
      };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    const absenceValue = this.$refs[formName].model
                    console.log("请假数据", absenceValue);
                    this.$message({
                        message: '已成功请假~ 请记得及时销假',
                        type: 'success'
                    })
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
      },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    created() {
        this.type = info.absenceType
        this.yesorno = info.whether
        const center = document.getElementById("iCenter")
        if (center) {
            console.log(center)
            center.style.display = 'none'
        }
    }
  }
</script>

<style>
.absence-form-box {
    width: 30%;
    height: 100%;
    position: absolute;
    top: 50px;
    left: 100px;
}
.absence-ruleform .el-form-item {
  padding: 15px 0;
}
</style>