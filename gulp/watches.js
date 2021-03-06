var gulp = require('gulp');
var browserSync = require('browser-sync').create();


gulp.task('browserSync', function () {
    browserSync.init({
        server: {
            
            baseDir: '.',  //baseDir: 'source/'
            index: './index.html' //change the start index html file
        }
    })
})


// configure which files to watch and what tasks to use on file changes
gulp.task('watches', ['browserSync'], function () {
    
    gulp.watch('source/js/**/*.js', ['jshint']);
    gulp.watch('source/scss/**/*.scss', ['sass', browserSync.reload ]);
    
    gulp.watch('*.html', browserSync.reload); 

});



