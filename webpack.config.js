var webpack_merge = require('webpack-merge');

var base_config = require("mendix-hybrid-app-base/webpack.config");

module.exports = function(env) {
    return config = webpack_merge(base_config(env), {
    });
};
