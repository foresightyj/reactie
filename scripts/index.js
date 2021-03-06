const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const ENV = process.env.NODE_ENV;
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


module.exports = {
	mode: ENV || 'production',
	devtool: ENV === 'development' ? 'source-map' : undefined,
	context: ROOT,
	entry: `${ROOT}/src/index.jsx`,
	output: {
		path: `${ROOT}/docs`,
		filename: 'index.js',
	},
	resolve: {
		alias: {
			'react': 'anujs/dist/ReactIE',
			'react-dom': 'anujs/dist/ReactIE',
			'prop-types': 'anujs/lib/ReactPropTypes',
			'create-react-class': 'anujs/lib/createClass',
			'@reach/router': `${ROOT}/patchs/Router`,
			'redux': `${ROOT}/patchs/redux`,
			'@rematch/core': 'anujs/dist/Rematch',
			'antd': `${ROOT}/patchs/antd`,
		},
	},
	module: {
		rules: [{
			test: /\.js$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							loose: true,
							modules: 'commonjs',
						}],
					],
					plugins: [
						['@babel/plugin-proposal-class-properties', {
							loose: true,
						}],
						['@babel/plugin-syntax-dynamic-import'],
					],
				},
			},
		}, {
			test: /\.jsx$/,
			use: {
				loader: 'babel-loader',
				options: {
					presets: [
						['@babel/preset-env', {
							loose: true,
							modules: 'commonjs',
						}],
						['@babel/preset-react', {
							loose: true,
						}],
					],
					plugins: [
						['@babel/plugin-proposal-class-properties', {
							loose: true,
						}],
						['@babel/plugin-syntax-dynamic-import'],
					],
				},
			},
		}, {
			test: /\.css$/,
			use: [
				'style-loader',
				{
					loader: 'css-loader',
					options: {
						modules: true,
						localIdentName: '[local]-_-[hash:base64]',
					},
				}
			],
		}],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ie8: true,
				},
			}),
		],
	},
	plugins: [
		new webpack.DllReferencePlugin({
			context: ROOT,
			manifest: `${ROOT}/src/base.manifest.json`,
		}),
		new HtmlWebpackPlugin({
			template: `${ROOT}/src/index.html`,
		}),
		new UglifyJsPlugin({	// development
			uglifyOptions: {
				ie8: true,
				compress: false,
				mangle: false,
				output: {
					beautify: true,
				},
			},
		}),
		new CopyWebpackPlugin([{
			context: ROOT,
			from: 'src/static',
			to: 'static',
		}], {}),
	],
	devServer: {	// didn't work on IE8
		contentBase: `${ROOT}/docs`,
	},
};
