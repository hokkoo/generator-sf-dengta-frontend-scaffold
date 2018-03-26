var path = require('path')
var projectRoot = path.resolve(__dirname, '../')
var src = path.join(projectRoot, 'src')

const dirTree = require('directory-tree');
const entryMap = (function() {
	var map = {};
	var relativeDirectory = src + '/javascript/entry';
	dirTree(path.resolve(src, './javascript/entry'), {}, (item, path) => {
		let name = getRelativePath(item.path, relativeDirectory);
		name = name.replace(/\.js$/, '');
		map[name] = item.path;
		console.log(name)
	});
	return map;
})();

function getRelativePath(pathname, directory) {
	directory = path.normalize(directory);
	pathname = path.normalize(pathname);
	if (pathname.indexOf(directory) === 0) {
		return pathname.slice(directory.length);
	} else {
		return pathname;
	}
}



module.exports = {
	entry: entryMap,
	output: {
		path: path.resolve(__dirname, '../assets/js/'),
		filename: '[name].js'
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			}, 
			{
				test: /\.js$/,
				loader: 'babel',
				options: {
					"presets": [
						['es2015', {modules: false}]
					]
				}
			},
			{
				test: /\.tpl$/,
				loader: 'string'
			}, 
			{
				test: /\.(css|scss|sass)$/,
				loader: 'vue-style-loader!css-loader!sass-loader'
			}, 
			{
				test: /\.theme$/,
				loader: 'string!sass-loader'
			}, 
			{
				test: /\.json$/,
				loader: 'json'
			}, 
			{
				test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
				loader: 'url',
				query: {
					limit: 10000,
					name: '[name].[ext]?[hash:7]'
				}
			}
		]
	/*	rules: [{
			test: /\.vue$/,
			loader: 'vue-loader',
			options: {
				loaders: {
					css: 'vue-style-loader!css-loader',
					scss: 'vue-style-loader!css-loader!sass-loader'
				}
			}
		}, {
			test: /\.css$/,
			use: ['vue-style-loader', 'css-loader']
		}, {
			test: /\.scss$/,
			use: ['vue-style-loader', 'css-loader', 'sass-loader']
		}, {
			test: /\.theme$/,
			use: ['raw-loader', 'sass-loader']
		}]*/
	}
}