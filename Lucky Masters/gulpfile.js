"use strict";

let gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    browserSync = require('browser-sync').create(),
    pug = require('gulp-pug-i18n'),
    minify = require('gulp-minify'),
    imagemin = require('gulp-imagemin'),
    cwebp = require('gulp-cwebp'),
    svgstore = require('gulp-svgstore');


let projectName = 'LuckyMaster';
/*
 * Directories here
 */
let paths = {
    buildAssets: './build/assets/',
    prodPages: './build/',
    src: './src/',
    buildCss: './build/assets/css/',
    buildJS: './build/assets/js/',
    locales: './src/locales/',
};

/**
 * Compile .pug files.
 */

gulp.task('pug', function () {
    return gulp.src([
        paths.src + '/*.pug',
        '!' + paths.src + '/mixins.pug',
    ])
    .pipe(pug({
        i18n: {
            locales: paths.locales + '*.json',
            default: './src/locales/en.json',
            filename: '{{basename}}.html'
        },
        pretty: true // Pug option
    }))
    .pipe(gulp.dest(paths.prodPages));
});

/**
 * Recompile .pug files and live reload the browser
 */
gulp.task('rebuild', gulp.series('pug'), function () {
    browserSync.reload();
});

/**
 * Compile .scss files into build css directory then live reload the browser.
 */

gulp.task('sass', function () {
    return gulp.src([paths.src + 'libs/**/*.css', paths.src + '/*.scss'])
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .on('error', sass.logError)
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(concat('style.css'))
        .pipe(gulp.dest(paths.buildCss))
        .pipe(browserSync.reload({
            stream: true
        }));
});

/**
 * Concat js and move to build
 */

gulp.task('js', function () {
    return gulp.src([paths.src + 'libs/**/*.js', paths.src + 'media/js/*.js'])
    .pipe(concat('scripts.js'))
    .on('error', function (err) {
        process.stderr.write(err.message + '\n');
        this.emit('end');
    })
    .pipe(minify({noSource: true}))
    .pipe(gulp.dest(paths.buildJS))
});

/**
 * Optimize and move images
 */
gulp.task('img', function () {
    return gulp.src([paths.src + '/media/img/**/*', '!' + paths.src + '/media/img/webp/', '!' + paths.src + '/media/img/sprite/'])
        .pipe(imagemin())
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest(paths.buildAssets + 'media/img/'));
});

/**
 * Convert images to webp
 */
gulp.task('webp', function () {
    return gulp.src([paths.src + '/media/img/webp/*.jpg', paths.src + '/media/img/webp/*.png'])
        .pipe(imagemin())
        .pipe(cwebp())
        .pipe(gulp.dest(paths.buildAssets + 'media/img/webp/'));
});

/**
 * Wait for twig and sass tasks, then launch the browser-sync Server
 */

/**
 * Optimize and generate svg sprite
 */
gulp.task('svg', function () {
    return gulp.src(paths.src + '/media/img/sprite/*.svg')
        .pipe(svgstore())
        .on('error', function (err) {
            process.stderr.write(err.message + '\n');
            this.emit('end');
        })
        .pipe(gulp.dest(paths.buildAssets + 'media/img/'));
}); 

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: './build/'
        }
    });
});

gulp.task('watch', function () {
    gulp.watch('./src/**/*.scss', gulp.parallel('sass'));
    gulp.watch('./src/**/*.pug', gulp.parallel('rebuild'));
    gulp.watch('./src/**/*.js', gulp.parallel('js'));
    gulp.watch(['./src/**/*.png', 'src/**/*.jpg'], gulp.parallel('img'));
    browserSync.reload();
});

// Build task compile sass and twig.
gulp.task('build', gulp.series('webp', 'sass', 'pug', 'js', 'img'));

gulp.task('default', gulp.parallel('browser-sync', 'watch'));