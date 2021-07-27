const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'eval-source-map',
	devServer: {
		open: true,
		compress: true,
		hot: true,
		port: 3000
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			chunks: 'all'
		},
		minimize: true
	},
	plugins: [
		new ESLintPlugin({
			context: './src',
			formatter: 'codeframe',
			files: ['.', 'src', 'config']
		})
	]
});
