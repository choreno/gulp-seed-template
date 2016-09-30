//Required packages  
//npm i -D gulp browser-sync run-sequence del   
//npm i -D gulp-babel babel-preset-es2015 babel-loader webpack-stream
//npm i -D jshint gulp-jshint jshint-stylish
//npm i -D gulp-sourcemaps gulp-useref
//npm i -D gulp-typescript gulp-shell
//npm i -D browserify tsify vinyl-source-stream



var gulp = require('gulp');
var gutil = require('gulp-util');
var runSequence = require('run-sequence');
var requireDir = require('require-dir');

//Required all gulp tasks

requireDir('./gulp', { recurse: true });



//-------------- Tasks -------------//

//hello !!!!
// gulp.task('default', ['hello'], function(){

//})


//browserSync
// gulp.task('default', ['browserSync'], function(){

// })

//clean
// gulp.task('default', ['clean'], function(){

// })


//runSequence
// gulp.task('default', function (callback) {

//     runSequence(['clean','webpack', 'watches']);
// })


//sass
// gulp.task('default',['sass'], function (callback) {
    
// })


//watches 
gulp.task('default', ['watches'], function(callback){

} );








