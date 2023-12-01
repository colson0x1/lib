const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    // path should match tsconfig.json outDir's path
    // but webpack requires an absolute path
    path: path.resolve(__dirname, 'dist'),
  },
};
