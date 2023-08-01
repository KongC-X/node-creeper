const puppeteer = require("puppeteer");
// 通过 插件 获取的 JSON化 cookie
const cookieObjects = require("./www.csdn.net.cookies.json");

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 1080 });

  cookieObjects.forEach((cookie) => {
    page.setCookie(cookie);
  });
  await page.goto("https://www.csdn.net/");
})()