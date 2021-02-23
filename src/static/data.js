/* eslint-disable */
const major = [
    {
        label: '计算机科学与技术',
        value: '1'
    },
    {
        label: '大数据管理与应用',
        value: '2'
    },
    {
        label: '国际经济与贸易',
        value: '3'
    },
    {
        label: '信息与通信工程',
        value: '4'
    },
    {
        label: '通信与信息系统',
        value: '5'
    },
    {
        label: '通信工程',
        value: '6'
    },
    {
        label: '数字媒体技术',
        value: '7'
    }
];

const classNum = [
    {
        class: '1班',
        key: '1'
    },
    {
        class: '2班',
        key: '2'
    },
    {
        class: '3班',
        key: '3'
    },
    {
        class: '4班',
        key: '4'
    },
    {
        class: '5班',
        key: '5'
    },
    {
        class: '6班',
        key: '6'
    },
    {
        class: '7班',
        key: '7'
    },
];

const absenceType = [
    {
        value: '事假',
        type: '1'
    },
    {
        value: '病假',
        type: '2'
    },
    {
        value: '实习',
        type: '3'
    },
    {
        value: '其他',
        type: '4'
    }
];

const whether = [
    {
        value: '是',
        key: '1'
    },
    {
        value: '否',
        key: '0'
    }
];

const healthStatus = [
    {
        value: '无下列情况，身体健康',
        key: '0'
    },
    {
        value: '近15日内居住或到过国内中高风险地区',
        key: '1'
    },
    {
        value: '近15日内接触过新冠肺炎感染者',
        key: '2'
    },
    {
        value: '近15日内有境外旅居史',
        key: '3'
    },
    {
        value: '疑似病例',
        key: '4'
    },
    {
        value: '医学隔离',
        key: '5'
    },
    {
        value: '确诊病例',
        key: '6'
    }
];

const notice = [
    {
        key: '0',
        title: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        abstract: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        source: 'zhowCheung',
        time: '2020年10月21日',
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
    {
        key: '1',
        title: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        abstract: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        source: 'test账号',
        time: '2020年10月21日',
        img: ''
    },
    {
        key: '2',
        title: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        abstract: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        source: '这是一个测试',
        time: '2020年10月21日',
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
    {
        key: '3',
        title: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        abstract: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        source: 'zhowCheung',
        time: '2020年10月21日',
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    },
    {
        key: '4',
        title: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        abstract: '高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议高校学生如何处理就业压力、毕业压力和科研压力？心理学专家给出四点建议',
        source: 'zhowCheung',
        time: '2020年10月21日',
        img: 'https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png'
    }
];


export default{
    major,
    classNum,
    absenceType,
    whether,
    notice,
    healthStatus
}