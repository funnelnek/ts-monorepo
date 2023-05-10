const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { merge } = require('webpack-merge');
const common = require("../../../../webpack/common");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");


const cwd = __dirname;
const src = path.resolve(cwd, "../src");
const publicFolder = path.resolve(cwd, "../public");
const entry = path.resolve(src, "index.ts");
const template = path.resolve(src, "index.html");
const assets = path.resolve(publicFolder, "assets");
const host = "http://localhost/";
const publicPath = host + "assets/";

const development = {
    mode: "development",
    output: {
        filename: "assets/js/[name].js",
        path: publicFolder,
        clean: true,
    },
    entry: {
        main: {
            import: entry
        }
    },
    devServer: {
        host: "127.0.0.1",
        static: {
            publicPath,        
            directory: assets
        },        
        port: 8080
    },
    plugins: [
        new ModuleFederationPlugin({
            name: "host",
            remotes: {
                "discord": "discord@http://localhost:8081/remoteEntry.js"
            }
        }),
        new HtmlWebpackPlugin({
            template,
            title: "Funnelnek",
            filename: "index.html",
            chunks: ["main"],
            inject: true
        }),
        new WebpackRemoteTypesPlugin({
            remotes: {
              discord: 'discord@http://localhost:8081/',
            },
            outputDir: '@types',
            remoteFileName: '[name]-dts.tgz' // default filename is [name]-dts.tgz where [name] is the remote name, for example, `app` with the above setup
        })
    ]
}

module.exports = merge(common, development);