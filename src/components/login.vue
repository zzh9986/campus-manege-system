<template>
    <div id="app" class="system-back-image">
        <div class="login-wrapper">
            <p class="system-login-title">i&nbsp;校园管理系统</p>
            <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="90px" class="system-rule-form">
                <el-form-item label="学号/工号" prop="account" required>
                    <el-input v-model="ruleForm.account"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass" required class="form-pwd-box">
                    <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="用户角色" prop="resource" class="form-user-type">
                    <el-radio-group v-model="ruleForm.resource">
                    <el-radio label="student">学生</el-radio>
                    <el-radio label="teacher">教师</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item class="form-btn-group">
                    <el-button @click="submitForm('ruleForm')" class="form-login-btn">登录</el-button>
                    <el-button @click="regisAccount" class="form-clear-btn">注册</el-button>
                </el-form-item>
            </el-form>
        </div>
      </div>
    </div>       
</template>

<script>
import $ from 'jquery'
export default {
  name: 'App',
  data() {
    return {
        ruleForm: {
            pass: '',
            account: '',
            resource: ''
        },
        rules: {
            pass: [
                { required: true, message: '请输入密码', trigger: 'blur' }
            ],
            account: [
                { required: true, message: '请输入学号/工号', trigger: 'blur' }
            ],
            resource: [
                { required: true, message: '请选择用户角色', trigger: 'change' }
            ]
        }
    }
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
            if (valid) {
                const form_value = this.$refs[formName].model
                // console.log("loginValue", loginValue)
                if (form_value.resource === 'student') {
                    this.$router.push({ path: '/student' });
                } else {
                    this.$router.push({ path: '/teacher' });
                }
                axios({
                    method:'post',
                    url:'http://192.168.0.103:5000/login',
                    data: {
                        form_value
                    }
                }).then(function(resp){
                    console.log(resp.data);
                    // 登陆成功
                    if (resp.data.status === 1) {
                        if (loginValue.resource === 'student') {
                            this.$router.push({ path: '/student' });
                        } else {
                            this.$router.push({ path: '/teacher' });
                        }
                    } else {
                        //  登录失败原因
                        this.$message.error(resp.data.msg)
                    }
                    
                }).catch(resp => {
                    console.log('请求失败：'+resp.data.status);
                });
                
            } else {
                return false;
            }
        });
    },
    regisAccount() {
        this.$router.push({ path: '/register' })
    }
  },
  created() {
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
.system-back-image {
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
}
.login-wrapper {
    width: 430px;
    height: 450px;
    position: relative;
    top: 180px;
    background-color: #fcfcfc;
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
.system-rule-form {
    margin: 55px 50px 10px 5px;
}
.form-btn-group {
    display: flex;
}
.form-login-btn {
    color: #fff;
    background-color: #3164e4;
    border-color: #3164e4;
    margin: 35px 0 0 50px;
}
.form-clear-btn {
    color: #606266;
    background-color: #fff;
    margin-left: 40px!important;
}
.form-goto-regis {
    color: #484852;
    text-align: center;
    font-size: 13px;
    margin: 15px 0 0 49px;
}
.form-pwd-box {
    margin-top: 35px;
}
.form-user-type {
    margin-top: 30px;
}
</style>
