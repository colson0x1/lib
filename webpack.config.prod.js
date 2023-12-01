const path = require('path');
const cleanPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  devServer: {
    static: {
      directory: path.join(__dirname),
    },
  },
  output: {
    filename: 'bundle.js',
    // path should match tsconfig.json outDir's path
    // but webpack requires an absolute path
    path: path.resolve(__dirname, 'dist'),
  },
  // disable source map
  devtool: false,
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
  plugins: [
    // clear dist dir before new output is written for latest changes
    new CleanPlugin.CleanWebpackPlugin(),
  ],
};
