const path = require('path');

module.exports = {
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    // path should match tsconfig.json outDir's path
    // but webpack requires an absolute path
    path: path.resolve(__dirname, 'dist'),
  },
  // wireup generated source map to the bundle
  devtool: 'inline-source-map',
  // add TypeScript support for webpack
  module: {
    rules: [
      {
        // check files that with .ts
        test: /\.ts$/,
        // let webpack know .ts files should be handled by ts-loader
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    // make webpack look for .ts, .js files
    extensions: ['.ts', '.js'],
  },
};
