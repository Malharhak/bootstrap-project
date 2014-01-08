module.exports = function (grunt) {
	grunt.initConfig ({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			compile: {
				files: [{
					expand: true,
					cwd: 'public/scss',
					src: ['*.scss'],
					dest: 'public/css',
					ext: '.css'
				}]
			}
		},

		requirejs: {
			compile: {
				options: {
					findNestedDependencies : true,
					mainConfigFile : 'public/rconfig.js',
					name: 'main',
					baseUrl : 'public/js',
					out : 'public/build.js',
					optimize : 'uglify'
				}
			}
		},

		jshint: {
			options: {
				curly: true,
				eqeqeq: true,
				eqnull: true,
				browser: true
			},
			files: {
				src: ['public/js/**/*.js']
			}
		},
		concurrent: {
			tasks: ["nodemon", "watch"],
			options: {
				logConcurrentOutput: true
			}
		},
		nodemon: {
			dev: {
				options: {
					file: 'server/app.js',
					watchedFolders: ['server']
				}
			}
		},
		watch: {
			css: {
				files: ['public/scss/*.scss'],
				tasks: ['jshint'],
			},
			options: {
				livereload: true
			},
			js: {
				files: ['<%= jshint.files.src %>', 'server/**/*.js'],
				tasks: ['jshint']
			},
			jade: {
				files: ['views/*.jade']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-requirejs');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concurrent');
	grunt.loadNpmTasks('grunt-nodemon');

	grunt.registerTask('default', ['sass', 'requirejs', 'jshint']);
};