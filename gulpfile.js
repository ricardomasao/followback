var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var less = require('gulp-less');
var path = require('path');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');
var uglify = require('gulp-uglify');
var minifyCss = require('gulp-minify-css');
var watch = require('gulp-watch');

gulp.task('js', function() {
  gulp
    .src('src/coffee/**/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(browserify({
          transform : ['coffeeify'],
          insertGlobals : true,
          debug : true
        }))
    .pipe(concat('app.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
})

gulp.task('vendors', function() {
  gulp
    .src('src/vendors/**/*.js')
    .pipe(browserify({
          insertGlobals : true,
          debug : true
        }))
    .pipe(concat('app_vendors.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/js'))
})

gulp.task('less',function(){
  gulp.src('src/less/*.less')
    .pipe(less({
      paths: [ path.join('public/css', 'less', 'includes') ]
    }))
    .pipe(gulp.dest('public/css'));
})

gulp.task('watch', function() {
  gulp.src(['src/coffee/**/*.coffee','src/less/*.less'])
    .pipe(watch(function(events, cb) {
        gulp.run('js')
        gulp.run('less')
        gulp.run('watch')
    }))
})

gulp.task('default', function() {
  gulp.run('vendors')
  gulp.run('js');
  gulp.run('less');
  gulp.run('watch');
})
