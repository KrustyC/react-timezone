const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: path.join(__dirname, 'examples/src/index.html'),
  filename: './index.html'
});

const scriptExtHtmlWebpackPlugin = new ScriptExtHtmlWebpackPlugin({
  defaultAttribute: 'defer'
});

module.exports = {
  entry: path.join(__dirname, 'examples/src/index.jsx'),
  output: {
    path: path.join(__dirname, 'examples/dist'),
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      { test: /\.css$/, use: 'css-loader/locals' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  plugins: [
    htmlWebpackPlugin,
    scriptExtHtmlWebpackPlugin,
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    port: 3001
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
