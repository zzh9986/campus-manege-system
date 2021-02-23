<template>
    <div>
        <div class="student-header">
            <div class="student-left-logo">
                <img src="../assets/icon.png" class="student-logo" />
            </div>
            <div class="header-right">
                <span class="user-name">你好，zhow</span>
                <span @click="loginOut" class="login-out">退出登录</span>
            </div>
        </div>
        <div class="student-sider">
            <ul class="student-sider-ul">
                <li @click="pathClick('record')">
                    <i class="el-icon-message-solid sider-icon"></i>
                    <p class="sider-font">每日打卡</p>
                </li>
                <li class="student-sider-li" @click="pathClick('absence')">
                    <i class="el-icon-s-order sider-icon"></i>
                    <p class="sider-font">请假申请</p>
                </li>
                <li class="student-sider-li" @click="pathClick('notice')">
                    <i class="el-icon-s-promotion sider-icon"></i>
                    <p class="sider-font">查看通知</p>
                </li>
                <li></li>
            </ul>
        </div>
        <div class="student-content">
            <router-view></router-view>
        </div>
    </div>       
</template>

<script>
export default {
    name: 'App',
    data() {
        return {
        
        }
    },
    methods: {
        pathClick(name) {
            this.$router.push({
                name
            })
        },
        loginOut() {
            this.$router.push({ path: '/' })
        }
    }

}
</script>

<style>
.student-header {
    width: 100%;
    height: 90px;
    background-color: #02196b;
    display: flex;
    align-items: center;
}
.student-sider {
    width: 120px;
    height: 100%;
    position: absolute;
    top: 90px;
    background-color: #02196b;
}
.student-left-logo {
    position: absolute;
    margin: 27px 0 0 70px;
}
.student-logo {
    width: 147px;
    height: 50px;
    margin-left: 49px;
}
.student-sider-ul {
    list-style: none;
    padding: 0 20px;
    margin: 15px 0;
    font-size: 17px;
    color: #fcfcfc;
    cursor: pointer;
}
.student-sider-li {
    margin-top: 55px;
}
.sider-icon {
    margin-left: 27px;
}
.sider-font {
    margin: 7px 0;
}
.student-content {
    width: calc(100% - 120px);
    height: 100%;
    position: absolute;
    left: 120px;
    top: 90px;
    background-color: #fafafa;
    overflow: auto;
}
.header-right {
    width: 300px;
    height: 80px;
    position: absolute;
    right: 0;
    display: flex;
    align-items: flex-end;
    justify-content: space-evenly;
    padding-bottom: 32px;
}
.user-name {
    color: #fafafa;
}
.login-out {
    color: #fafafa;
    cursor: pointer;
}
</style>
