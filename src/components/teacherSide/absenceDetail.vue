<template>
    <div class="teacher-all-data">
        <div class="visual-header">
            <div class="visual-header-left">
                <ul class="left-ul">
                    <li @click="pathJump('/teacher')">系统概览</li>
                    <li @click="pathJump('/send_notice')">发布通知</li>
                </ul>
            </div>
            <dv-decoration-11 class="center-title">i&nbsp;校园教师管理端</dv-decoration-11>
            <div class="visual-header-right">
                <ul class="right-ul">
                    <li id="takeoff" @click="pathJump('/absence_detail')">请假详情</li>
                    <li @click="pathJump('/record_detail')">打卡详情</li>
                </ul>
            </div>
        </div>
        <div class="visual-content">
            <!-- <div class="condition-area">
                <p class="query-date">选择查询请假数据日期：（默认展示当天请假数据）</p>
                <el-form ref="formInline" :inline="true" :model="formInline" class="demo-form-inline">
                    <el-form-item>
                        <el-date-picker
                            v-model="formInline.range"
                            type="daterange"
                            format="yyyy 年 MM 月 dd 日"
                            value-format="yyyy-MM-dd"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"/>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="onSubmit('formInline')">查询</el-button>
                    </el-form-item>
                </el-form>
            </div> -->
            <div class="absence-data">
                <el-table
                    :data="tableData"
                    height="700"
                    :header-cell-style="{textAlign: 'center'}"
                    :cell-style="{ textAlign: 'center' }"
                    stripe
                    style="width: 100%">
                        <el-table-column
                            type="index"
                            :index="index"/>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="160">
                        </el-table-column>
                        <el-table-column
                            prop="major"
                            label="专业班级"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="date"
                            label="请假日期"
                            width="260">
                        </el-table-column>
                        <el-table-column
                            prop="direction"
                            label="请假去向"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="phone"
                            label="联系电话"
                            width="180">
                        </el-table-column>
                        <el-table-column label="操作">
                            <template slot-scope="scope">
                                <el-button
                                size="mini"
                                type="primary"
                                @click.native.prevent="deleteRow(scope.$index, tableData)">销假</el-button>
                            </template>
                        </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
        formInline: {
          range: ''
        },
        tableData: [{
            date: '2016-05-02 - 2021-07-08',
            name: '张子豪',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        }, {
            date: '2016-05-02 - 2021-07-08',
            name: '王一二',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        }, {
            date: '2016-05-02 - 2021-07-08',
            name: '李五六',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        }, {
            date: '2016-05-02 - 2021-07-08',
            name: '七八九',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },
        {
            date: '2016-05-02 - 2021-07-08',
            name: '一二三',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },
        {
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },
        {
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },
        {
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        },{
            date: '2016-05-02 - 2021-07-08',
            name: 'zhow',
            major: '计算机科学与技术1701班',
            direction: '长安医院',
            phone: '15902927679'
        }]
    }
  },
  mounted() {
      const routeName = this.$router.app._route.name
      const ele = document.getElementById(routeName)
      ele.style.background = '#7bbfea'
  },
  methods: {
      pathJump(path) {
          this.$router.push({ path })
      },
      onSubmit(formName) {
          this.$refs[formName].validate((valid) => {
                if (valid) {
                    const absenceDetail = this.$refs[formName].model
                    console.log("老师端-请假数据", absenceDetail);
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
  }
}
</script>

<style scoped>
.el-table__body tr:hover>td {
		background-color: #7bbfea!important;
	}
.absence-data {
    width: 77%;
    position: absolute;
    top: 20%;
    padding-bottom: 20px;
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
.visual-content {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    justify-content: center;
}
.query-date {
    color: #fafafa;
    font-size: 13px;
}
.condition-area {
    display: flex;
    width: 55%;
    height: 100px;
    flex-direction: column;
    position: absolute;
    left: 12.6%;
    top: 10%;
}
</style>
