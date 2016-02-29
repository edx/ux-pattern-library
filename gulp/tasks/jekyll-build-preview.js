(function() {
    'use strict';

    var gulp = require('gulp'),
        gitUtils = require('../util/gitUtils'),
        childProcess = require('child_process'),
        previewConfigFile = '_tmp_preview_config.yml',
        previewSiteDir = '_preview_site';

    gulp.task('jekyll-build-preview', function() {
        var branch = gitUtils.currentBranch(),
            previewBaseUrl = '/' + branch + '/';
        // Create a temporary Jekyll configuration file which specifies the base URL for the preview site
        childProcess.execSync(
            'echo \'baseurl: ' + previewBaseUrl + '\' > ' + previewConfigFile
        );

        // Generate the preview version of the site
        console.log('Generating preview for branch ' + branch);
        childProcess.execSync(
            'jekyll build --config _config.yml,' + previewConfigFile + ' --destination ' + previewSiteDir
        );

        // Invoke WebPack to rebuild the JavaScript in the preview site with the correct base URL
        childProcess.execSync(
            'OUTPUT_ROOT=' + previewSiteDir + '/ SITE_ROOT=/' + branch + '/ ./node_modules/.bin/webpack'
        );
    });
}());
