'use strict';
var gulp = require('gulp');
var concat = require('gulp-concat');
var less = require('gulp-less');
var minifyCSS = require('gulp-clean-css'),
refresh = require('gulp-livereload'),
browserify = require('gulp-browserify'),
uglify = require('gulp-uglify'),
lr = require('tiny-lr'),
server = lr(),
paths = {
  js: ['src/app/**/**/*.js', 'src/app/**/*.js', '!node_modules/**', '!src/app/lib/*.js'],
  less: ['src/assets/styles/*.less']
};

gulp.task('styles', function() {
  gulp.src(paths.less)
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(concat('styles.less'))
    .pipe(gulp.dest('dist/styles'))
    .pipe(refresh(server))
});

gulp.task('scripts', function() {
  gulp.src(paths.js)
    .pipe(browserify())
    .pipe(uglify())
    .pipe(concat('scripts.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(refresh(server))
});

gulp.task('build', function() {
  gulp.run('styles', 'scripts');

  gulp.watch(paths.js, function(event) {
    gulp.run('scripts');
  })

  gulp.watch(paths.less, function(event) {
    gulp.run('styles');
  })
});

gulp.task('default', ['build']);
