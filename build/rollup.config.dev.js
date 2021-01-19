import { spawn } from 'cross-spawn';
import serve from 'rollup-plugin-serve';
import html from '@rollup/plugin-html';
import pkg from '../package.json';
import { INPUT_PATH, OUTPUT_PATH, DEV_SERVER, mergeEntryConfig } from './utils';

const { E2E_ENV } = process.env;

export default [
  mergeEntryConfig({
    input: !E2E_ENV ? 'examples/index.js' : `${INPUT_PATH}/index.js`,
    output: {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      plugins: [
        html(),
        serve({
          host: DEV_SERVER.HOST,
          port: DEV_SERVER.PORT,
          contentBase: OUTPUT_PATH,
          onListening: () => {
            if (E2E_ENV) {
              console.log('Start E2E Test');
              const e2e = spawn('npm', ['run', `nw:${E2E_ENV}`], { stdio: 'inherit' });

              e2e.on('close', code => {
                console.log('Close E2E Test', code);
                process.exit();
              });
            }
          },
        }),
      ],
    },
  }),
];
