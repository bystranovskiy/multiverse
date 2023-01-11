const path = require("path");
const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const scss  = "./src/scss/sections/";
const js    = "./src/js/sections/";

module.exports = {

    watch: false,

    entry: {
        "main":                                 "./src/entry.es6",
        
        "section-intro":                        scss + "section-intro.scss",
        "section-content_with_cover_image":     scss + "section-content_with_cover_image.scss",
        "section-about":                        scss + "section-about.scss",
        "section-contact_us":                   scss + "section-contact_us.scss",
        
        "section-roadmap":                      js + "section-roadmap.es6",
        "section-join":                         js + "section-join.es6",
        "section-evolution":                    js + "section-evolution.es6",
        "section-products":                     js + "section-products.es6",
        "section-faqs":                         js + "section-faqs.es6",

        "error404":                             "./src/scss/partials/error404.scss",
        "page-thanks-for-submitting":           "./src/scss/partials/page-thanks-for-submitting.scss",
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "./[name].min.js"
    },

    plugins: [
        new CleanWebpackPlugin(),
        new webpack.DefinePlugin({
            NODE_ENV: JSON.stringify(NODE_ENV)
        }),
        new webpack.ProvidePlugin({
            Promise: "es6-promise-promise"
        }),
        new MiniCssExtractPlugin({
            filename: "./[name].min.css",
        }),
        new ESLintPlugin({
            extensions: "es6",
        }),
    ],

    module: {

        rules: [
            {
                test: /\.es6$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: NODE_ENV === "development",
                        }
                    },
                    {
                        loader: "resolve-url-loader",
                        options: {
                            sourceMap: NODE_ENV === "development"
                        }
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    autoprefixer
                                ],
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true
                        }
                    }
                ],
            },
            {
                test: /\.(jpg|png|woff|woff2|eot|ttf|svg|gif)$/,
                loader: "url-loader",
                options: {
                    limit: 100000,
                }
            }

        ]
    },

    devtool: NODE_ENV === "development" ? "source-map" : false,

    externals: {
        "jquery": "jQuery"
    }

};
