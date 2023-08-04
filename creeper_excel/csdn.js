const ExcelJS = require('exceljs');
const bookData = require('../csdn/csdnSearch.json');

// 新建一个 excel 工作簿
const workbook = new ExcelJS.Workbook();

// 创建一个新的工作表
const worksheet = workbook.addWorksheet('Sheet1');

// 添加表头
worksheet.columns = [
  { header: '博客标题', key: 'title', width: 45 }, // 设置列宽
  { header: '博客简介', key: 'desc', width: 130 }, // 设置列宽
  { header: '阅读量', key: 'read', width: 18 }, // 设置列宽
  { header: '发布时间', key: 'time', width: 16 }, // 设置列宽
];

// 添加数据
worksheet.addRows(bookData);

// 第一行字体加粗加大
worksheet.getRow(1).font = {
    bold: true,
    size: 14
};

// 第一行单元格居中
worksheet.getRow(1).alignment = {
    vertical: 'middle',
    horizontal: 'center'
};

// 第一列单元格居中
worksheet.getColumn(1).alignment = {
    vertical: 'middle',
    horizontal: 'center'
};

// 第三列单元格居中
worksheet.getColumn(3).alignment = {
    vertical: 'middle',
    horizontal: 'center'
};

// 第四列单元格居中
worksheet.getColumn(4).alignment = {
    vertical: 'middle',
    horizontal: 'center'
};

// 将工作簿保存到文件
workbook.xlsx.writeFile('csdnBlog.xlsx')
  .then(() => {
    console.log('Excel文件已保存');
  })
  .catch((error) => {
    console.log('保存Excel文件时出错：', error);
  });
