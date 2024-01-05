// // 把docs/.vuepress/dist目录移动到根目录下
// const fs = require('fs-extra')
// const path = require('path')

// const sourceDir = path.resolve(__dirname, '../docs/.vuepress/dist')
// const targetDir = path.resolve(__dirname, '../')

// fs.moveSync(sourceDir, targetDir, { overwrite: true })

const fs = require('fs');
fs.rename('./docs/.vuepress/dist', './dist', (err) => {
 if (err) throw err;
 console.log('文件夹已移动');
});
