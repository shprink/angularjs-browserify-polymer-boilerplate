var gulp = require('gulp')
        , requireDir = require('require-dir')
        , dir = requireDir('./gulp/tasks')
        , sys = require('sys')
        , exec = require('child_process').exec
        , argv = require('minimist')(process.argv.slice(2))
        , runSequence = require('run-sequence')
        , taskListing = require('gulp-task-listing');

var puts = function(error, stdout, stderr) {
    sys.puts(stdout);
};

var IS_RELEASE_BUILD = (typeof argv.prod === 'undefined') ? false : true;

gulp.task('default', ['watch', 'scripts', 'images']);

gulp.task('bs', function(callback) {
  runSequence('clean', ['build']);
});
gulp.task('bsPolymer', function(callback) {
  runSequence('cleanPolymer', ['buildPolymer']);
});

gulp.task('help', taskListing);

