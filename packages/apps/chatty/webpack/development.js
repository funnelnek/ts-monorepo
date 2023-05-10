const common = require("../../../../webpack/common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const path = path.resolve(__dirname, "../dist");
const src = path.resolve(__dirname, "../src");
const entry = path.resolve(src, "index.ts");
const template = path.resolve(src, "index.html");
const directory = path.resolve(dist, "assets");
const filename = "";
const host = "127.0.0.1";
const port = 4000;
const publicPath = `http://${host}:${port}/assets`;
const static = { directory, publicPath };


const development = {
    output: {
        path,
        filename,
    },
    devServer: {
        port,
        static
    },
    entry: {
        chatty: [entry]
    },
    plugins: [
        new HtmlWebpackPlugin({            
            template,
            chunks: ["chatty"],
            inject: true
        })
    ]
}


module.exports = merge(common, development);