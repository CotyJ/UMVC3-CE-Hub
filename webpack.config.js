const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
    assetModuleFilename: '[name][ext]',
    publicPath: '/',
  },
  devtool: 'source-map', // not needed yet
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: false,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      {
        test: /\.(eot|svg|ttf|woff|woff2?)$/,
        use: {
            loader: 'file-loader'
            , options: {
                name: '../css/fonts/[name]-[hash:8].[ext]'
            }
        },
      },

    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'UMVC3 CE Info Page',
      filename: 'index.html',
      template: 'src/index.html',
      favicon: "./src/assets/favicon.ico",
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
