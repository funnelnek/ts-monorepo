const { merge } = require("webpack-merge");
const common = require("../../../../../webpack/development.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const projectDir = path.resolve(__dirname, "..");
const dist = path.resolve(projectDir, "/public");
const publicPath = "http://localhost:9081/";

const development = {  
    context: projectDir,  
    output: {
        path: dist,
        filename: `assets/[name].build.js`,
        publicPath
    },
    devServer: {
        host: "127.0.0.1",
        port: 9081,
        hot: true,
        static: {
            publicPath,
            directory: `${dist}/assets`
        }
    },
    entry: {
        discord: `./src/index.ts`
    },    
    plugins: [        
        new HtmlWebpackPlugin({
            title: "Discord Clone",    
            filename: `${dist}/index.html`,
            template: `${projectDir}/src/index.html`,
            chunks: ["discord"],
            publicPath
        }),
        new ModuleFederationPlugin({
            name: "discord",
            filename: "remoteEntry.js",
            exposes: {
                "./routes": path.resolve(__dirname, "../src/routes/index.ts"),
                "./DiscordRouter": path.resolve(__dirname, "../src/routes/router.ts"),
                "./DiscordApp": path.resolve(__dirname, "../src/DiscordApp.tsx"),
                "./DiscordApplication": path.resolve(__dirname, "../src/model/DiscordApplication.ts")
            }
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
                      name: 'discord', // The name configured in ModuleFederationPlugin
                      exposes: {
                        "./routes": path.resolve(__dirname, "../src/routes/index.ts"),
                        "./DiscordRouter": path.resolve(__dirname, "../src/routes/router.ts"),
                        "./DiscordApp": path.resolve(__dirname, "../src/DiscordApp.tsx"),
                        "./DiscordApplication": path.resolve(__dirname, "../src/model/DiscordApplication.ts")
                      },
                      typesOutputDir: '@types' // Optional, default is '.wp_federation'
                    },
                  },
                ],
            }
        ]
    },
};

module.exports = merge(common, development);