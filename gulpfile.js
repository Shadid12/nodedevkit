const gulp        = require('gulp');
const browserSync = require('browser-sync').create();
const nodemon 	  = require('gulp-nodemon');
const sass 		  = require('gulp-sass');

gulp.task('default', ['browser-sync'], function () {
});

gulp.task('browser-sync', function() {
	browserSync.init(null, {
		proxy: "http://localhost:5000",
        files: ["public/**/*.*", "views/*"],
        port: 7000,
	});
});


gulp.task('styles', function() {
    gulp.src('./public/assets/css/main.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./views',['browser-sync']));
});

gulp.task('watch', function(){
	gulp.watch('./public/assets/css/*', ['styles'])
	gulp.watch('./public/assets/css/*.css').pipe(browserSync.reload())
});

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'server.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

gulp.task('default', ['browser-sync', 'watch']);