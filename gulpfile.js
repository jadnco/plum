var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    templateCompiler = require('gulp-ember-template-compiler');

gulp.task('styles', function() {
  gulp.src(['public/scss/main.scss'])
    .pipe(sass())
    .on('error', util.log)
    .pipe(autoprefixer('last 2 versions'))
    .on('error', util.log)
    .pipe(gulp.dest('public/css/'))
});

gulp.task('templates', function() {
  gulp.src('public/templates/*.hbs')
  .pipe(templateCompiler())
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('public/js/'));
});

gulp.task('watch', function() {
  gulp.watch('public/scss/**', ['styles']);
  gulp.watch('public/templates/*.hbs', ['templates']);
});

gulp.task('default', ['templates', 'styles', 'watch']);