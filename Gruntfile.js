module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      
      
      concat: {
        options: {
          separator: "'\n;\n'",
        },
        dist: {
          src: ["js/*.js"],
          dest: "dist/<%= pkg.name %>.js",
        },
      },
      uglify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        dist: {
          src: 'dist/<%= pkg.name %>.js',
          dest: 'dist/<%= pkg.name %>.min.js'
        }
      },
      watch: {
        scripts: {
          files: 'js/*.js', 
          tasks: ['concat:dist', 'uglify:dist', 'qunit']
        },   
        options: {
            livereload: true,
          },
      },
      qunit: {
        files: ['html/*.html']
      },
    });
  
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-qunit");

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'qunit']);
    
  
  };
  