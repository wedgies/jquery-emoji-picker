module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    bump: {
      options: {
        files: ['package.json','bower.json'],
        commitFiles: ['package.json','bower.json'],
        pushTo: 'origin'
      }
    }
  });

  grunt.loadNpmTasks('grunt-bump');

};
