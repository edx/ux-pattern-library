var gulp    = require('gulp'),
    config  = require('../config').jekyll,
    cp      = require('child_process');

gulp.task('jekyll-build', function (done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});
