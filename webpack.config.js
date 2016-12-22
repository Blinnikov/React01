var path = require('path');
var webpack = require('webpack');

module.exports ={
  devtool: 'cheap-module-eval-souce-map',
  entry: {
    hot: [
      'react-hot-loader/patch',
      // activate HMR for React

      'webpack-hot-middleware/client'
    ],
    main: [
      './src/index'
    ],
    vendor: ["babel-polyfill", "react", "react-dom", "redux", "react-redux"]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'hot']
    })
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: 'eslint-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        include: [
          path.resolve(__dirname, 'src')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', 'json']
  },
  performance: {
    // TODO: Remove this settings in the future and configure code splitting
    // 1. You can limit the size of your bundles by using import()
    // or require.ensure to lazy load some parts of your application.
    // For more info visit https://webpack.js.org/guides/code-splitting/
    // 2. v2.1.0-beta.28
    // Major changes:
    // add import() as Code Splitting construct.
    // It should be used instead of System.import when possible.
    // System.import will be deprecated in webpack 2 release (removed in webpack 3)
    // as it's behavior is incorrect according to the spec.
    hints: false
  }
}
