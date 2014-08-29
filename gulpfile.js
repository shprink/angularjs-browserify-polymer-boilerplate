var gulp = require('gulp')
        , requireDir = require('require-dir')
        , dir = requireDir('./gulp')
        , argv = require('minimist')(process.argv.slice(2))
        , uglify = require('gulp-uglify')
        , concat = require('gulp-concat')
        , sass = require("gulp-sass")
        , minifyCss = require("gulp-minify-css")
        , minifyHtml = require("gulp-minify-html")
        , stripDebug = require('gulp-strip-debug')
        , browserify = require('gulp-browserify')
        , gulpif = require('gulp-if')
        , taskListing = require('gulp-task-listing');


var express = require('express')
        , refresh = require('gulp-livereload')
        , livereload = require('connect-livereload')
        , livereloadport = 35729
        , serverport = 5000
        , server = express();

server.use(livereload({port: livereloadport}));
server.use(express.static('./www'));

var IS_RELEASE_BUILD = (typeof argv.prod === 'undefined') ? false : true;

gulp.task('default', ['browserify']);

gulp.task('browserify', function() {
    gulp.src('lib/js/main.js')
            .pipe(browserify({
                insertGlobals: false,
                debug: !IS_RELEASE_BUILD
            }))
            .pipe(gulpif(IS_RELEASE_BUILD, stripDebug()))
            .pipe(concat('bundle.js'))
            .pipe(gulpif(IS_RELEASE_BUILD, uglify({
                mangle: false
            })))
            .pipe(gulpif(!IS_RELEASE_BUILD, uglify({// removing comments to reduce file size
                mangle: false,
                compress: false,
                output: {
                    beautify: true
                }
            })))
            .pipe(gulp.dest('./www/js/'));
});

gulp.task('css', function() {
    gulp.src(['lib/scss/**/*.scss'])
            .pipe(sass())
            .pipe(concat(IS_RELEASE_BUILD ? 'bundle.min.css' : 'bundle.css'))
            .pipe(gulpif(IS_RELEASE_BUILD, minifyCss()))
            .pipe(gulp.dest('./www/css'));
});

gulp.task('views', function() {
    gulp.src(['lib/views/**/*.html'])
            .pipe(gulpif(IS_RELEASE_BUILD, minifyHtml({
                quotes: true,
                empty: true
            })))
            .pipe(gulp.dest('./www/views'));
});

gulp.task('watch', [], function() {
    // Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);

    gulp.watch(['lib/js/*.js', 'lib/js/**/*.js'], [
//        'lint',
        'browserify'
    ]);

    gulp.watch(['lib/scss/**/*.scss'], [
        'css'
    ]);

    gulp.watch(['lib/views/**/*.html'], [
        'views'
    ]);

    gulp.watch('./www/**').on('change', refresh.changed);
});

gulp.task('help', taskListing);
