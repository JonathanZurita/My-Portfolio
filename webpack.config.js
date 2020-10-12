const path = require('path');
const webpack = require('webpack');
const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '.env')
} );
const SRC_DIR = path.join(__dirname, '/Client/src');
const DIST_DIR = path.join(__dirname, '/Client/dist');
module.exports = {
  entry: `${SRC_DIR}/index.js`,
  output: {
  filename: 'bundle.js',
  path: DIST_DIR
  },
module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: SRC_DIR,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader',
        ],
      },
    ],
  },
  devServer: {
    contentBase: DIST_DIR,
    compress: true,
    port: 9000
  },
  plugins: [
    new webpack.DefinePlugin( {
      "process.env": dotenv.parsed
    } ),
  ],
};