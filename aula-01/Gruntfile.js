module.exports = function( grunt ) {
	"use strict";

	grunt.initConfig({
		copy: {
			public: {
				cwd: 'public/',
				src: '**',
				dest: 'dist/',
				expand: true
			}
		},

		clean: {
			dist: {
				src: 'dist/'
			}
		}
	});

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['clean', 'copy']);
    grunt.registerTask('default', 'build');
};