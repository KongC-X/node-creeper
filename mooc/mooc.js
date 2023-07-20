const http = require('http');
const cheerio = require('cheerio');
const iconv = require('iconv-lite');
const fs = require('fs')

const url = 'http://www.imooc.com/course/list?c=fe&sort=last';

http.get(url, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += iconv.decode(chunk, 'utf-8');
  });

  res.on('end', () => {
    const $ = cheerio.load(html);
    const courses = [];

    $('.list.max-1152.clearfix .item.free').each(function () {
      const title = $('.title.ellipsis2', this).text().trim();
      const message = $('.one', this).text().trim();
      courses.push({ title, message });
    });

    // console.log(courses);
    //将数据写入文件中
    fs.writeFile('./mooc.json', JSON.stringify(courses), function (err, data) {
      if (err) {
        throw err
      }
      console.log('文件保存成功');
    })
  });
});
