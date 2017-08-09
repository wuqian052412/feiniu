const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
module.exports = {

	entry: __dirname + "/app/js/main.js",
	
	output:{
		filename:"bundle.js",
		path:__dirname + "/public"
	},
	//加载器
	module: {
		loaders: [{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		}, {
			test: /\.html$/,
			loader: "html-loader"
		}, {
			test: /\.(jpg|png|jepg|gif)$/,
			loader: "url-loader"
		}, {
			test: /\.js$/,
			loader: "babel-loader"
		}, {
			test: /\.vue$/,
			loader: "vue-loader"
		}, {
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
		}, /*{
			test: /\.ttf$/,
			loader: "file-loader"
		}*/]
	},
	resolve: {
		alias: {
			"vue": "vue/dist/vue.js"
		}
	},
	//压缩代码
	plugins: [
		new UglifyJSPlugin({
			compress: {
				warnings: false
			}
		})
	],
	devServer: {
		contentBase: "./public",
		inline: true,
		port: 7777,
		disableHostCheck: true,
		// public: 'your-host:7777'
	}
}