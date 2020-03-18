import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/module.js',
  output: {
    file: 'dist/module.js',
    format: 'system',
    sourcemap: true
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
    copy({
      targets: [
        {
          src: ['src/*.html', 'src/*.json', 'src/*.md', 'src/*.svg', 'src/css'],
          dest: 'dist'
        }
      ]
    })
  ],
  // Because import D3 throws tons of warnings
  // https://github.com/d3/d3-selection/issues/168#issuecomment-451983830
  onwarn: function (warning, warn) {
    if (warning.code === 'CIRCULAR_DEPENDENCY') return;
    warn(warning);
  }
}
