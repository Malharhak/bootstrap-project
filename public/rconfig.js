require.config ({
	baseUrl: "./js/",
	paths: {
		'jquery' : '../libs/jquery/jquery.min',
		'underscore': '../libs/underscore/underscore.min',
		'angular': '../libs/angular/angular.min',
		'domReady': '../libs/requirejs-domready/domReady'
	},
	shim: {
		'jquery' : {
			exports : '$'
		},
		'underscore': {
			exports: '_'
		},
		'angular': {
			exports: 'angular'
		}
	},
	urlArgs: 'd=' + Date.now()
});
define (['main'], function (main) {
	window.main = main;
});