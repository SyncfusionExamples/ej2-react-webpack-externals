const path =  require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, "src/index.js"),
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'bundles.js',
        libraryTarget: 'umd',
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
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
        ]
    }
}