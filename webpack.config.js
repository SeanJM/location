const path           = require("path");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const nodeExternals = require("webpack-node-externals");
const IS_PRODUCTION  = process.env.NODE_ENV === "production";

module.exports = [{
  entry  : "./src/index.js",
  target : "node",

  output : {
    filename      : "index.js",
    libraryTarget : "commonjs2",
    libraryExport : "default",
    path          : path.resolve("./")
  },

  module: {
    rules: [{
      test : /\.js$/,
      use  : {
        loader : "babel-loader",
        options: {
          presets : [ "env" ],
          plugins : [
            "babel-plugin-transform-object-rest-spread"
          ]
        }
      }
    }]
  },

  plugins: IS_PRODUCTION
    ? [ new UglifyJSPlugin() ]
    : undefined,
}, {
  externals : [ nodeExternals() ],
  entry   : "./test/src/index.js",
  target  : "node",
  devtool : "sourcemap",

  output : {
    filename      : "index.js",
    libraryTarget : "commonjs2",
    path          : path.resolve("./test")
  },

  module: {
    rules: [{
      test : /\.js$/,
      exclude : /node_modules/,
      use  : {
        loader : "babel-loader",
        options: {
          presets : [ "env" ],
        }
      }
    }]
  }
}];