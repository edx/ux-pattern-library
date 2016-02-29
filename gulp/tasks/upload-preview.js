(function() {
    'use strict';

    var gulp = require('gulp'),
        gitUtils = require('../util/gitUtils'),
        childProcess = require('child_process'),
        previewDomain = 'ux-test.edx.org',
        previewSiteDir = '_preview_site';

    gulp.task('upload-preview', function() {
        var branch = gitUtils.currentBranch();
        childProcess.execSync(
            'aws s3 sync ' + previewSiteDir + ' s3://' + previewDomain + '/' + branch
        );
        console.log('Preview site ready at http://' + previewDomain + '/' + branch);
    });
}());
