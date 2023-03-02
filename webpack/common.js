const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const projectDir = path.resolve(__dirname, "..");

module.exports = {
    context: projectDir,
    entry: {},
    output: {
        clean: true
    },
    modules: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: "babel-loader" },
                    { loader: "ts-loader" }
                ],
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                use: [{ loader: "babel-loader" }]
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: "scss-loader" }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                ]
            },
            {
                test: /\.module\.(s[ac]ss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" , options: { module: true }},
                    { loader: "scss-loader" }
                ]
            },
            {
                test: /\.(jpe?g|png|svg)/,
                use: "assets/resource"
            }
        ]
    }
}
