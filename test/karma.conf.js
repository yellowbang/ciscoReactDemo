let webpackConfig = require('./webpack.test.config.js');

module.exports = function(config) {
    config.set({
        basePath: '../',
        frameworks: ['jasmine'],
        files: [
            'src/**/*.spec.js',
        ],
        preprocessors: {
            'src/**/*.spec.js': ['webpack']
        },
        plugins: [
            'karma-webpack',
            'karma-jasmine',
            'karma-chrome-launcher',
            'karma-mocha-reporter'
        ],
        webpack: webpackConfig,
        reporters: ['mocha'],
        port: 8002,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: true,
        concurrency: Infinity
    })
}
