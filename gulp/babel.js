var gulp = require('gulp');
var babel = require('gulp-babel');


//No longer needed when webpack is used
gulp.task('babel', function () {
    return gulp.src('js/**/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('build'))

});
