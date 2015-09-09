'use strict';

var path = require('path');
var conf = require('./gulp/conf');

var _ = require('lodash');
var wiredep = require('wiredep');

function listFiles() {
  var wiredepOptions = _.extend({}, conf.wiredep, {
    dependencies: true,
    devDependencies: true
  });

  return wiredep(wiredepOptions).js
    .concat([
      path.join(conf.paths.tmp, '/serve/app/**/*.module.js'),
      path.join(conf.paths.tmp, '/serve/app/**/*.js'),
      path.join(conf.paths.src, 'app/scripts/**/*.spec.js'),
      path.join(conf.paths.src, '/**/*.mock.js'),
      path.join(conf.paths.src, '/**/*.html'),
      path.join('test/mocha.conf.js'),
      path.join('bower_components/angular/angular.js'),
      path.join('bower_components/angular-bootstrap/ui-bootstrap-tlps.js'),
      path.join('bower_components/angular-mocks/angular-mocks.js')

    ]);
}

module.exports = function(config) {

  var configuration = {
    files: listFiles(),

    singleRun: true,

    autoWatch: false,

    frameworks: ['mocha', 'sinon-chai'],

    angularFilesort: {
      whitelist: [path.join(conf.paths.tmp, '/**/!(*.html|*.spec|*.mock).js')]
    },

    ngHtml2JsPreprocessor: {
      stripPrefix: 'src/',
      moduleName: 'sterlingConvert'
    },

    browsers : ['Chrome_without_security','PhantomJS_without_security'],
    customLaunchers: {
      Chrome_without_security: {
        base: 'Chrome',
        flags: ['--disable-web-security']
      },
      PhantomJS_without_security: {
        base: 'PhantomJS',
        flags: ['--web-security=no']
      }
    },

    plugins : [
      'karma-phantomjs-launcher',
      'karma-angular-filesort',
      'karma-mocha',
      'karma-sinon-chai',
      'karma-ng-html2js-preprocessor'
    ],

    preprocessors: {
      'src/**/*.html': ['ng-html2js']
    }
  };

  // This block is needed to execute Chrome on Travis
  // If you ever plan to use Chrome and Travis, you can keep it
  // If not, you can safely remove it
  // https://github.com/karma-runner/karma/issues/1144#issuecomment-53633076
  if(configuration.browsers[0] === 'Chrome' && process.env.TRAVIS) {
    configuration.customLaunchers = {
      'chrome-travis-ci': {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    };
    configuration.browsers = ['chrome-travis-ci'];
  }

  config.set(configuration);
};
