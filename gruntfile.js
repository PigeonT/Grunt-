module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        less : {
            compile : {
                files : {
                   'less/site.css' : 'less/site.less' 
                }
            }
        },
        
        jade : {
            complie : {
                files : {
                    'index.html' : 'index.jade'
                }
            
            }
        },

        watch : {

            jade : {
                files : '*.jade',
                tasks : 'jade'
            },

            less : {
                files : 'less/*.less',
                tasks : 'less'
            }
        },

});

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less', 'jade']);
    grunt.registerTask('server', ['express','watch']);
}
