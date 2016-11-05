module.exports = function(grunt) {

   grunt.initConfig({
      /* Copia os arquivos para o diretorio 'dist'*/
      copy: {
         public: {
           expand: true,
           cwd: 'public',
           src: '**',
           dest: 'dist'
         }
     },

     clean: {
          dist: {
              src: 'dist'
          }
     }
  });

  //registrando task para minificação

  grunt.registerTask('dist', ['clean', 'copy']);

  // registrando tasks
  grunt.registerTask('default', ['dist']);

  // carregando tasks
  grunt.loadNpmTasks('grunt-contrib-copy'); 
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-usemin');
}