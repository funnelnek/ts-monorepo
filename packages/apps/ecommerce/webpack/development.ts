import path from 'path';
import HtmlWebpackPlugin from "html-webpack-plugin";
import { Configuration } from 'webpack';
//import merge from "webpack-merge";
import 'webpack-dev-server';

const cwd = path.dirname(import.meta.url.split("file://")[1]);
const src = path.resolve(cwd, "../src/");
const publicFolder = path.resolve(cwd, "../public");
const main = path.resolve(src, "index.ts");
const template = path.resolve(src, "index.html");
const assets = path.resolve(publicFolder, "/assets/");
const host = "http://localhost/";
const publicPath = host + "/assets/";

const development: Configuration = {
    mode: "development",
    output: {
        path: publicFolder,
        clean: true
    },
    entry: {
        ecommerce: {
            import: main,
            filename: "assets/js/[name].js"
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
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
        new HtmlWebpackPlugin({
            template,
            title: "Ecommerce",
            filename: "index.html",
            chunks: ["ecommerce"],
            inject: true
        })
    ]
}

export default development;