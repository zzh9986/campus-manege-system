<template>
    <div class="register-back-image">
        <div class="register-form">
            <p class="system-login-title">i&nbsp;校园&nbsp;-&nbsp;账号注册</p>
            <el-form :model="ruleForm" status-icon :rules="rules" label-position="right" ref="ruleForm" label-width="90px" class="register-rule-form">
                <el-form-item label="学号/工号" prop="stunum">
                    <el-input v-model="ruleForm.stunum"></el-input>
                </el-form-item>
                <el-form-item label="专业学科" prop="region">
                    <el-select v-model="ruleForm.region" placeholder="请选择专业学科">
                        <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="班级" prop="class">
                    <el-select v-model="ruleForm.class" placeholder="请选择班级">
                        <el-option v-for="item in className" :key="item.key" :label="item.class" :value="item.key"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="密码" prop="pass" required>
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" required>
                    <el-input type="password" v-model="ruleForm.checkPass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item class="form-btn-group">
                    <el-button @click="registerForm('ruleForm')" class="form-register-btn">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>       
</template>

<script>
import info from '../static/data'
export default {
  name: 'App',
  data() {
    var validatePass = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请输入密码'));
        } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
            callback();
        }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
            callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
        } else {
            callback();
        }
    };
    return {
        ruleForm: {
            pass: '',
            checkPass: '',
            region: '',
            class: '',
            stunum: ''
        },
        rules: {
            stunum: [
                { required: true, message: '请输入学号/工号', trigger: 'blur' }
            ],
            pass: [
                { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
                { validator: validatePass2, trigger: 'blur' }
            ],
            region: [
                { required: true, message: '请选择学科', trigger: 'blur' }
            ],
            class: [
                { required: true, message: '请选择班级', trigger: 'blur' }
            ]
        },
        option: [],
        className: []
    }
  },
  methods: {
      registerForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            const formValue = this.$refs.ruleForm.model;
            this.$message({
                message: '恭喜，注册成功，请登录~',
                type: 'success'
            });
            this.$router.push({ path: '/' })
          } else {
            this.$message.error('输入有误，请重新认真检查之后再次提交！');
            return false;
          }
        });
      }
  },
  created() {
      this.option = info.major
      this.className = info.classNum
      const center = document.getElementById("iCenter")
        if (center) {
            console.log(center)
            center.style.display = 'none'
        }
  }
}
</script>

<style>
::-webkit-scrollbar {
    display: none;
}
.register-back-image {
    position: absolute;
    left: 0;
    right: 0;
    top: -12px;
    bottom: -12px;
    box-sizing: border-box;
    background-image: url('../assets/background7.png');
    animation: flotar 6s ease-in-out infinite;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    min-height: 650px;
    /* background-attachment: fixed; */
}
.register-form {
    width: 430px;
    height: 550px;
    background-color: #fcfcfc;
    position: relative;
    top: 130px;
    border-radius: 10px;
    box-shadow: 0 10px 40px rgb(255 255 255 / 32%);
}
.system-login-title {
    font-size: 24px;
    font-weight: bold;
    color: #484852;
    text-align: center;
    margin: 40px 0 0 0;
}
.register-rule-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 45px 50px 10px 5px;
}
.form-register-btn {
    margin: 20px 0 0 80px;
}
</style>
