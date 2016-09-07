/**
 * Gulp tasks for managing an S3-based preview of the Pattern Library documentation.
 *
 * The tasks are as follows:
 *  - preview: builds a preview site and uploads it to S3
 *  - build-preview: build the preview site
 *  - upload-preview: upload the preview site to S3
 *  - show-preview: show the preview site in the default browser
 *  - remove-preview: removes the preview site from S3
 *
 * Note: please set the environment variable S3_PREVIEW_DOMAIN to the domain
 * used to host your S3 preview.
 */

'use strict';

var gulp = require('gulp'),
    runSequence = require('run-sequence'),
    childProcess = require('child_process'),
    gitUtils = require('../util/gitUtils'),
    previewConfigFile = '_tmp_preview_config.yml',
    previewSiteDir = '_preview_site',
    previewDomain = process.env.S3_PREVIEW_DOMAIN;

gulp.task('preview', function(callback) {
    runSequence(
        'build-preview',
        'upload-preview',
        'show-preview',
        callback
    );
});

gulp.task('build-preview', ['webpack-prod'], function() {
    var branch = gitUtils.currentBranch(),
        previewBaseUrl = '/' + branch + '/';

    process.env.SITE_ROOT = '/' + branch + '/';
    // Create a temporary Jekyll configuration file which specifies the base URL for the preview site
    childProcess.execSync('echo \'baseurl: ' + previewBaseUrl + '\' > ' + previewConfigFile);

    // Generate the preview version of the site
    console.log('Generating preview for branch ' + branch);
    childProcess.execSync(
        'jekyll build --config _config.yml,' + previewConfigFile + ' --destination ' + previewSiteDir
    );

    // Remove the configuration file since it is no longer needed
    childProcess.execSync('rm ' + previewConfigFile);
});

gulp.task('upload-preview', function() {
    var branch = gitUtils.currentBranch();
    if (previewDomain) {
        childProcess.execSync(
            'aws s3 sync ' + previewSiteDir + ' s3://' + previewDomain + '/' + branch
        );
        console.log('Preview site ready at http://' + previewDomain + '/' + branch);
    } else {
        console.error(
            'No preview domain specified. Please export environment variable S3_PREVIEW_DOMAIN and try again.'
        );
    }
});

gulp.task('show-preview', function() {
    var branch = gitUtils.currentBranch();
    childProcess.execSync(
        'open http://' + previewDomain + '/' + branch
    );
});

gulp.task('remove-preview', function() {
    var branch = gitUtils.currentBranch();
    childProcess.execSync(
        'aws s3 rm --recursive  s3://' + previewDomain + '/' + branch
    );
    console.log('Removed preview for branch ' + branch);
});
