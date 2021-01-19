import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';

export const INPUT_PATH = 'lib';
export const OUTPUT_PATH = 'dist';
export const DEV_SERVER = {
  HOST: 'localhost',
  PORT: 9999,
};

export function mergeEntryConfig(options = {}) {
  const plugins = options.plugins || [];
  const output = options.output || {};

  delete options.plugins;
  delete options.output;

  return {
    input: `${INPUT_PATH}/index.js`,
    output: {
      freeze: false,
      interop: false,
      sourcemap: true,
      ...output,
    },
    plugins: [
      babel({
        exclude: 'node_modules/**',
      }),
      nodeResolve(),
      ...plugins,
    ],
    ...options,
  };
}
