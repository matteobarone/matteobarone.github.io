var gulp 			    = require('gulp');
var concat 			  = require('gulp-concat');
var uglify      	= require('gulp-uglify');
var minifycss 		= require('gulp-minify-css');
var notify 			  = require('gulp-notify');

gulp.task('css',function(){
  return gulp.src('./css/src/*.css')
      .pipe(concat('bundle.css'))
	    .pipe(minifycss())
      .pipe(gulp.dest('./css/dist/'))
  	  .pipe(notify({
    		title: 'Cool!!!!',
    		message: '\nCSS built!',
    		icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
    	}));
});

gulp.task('js',function(){
  return gulp.src('./js/src/*.js')
      .pipe(concat('bundle.js'))
	    .pipe(uglify())
      .pipe(gulp.dest('./js/dist/'))
  	  .pipe(notify({
    		title: 'Cool!!!!',
    		message: '\nJS built!',
    		icon: __dirname + '/node_modules/gulp-notify/assets/gulp.png'
    	}));
});

// Main task
gulp.task('default', function(){
	gulp.start('css', ['js']);
	gulp.watch('./css/src/*.css', ['css']);
	gulp.watch('./js/src/*.js', ['js']);
});
