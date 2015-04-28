var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('styles', function() {
  gulp.src(['public/assets/scss/main.scss'])
    .pipe(sass())
    .on('error', util.log)
    .pipe(autoprefixer('last 2 versions'))
    .on('error', util.log)
    .pipe(gulp.dest('public/assets/css/'))
});

gulp.task('watch', function() {
  gulp.watch('public/assets/scss/**', ['styles']);
});

gulp.task('default', ['styles', 'watch']);
