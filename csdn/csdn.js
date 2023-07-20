const https = require('https');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs')

const url = 'https://blog.csdn.net/nav/web';

https.get(url, { rejectUnauthorized: false }, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += iconv.decode(chunk, 'utf-8');
  });

  res.on('end', () => { 
    const $ = cheerio.load(html);
    const courses = [];

    $('.Community .active-blog').each(function () {
      const title = $('.blog-text', this).text().trim();
      const desc = $('.desc', this).text().trim();
      const author = $('.operation-c a span', this).text().trim();
      courses.push({ title, desc, author });
    });

    // console.log(courses);
    //将数据写入文件中
    fs.writeFile('./csdn.json', JSON.stringify(courses), function (err, data) {
      if (err) {
        throw err
      }
      console.log('文件保存成功');
    })
  });
});
