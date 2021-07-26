const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const CopyPlugin = require('copy-webpack-plugin');
const paths = require('./paths');

module.exports = {
	entry: `${paths.src}/index.js`,
	output: {
		path: paths.build,
		filename: '[name].bundle.js',
		publicPath: '/'
	},
	target: 'web',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'BetSpoiler',
			template: `${paths.public}/index.html`,
			filename: './index.html',
			favicon: `${paths.public}/favicon.png`,
			minify: {
				collapseWhitespace: true
			}
		}),
		new CleanWebpackPlugin()
		/* new CopyPlugin({
			patterns: [
				{
					from: paths.public
				}
			]
		}) */
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: ['babel-loader']
			},
			{
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
				type: 'asset/resource'
			},
			{
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
				type: 'asset/inline'
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader']
			}
		]
	}
};
