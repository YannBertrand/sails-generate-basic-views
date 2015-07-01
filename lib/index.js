/**
 * sails-generate-basic-views
 *
 * Usage:
 * `sails generate basic-views`
 *
 * @type {Object}
 */


  console.log('success');
module.exports = {

	templatesDirectory: require('path').resolve(__dirname,'../templates'),

	before: require('./before'),

	targets: {
		'./views/:filename': { template: './view.template' }
	}
};

