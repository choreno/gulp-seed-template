var gulp = require('gulp');
var del = require('del');

// gulp.task('clean', function() {
//     del(['build/**/*.js']);
// });

gulp.task('clean', function(){
    return del.sync('build/') ;  

})
