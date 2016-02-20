module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			js: {
				src: ['js/libs/jquery-2.2.0.min.js', 'js/libs/*.js', 'js/main.js'],
				dest: 'js/scripts.js'
			},
			css: {
				src: ['css/libs/*.css', 'css/main.css'],
				dest: 'css/styles.css'
			}
		},

		uglify: {
			js: {
				files: {
					'js/scripts.min.js': ['js/scripts.js']
				}
			}
		},

		compass: {
			dist: {
				options: {
					sassDir: 'css/sass',
					cssDir: 'css'
				}
			}
		},

		watch: {
			js: {
				files: 'js/*.js',
				tasks: ['concat']
			},
			css: {
				files: 'css/sass/*.scss',
				tasks: ['compass', 'concat']
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');

};