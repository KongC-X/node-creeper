const https = require('https');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs')

const url = 'https://blog.csdn.net/weixin_46232841?spm=1010.2135.3001.5343';

https.get(url, { rejectUnauthorized: false }, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += iconv.decode(chunk, 'utf-8');
  });

  res.on('end', () => { 
    const $ = cheerio.load(html);
    const courses = [];

    $('.mainContent .list-box-cont').each(function () {
      const title = $('h4', this).text().trim();
      const desc = $('.blog-list-content', this).text().trim();
      const time = $('.view-time-box', this).text().trim();
      const read = $('.view-num', this).text().trim();
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
