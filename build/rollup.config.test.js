import { spawn } from 'cross-spawn';
import serve from 'rollup-plugin-serve';
// import htmlTemplate from 'rollup-plugin-generate-html-template';
import html from '@rollup/plugin-html';
import pkg from '../package.json';
import { OUTPUT_PATH, mergeEntryConfig } from './utils';

const IS_TEST = !!process.env.IS_TEST;

export default [
  mergeEntryConfig({
    output: {
      file: `${OUTPUT_PATH}/index.js`,
      format: 'umd',
      name: pkg.name,
      plugins: [
        html(),
        // htmlTemplate({
        //   // template: 'examples/template.html',
        //   // target: 'index.html',
        // }),
        // html2({
        //   template: 'examples/template.html',
        // }),
        serve({
          host: 'localhost',
          port: 9999,
          contentBase: OUTPUT_PATH,
          onListening: () => {
            if (IS_TEST) {
              console.log('Start e2e test');
              const e2e = spawn('npm', ['run', 'e2e-ie11'], { stdio: 'inherit' });

              //console.log(e2e);

              e2e.on('close', code => {
                console.log('Close e2e test', code);
                process.exit();
              });
            }
          },
        }),
      ],
    },
  }),
];
