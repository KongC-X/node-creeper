const articles = [
    // {
    //     "rank": "1",
    //     "title": "一个处女座的程序猿",
    //     "fans": "1012728"
    // },
    {
        "rank": "2",
        "title": "AI视觉网奇",
        "fans": "60860"
    },
    {
        "rank": "3",
        "title": "SAP剑客",
        "fans": "40639"
    },
    {
        "rank": "4",
        "title": "禅与计算机程序设计艺术",
        "fans": "10999"
    },
    {
        "rank": "5",
        "title": "汪子熙",
        "fans": "6298"
    },
    {
        "rank": "6",
        "title": "源代码大师",
        "fans": "9725"
    },
    {
        "rank": "7",
        "title": "梦想橡皮擦",
        "fans": "259194"
    },
    {
        "rank": "8",
        "title": "不吃西红柿丶",
        "fans": "245738"
    },
    {
        "rank": "9",
        "title": "冰 河",
        "fans": "206632"
    },
    {
        "rank": "10",
        "title": "IT1995",
        "fans": "17345"
    },
    {
        "rank": "11",
        "title": "绝不原创的飞龙",
        "fans": "6531"
    },
    {
        "rank": "12",
        "title": "华为云开发者联盟",
        "fans": "62953"
    },
    {
        "rank": "13",
        "title": "呆呆敲代码的小Y",
        "fans": "148162"
    },
    {
        "rank": "14",
        "title": "沉默王二",
        "fans": "413473"
    },
    {
        "rank": "15",
        "title": "code_kd",
        "fans": "61043"
    },
    {
        "rank": "16",
        "title": "chengqiuming",
        "fans": "3603"
    },
    {
        "rank": "17",
        "title": "柳鲲鹏",
        "fans": "4392"
    },
    {
        "rank": "18",
        "title": "韩曙亮",
        "fans": "68865"
    },
    {
        "rank": "19",
        "title": "卓晴",
        "fans": "106321"
    },
    {
        "rank": "20",
        "title": "Eastmount",
        "fans": "246734"
    },
    {
        "rank": "21",
        "title": "愚公搬代码",
        "fans": "65828"
    },
    {
        "rank": "22",
        "title": "dog250",
        "fans": "27014"
    },
    {
        "rank": "23",
        "title": "哪 吒",
        "fans": "495717"
    },
    {
        "rank": "24",
        "title": "小小工匠",
        "fans": "98344"
    },
    {
        "rank": "25",
        "title": "java李杨勇",
        "fans": "272117"
    }
]

const data = articles.map(item => ({
    name: item.title,
    value: item.fans
}));

// 创建 Echarts 实例
const chart = echarts.init(document.getElementById('chart'));

// 设置图表配置项
chart.setOption({
  title: {
    text: '作者总榜粉丝数统计'
  },
  tooltip: {},
  xAxis: {
    data: data.map(item => item.name),
    axisLabel: {
        rotate: -60
    }
  },
  yAxis: {},
  series: [{
    name: '粉丝数',
    type: 'bar',
    data: data.map(item => item.value),
    label: {show: true,position: 'top'}
  }]
});