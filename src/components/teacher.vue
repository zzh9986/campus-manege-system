<template>
    <div class="teacher-all-data">
        <div class="visual-header">
            <div class="visual-header-left">
                <ul class="left-ul">
                    <li>教师管理</li>
                    <li>发布通知</li>
                </ul>
            </div>
            <dv-decoration-11 class="center-title">i&nbsp;校园教师管理端</dv-decoration-11>
            <div class="visual-header-right">
                <ul class="right-ul">
                    <li>教师管理</li>
                    <li>发布通知</li>
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
            </div>
            <div class="visual-middle">
                <div id="info" :style="{width: '700px', height: '700px'}"></div>
            </div>
            <div class="visual-right">
                <dv-border-box-1 class="right-top">
                    <p class="top-left-title">请假人数排名</p>
                    <dv-scroll-ranking-board class="ranking-board" :config="configs"/>
                    <!-- <div id="campus">

                    </div> -->
                </dv-border-box-1>
                <dv-border-box-1 class="right-bottom">
                    <p class="top-left-title">疫情新闻</p>
                    <dv-scroll-board :config="news" style="width:300px;height:320px" />
                </dv-border-box-1>
            </div>
        </div>
        <dv-capsule-chart :config="config" style="width:440px;height:250px" />
        <div id="myChart" :style="{width: '300px', height: '300px', display: 'none'}"></div>
        
    </div>
    
</template>

<script>
import echartsData from './echartsData/data'
import $ from 'jquery'
export default {
  name: 'HelloWorld',
  data () {
    return {
      config: {
          data: [
            {
              name: '计科1704班',
              value: 167
            },
            {
              name: '计科1701班',
              value: 123
            },
            {
              name: '计科1708班',
              value: 98
            },
            {
              name: '计科1703班',
              value: 75
            },
            {
              name: '计科1705班',
              value: 66
            },
          ],
          colors: ['#37a2da', '#32c5e9', '#67e0e3', '#9fe6b8', '#ffdb5c'],
          unit: '请假人数',
          showValue: true
      },
        information: {},
        configs: {
            data: [
            {
              name: '计科1703班',
              value: 55
            },
            {
              name: '计科1704班',
              value: 120
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
        news: {
            data: [
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话'],
                ['就很水大V好女孩需更换过回电话']
            ]
        }
    }
  },
  mounted() {
      this.information = echartsData.options
      this.drawLine();
      this.drawMap();
      this.drawAbsencePie();
      this.drawCampus();
  },
  methods: {
      drawLine(){
          // 基于准备好的dom，初始化echarts实例
          let myChart = this.$echarts.init(document.getElementById('myChart'))
          // 绘制图表
          myChart.setOption({
              title: { text: '在Vue中使用echarts' },
              tooltip: {},
              xAxis: {
                  data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
              },
              yAxis: {},
              series: [{
                  name: '销量',
                  type: 'bar',
                  data: [5, 20, 36, 10, 10, 20]
              }]
          });
      },
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
                          {value: 580, name: '计科1708班', itemStyle: {color: '#5470c6'}},
                          {value: 484, name: '计科1704班', itemStyle: {color: '#91cb76'}},
                          {value: 300, name: '计科1703班', itemStyle: {color: '#fac858'}}
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
          let myCampus = this.$echarts.init(document.getElementById('campus'))
          myCampus.setOption({
              dataset: {
                source: [
                    ['score', 'amount', 'product'],
                    [89.3, 20, 'Matcha Latte'],
                    [57.1, 12, 'Milk Tea'],
                    [50.1, 17, 'Cheese Brownie'],
                    [89.7, 29, 'Matcha Cocoa'],
                    [68.1, 30, 'Tea'],
                    [32.7, 22, 'Walnut Brownie']
                ]
              },
              grid: {containLabel: true},
              xAxis: {name: 'amount'},
              yAxis: {type: 'category'},
              visualMap: {
                  orient: 'horizontal',
                  left: 'center',
                  min: 10,
                  max: 100,
                  text: ['High Score', 'Low Score'],
                  // Map the score column to color
                  dimension: 0,
                  inRange: {
                      color: ['#65B581', '#FFCE34', '#FD665F']
                  }
              },
              series: [
                  {
                      type: 'bar',
                      encode: {
                          // Map the "amount" column to X axis.
                          x: 'amount',
                          // Map the "product" column to Y axis
                          y: 'product'
                      }
                  }
              ]
          })
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
    top: 6px;
}
.visual-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 90px;
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
    color: #fafafa;
    display: inline-block;
    width: 280px;
    height: 70px;
}
.left-ul {
    list-style: none;
    display: inline;
}
.left-ul li {
    display: inline-block;
    padding: 0 50px;
    cursor: pointer;
}
.right-ul {
    list-style: none;
    display: inline;
}
.right-ul li {
    display: inline-block;
    padding: 0 50px;
    cursor: pointer;
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
    color: #94d6da;
    font-size: 15px;
    font-weight: bold;
    margin: 0;
    text-align: center;
    overflow-wrap: break-word;
    text-shadow: 5px 2px 3px rgb(0 112 192);
}
.left-top {
    width: 100%;
    height: 300px;
    margin-top: 30px;
}
.right-top {
    width: 100%;
    height: 300px;
    margin-top: 30px;
}
.ranking-board {
    width: 300px;
    height: 270px;
    position: absolute;
    left: 30px;
}
#absence {
    width: 390px;
    height: 280px;
    left: 26px;
}
#campus {
    width: 390px;
    height: 280px;
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
