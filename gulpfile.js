var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	clean = require('gulp-clean'),
	uglify = require('gulp-uglify'),
	usemin = require('gulp-usemin'),
	cssmin = require('gulp-cssmin'),
	browserSync = require('browser-sync'),
	jsHint = require('gulp-jshint'),
	jsHintStylish = require('jshint-stylish'),
	cssLint = require('gulp-csslint'),
	autoPrefixer = require('gulp-autoprefixer'),
	less = require('gulp-less');

gulp.task('default', ['copy'], function (){
	gulp.start('build-img', 'build');
});

gulp.task('clean', function (){
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('copy', ['clean'], function (){
	return gulp.src('src/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('build-img', function (){
	gulp.src('src/img/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/img'));
});

gulp.task('build', function (){
	gulp.src('dist/**/*.html')
		.pipe(usemin({
			'js': [uglify],
			'css': [autoPrefixer, cssmin]
		}))
		.pipe(gulp.dest('dist'));
});

gulp.task('server', function (){
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	});

	gulp.watch('src/js/**/*.js').on('change', function (e){
		gulp.src(e.path)
			.pipe(jsHint())
			.pipe(jsHint.reporter(jsHintStylish));
	});

	gulp.watch('src/css/**/*.css').on('change', function (e){
		gulp.src(e.path)
			.pipe(cssLint())
			.pipe(cssLint.reporter());
	});

	gulp.watch('src/less/**/*.less').on('change', function (e){
		gulp.src(e.path)
			.pipe(less().on('error', function (error){
				console.log('Erro de compilação no arquivo less.');
				console.log(error.message);
			}))
			.pipe(gulp.dest('src/css'));
	});

	gulp.watch('src/**/*').on('change', browserSync.reload);
});