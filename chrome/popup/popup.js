// 当DOM加载完成时执行以下代码
document.addEventListener("DOMContentLoaded", function () {
    // 创建一个新的XMLHttpRequest对象
    let xhr = new XMLHttpRequest();

    // 指定要读取的文件路径
    xhr.open('GET', '../mycsdn.json', true);

    // 当请求完成时执行的回调函数
    xhr.onload = function() {
      if (xhr.status === 200) {
        // 将JSON字符串转换为JavaScript对象
        let data = JSON.parse(xhr.responseText);
        console.log(data);

        // 在这里处理读取到的数据
        const allReadNum = document.querySelector("p:nth-of-type(1)");
        allReadNum.innerHTML = `总阅读数：${data.data.allReadNum}`;
      
        const articleNum = document.querySelector("p:nth-of-type(2)");
        articleNum.innerHTML = `文章数：${data.data.articleNum}`;
      
        const rank = document.querySelector("p:nth-of-type(3)");
        rank.innerHTML = `排名：${data.data.rank}`;
      
        const fans = document.querySelector("p:nth-of-type(4)");
        fans.innerHTML = `粉丝数：${data.data.fans}`;
      
        const like = document.querySelector(
          ".card-achievement p:nth-of-type(1)"
        );
        like.innerHTML = `点赞数：${data.achievement.like}`;
      
        const comment = document.querySelector(
          ".card-achievement p:nth-of-type(2)"
        );
        comment.innerHTML = `评论数：${data.achievement.comment}`;
      
        const favorite = document.querySelector(
          ".card-achievement p:nth-of-type(3)"
        );
        favorite.innerHTML = `收藏数：${data.achievement.favorite}`;
      
        const share = document.querySelector(
          ".card-achievement p:nth-of-type(4)"
        );
        share.innerHTML = `分享数：${data.achievement.share}`;
      }
    };

    // 发送请求
    xhr.send();

  // 设置插件图标
  // chrome.browserAction.setIcon({ path: "icon/icon128.png" });

  // 设置插件标题
  chrome.browserAction.setTitle({ title: "CSDN个人数据展示" });
});
