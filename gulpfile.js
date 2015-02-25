// set up: dependencies
var gulp            = require('gulp'),
    changed         = require('gulp-changed'),
    browserSync     = require('browser-sync'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('gulp-autoprefixer'),
    minifyCSS       = require('gulp-minify-css'),
    imagemin        = require('gulp-imagemin'),
    filter          = require('gulp-filter'),
    cp              = require('child_process');

// set up: paths for jekyll site
var sitePath = '_site';

// set up: paths for element UI rendering
var basePath = {
    src:    '_src',
    dest:   'public',
};

var srcAssets = {
    styles:     basePath.src + '/static/sass/**/*.scss',
    scripts:    basePath.src + '/static/js/**/*.js',
    images:     basePath.src + '/static/images/**'
};

var destAssets = {
    styles:         basePath.dest + '/css',
    styles_local:   sitePath + '/' + basePath.dest + '/css',
    scripts:        basePath.dest + '/js',
    images:         basePath.dest + '/images',
    images_local:   sitePath + '/' + basePath.dest + '/images'
};

// set up: paths for pattern library UI rendering
var basePath_PL = {
    src:    '_src/pl',
    dest:   'public/pl',
};

var srcAssets_PL = {
    styles:     basePath_PL.src + '/static/sass/**/*.scss',
    scripts:    basePath_PL.src + '/static/js/**/*.js',
    images:     basePath_PL.src + '/static/images/**'
};

var destAssets_PL = {
    styles:         basePath_PL.dest + '/css',
    styles_local:   sitePath + '/' + basePath_PL.dest + '/css',
    scripts:        basePath_PL.dest + '/js',
    images:         basePath_PL.dest + '/images',
    images_local:   sitePath + '/' + basePath_PL.dest + '/images'
};

// task: sass compile - elements
gulp.task('sass', function() {
    return gulp.src(srcAssets.styles)
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest(destAssets.styles_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(minifyCSS({keepBreaks:true})) // minify and move for production
        .pipe(gulp.dest(destAssets.styles));
});

// task: sass compile - pattern library
gulp.task('sass_PL', function() {
    return gulp.src(srcAssets_PL.styles)
        .pipe(sass())
        .pipe(autoprefixer({ browsers: ['last 2 version'] }))
        .pipe(gulp.dest(destAssets_PL.styles_local)) // move just for browersync + uncompressed local
        .pipe(browserSync.reload({stream:true}))
        .pipe(minifyCSS({keepBreaks:true})) // minify and move for production
        .pipe(gulp.dest(destAssets_PL.styles));
});

// task: minify images
gulp.task('images', function() {
    return gulp.src(srcAssets.images)
        .pipe(changed(srcAssets.images)) // ignore unchanged files
        .pipe(gulp.dest(destAssets.images_local)) // move just for browersync + local preview
        .pipe(imagemin()) // optimize
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(destAssets.images));
});

// task: minify images - pattern library
gulp.task('images_PL', function() {
    return gulp.src(srcAssets_PL.images)
        .pipe(changed(srcAssets_PL.images)) // ignore unchanged files
        .pipe(gulp.dest(destAssets_PL.images_local)) // move just for browersync + local preview
        .pipe(imagemin()) // optimize
        .pipe(browserSync.reload({stream:true}))
        .pipe(gulp.dest(destAssets_PL.images));
});

// task: build jekyll site
gulp.task('jekyll-build', function(done) {
    return cp.spawn('jekyll', ['build'], {stdio: 'inherit'})
        .on('close', done);
});

// task: rebuild jekyll site and reload
gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
    browserSync.reload();
});

// task: wait for jekyll, then launch server
gulp.task('browser-sync', ['sass', 'jekyll-build'], function() {
    browserSync({
        server: {
            baseDir: sitePath
        }
    });
});

// task: Watch scss files for changes & recompile + Watch html/md files, run jekyll & reload BrowserSync
gulp.task('watch', function() {
    gulp.watch(srcAssets.styles, ['sass']);
    gulp.watch(srcAssets_PL.styles, ['sass_PL']);
    gulp.watch(srcAssets.images, ['images']);
    gulp.watch(srcAssets_PL.images, ['images_PL']);
    gulp.watch(['index.html', '_layouts/*', '_posts/*', '_includes/*'], ['jekyll-rebuild']);
});

// task: default - run BrowserSync and watch
gulp.task('default', ['browser-sync', 'watch']);
