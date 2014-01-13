var gulp = require('gulp');
var gutil = require('gulp-util');
var coffee = require('gulp-coffee');
var stylus = require('gulp-stylus');
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

gulp.task('css', function() {
  gulp
    .src('src/stylus/**/*.styl')
    .pipe(stylus())
    .pipe(concat('style.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('public/css'))
})

gulp.task('watch', function() {
  gulp.src('src/coffee/**')
        .pipe(watch(function(events, cb) {
            gulp.run('coffee')
            gulp.run('js')
        }))
})

gulp.task('default', function() {
  gulp.run('js');
  gulp.run('css');
  //gulp.run('watch');
})
