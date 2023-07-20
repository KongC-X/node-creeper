// 爬取百度首页的标题和链接
// 这个程序使用了 Node.js 的 http 模块来发起 GET 请求，并使用 cheerio 模块来解析 HTML。
// 它首先获取百度首页的 HTML，然后使用 cheerio 将 HTML 转换成一个类似于 jQuery 的对象 $，
// 接着使用 $ 来查找页面中所有的链接，并将它们的标题和链接保存到一个数组中。最后，它将这个数组输出到控制台上。

const http = require('http');
const cheerio = require('cheerio');
const fs = require('fs')

const url = 'http://www.baidu.com';

http.get(url, (res) => {
  let html = '';

  res.on('data', (chunk) => {
    html += chunk;
  });

  res.on('end', () => {
    const $ = cheerio.load(html);
    const links = [];

    $("a").each((i, el) => {
      const title = $(el).text();
      const href = $(el).attr("href");
      links.push({ title, href });
    });

    console.log(links);
    //将数据写入文件中
    // fs.writeFile("./baidu.json", JSON.stringify(links), function (err, data) {
    //   if (err) {
    //     throw err;
    //   }
    //   console.log("文件保存成功");
    // });
  });
});
