<template>
    <div class="teacher-all-data">
        <div class="visual-header">
            <div class="visual-header-left">
                <ul class="left-ul">
                    <li @click="pathJump('/teacher')">系统概览</li>
                    <li id="send" @click="pathJump('/send_notice')">发布通知</li>
                </ul>
            </div>
            <dv-decoration-11 class="center-title">i&nbsp;校园教师管理端</dv-decoration-11>
            <div class="visual-header-right">
                <ul class="right-ul">
                    <li @click="pathJump('/absence_detail')">请假详情</li>
                    <li @click="pathJump('/record_detail')">打卡详情</li>
                </ul>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        
    }
  },
  mounted() {
      const routeName = this.$router.app._route.name
      const ele = document.getElementById(routeName)
      ele.style.background = '#7bbfea'
  },
  methods: {
      pathJump(path) {
          console.log("发布通知里面的jump：", path)
          console.log("router", this.$router)
          console.log("router", this.$router.push)
          this.$router.push({ path })
      },
      jumpTo() {
          this.$router.push( { path: '/location' })
      }
  }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
.teacher-all-data {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: url("../../assets/teacher.png") no-repeat;
    background-size: cover;
    background-position: center;
}
.visual-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 90px;
}
.visual-header-left {
    display: inline-block;
    color: #fafafa;
}
.visual-header-right {
    display: inline-block;
    color: #fafafa;
}
.center-title {
    font-size: 20px;
    color: #92e3ff;
    display: inline-block;
    width: 280px;
    height: 70px;
    /* color: #94d6da; */
    overflow-wrap: break-word;
    text-shadow: 5px 2px 3px rgb(0 112 192);
}
.left-ul {
    list-style: none;
    display: inline;
}
.left-ul li {
    display: inline-block;
    padding: 0 50px;
    cursor: pointer;
    width: 68px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    border-radius: 10px;
}
.right-ul {
    list-style: none;
    display: inline;
}
.right-ul li {
    display: inline-block;
    padding: 0 50px;
    cursor: pointer;
    width: 68px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    border-radius: 10px;
}
</style>
