<template>
    <div class="teacher-all-data">
        <div class="visual-header">
            <div class="visual-header-left">
                <ul class="left-ul">
                    <li id="teacher" @click="pathJump('')">系统概览</li>
                    <li @click="pathJump('/send_notice')">发布通知</li>
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
        <div class="main-box">
            <div class="visual-left">
                <dv-border-box-1 class="left-top">
                    <p class="top-left-title">请假人数占比</p>
                    <div id="absence">

                    </div>
                </dv-border-box-1>
                <dv-border-box-1 class="left-bottom">
                    <p class="top-left-title">打卡地点占比</p>
                    <dv-conical-column-chart class="record-position" :config="percent"/>
                </dv-border-box-1>
            </div>
            <div class="visual-middle">
                <div id="info" :style="{width: '50%', height: '90%'}"></div>
            </div>
            <div class="visual-right">
                <dv-border-box-1 class="right-top">
                    <p class="top-left-title">请假人数排名</p>
                    <dv-scroll-ranking-board class="ranking-board" :config="configs"/>
                </dv-border-box-1>
                <dv-border-box-1 class="right-bottom">
                    <p class="top-left-title">打卡情况</p>
                    <div id="record"></div>
                </dv-border-box-1>
            </div>
        </div>
    </div>
</template>

<script>
import echartsData from './echartsData/data'
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
        information: {},
        configs: {
            data: [
            {
              name: '计科1703班',
              value: 55
            },
            {
              name: '计科1704班',
              value: 70
            },
            {
              name: '计科1706班',
              value: 78
            },
            {
              name: '计科1705班',
              value: 66
            },
            {
              name: '计科1708班',
              value: 80
            },
            {
              name: '计科1701班',
              value: 45
            },
            {
              name: '计科1702班',
              value: 29
            }
        ]
        },
        numbers: {
            data: [
                {
                  name: '陕西西安',
                  value: 167
                },
                {
                  name: '北京海淀',
                  value: 123
                },
                {
                  name: '陕西宝鸡',
                  value: 98
                },
                {
                  name: '东北哈尔滨',
                  value: 75
                },
                {
                  name: '海南省三亚市',
                  value: 66
                },
                {
                  name: '成都',
                  value: 66
                }
            ],
            colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
            unit: '人数',
            showValue: true
        },
        percent: {
            data: [
                {
                  name: '宝鸡',
                  value: 55
                },
                {
                  name: '西安',
                  value: 120
                },
                {
                  name: '北京',
                  value: 71
                },
                {
                  name: '驻马店',
                  value: 66
                },
                {
                  name: '沈阳',
                  value: 80
                },
                {
                  name: '三亚',
                  value: 35
                },
                {
                  name: '银川',
                  value: 15
                }
            ],
            img: [
              'http://datav.jiaminghi.com/img/conicalColumnChart/1st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/2st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/3st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/4st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/5st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/6st.png',
              'http://datav.jiaminghi.com/img/conicalColumnChart/7st.png'
            ],
            showValue: true
        }
    }
  },
  mounted() {
      const routeName = this.$router.app._route.name
      const ele = document.getElementById(routeName)
      ele.style.background = '#7bbfea'
      this.information = echartsData.options
      this.drawMap();
      this.drawAbsencePie();
      this.drawCampus();
  },
  methods: {
      drawMap() {
        var myChart = this.$echarts.init(document.getElementById('info'));
        const option = {
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['中国疫情图']
            },
            visualMap: {
                type: 'piecewise',
                left: '6%',
                textStyle: {
                    color: '#fff'
                },
                pieces: [{
                        min: 1000,
                        max: 1000000,
                        label: '大于等于1000人',
                        color: '#b80a09'
                    },
                    {
                        min: 500,
                        max: 999,
                        label: '确诊500-999人',
                        color: '#e64446'
                    },
                    {
                        min: 100,
                        max: 499,
                        label: '确诊100-499人',
                        color: '#f57567'
                    },
                    {
                        min: 10,
                        max: 99,
                        label: '确诊10-99人',
                        color: '#ff9885'
                    },
                    {
                        min: 1,
                        max: 9,
                        label: '确诊1-9人',
                        color: '#f5bba7'
                    },
                ],
                color: ['#E0022B', '#E09107', '#A3E00B']
            },
            toolbox: {
                show: true,
                orient: 'vertical',
                left: 'right',
                top: 'center',
                feature: {
                    mark: {
                        show: true
                    },
                    dataView: {
                        show: false,
                        readOnly: false
                    },
                    restore: {
                        show: false
                    },
                    saveAsImage: {
                        show: false
                    }
                }
            },
            roamController: {
                show: true,
                left: 'right',
                mapTypeControl: {
                    'china': true
                }
            },
            series: [{
                name: '确诊数',
                type: 'map',
                mapType: 'china',
                roam: false,
                label: {
                    show: true,
                    color: 'rgb(249, 249, 249)'
                },
                data: []
            }]
        };
        myChart.setOption(option);
            $.ajax({
                url: "https://view.inews.qq.com/g2/getOnsInfo?name=disease_h5",
                dataType: "jsonp",
                success: function (data) {
                  console.log(data.data)
                    var res = data.data || "";
                    res = JSON.parse(res);
                    console.log(res);

                    var newArr = [];
                    if (res) {
                        //获取到各个省份的数据
                        var province = res.areaTree[0].children;
                        for (var i = 0; i < province.length; i++) {
                            var json = {
                                name: province[i].name,
                                value: province[i].total.confirm
                            }
                            newArr.push(json)
                        }
                        myChart.setOption({
                            series: [{
                                name: '确诊数',
                                type: 'map',
                                mapType: 'china',
                                roam: false,
                                label: {
                                    show: true,
                                    color: 'rgb(249, 249, 249)'
                                },
                                data: newArr
                            }]
                        });
                    }
                }

            })
      },
      drawAbsencePie() {
          let myPie = this.$echarts.init(document.getElementById('absence'))
          myPie.setOption({
              tooltip: {
                  trigger: 'item'
              },
              series: [
                  {
                      name: '请假人数',
                      type: 'pie',
                      radius: ['40%', '70%'],
                      data: [
                          {value: 1048, name: '计科1706班', itemStyle: {color: '#ee6666'}},
                          {value: 735, name: '计科1701班', itemStyle: {color: '#73c0de'}},
                          {value: 580, name: '计科1705班', itemStyle: {color: '#5470c6'}},
                          {value: 484, name: '计科1704班', itemStyle: {color: '#91cb76'}},
                          {value: 300, name: '计科1702班', itemStyle: {color: '#fc8451'}},
                          {value: 300, name: '计科1703班', itemStyle: {color: '#9a60b4'}}
                      ],
                      emphasis: {
                          itemStyle: {
                              shadowBlur: 10,
                              shadowOffsetX: 0,
                              shadowColor: 'rgba(0, 0, 0, 0.5)'
                          }
                      }
                  }
              ]
          })
      },
      drawCampus() {
          let myRecord = this.$echarts.init(document.getElementById('record'))
          myRecord.setOption({
              xAxis: {
                  type: 'category',
                  data: ['01班', '02班', '03班', '04班', '05班', '06班'],
                  axisLine: {
                      lineStyle: {
                          color: '#fff'
                      }
                  },
              },
              yAxis: {
                  type: 'value',
                  name: '人数',
                  axisLine: {
                      lineStyle: {
                          color: '#fff'
                      }
                  },
                  splitLine: {
                      show: false
                  }
              },
              series: [{
                  data: [
                      {
                          value: 20,
                          itemStyle: {
                              color: '#ee6666'
                          }
                      },
                      {
                          value: 25,
                          itemStyle: {
                              color: '#73c0de'
                          }
                      },
                      {
                          value: 32,
                          itemStyle: {
                              color: '#5470c6'
                          }
                      },
                      {
                          value: 38,
                          itemStyle: {
                              color: '#91cb76'
                          }
                      },
                      {
                          value: 40,
                          itemStyle: {
                              color: '#fc8451'
                          }
                      },
                      {
                          value: 35,
                          itemStyle: {
                              color: '#9a60b4'
                          }
                      }
                  ],
                  type: 'bar',
                  itemStyle: {
                      normal: {
                          label: {
                              show: true, //开启显示
                              position: 'top', //在上方显示
                              textStyle: { //数值样式
                                  color: '#fff',
                                  fontSize: 16
                              }
                          }
							        }
                  }
              }]
          })
      },
      pathJump(path) {
          this.$router.push({ path })
      }
  }
}
</script>

<style scoped>
body {
    margin: 0;
    padding: 0;
}
#info {
    position: absolute;
    top: 26px;
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
.main-box {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
}
.visual-left {
    width: 30%;
    height: 100%;
    /* background: coral; */
}
.visual-middle {
    width: 45%;
    height: 100%;
    /* background: cornflowerblue; */
}
.visual-right {
    width: 25%;
    height: 100%;
    /* background: darkgoldenrod; */
}
.top-left-title {
    color: #92e3ff;
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    overflow-wrap: break-word;
    text-shadow: 5px 2px 3px rgb(0 112 192);
}
.left-top {
    width: 100%;
    height: 40%;
    margin-top: 30px;
}
.right-top {
    width: 100%;
    height: 40%;
    margin-top: 30px;
}
.ranking-board {
    width: 85%;
    height: 270px;
    position: absolute;
    left: 8%;
    top: 15%;
}
#absence {
    width: 100%;
    height: 280px;
    left: 3%;
    top: 11%;
    /* left: 26px; */
}
#campus {
    width: 390px;
    height: 280px;
}
#record {
    width: 100%;
    height: 100%;
    /* margin-top: 10%;
    margin-left: 8%; */
    /* margin: 10px 0 0 10px; */
}
.left-bottom {
    width: 100%;
    height: 40%;
    margin-top: 40px;
}
.record-position {
    width: 90%;
    height: 80%;
    margin-top: 5%;
    margin-left: 6%;
    /* margin: 49px 0 0 18px; */
}
.right-bottom {
    width: 100%;
    height: 40%;
    margin-top: 40px;
}
.teacher-all-data {
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: #292c34; */
    overflow: auto;
    background: url("../assets/teacher.png") no-repeat;
    background-size: cover;
    background-position: center;
}
.border {
    width: 300px;
    height: 300px;
}
.teacher-aside-bar {
    width: 200px;
    height: 100%;
    background-color: #062a74;
    position: absolute;
}
.teacher-content-box {
    width: calc(100% - 200px);
    height: 100%;
    left: 200px;
    position: absolute;
    background-color: cornflowerblue;
}
.all-data-img {
    color: #fcfcfc;
    font-size: 20px;
    margin: 40px 0 0 28px;
}
.circle-data-image {
    width: 300px;
    height: 300px;
    background-color: coral;
    position: absolute;
}
.column-data-image {
    width: 400px;
    height: 600px;
    background-color: chocolate;
    position: absolute;
    left: 330px;
}
</style>
