'use strict';
var gulp = require('gulp');
var nib = require('nib');
var nodemon = require('gulp-nodemon');
var connect = require('gulp-connect');

gulp.task('connect',function(){
  connect.server({
    root:'public',
    port:8000,
    livereload:true
  });
  nodemon();
});

//tarea para recargar el css
gulp.task('css',function(){
  gulp.src('./public/css/*.css')
    .pipe(connect.reload())
});

//tarea para recargar el html
gulp.task('html',function(){
  gulp.src('./public/*.html')
    .pipe(connect.reload())
});
// recarga de js
gulp.task('js', function () {
  gulp.src('./public/components/*.js')
    .pipe(connect.reload())
});

gulp.task('watch', function () {
  gulp.watch([
    './public/*.css',
    './public/components/*.css',
    './public/components/**/*.css',
    './public/components/**/**/*.css'
  ], ['css']);

  gulp.watch([
    './public/*.js',
    './public/components/*.js',
    './public/components/**/*.js',
    './public/components/**/**/*.js',
    './api/*.js',
    './api/components/*.js',
    './api/components/**/*.js',
    './api/components/**/**/*.js'
  ], ['js']);

  gulp.watch([
    './public/*.html',
    './public/components/*.html',
    './public/components/**/*.html',
    './public/components/**/**/*.html'
  ], ['html']);
})
gulp.task('tarea',['connect','css','html','js','watch']);
