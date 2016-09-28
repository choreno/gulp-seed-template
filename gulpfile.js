

//npm installs 
//npm i -D gulp browser-sync run-sequence del   
//npm i -D gulp-babel babel-preset-es2015 babel-loader webpack-stream
//npm i -D jshint gulp-jshint jshint-stylish
//npm i -D gulp-sourcemaps gulp-useref


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


//watches 
//gulp.task('default', ['watches'], function(callback){

//} );


//sass
gulp.task('default',['sass'], function (callback) {

    
})








