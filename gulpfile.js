/*
	Gulp file created by @asadadams
	All plugins and documentation available at https://gulpjs.com/plugins/
*/
var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	rename = require('gulp-rename');
	
sass.compiler = require('node-sass');

gulp.task('sassc',function(){
	return gulp.src('./scss/**/*.scss')
	.pipe(plumber())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
	.pipe(rename('theme.css'))
    .pipe(gulp.dest('./css'));
})

gulp.task('sass',function(){
	return gulp.src('./scss/**/*.scss')
	.pipe(plumber())
    .pipe(sass().on('error', sass.logError))
	.pipe(rename('theme.css'))
    .pipe(gulp.dest('./css'));
})


//Watching sass files for change
gulp.task('watch',function(){
	console.log('Watching sass files for change');
	gulp.watch('./scss/**/*.scss',gulp.series('sass'))
});

gulp.task('default',gulp.series('sass','watch'));