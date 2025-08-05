const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundles.js',
        library: {
            type: 'umd'
        },
        clean: true
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'build'),
        },
        compress: true,
        port: 9000,
        open: true,
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    externals: {
        "react": "React",
        "react-dom": "ReactDOM",
        "@syncfusion/ej2-react-grids": "SyncfusionReactGrids"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
