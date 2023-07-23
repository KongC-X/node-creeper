// 无头浏览器模块
const puppeteer = require("puppeteer");
const fs = require('fs');

// 目标页面
const crawlPage = "https://blog.csdn.net/rank/list";

// 网页爬虫
(async function crawler() {
    //创建实例
    const browser = await puppeteer.launch({
        //无浏览器界面启动
        headless: "new",
        //放慢浏览器执行速度，方便测试观察
        slowMo: 100,
        // 设置打开的浏览器窗口尺寸
        defaultViewport: { width: 960, height: 540 },
    });

    // 新开一个tab页面
    const page = await browser.newPage();
    // 加载目标页，在 500ms 内没有任何网络请求才算加载完
    await page.goto(crawlPage, { waitUntil: "networkidle0" });

    // 在无头浏览器页面dom环境，获取页面数据
    const articleList = await page.evaluate(() => {
        const list = [];
        document.querySelectorAll(".Host .blog-rank-right-content .floor-rank-item").forEach((ele) => {
            const rank = ele.querySelector(".hostitem-item-left span").innerText;
            const title = ele.querySelector(".hosetitem-title a").innerText;
            const author = ele.querySelector(".hostitem-item-right .name").innerText;
            list.push({
                '排名': rank,
                '标题': title,
                '作者': author,
            });
        });
        return list;
    });

    // console.log(articleList);
    //将数据写入文件中
    fs.writeFile('./csdnHot.json', JSON.stringify(articleList), function (err, data) {
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
