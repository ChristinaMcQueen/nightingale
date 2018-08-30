const path = require('path');

module.exports = appInfo => {
    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1510406440620_7743';

    // add your config here
    config.middleware = [];
    config.view = {
        defaultViewEngine: 'ejs',
        defaultExtension: '.ejs',
        mapping: {
            '.ejs': 'ejs',
        },
        root: [
            path.join(appInfo.baseDir, 'app/view')
        ].join(',')
    };
    config.static = {
        prefix:'/view/assets/',
        dir: path.join(appInfo.baseDir, 'app/view/assets')
    };
    config.webpack = {
	    webpackConfigFile: 'webpack.config.js'
    };

    return config;
};
