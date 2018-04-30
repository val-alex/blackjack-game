module.exports = function(grunt) {
	var banner = '/*\n<%= pkg.name %> <%= pkg.version %>';
	banner += '- <%= pkg.description %>\n<%= pkg.repository.url %>\n';
	banner += 'Built on <%= grunt.template.today("yyyy-mm-dd") %>\n*/\n';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			options: {
				separator: ';\n',
				banner: banner
			},
			build: {
				files: [{
					src: ['src/*.js'], 
					dest: 'build/<%= pkg.name %>.js'
				}]
			}
		},
	});

	grunt.loadNpmTasks('grunt-contrib-concat');

	grunt.registerTask('default', ['concat']);
};