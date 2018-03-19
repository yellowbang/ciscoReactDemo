const path = require('path');
const autoprefixer = require('autoprefixer');
const autoprefixerOptions = {
    browsers: [
        'last 3 version',
        'ie >= 10'
    ]
};

// -------
// ENTRY
// -------
const entry = [
    'whatwg-fetch',
    path.resolve('src', 'index.js')
];

// ----------
// RESOLVE
// ----------

const resolve = {
    extensions: ['.js', '.jsx'],
    symlinks: false // This is required from webpack to exclude linked modules together with node_modules (e.g. eslint won't analyse these modules)
};

// ----------
// RULES
// ----------

// Shared rules
const rules = [
    {
        test: /\.(js|jsx)$/,
        exclude: [
            path.resolve('node_modules'),
            path.resolve('src', 'assets')
        ],
        use: ['babel-loader']
    }
];

let getCSSLoaders = () => {
    const loaders = [];
    loaders.push({
        loader: 'style-loader'
    });

    const cssLoaderConfig = {
        loader: 'css-loader',
        options: {
            sourceMap: true
        }
    };

    loaders.push(cssLoaderConfig);
    loaders.push({
            loader: 'postcss-loader',
            options: {
                sourceMap: true,
                plugins: () => [
                    autoprefixer(autoprefixerOptions)
                ]
            }
        },
        {
            loader: 'sass-loader',
            options: {sourceMap: true}
        }
    );
    return loaders;
};

rules.push({
    test: /\.s?css$/,
    use: getCSSLoaders()
});

// Loader for all external files (e.g. font or image files)
rules.push({
    test: /\.(woff|woff2|eot|ttf|jpg|svg)$/,
    use: [
        {
            loader: 'file-loader',
            options: {
                name: 'static/[name]-[hash].[ext]'
            }
        }
    ]
});

const devtool = 'source-map';

module.exports = {
    devtool,
    entry,
    resolve,
    module: {
        rules
    }
};
