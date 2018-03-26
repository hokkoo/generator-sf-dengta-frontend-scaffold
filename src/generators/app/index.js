import path from 'path';
import {
	Base
} from 'yeoman-generator';
import copyTemplates from '../utils/copyTemplates.js';

class Generator extends Base {
	constructor(...args) {
		super(...args);

		scriptBase.call(this);
	}

	prompting() {
		var prompts = [{
			name: 'appName',
			message: '请输入应用名称（例如：dengta）',
			default: `dengta`
		}];

		return this.prompt(prompts).then(props => {
			this.name = props.name;
			this.dir = path.join(__dirname, this.name);
		});
	}

	writing() {
		const src = path.join(this.sourceRoot(), './templates/simple-vue-site');
		copyTemplates(src, this.dir);
	}
}

module.exports = Generator;