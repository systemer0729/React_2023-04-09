//webpackの設定

const path = require('path');

module.exports = {
  entry: './src/index.js', // エントリーポイント
  output: { // 出力先
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: { // モジュールの設定
    rules: [
      {
        test: /\.js$/, // .jsファイルを対象
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Babelを使ってES6のコードを変換
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      }
    ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};
