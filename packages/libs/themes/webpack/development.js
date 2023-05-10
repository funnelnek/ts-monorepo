const { merge } = require("webpack-merge");
const common = require("../../../../webpack/development.js");
const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const context = path.resolve(__dirname, "..");
const dist = path.resolve(context, "public");
const publicPath = "http://127.0.0.1:8000/";

const development = {
    context,
    output: {
        path: dist,
        filename: "assets/js/[name].build.js",
        publicPath
    },
    devServer: {
        host: "127.0.0.1",
        port: 8000,
        hot: true,
        static: {
            directory: `${dist}`,
            publicPath
        }
    },
    entry: {
        themes: "./src/index.ts"
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Funnelnek UI Theme",   
            filename: `${dist}/index.html`,
            template: `${context}/src/index.html`,
            chunks: ["themes"],
            publicPath
        }),
        new ModuleFederationPlugin({
            name: "themes",
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