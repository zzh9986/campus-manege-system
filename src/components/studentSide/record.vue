<template>
    <div>
        <p class="record-current-date">当前时间：{{ nowDate }}</p>
        <div class="record-form-box">
            <el-form :model="ruleForm" ref="ruleForm" label-width="100px">
                <div class="record-line">
                    <div class="first-line-column">
                        <p class="type-title">1、关于新冠肺炎，您当前的健康状况是？（多选）</p>
                        <el-form-item :style="{marginLeft: '20px'}" prop="type">
                            <el-checkbox-group  v-model="ruleForm.type" class="record-checkbox-group">
                                <el-checkbox :style="{display: 'block'}" v-for="item in healthData" :label="item.value" :key="item.key" :id="item.key === '0' ? 'option' : ''" name="type"/><br/>
                            </el-checkbox-group>
                        </el-form-item>
                    </div>
                    <p class="type-title" :style="{marginLeft: '130px', height: '30px'}">2、当前位置：<span v-if="locationFlag">{{ location.addressComponent.province }}{{ location.addressComponent.district }}</span></p>
                    <el-button @click="positionClick" size="small" type="primary" icon="el-icon-edit" :style="{height: '33px', position: 'absolute', top: '360px', left: '648px'}">点击打卡</el-button>
                </div>
                <div class="record-line" :style="{marginTop: '30px'}">
                    <div>
                        <p class="type-title">3、您目前是否处于居家隔离？</p>
                        <el-form-item prop="resource">
                            <el-radio-group :style="{marginLeft: '-54px'}" v-model="ruleForm.resource">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                            </el-radio-group>
                        </el-form-item>
                    </div>
                    <div>
                        <p class="type-title" :style="{marginLeft: '273px'}">4、您今日的体温是多少？</p>
                        <el-form-item prop="name">
                            <el-input placeholder="请填写体温" :style="{marginLeft: '200px', width: '120px'}" v-model="ruleForm.temp"></el-input>
                        </el-form-item>
                    </div>
                </div>
                <el-form-item class="record-form-btn-group">
                    <el-button type="primary" @click="submitForm('ruleForm')">打卡</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=54dad0f9b48555c1887ccc76d5939597"></script> 
<script>
import info from '../../static/data'
export default {
    data() {
        return {
            nowDate: "",
            value: "",
            ruleForm: {
                temp: '',
                type: [],
                resource: ''
            },
            dragData: {},
            currentPosition: [],
            location: {},
            locationFlag: false,
            healthData: []
        };
    },
    methods: {
        positionClick() {
            this.getLocation();
            this.locationFlag = true
        },
        currentTime() {
            setInterval(this.formatDate, 500);
        },
        formatDate() {
            let date = new Date();
            let year = date.getFullYear(); // 年
            let month = date.getMonth() + 1; // 月
            month = month < 10 ? "0" + month : month;
            let day = date.getDate(); // 日
            let week = date.getDay(); // 星期
            let weekArr = [ "星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];
            let hour = date.getHours(); // 时
            hour = hour < 10 ? "0" + hour : hour; // 如果只有一位，则前面补零
            let minute = date.getMinutes(); // 分
            minute = minute < 10 ? "0" + minute : minute; // 如果只有一位，则前面补零
            let second = date.getSeconds(); // 秒
            second = second < 10 ? "0" + second : second; // 如果只有一位，则前面补零
            this.nowDate = `${year}/${month}/${day} ${hour}:${minute}:${second} ${weekArr[week]}`;
        },
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
            if (valid) {
                // alert('submit!');
                const recordValue = this.$refs["ruleForm"].model
                console.log("recordValue---", recordValue)
            } else {
                console.log('error submit!!');
                return false;
            }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        },
        getLocation() {
            const self = this
            var mapObj = new AMap.Map('iCenter');
            mapObj.plugin('AMap.Geolocation', function () {
                var geolocation = new AMap.Geolocation({
                    // 是否使用高精度定位，默认：true
                    enableHighAccuracy: true,
                    // 设置定位超时时间，默认：无穷大
                    timeout: 10000,
                    maximumAge: 0,            // 定位结果缓存0毫秒，默认：0
                    convert: true,            // 自动偏移坐标，偏移后的坐标为高德坐标，默认：true
                    showButton: true,         // 显示定位按钮，默认：true
                    buttonPosition: 'LB',     // 定位按钮停靠位置，默认：'LB'，左下角
                    buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
                    showMarker: true,         // 定位成功后在定位到的位置显示点标记，默认：true
                    showCircle: true,         // 定位成功后用圆圈表示定位精度范围，默认：true
                    panToLocation: true,      // 定位成功后将定位到的位置作为地图中心点，默认：true
                    zoomToAccuracy: false       // 定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
                })
                mapObj.addControl(geolocation);
                geolocation.getCurrentPosition()
                AMap.event.addListener(geolocation, 'complete', onComplete);
                AMap.event.addListener(geolocation, 'error', onError);

                function onComplete(data) {
                    // data是具体的定位信息
                    self.location = data;
                    console.log("location", self.location);
                    console.log("flag", self.locationFlag);
                    console.log('定位成功信息：', data);
                }

                function onError(data) {
                    // 定位出错
                    console.log('定位失败错误：', data);
                    // 调用ip定位
                    self.getLngLatLocation();
                }
            })
        },
        getLngLatLocation() {
            AMap.plugin('AMap.CitySearch', function () {
                var citySearch = new AMap.CitySearch();
                citySearch.getLocalCity(function (status, result) {
                    if (status === 'complete' && result.info === 'OK') {
                        // 查询成功，result即为当前所在城市信息
                        console.log('通过ip获取当前城市：', result)
                        //逆向地理编码
                        AMap.plugin('AMap.Geocoder', function () {
                            var geocoder = new AMap.Geocoder({
                                // city 指定进行编码查询的城市，支持传入城市名、adcode 和 citycode
                                city: result.adcode
                            })

                            var lnglat = result.rectangle.split(';')[0].split(',');
                            geocoder.getAddress(lnglat, function (status, data) {
                                if (status === 'complete' && data.info === 'OK') {
                                    // result为对应的地理位置详细信息
                                    console.log(data)
                                }
                            })
                        })
                    }
                })
            })
        }
    },
    mounted() {
        this.currentTime();
        this.healthData = info.healthStatus
        const center = document.getElementById("iCenter")
        if (center) {
            console.log(center)
            center.style.display = 'block'
        }
        console.log("mounted里面的location！！！！！！", this.location)
        // this.getLocation();
    },
    created () {
		// 此处为调用精确定位之后，调取ip定位，可根据实际情况改写
    //    setTimeout(() => {
    //        this.getLocation();
    //    }, 2000)
       this.getLocation();
    },
    // 销毁定时器
    beforeDestroy() {
        if (this.formatDate) {
        clearInterval(this.formatDate); // 在Vue实例销毁前，清除时间定时器
        }
    }
}
</script>

<style>
/* #iCenter{width:300px; height: 280px; border:1px #000 solid;position: absolute;top: 730px;left: 90px;} */
.record-current-date {
    font-size: 17px;
    color: indigo;
    margin-left: 15px;
}
.record-form-box {
    width: 100%;
    position: absolute;
    top: 60px;
    left: 40px;
}
.record-form-title {
    font-size: 20px;
    font-weight: bold;
    color: #1e1e1e;
    text-align: center;
}
.record-checkbox-group>label {
    color: #de5144;
    margin-left: -78px;
}
#option {
    color: green;
}
.type-title {
    color: #1e1e1e;
    margin-left: 20px;
}
.record-line {
    display: flex;
    flex-direction: row;
}
.record-form-btn-group {
    margin: 40px 250px;
}
.record-location {
    color: #1e1e1e;
    display: inline;
    font-size: 13px;
    margin: 410px 0 0 -117px;
}
</style>