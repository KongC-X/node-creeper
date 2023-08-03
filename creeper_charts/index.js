const authors = [
    { "rank": "1", "author": "一个处女座的程序猿", "fans": "1013406" },
    { "rank": "2", "author": "AI视觉网奇", "fans": "60937" },
    { "rank": "3", "author": "SAP剑客", "fans": "40676" },
    { "rank": "4", "author": "禅与计算机程序设计艺术", "fans": "11027" },
    { "rank": "5", "author": "汪子熙", "fans": "6309" },
    { "rank": "6", "author": "源代码大师", "fans": "9742" },
    { "rank": "7", "author": "梦想橡皮擦", "fans": "259389" },
    { "rank": "8", "author": "不吃西红柿丶", "fans": "245812" },
    { "rank": "9", "author": "冰 河", "fans": "206679" },
    { "rank": "10", "author": "IT1995", "fans": "17354" },
    { "rank": "11", "author": "绝不原创的飞龙", "fans": "6533" },
    { "rank": "12", "author": "华为云开发者联盟", "fans": "62966" },
    { "rank": "13", "author": "呆呆敲代码的小Y", "fans": "148228" },
    { "rank": "14", "author": "沉默王二", "fans": "413513" },
    { "rank": "15", "author": "code_kd", "fans": "61044" },
    { "rank": "16", "author": "chengqiuming", "fans": "3605" },
    { "rank": "17", "author": "柳鲲鹏", "fans": "4394" },
    { "rank": "18", "author": "韩曙亮", "fans": "69044" },
    { "rank": "19", "author": "卓晴", "fans": "106370" },
    { "rank": "20", "author": "Eastmount", "fans": "246744" },
    { "rank": "21", "author": "愚公搬代码", "fans": "65978" },
    { "rank": "22", "author": "dog250", "fans": "27016" },
    { "rank": "23", "author": "哪 吒", "fans": "495955" },
    { "rank": "24", "author": "小小工匠", "fans": "98398" },
    { "rank": "25", "author": "java李杨勇", "fans": "272215" },
    { "rank": "26", "author": "孤寒者", "fans": "82553" },
    { "rank": "27", "author": "阿里云云栖号", "fans": "15538" },
    { "rank": "28", "author": "敖 丙", "fans": "302797" },
    { "rank": "29", "author": "喜欢打酱油的老鸟", "fans": "5643" },
    { "rank": "30", "author": "caimouse", "fans": "14229" },
    { "rank": "31", "author": "Data+Science+Insight", "fans": "13719" },
    { "rank": "32", "author": "士别三日wyx", "fans": "136481" },
    { "rank": "33", "author": "九师兄", "fans": "19777" },
    { "rank": "34", "author": "No Silver Bullet", "fans": "159930" },
    { "rank": "35", "author": "学亮编程手记", "fans": "105613" },
    { "rank": "36", "author": "CodingSir", "fans": "2075" },
    { "rank": "37", "author": "做人，最重要的就是开心嘛", "fans": "4990" },
    { "rank": "38", "author": "HealthScience", "fans": "96734" },
    { "rank": "39", "author": "风神修罗使", "fans": "3800" },
    { "rank": "40", "author": "一叶飘舟", "fans": "12604" },
    { "rank": "41", "author": "英雄哪里出来", "fans": "247739" },
    { "rank": "42", "author": "彭世瑜", "fans": "7209" },
    { "rank": "43", "author": "fengbingchun", "fans": "11457" },
    { "rank": "44", "author": "博文视点", "fans": "6329" },
    { "rank": "45", "author": "Michael阿明", "fans": "8097" },
    { "rank": "46", "author": "iOS逆向", "fans": "4417" },
    { "rank": "47", "author": "Android系统攻城狮", "fans": "41320" },
    { "rank": "48", "author": "dotNET跨平台", "fans": "4328" },
    { "rank": "49", "author": "xiangzhihong8", "fans": "34540" },
    { "rank": "50", "author": "杨鑫newlfe", "fans": "5977" },
    { "rank": "51", "author": "前端歌谣", "fans": "335" },
    { "rank": "52", "author": "微电子学与固体电子学-俞驰", "fans": "26389" },
    { "rank": "53", "author": "杨林伟", "fans": "9091" },
    { "rank": "54", "author": "川川菜鸟", "fans": "185767" },
    { "rank": "55", "author": "zhangphil", "fans": "12596" },
    { "rank": "56", "author": "LaoYuanPython", "fans": "119214" },
    { "rank": "57", "author": "刘永鑫Adam", "fans": "12310" },
    { "rank": "58", "author": "袁袁袁袁满", "fans": "736672" },
    { "rank": "59", "author": "叶涛网站推广优化", "fans": "2248" },
    { "rank": "60", "author": "_江南一点雨", "fans": "42310" },
    { "rank": "61", "author": "内核笔记", "fans": "16462" },
    { "rank": "62", "author": "Lansonli", "fans": "187070" },
    { "rank": "63", "author": "allway2", "fans": "4398" },
    { "rank": "64", "author": "小发猫", "fans": "1284" },
    { "rank": "65", "author": "Dontla", "fans": "5696" },
    { "rank": "66", "author": "Together_CZ", "fans": "64127" },
    { "rank": "67", "author": "Matlab科研工作室", "fans": "12495" },
    { "rank": "68", "author": "OkidoGreen", "fans": "7035" },
    { "rank": "69", "author": "zhangrelay", "fans": "39863" },
    { "rank": "70", "author": "海神之光", "fans": "23267" },
    { "rank": "71", "author": "v_JULY_v", "fans": "89178" },
    { "rank": "72", "author": "张小凡vip", "fans": "8708" },
    { "rank": "73", "author": "scan724", "fans": "907" },
    { "rank": "74", "author": "不脱发的程序猿", "fans": "203463" },
    {
      "rank": "75",
      "author": "托马斯小火车喷雾又喷烟，一直喷，喷喷喷.",
      "fans": "1766"
    },
    { "rank": "76", "author": "程序新视界", "fans": "22901" },
    { "rank": "77", "author": "wishfly", "fans": "1369" },
    { "rank": "78", "author": "林震南", "fans": "312" },
    { "rank": "79", "author": "诗水人间", "fans": "9134" },
    { "rank": "80", "author": "dvlinker", "fans": "82200" },
    { "rank": "81", "author": "Felven", "fans": "2532" },
    { "rank": "82", "author": "衣舞晨风", "fans": "3093" },
    { "rank": "83", "author": "fpga和matlab", "fans": "131345" },
    { "rank": "84", "author": "在奋斗的大道", "fans": "3292" },
    { "rank": "85", "author": "sinat_41698914", "fans": "1391" },
    { "rank": "86", "author": "AI浩", "fans": "131650" },
    { "rank": "87", "author": "QbitAl", "fans": "13975" },
    { "rank": "88", "author": "刘一哥GIS", "fans": "37574" },
    { "rank": "89", "author": "范桂飓", "fans": "44865" },
    { "rank": "90", "author": "放羊的牧码", "fans": "97014" },
    { "rank": "91", "author": "Jiangxl~", "fans": "72306" },
    { "rank": "92", "author": "david_lv", "fans": "8246" },
    { "rank": "93", "author": "长沙红胖子Qt", "fans": "118762" },
    { "rank": "94", "author": "哈哥撩编程", "fans": "80787" },
    { "rank": "95", "author": "Java技术栈", "fans": "34468" },
    { "rank": "96", "author": "JEECG低代码平台", "fans": "12808" },
    { "rank": "97", "author": "byxdaz", "fans": "10838" },
    { "rank": "98", "author": "JavaEdge.", "fans": "129813" },
    { "rank": "99", "author": "霸道流氓气质", "fans": "4948" },
    { "rank": "100", "author": "Bubbliiiing", "fans": "46296" }
]

const data = authors.map(item => ({
    name: item.author,
    fans: item.fans
}));

// 创建 Echarts 实例
const chart = echarts.init(document.getElementById('chart'));

// 设置图表配置项
chart.setOption({
  title: {
    text: '作者总榜粉丝数统计'
  },
  tooltip: {},
  dataZoom: [{
    start: 0,
    end: 20
  }],
  legend: {
    show: true
  },
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
    data: data.map(item => item.fans),
    label: {show: true,position: 'top'},
    itemStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          { offset: 0, color: '#83bff6' },
          { offset: 0.5, color: '#188df0' },
          { offset: 1, color: '#188df0' }
        ])
      },
      emphasis: {
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#2378f7' },
            { offset: 0.7, color: '#2378f7' },
            { offset: 1, color: '#83bff6' }
          ])
        }
      },
  }]
});