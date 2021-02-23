<template>
    <div class="m-map">
        <div id="js-container" class="map"></div>
    </div>
</template>

<script>
    const MapKey = '54dad0f9b48555c1887ccc76d5939597'  //获取的Key值
    // import remoteLoad from '../utils/remoteLoad'
    export default {
        name: "Mapdrag",
        props: {
            currentPosition:Array,
            default:[]
        },
        data () {
            return {
                dragStatus: false,
                AMapUI: null,
                AMap: null,
            }
        },
        methods: {
            // 实例化地图
            initMap() {
                // 加载PositionPicker，loadUI的路径参数为模块名中 'ui/' 之后的部分
                let AMapUI = this.AMapUI = window.AMapUI
                let AMap = this.AMap = window.AMap
                AMapUI.loadUI(['misc/PositionPicker'], PositionPicker => {
                    let mapConfig = {
                        zoom: 12, //缩放比例
                        center: this.currentPosition, //设置地图中心点坐标
                        mapStyle: 'amap://styles/macaron',  //设置地图的显示样式,可在高德地图中设置自定义地图，mapStyle: 'amap://styles/自定义地图id'
                    }
                    let map = new AMap.Map('js-container', mapConfig)
                    // 启用工具条
                    AMap.plugin(['AMap.ToolBar'], function () {
                        map.addControl(new AMap.ToolBar({
                            position: 'RB'
                        }))
                    })
                    // 创建地图拖拽
                    let positionPicker = new PositionPicker({
                        mode: 'dragMap', // 设定为拖拽地图模式，可选'dragMap'、'dragMarker'，默认为'dragMap'
                        map: map // 依赖地图对象
                    })
                    // 拖拽完成发送自定义 drag 事件
                    positionPicker.on('success', positionResult => {
                        // 过滤掉初始化地图后的第一次默认拖放
                        if (!this.dragStatus) {
                            this.dragStatus = true
                        } else {
                            this.$emit('drag', positionResult)
                        }
                    })
                    // 启动拖放
                    positionPicker.start()
                })
            }
        },
        watch: {
            currentPosition(){
                this.initMap()
            }
        },
        async mounted () {
            // 已载入高德地图API，则直接初始化地图
            if (window.AMap && window.AMapUI) {
                this.initMap()
                // 未载入高德地图API，则先载入API再初始化
            } else {
                // 载入高德地图和UI组件
                await remoteLoad(`http://webapi.amap.com/maps?v=1.3&key=${MapKey}`)
                await remoteLoad('http://webapi.amap.com/ui/1.0/main.js')
                this.initMap()
            }
        }
    }
</script>

<style >   
    .m-map{ min-width: 500px; min-height: 300px; position: relative; }
    .m-map .map{ width: 100%; height: 100%;
    }

</style>
