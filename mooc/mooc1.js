const https = require('https');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs')

const url = 'https://coding.imooc.com';

https.get(url, { rejectUnauthorized: false }, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += iconv.decode(chunk, 'utf-8');
  });

  res.on('end', () => {
    const $ = cheerio.load(html);
    const courses = [];

    $('.course-list.clearfix a').each(function () {
      const title = $('.title.ellipsis2', this).text().trim();
      const message = $('.one .numbers.l', this).text().trim();
      const price = $('.two.clearfix .price.l.red.bold', this).text().trim();
      courses.push({ title, message, price });
    });

    // console.log(courses);
    //将数据写入文件中
    fs.writeFile('./mooc1.json', JSON.stringify(courses), function (err, data) {
      if (err) {
        throw err
      }
      console.log('文件保存成功');
    })
  });
});
