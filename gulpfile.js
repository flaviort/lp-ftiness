"use strict";

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  sass = require('gulp-sass'),
   del = require('del'),
   autoprefixer = require('gulp-autoprefixer'),
   browserSync = require('browser-sync').create(),
   htmlreplace = require('gulp-html-replace'),
   cssmin = require('gulp-cssmin');

gulp.task('compileSass', function() {
  gulp.src(["assets/scss/main.scss"])
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('assets/css'))
    .pipe(browserSync.stream());
});

gulp.task('watchFiles', function() {
  gulp.watch('assets/scss/*.scss', ['compileSass']);
  gulp.watch('assets/scss/**/*.scss', ['compileSass']);
})

gulp.task('serve', ['watchFiles'], function(){
  browserSync.init({
    proxy: "localhost/clients/lp-fitness/"
  });
  gulp.watch("assets/scss/**/*.scss", ['watchFiles']);
  gulp.watch("assets/scss/*.scss", ['watchFiles']);
  gulp.watch(["*.php", "includes/*.php"]).on('change', browserSync.reload);
});