var fs = require('fs')
var path = require('path')

var combineLoaders = require('webpack-combine-loaders')
// var resolve = require('resolve')
var webpack = require('webpack')


module.exports = (function config() {
  return {
    devtool: 'cheap-module-eval-source-map',
    entry: './mapper',
    output: {
      path: __dirname + '/build',
      filename: 'bundle.js',
      publicPath: '/'
    },
    plugins: [
      // new webpack.HotModuleReplacementPlugin(),
      new webpack.NoErrorsPlugin(),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
      })
    ],
    resolve: {
      // alias: {
      //   'babel-runtime': path.join(findNodeModules(__dirname), 'babel-runtime'),
      //   'react-heatpack-react-alias': reactPath,
      //   'react-heatpack-react-dom-alias': reactDOMPath,
      //   'react-heatpack-script-alias': options.script
      // },
      extensions: ['', '.js', '.jsx', '.json'],
      root: '/',
      // fallback: [findNodeModules(__dirname)]
    },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          // exclude: excludeJS,
          query: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-react',
              'babel-preset-stage-0'
            ],
            // plugins: [
            //   require.resolve('babel-plugin-transform-runtime'),
            //   require.resolve('babel-plugin-transform-react-display-name'),
            //   [require.resolve('babel-plugin-react-transform'), {
            //     transforms: [{
            //       transform: require.resolve('react-transform-hmr'),
            //       imports: [reactPath],
            //       locals: ['module']
            //     }, {
            //       transform: require.resolve('react-transform-catch-errors'),
            //       imports: [reactPath, require.resolve('redbox-noreact')]
            //     }]
            //   }]
            // ]
          }
        },
        {
          test: /\.json$/,
          loader: 'json-loader'
        },
        {
          test: /\.css$/,
          loader: combineLoaders([
            {loader: 'style-loader'},
            {loader: 'css-loader', query: {minimize: false}}
          ]) + '!' + 'autoprefixer-loader'
        },
        {
          test: /\.(gif|png)$/,
          loader: 'url-loader',
          query: {
            limit: 10240
          }
        },
        {
          test: /\.jpe?g$/,
          loader: 'file-loader'
        },
        {
          test: /\.(otf|svg|ttf|woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'url-loader',
          query: {
            limit: 10240
          }
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          loader: 'file-loader'
        }
      ]
    }
  }
})()
