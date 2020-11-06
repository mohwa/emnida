const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');

console.log('Start clean ...');

glob
  .sync(path.resolve(__dirname, '../dist/**/*.js'))
  .map(v => v.substr(v.lastIndexOf('/') + 1))
  .forEach(v => {
    fs.removeSync(path.resolve(__dirname, `../${v}`));
  });

fs.removeSync(path.resolve(__dirname, `../dist`));

console.log('Succeed clean');
