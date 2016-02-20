module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			dist: {
				files: {
					'css/main.css' : 'css/sass/main.scss'
				}
			}
		},

		watch: {
			js: {
				files: '**/*.js',
				tasks: ['concat']
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass', 'concat']
			}
		},

		concat: {
			js: {
				src: ['js/libs/jquery-2.2.0.min.js', 'js/libs/*.js', 'js/main.js'],
				dest: 'js/scripts.js'
			},
			css: {
				src: ['css/main.css', 'css/libs/*.css'],
				dest: 'css/styles.css'
			}
		},

		uglify: {
			js: {
				files: {
					'js/scripts.min.js': ['js/scripts.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default',['watch']);

};