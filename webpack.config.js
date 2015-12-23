var path = require('path')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: path.resolve(__dirname, 'commentbox.jsx'),
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			 { test: /\.(js|jsx)$/, loader: 'babel' }
    //    		 { test: /\.html$/, loader: 'raw' },
			 // { test: /\.less$/, loader: 'style!css!less' },
			 // { test: /\.css$/, loader: 'style!css' }
		]
	},
	

}
