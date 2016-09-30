
//use the tsconfig.json
var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json'); 

gulp.task('tscript', function(){


    return tsProject.src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest('dist')); 
})



// //no use of tsconfig.json
// var gulp = require('gulp');
// var ts = require('gulp-typescript');

// var gulp = require('gulp');
// var ts = require('gulp-typescript');
 
// gulp.task('default', function () {
//     return gulp.src('src/**/*.ts')
//         .pipe(ts({
//             noImplicitAny: true,
//             out: 'output.js'
//         }))
//         .pipe(gulp.dest('built/local'));
// });