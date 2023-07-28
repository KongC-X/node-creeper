const puppeteer = require('puppeteer');
(async () => {
    // 打开一个浏览器实例
    const browser = await puppeteer.launch({ headless: false });
    // 创建一个空白页面
    const page = await browser.newPage();
    // 访问百度首页，并等待页面加载完成
    await page.goto('https://www.baidu.com/', { waitUntil: 'networkidle0' });
    // 将页面保存为pdf格式
    await page.pdf({ path: 'baidu.pdf', format: 'A4' });
    // 关闭浏览器实例
    await browser.close();
})();
