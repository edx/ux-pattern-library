var gulp    = require('gulp');
var config  = require('../config').jekyll;
var cp      = require('child_process');

gulp.task('jekyll-build', function (done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});
