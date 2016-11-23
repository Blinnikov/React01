var path = require('path');
var webpack = require('webpack');

module.exports ={
  devtool: 'cheap-module-eval-souce-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    rules: [
      {
        use: [
          // 'babel-loader',
          'babel-loader?presets[]=es2015&presets[]=stage-0&presets[]=react'
        ],
        include: [
          path.resolve(__dirname, 'src')
        ],
        test: /\.jsx?$/,         // Match both .js and .jsx files
        query: {
          // presets: [
          //  'es2015',
          //  'stage-0',
          //   'react'
          // ],
          plugins: ['transform-runtime']
        }
      }
    ]
  }
}
