const path = require("path");

module.exports = {
  mode: "development",
  //define entry point
  entry: "./src/script-1.js",

  //define output point
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules)/,
  //       use: {
  //         loader: "babel-loader",
  //         options: {
  //           presets: ["@babel/preset-env"], //es2015
  //         },
  //       },
  //     },
  //     {
  //       test: /\.css$/,
  //       use: ["style-loader", "css-loader"],
  //     },
  //     {
  //       test: /\.scss$/,
  //       use: ["style-loader", "css-loader", "sass-loader"],
  //     },
  //   ],
  // },
};
