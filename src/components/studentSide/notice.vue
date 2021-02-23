<template>
    <div>
        <div class="notice-box">
            <div class="notice-card" v-for="item in noticeData" :key="item.key">
                <p class="notice-title">{{ item.title }}</p>
                <div class="notice-card-content">
                    <img v-if="item.img" class="notice-img" :src="item.img" />
                    <div class="notice-abstract">{{ item.abstract }}</div>
                </div>
                <div class="notice-source" :class="item.img === '' ? 'source-top' : ''">
                    <span>{{ item.source }}</span>
                    <span>{{ item.time }}</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import info from "../../static/data"
export default {
    data() {
        return {
            noticeData: []
        }
    },
    methods: {
        
    },
    mounted() {
        this.noticeData = info.notice
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
.notice-card {
    border: 1px solid #000;
    border-radius: 10px;
    width: 700px;
    background-color: #fff;
    margin: 40px 0 0 50px;
    padding: 0 18px 20px 18px;
}
.notice-card-content {
    display: flex;
    align-content: center;
}
.notice-title {
    color: #222222;
    font-size: 18px;
    text-align: center;
}
.notice-img {
    width: 480px;
    height: 120px;
    margin-left: 20px;
}
.notice-abstract {
    color: #7e7e7e;
    font-size: 15px;
    margin-left: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp:5;
    -webkit-box-orient: vertical;
    text-indent: 30px;
}
.notice-source {
    color: #7e7e7e;
    font-size: 13px;
    float: right;
    width: 200px;
    margin: -19px 0 0 0;
}
.source-top {
    margin-top: -5px!important;
}
</style>