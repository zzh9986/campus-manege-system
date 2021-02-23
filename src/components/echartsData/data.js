/* eslint-disable */
const options = {
    title: {
        text: '中国疫情图',
        left: 'center'
    },
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
        pieces: [{
                min: 1000,
                max: 1000000,
                label: '大于等于1000人',
                color: '#372a28'
            },
            {
                min: 500,
                max: 999,
                label: '确诊500-999人',
                color: '#4e160f'
            },
            {
                min: 100,
                max: 499,
                label: '确诊100-499人',
                color: '#974236'
            },
            {
                min: 10,
                max: 99,
                label: '确诊10-99人',
                color: '#ee7263'
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
                show: true,
                readOnly: false
            },
            restore: {
                show: true
            },
            saveAsImage: {
                show: true
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

export default {
    options
}