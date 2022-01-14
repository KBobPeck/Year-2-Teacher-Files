const path = require("path");
const CleanPlugin = require("clean-webpack-plugin");

module.exports = {
  //! lets webpack server know that this is for production and to remove a lot of the fluff that the dev needs to see
  mode: "production",
  //! where the file is held
  entry: "./src/app.ts",
  //! this will be the final file, it will be compiled into 1 file, since this is run in a node evironment we can use the path module
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devtool: "none",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [new CleanPlugin.CleanWebpackPlugin()],
};
