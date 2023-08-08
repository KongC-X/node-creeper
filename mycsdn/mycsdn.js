// 无头浏览器模块
const puppeteer = require("puppeteer");
const schedule = require('node-schedule');
const fs = require('fs');

// 目标页面
const crawlPage = "https://blog.csdn.net/weixin_46232841?spm=1000.2115.3001.5343";

// */10 * * * * *：每隔10秒钟执行一次
// 0 0 * * * *：每小时的0分0秒执行一次
// 创建一个定时任务，每隔1小时执行一次
let job = schedule.scheduleJob('*/10 * * * * *',// 网页爬虫
async function crawler() {
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
    const myData = await page.evaluate(() => {
        let data = {};
        let name = "萌萌哒の瑞萌萌";
        let achievement = {};

        // 个人数据
        document.querySelectorAll(".user-profile-head-info-r-c ul").forEach((ele) => {
            const allReadNum = ele.querySelector("li:nth-child(1) .user-profile-statistics-views .user-profile-statistics-num").innerText;
            const articleNum = ele.querySelector("li:nth-child(2) .user-profile-statistics-num").innerText;
            const rank = ele.querySelector("li:nth-child(3) .user-profile-statistics-num").innerText;
            const fans = ele.querySelector("li:nth-child(4) .user-profile-statistics-num").innerText;
            data = {
                allReadNum,articleNum,rank,fans
            }
        });
        
        // 个人成就
        document.querySelectorAll(".aside-common-box-achievement").forEach((ele) => {
            const like = ele.querySelector("li:nth-child(1) div").innerText;
            const comment = ele.querySelector("li:nth-child(2) div").innerText;
            const favorite = ele.querySelector("li:nth-child(3) div").innerText;
            const share = ele.querySelector("li:nth-child(4) div").innerText;
            achievement = {
                like,comment,favorite,share
            }
        });
        return {
            name,data,achievement
        };
    });

    // console.log(myData);
    
    // 将数据写入文件中
    fs.writeFile('../chrome/mycsdn.json', JSON.stringify(myData), function (err, data) {
        if (err) {
            throw err
        }
        console.log('文件保存成功,当前时间：' + new Date());
    })

    // 关闭tab页
    await page.close();
    // 关闭实例
    await browser.close();
})