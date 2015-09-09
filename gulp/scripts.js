'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf'),
    ngAnnotate  = require('gulp-ng-annotate');



var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp.src(path.join(conf.paths.src, '/app/scripts/**/*.coffee'))
    .pipe($.sourcemaps.init())
    .pipe($.coffeelint())
    .pipe($.coffeelint.reporter())
    .pipe($.coffee()).on('error', conf.errorHandler('CoffeeScript'))
    .pipe($.sourcemaps.write())
       .pipe(ngAnnotate())
    .pipe(gulp.dest(path.join(conf.paths.tmp, '/serve/app')))
    .pipe(browserSync.reload({ stream: true }))
    .pipe($.size())
});
