var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;
var harp        = require('harp');
var bower       = require('main-bower-files');
var filter      = require('gulp-filter');
var concat      = require('gulp-concat');
var deploy      = require('gulp-gh-pages');
var exec        = require("child_process").exec;

/**
 * Serve the Harp Site from the src directory
 */
gulp.task('serve', function () {
  harp.server('.', {
    port: 9000
  }, function () {
    browserSync.init(__dirname, {
      proxy: "localhost:9000",
      open: false,
    });
    /**
     * Watch for changes
     */
    gulp.watch("./**/*.{styl,sass,scss,less}", function () {
      reload("style.css", {stream: true});
    });

    gulp.watch("./**/*.{ejs,jade,haml,json}", reload);
  });
});

/**
 * Build the Harp Site
 */
gulp.task('build', ['bower'], function(done) {
  exec('harp compile . www', {stdio: 'inherit'})
    .on('close', done);
});

gulp.task('bower', function(){
    var jsFilter   = filter('**/*.js');
    var cssFilter  = filter('**/*.css');

    return gulp.src(bower())
    .pipe(jsFilter)
    .pipe(concat('components.min.js'))
    .pipe(gulp.dest('public/dest'))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(concat('components.min.css'))
    .pipe(gulp.dest('public/dest'));
});

/**
 * Push build to gh-pages
 */
gulp.task('deploy', ['build'], function () {
  return gulp.src("./www/**/*")
    .pipe(deploy({branch: 'master'}));
});

/**
 * Default task, running `gulp` will fire up the Harp site,
 * launch BrowserSync & watch files.
 */
gulp.task('default', ['serve']);
