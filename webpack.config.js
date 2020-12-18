const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './frontend/src/main.js',
    mode: 'development',
    output: {
      path: __dirname + './frontend/dist',
      filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback:{
            index:'./frontend/dist/index.html'
        },
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'index.html',
            template: './backend/public/index.html'
        })
    ],
    module: {
      rules: [
        {
            test: /\.s[ac]ss$/i,
            use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
            ],
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'style-loader',  'css-loader'],
        },
        {
            test: /\.(png|jpg|gif)$/i,
            use: [
              {
                loader: 'url-loader',
                options: {
                  limit: false,
                },
              },
            ],
        },
        {
            test: /\.m?js$/,
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: [
                  ['@babel/preset-env', { targets: "defaults" }],
                  "@babel/preset-react"
                ]
              }
            }
        },
      ],
    },
  };