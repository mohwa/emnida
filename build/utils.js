import babel from 'rollup-plugin-babel';
// eslint-disable-next-line import/no-unresolved
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export const OUTPUT_PATH = 'dist';

export function mergeEntryConfig(options = {}) {
  const plugins = options.plugins || [];
  const output = options.output || {};

  delete options.plugins;
  delete options.output;

  return {
    input: 'lib/index.js',
    output: {
      interop: true,
      sourcemap: true,
      ...output,
    },
    plugins: [
      babel({ exclude: 'node_modules/**' }),
      nodeResolve(),
      commonjs({
        include: 'node_modules/**',
        sourceMap: true,
      }),
      ...plugins,
    ],
    ...options,
  };
}
