import { spawnSync } from 'child_process';
import path from 'path';
// import documentation from 'documentation';
// import streamArray from 'stream-array';
// import vfs from 'vinyl-fs';

import jsdoc2md from 'jsdoc-to-markdown';
import fs from 'fs-extra';
import markdownInclude from 'markdown-include';

const files = ['lib/type.js', 'lib/number.js', 'lib/index.js'];
const md = jsdoc2md.renderSync({ files });

fs.outputFileSync(path.resolve(__dirname, '../docTemplates/examples.md'), md);

markdownInclude.compileFiles(path.resolve(__dirname, '../markdown.json')).then(() => {
  const lastCommandArgs = [['pull'], ['commit', '-am', '"Update new doc"'], ['push', '--force']];

  setTimeout(() => {
    lastCommandArgs.forEach(v => {
      spawnSync('git', v, { stdio: 'inherit', shell: true });
    });
  }, 500);
});

// const filePaths = [path.resolve('lib/index.js'), path.resolve('lib/type.js'), path.resolve('lib/number.js')];
//
// documentation.lint(filePaths, { shallow: true }).then(lintOutput => {
//   if (lintOutput) {
//     console.log(lintOutput);
//     process.exit(1);
//   } else {
//     documentation
//       .build(filePaths, { shallow: true })
//       .then(documentation.formats.html)
//       .then(output => {
//         const reader = streamArray(output);
//
//         reader.pipe(vfs.dest('./docs'));
//         reader.on('end', () => {
//           const lastCommandArgs = [['pull'], ['commit', '-am', '"Update new doc"'], ['push', '--force']];
//
//           setTimeout(() => {
//             lastCommandArgs.forEach(v => {
//               spawnSync('git', v, { stdio: 'inherit', shell: true });
//             });
//           }, 500);
//         });
//       });
//   }
// });
