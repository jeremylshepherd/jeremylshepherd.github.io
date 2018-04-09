'use strict';

require('babel-core/register');

import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import sass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import buffer from 'vinyl-buffer';

let tasks;

gulp.task('build-js', () => {    
    return browserify('babel/index.js')
        .transform('babelify', {
            sourceMaps: true
        })
        .bundle()
        .pipe(source('index.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('js'));
});

gulp.task('build-css', () => {
    return gulp.src('css/style.sass')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

gulp.task('sass:watch', () => {
    gulp.watch('css/style.sass', ['build-css']);    
});

gulp.task('js:watch', () => {
    gulp.watch('babel/*.js', ['build-js']);
    gulp.watch('babel/Components/*.js', ['build-js']);
});

tasks = ['build-js', 'build-css', 'sass:watch', 'js:watch'];

gulp.task('default', tasks);