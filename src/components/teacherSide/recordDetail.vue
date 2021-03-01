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
                    <li id="location" @click="pathJump('/record_detail')">打卡详情</li>
                </ul>
            </div>
        </div>
        <div class="record-detail-content">
            <dv-border-box-1 class="record-number">
                <div id="recorded"></div>
            </dv-border-box-1>
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
      this.drawRecorded()
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
      },
      drawRecorded() {
          let myRecord = this.$echarts.init(document.getElementById('recorded'))
          myRecord.setOption({
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    top: '5%',
                    left: 'center'
                },
                series: [
                    {
                        name: '打卡人数',
                        type: 'pie',
                        radius: ['40%', '70%'],
                        avoidLabelOverlap: false,
                        itemStyle: {
                            borderRadius: 10,
                            borderColor: '#fff',
                            borderWidth: 2
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },
                        emphasis: {
                            label: {
                                show: true,
                                fontSize: '20',
                                fontWeight: 'bold'
                            }
                        },
                        labelLine: {
                            show: false
                        },
                        data: [
                            {value: 104, name: '计科1班', itemStyle: {color: '#ee6666'}},
                            {value: 735, name: '计科2班', itemStyle: {color: '#73c0de'}},
                            {value: 580, name: '计科3班', itemStyle: {color: '#5470c6'}},
                            {value: 484, name: '计科4班', itemStyle: {color: '#91cb76'}},
                            {value: 300, name: '计科5班', itemStyle: {color: '#fc8451'}},
                            {value: 300, name: '计科6班', itemStyle: {color: '#9a60b4'}},
                            {value: 300, name: '计科7班', itemStyle: {color: '#faa755'}}
                        ]
                    }
                ]
            })
      }
  }
}
</script>

<style scoped>
#recorded {
    width: 100%;
    height: 100%;
}
.record-number {
    width: 37%;
    height: 40%;
    position: absolute;
    left: 5%;
}
.record-detail-content {
    width: 100%;
    height: 800px;
    position: absolute;
    top: 12%;
}
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
