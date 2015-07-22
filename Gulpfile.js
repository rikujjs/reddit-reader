var gulp = require('gulp')
  , browserify = require('gulp-browserify')
  , concat = require('gulp-concat')
  , rename = require('gulp-rename');

gulp.task('styles', function () {
    gulp.src(['app/css/styles.css'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function () {
    gulp.src(['app/js/app.jsx'])
        .pipe(browserify({
            debug: true,
            transform: [ 'babelify' ]
        }))
        .pipe(rename('app.js'))
        .pipe(gulp.dest('build/'));
});

gulp.task('dev', function () {
    gulp.run('build');
    gulp.watch('app/js/**/*.jsx', [ 'scripts' ]);
    gulp.watch('app/js/**/*.js', [ 'scripts' ]);
    gulp.watch('app/css/**/*.css', [ 'styles' ]);
});

gulp.task('build', [ 'styles', 'scripts']);
