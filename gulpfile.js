var gulp = require('gulp'),
    util = require('gulp-util'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    templateCompiler = require('gulp-ember-template-compiler'),
    browserSync = require('browser-sync');

gulp.task('serve', function() {
  browserSync.init({
    server: './public',
    open: false
  });
});

gulp.task('styles', function() {
  gulp.src(['public/scss/main.scss'])
    .pipe(sass())
    .on('error', util.log)
    .pipe(autoprefixer('last 2 versions'))
    .on('error', util.log)
    .pipe(gulp.dest('public/css/'))
    //.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
  gulp.src(['public/js/app/plum.js', 'public/js/app/**/*.js'])
  .pipe(concat('bundle.js'))
  .on('error', util.log)
  //.pipe(uglify())
  //.on('error', util.log)
  .pipe(gulp.dest('public/js/'))
});

gulp.task('templates', function() {
  gulp.src('public/templates/**/*.hbs')
  .pipe(templateCompiler())
  .pipe(concat('templates.js'))
  .pipe(gulp.dest('public/js/app/'));
});

gulp.task('watch', function() {
  gulp.watch('public/scss/**/*.scss', ['styles']);
  gulp.watch('public/templates/**/*.hbs', ['templates']);
  gulp.watch('public/js/**/*.js', ['scripts']);
});

gulp.task('default', ['templates', 'styles', 'watch', 'scripts']);
