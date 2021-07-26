const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const paths = require('./paths');

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

module.exports = merge(common, {
	mode: 'production',
	output: {
		path: paths.build,
		publicPath: '/',
		filename: 'static/[name].[contenthash].bundle.js'
	},
	devtool: false,
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		},
		minimize: true
	}
});
