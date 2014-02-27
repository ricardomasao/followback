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

var paths = {
  coffee: ['src/coffee/**/*.coffee'],
  scripts:['src/vendors/jquery/*.js','src/vendors/tweenlite/*.js'],
  less: 'src/less/*.less'
};

//gulp.task('js', function() {
//  gulp
//    .src('src/coffee/**/*.coffee')
//    .pipe(coffee({bare: true}).on('error', gutil.log))
//    .pipe(browserify({
//          transform : ['coffeeify'],
//          insertGlobals : true,
//          debug : true
//        }))
//    .pipe(concat('app.js'))
//    .pipe(uglify())
//    .pipe(gulp.dest('public/js'))
//})

gulp.task('coffee', function() {
  return gulp.src(paths.coffee)
    .pipe(coffee())
    .pipe(browserify({
      transform : ['coffeeify'],
      insertGlobals : true,
      debug : true
    }))
    .pipe(uglify())
    .pipe(concat('app.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('vendors', function() {
  return gulp.src(paths.scripts)
    .pipe(uglify())
    .pipe(concat('app_vendors.js'))
    .pipe(gulp.dest('public/js'))
})

gulp.task('less',function(){
  return gulp.src('src/less/*.less')
    .pipe(less({
      paths: [ path.join('public/css', 'less', 'includes') ]
    }))
    .pipe(gulp.dest('public/css'));
})

gulp.task('watch', function () {
  gulp.watch(paths.coffee, ['coffee']);
  gulp.watch(paths.scripts, ['vendors']);
  gulp.watch(paths.less, ['less']);
});

/*gulp.task('default', function() {
  //gulp.run('js');
  gulp.run('vendors');
  gulp.run('less');
  gulp.run('watch');
})*/

gulp.task('default', ['coffee','vendors', 'less', 'watch']);
