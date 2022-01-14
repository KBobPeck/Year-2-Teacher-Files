const path = require("path");

module.exports = {
  //! this is a keyword that lets the webpack server know that we are working in a dev environment and that we need more meaningful error messages
  mode: "development",
  //! where the file is held
  entry: "./src/app.ts",
  //! this will be the final file, it will be compiled into 1 file, since this is run in a node evironment we can use the path module
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    //! public path tells the webpack dev server where the file should be located for the html
    publicPath: "dist",
  },
  //! tells webpack that you are including a source-map and it should look for it
  devtool: "inline-source-map",
  //! things that we want to run in the module
  module: {
    rules: [
      {
        //! regex to find all ts files
        test: /\.ts$/,
        //! the loader that the compiler uses to handle certain types of files
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  //! webpack only looks for .js files by default but we can add .ts using resolve
  resolve: {
    extensions: [".ts", ".js"],
  },
};
