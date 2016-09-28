var gulp = require('gulp');
var webpack = require('webpack-stream');


gulp.task('webpack', function() {
 return gulp.src('js/main.js')
  .pipe(webpack( require('./webpack.config.js') ))
  .pipe(gulp.dest('build'))
  .pipe(browserSync.stream())   //reload after webpack 
});
