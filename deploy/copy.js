const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

console.log('Start copy ...');

glob
  .sync(path.resolve(__dirname, '../dist/**/*.js'))
  .map(v => v.substr(v.lastIndexOf('/') + 1))
  .forEach(v => {
    const originalPath = path.resolve(__dirname, `../dist/${v}`);
    const targetPath = path.resolve(__dirname, `../${v}`);

    fs.copySync(originalPath, targetPath);
  });

console.log('Succeed copy');
