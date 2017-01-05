var gulp = require('gulp');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');




//gulp.src('./scss/*.scss');


gulp.task('css',function(){
	return gulp.src('scss/main.scss')
			.pipe(sass())
			.pipe(minifycss())
			.pipe(autoprefixer('last 15 version'))
			.pipe(gulp.dest('css'))
			.pipe(notify({
				title: 'Cool!!!!',
				message: '\nAll built!',
				icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
			}));
});





gulp.task('default', function(){
	gulp.start('css');
	gulp.watch('scss/*.scss', ['css']);
	// gulp.watch('httpdocs/js/src/*.js', ['js']);
	// gulp.watch('httpdocs/js/src/google*.js', ['maps']);
});
