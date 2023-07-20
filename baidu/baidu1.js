const https = require('https');
const cheerio = require('cheerio');
const fs = require('fs')

const url = 'https://top.baidu.com/board?tab=realtime';

https.get(url,{ rejectUnauthorized: false }, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    const $ = cheerio.load(html);
    const news = [];

    $('.container-bg_lQ801 div:nth-child(2) .category-wrap_iQLoo.horizontal_1eKyQ').each(function () {
        const title = $('.c-single-text-ellipsis', this).text().trim();
        const hot = '热度指数：' + $('.hot-index_1Bl1a', this).text().trim();
        news.push({ title, hot });
      });

    // console.log(news);
    //将数据写入文件中
    fs.writeFile("./baidu1.json", JSON.stringify(news), function (err, data) {
      if (err) {
        throw err;
      }
      console.log("文件保存成功");
    });
  });
});
