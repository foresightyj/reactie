const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const ENV = process.env.NODE_ENV;
const DllPlugin = require('webpack').DllPlugin;
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	mode: ENV || 'production',
	devtool: ENV === 'development' ? 'source-map' : undefined,
	context: ROOT,
	entry: {
		'base': [
			'react',
			'react-dom',
			'create-react-class',
			'@reach/router',
			'react-loadable',
			'redux',
			'@rematch/core',
			'react-redux',
			'antd',
		],
	},
	output: {
		path: `${ROOT}/dist`,
		filename: '[name].dll.js',
		library: '_React_DLL_[name]',
	},
	resolve: {
		alias: {
			// 'react': 'anujs/dist/ReactIE',
			// 'react-dom': 'anujs/dist/ReactIE',
			'react': `${ROOT}/patchs/anujs-ReactIE`,
			'react-dom': `${ROOT}/patchs/anujs-ReactIE`,
			'create-react-class': 'anujs/lib/createClass',
			// '@reach/router': 'anujs/dist/Router',
			'@reach/router': `${ROOT}/patchs/anujs-Router`,
			'redux': `${ROOT}/patchs/redux`,
			'symbol-observable': `${ROOT}/patchs/symbol-observable`,
			'@rematch/core': 'anujs/dist/Rematch',
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
							modules: 'commonjs'
						}],
					],
				},
			},
		}],
	},
	optimization: {
		minimizer: [
			new UglifyJsPlugin({
				uglifyOptions: {
					ie8: true,
					mangle: {
						toplevel: false,
					},
				},
			}),
		],
	},
	plugins: [
		new DllPlugin({
			name: '_React_DLL_[name]',
			path: `${ROOT}/dist/[name].manifest.json`,
		}),
		new UglifyJsPlugin({
			uglifyOptions: {
				ie8: true,
				mangle: false,
				output: {
					beautify: true,
				},
			},
		}),
	],
};
