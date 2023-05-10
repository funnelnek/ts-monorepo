const common = require("./common");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const production = {
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                    { loader: "sass-loader" }
                ]
            },
            {
                test: /\.module\.(s[ac]ss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,                    
                    { loader: "css-loader", options: { modules: true } },
                    { loader: "sass-loader" }
                ]
            },          
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    { loader: "css-loader" },
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin()
    ]
};

module.exports = merge(common, production);