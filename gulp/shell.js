var gulp = require('gulp');
var gutil = require('gulp-util');
var shell = require('gulp-shell');



//simple node execution -- recommended 
// gulp.task('exec', ['clean'], shell.task("node scripts/script.js"))
gulp.task('exec', shell.task("node scripts/script.js"))


//do not use this warapping method
gulp.task('exec2', ['clean'], function() {
  
  gutil.log("start execution");
  
  shell.task(
      "node scripts/script.js"
  );
  
  gutil.log("end execution");

});
