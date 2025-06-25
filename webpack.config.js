const path = require("path");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  entry: "./src/index.jsx", // React アプリのエントリ
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // .js と .jsx を Babel で変換
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"], // import 時に拡張子省略可
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    hot: true,
    port: 3000,
    open: true,
  },
  plugins: [
    // new BundleAnalyzerPlugin()
  ]
};
