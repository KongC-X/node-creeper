const https = require('https');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs')

// 定义url
const url = 'https://blog.csdn.net/weixin_46232841?spm=1010.2135.3001.5343';

// 使用https.get方法发送请求，并将响应结果赋值给html
https.get(url, { rejectUnauthorized: false }, (res) => {
  let html = '';

  // 当响应数据发生变化时，调用onData方法
  res.on('data', (chunk) => {
    html += iconv.decode(chunk, 'utf-8');
  });

  // 当响应结束时，调用onEnd方法
  res.on('end', () => { 
    // 将html转换为 cheerio 对象
    const $ = cheerio.load(html);
    // 定义一个空数组用于存放课程信息
    const courses = [];

    // 遍历每一个 li 标签，获取标题、描述、时间、阅读数、点赞数
    $('.mainContent.list-box-cont').each(function () {
      const title = $('h4', this).text().trim();
      const desc = $('.blog-list-content', this).text().trim();
      const time = $('.view-time-box', this).text().trim();
      const read = $('.view-num', this).text().trim().match(/\d+/g).join("");
      const favour = $('.give-like-num', this).text().trim();
      courses.push({ title, desc, time, read, favour });
    });

    // console.log(courses);
    // 将数据写入文件中
    fs.writeFile('./csdnInfo.json', JSON.stringify(courses), function (err, data) {
      if (err) {
        throw err
      }
      console.log('文件保存成功');
    })
  });
});