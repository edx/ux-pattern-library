(function() {
    'use strict';

    var gulp = require('gulp'),
        gitUtils = require('../util/gitUtils'),
        childProcess = require('child_process'),
        previewDomain = 'ux-test.edx.org';

    gulp.task('remove-preview', function() {
        var branch = gitUtils.currentBranch();
        childProcess.execSync(
            'aws s3 rm --recursive  s3://' + previewDomain + '/' + branch
        );
        console.log('Removed preview for branch ' + branch);
    });
}());
