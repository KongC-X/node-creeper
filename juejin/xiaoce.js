// 无头浏览器模块
const puppeteer = require("puppeteer");
const fs = require('fs')

// 目标页面
const crawlPage = "https://juejin.cn/course";

// 网页爬虫
(async function crawler() {
    //创建实例
    const browser = await puppeteer.launch({
        //无浏览器界面启动
        headless: "new",
        //放慢浏览器执行速度，方便测试观察
        // slowMo: 100,
        // 设置打开的浏览器窗口尺寸
        defaultViewport: { width: 960, height: 540 },
    });

    // 新开一个tab页面
    const page = await browser.newPage();
    // 加载目标页，在 500ms 内没有任何网络请求才算加载完
    await page.goto(crawlPage, { waitUntil: "networkidle0" });

    // 模拟滚动到页面底部
    await page.evaluate(async () => {
        await new Promise((resolve) => {
          let totalHeight = 0;
          const distance = 200;
          const timer = setInterval(() => {
            const scrollHeight = document.body.scrollHeight;
            window.scrollBy(0, distance);
            totalHeight += distance;
    
            if (totalHeight >= scrollHeight) {
              clearInterval(timer);
              resolve();
            }
          }, 200);
        });
    });

    // 等待列表加载完成
    await page.waitForSelector('.books-view');

    // 在无头浏览器页面dom环境，获取页面数据
    const articleList = await page.evaluate(() => {
        const list = [];
        const itemSelector = ".books-view > div:last-child > div > div > a";
        document.querySelectorAll(itemSelector).forEach(async(ele) => {
            const title = await ele.querySelector(".book-info .text-highlight").innerText;
            const desc = await ele.querySelector(".book-info .text-highlight.desc").innerText;
            const author = await ele.querySelector(".book-info .author .name").innerText;
            const price = await ele.querySelector(".book-info .other .origin-price").innerText;
            list.push({
                '小册名称': title,
                '小册简介': desc,
                '小册作者': author,
                '小册价格': price,
            });
        });
        return list;
    });

    // console.log(articleList);
    // 将数据写入文件中
    fs.writeFile('./xiaoce.json', JSON.stringify(articleList), function (err, data) {
        if (err) {
            throw err
        }
        console.log('文件保存成功');
    })

    // 关闭tab页
    await page.close();
    // 关闭实例
    await browser.close();
})();
