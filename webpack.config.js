const path = require('path');

module.exports = {

	entry: './src/source.js',

	output: {
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},

	module: {
		rules: [{
			loader: 'babel-loader',
			test: /\.js$/,
			exclude: /node_modules/
		}]
	}
}