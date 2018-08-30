const webpack = require('webpack');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');

module.exports = () => {
    return {
        devtool: 'eval-source-map',
        module: {
            loaders: [{
                oneOf: [{
                    test: /\.js$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                },
                    {
                        test: /\.(jpg|png|gif|webp)$/,
                        loader: 'url-loader?limit=10000'
                    },
                    {
                        test: /\.json$/,
                        loader: 'json-loader'
                    },
                    {
                        test: /\.html$/,
                        loader: 'html-loader?minimize=false'
                    }]
            }]
        },
        plugins: [
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.HotModuleReplacementPlugin(),
            new webpack.optimize.ModuleConcatenationPlugin()
        ]
    };
};
