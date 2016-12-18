var path = require('path');
var webpack = require('webpack');

module.exports ={
  devtool: 'cheap-module-eval-souce-map',
  entry: [
    'react-hot-loader/patch',
    // activate HMR for React

    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: "pre",
        use: "eslint-loader",
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        use: [
          'babel-loader'
        ],
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.jsx?$/,         // Match both .js and .jsx files
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
}
