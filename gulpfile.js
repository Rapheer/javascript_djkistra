var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat');

gulp.task('clean', function (){
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('copy', ['clean'], function (){
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('build-img', ['copy'], function (){
	gulp.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build-js', ['copy'], function (){
	gulp.src('src/js/**/*')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('dist', ['build-js', 'build-img'], function (){});