const { merge } = require("webpack-merge");
const common = require("../../../../webpack/development.js");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const context = path.resolve(__dirname, "..");
const dist = path.resolve(context, "public");
const publicPath = "http://127.0.0.1:8090/";

const development = {
    context,
    output: {
        path: dist,
        filename: "assets/js/[name].build.js",
        publicPath
    },
    devServer: {
        host: "127.0.0.1",
        port: 8090,
        hot: true,
        static: {
            directory: `${dist}`,
            publicPath
        }
    },
    entry: {
        three: "./src/index.ts"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "ThreeJs Tutorial",   
            filename: `${dist}/index.html`,
            template: `${context}/src/index.html`,
            chunks: ["three"],
            publicPath
        }),
        new ModuleFederationPlugin({
            name: "three",
            filename: "remoteEntry.js",
            exposes: {}
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'dts-loader',
                    options: {
                      name: 'themes', // The name configured in ModuleFederationPlugin
                      exposes: {
                        
                      },
                      typesOutputDir: '@types' // Optional, default is '.wp_federation'
                    },
                  },
                ],
            }
        ]
    }
};

module.exports = merge(common, development);