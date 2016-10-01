var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var bless = require('gulp-bless');
var print = require('gulp-print');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

var plugins = require('gulp-load-plugins')({
    rename: {
    'gulp-live-server': 'serve'
   }
});

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix = new LessPluginAutoPrefix({ browsers: ["last 10 versions"] });

/**
 * 'gulp less'
  * compiles less files, and splits them 
 * into separate files to please the styling limit.
 * /less/css/style.css, /less/css/style-blessed1.css etc
 */
 
// gulp.task('less', function () {
//   return gulp.src('less/style.less')
//     .pipe(less({
//       paths: [ path.join(__dirname, 'less', 'includes') ],
//       plugins: [autoprefix]
//     }))
//     .pipe(print())
//     .pipe(gulp.dest('./css'))
    
// });
gulp.task('less', function() {
  gulp.src('less/*.less')

    .pipe(less())
    .pipe(gulp.dest('static/css/'))
})


//js - libraries first
gulp.task('js', function () {
    gulp.src(['../../node_modules/owl.carousel/dist/owl.carousel.min.js','js/javascript.js'])
        .pipe(concat('all.js'))
        .pipe(gulp.dest('static/js')); 
});
//
gulp.task('default', ['less','js'], function() {
  plugins.livereload.listen();
  gulp.watch(['less/*.less','js/javascript.js'], ['less','js']);
});

  