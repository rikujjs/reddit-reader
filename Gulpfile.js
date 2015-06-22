var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , concat = require('gulp-concat');

gulp.task('styles', function () {
    gulp.src(['app/css/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function () {
    gulp.src(['app/js/app.js'])
        .pipe(browserify({
            debug: true,
            transform: [ 'reactify' ]
        }))
        .pipe(gulp.dest('build/'));
});

gulp.task('dev', function () {
    gulp.run('build');
    gulp.watch('app/js/**/*.js', [ 'scripts' ]);
    gulp.watch('app/css/**/*.css', [ 'styles' ]);
});

gulp.task('build', [ 'styles', 'scripts']);
