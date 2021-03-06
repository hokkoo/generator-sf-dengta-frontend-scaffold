import colorFunction from './colorFunction.js';
import each from '../lodash-es/each.js';
import some from '../lodash-es/some.js';
import reduce from '../lodash-es/reduce.js';
import extend from '../extend.js';

let defaultSerie = {
	name: '',
	type: 'line',
	areaStyle: {normal: {}},
	stack: '',
	smooth: true,
	itemStyle: {
		normal: {
			color: '#008cd6',
			barBorderRadius: [5, 5, 0, 0]
		}
	},
	data: []
};

export default function makeLineSerie(name, list, option) {
	const serie = extend({}, defaultSerie, {
		name
	}, option);
	each(list, (v) => {
		serie.data.push(v);
	});
	return serie;

}