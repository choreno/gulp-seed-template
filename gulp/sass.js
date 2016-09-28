var gulp   = require('gulp') ;
var  sass   = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

 

 gulp.task('sass', function() {
  return gulp.src('source/scss/**/*.scss')
    .pipe(sourcemaps.init())  // Process the original sources
    .pipe(sass())
    .pipe(sourcemaps.write()) // Add the map to modified source.
    .pipe(gulp.dest('public/assets/css'))
    
});
