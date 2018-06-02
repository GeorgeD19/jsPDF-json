// Include packages
var gulp        = require('gulp'),
    gulps       = require('gulp-series'),
    rename      = require('gulp-rename'),
    del         = require('del'),
    concat      = require('gulp-concat'),
    uglify      = require('gulp-uglify'),
    babel       = require('gulp-babel');

// Tasks
gulps.registerTasks({
    'compile-js': (function(done) {
        gulp.src([
        	'./src/main.js',
    	])
    	.pipe(concat('jspdf-json.js'))
        .pipe(gulp.dest('./dist/'))
        .pipe(babel({
            presets: ['env'],
            compact: true
        }))
        .pipe(rename('jspdf-json.min.js'))
        .pipe(gulp.dest('./dist/'))
        .on('end', function(){done()});
    }),
    'clean': (function(done) {
        del(['./dist']).then(function(){done()});
    }),
    'setup': (function(done) {
        gulp.watch('./src/**/*.js', ['js']);
    }),
});

gulps.registerSeries('js', ['clean', 'compile-js'])
gulps.registerSeries('default', ['setup']);