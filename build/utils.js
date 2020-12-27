import path from 'path';
import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export const OUTPUT_PATH = 'dist';
export const BABEL_FILE_PATH = path.resolve(__dirname, '../babel/.babelrc');

export function mergeEntryConfig(options = {}) {
  const plugins = options.plugins || [];
  const output = options.output || {};

  delete options.plugins;
  delete options.output;

  return {
    input: 'lib/index.js',
    output: {
      freeze: false,
      interop: false,
      sourcemap: true,
      ...output,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
        configFile: BABEL_FILE_PATH,
      }),
      nodeResolve(),
      ...plugins,
    ],
    ...options,
  };
}
