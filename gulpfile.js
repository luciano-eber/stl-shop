var gulp = require('gulp')
    ,imagemin = require('gulp-imagemin')
    ,clean = require('gulp-clean')
    ,concat = require('gulp-concat')
    ,htmlReplace = require('gulp-html-replace')
    ,uglify = require('gulp-uglify')
    ,usemin = require('gulp-usemin')
    ,cssmin = require('gulp-cssmin')
    ,browserSync = require('browser-sync').create()
    ,jshint = require('gulp-jshint')
    ,jshintStylish = require('jshint-stylish')
    ,csslint = require('gulp-csslint')
    ,autoprefixer = require('gulp-autoprefixer')
    ,sass = require('gulp-sass')
    ,babel = require('gulp-babel');

gulp.task('default', ['copy'], function() {
	gulp.start('build-img', 'usemin', 'sass');
});

gulp.task('copy', ['clean'], function() {
	return gulp.src('source/**/*')
		.pipe(gulp.dest('dist'));
});

gulp.task('clean', function() {
	return gulp.src('dist')
		.pipe(clean());
});

gulp.task('build-img', function() {

  return gulp.src('source/design/**/*')
    // .pipe(imagemin()) //imagino que a as imagens que estou replicando já sejam otimizadas então comentei o imagemin...
    .pipe(gulp.dest('dist/img'));
});

gulp.task('sass', function(){
    return gulp.src('source/sass/**/*')
    .pipe(sass())
    .pipe(gulp.dest('source/css/styles'));
});

gulp.task('usemin', function() {
    return gulp.src('dist/**/*.html')
      .pipe(usemin({
        libs: [uglify()],
        js: [babel({presets: ['env']}),uglify()],
        css: [autoprefixer, cssmin]
      }))
      .pipe(gulp.dest('dist'));
  });

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: 'source'
        }
    });

    gulp.watch('source/**/*').on('change', browserSync.reload);

    gulp.watch('source/js/**/*.js').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(jshint())
            .pipe(jshint.reporter(jshintStylish));
    });

    gulp.watch('source/css/styles/**/*.css').on('change', function(event) {
        console.log("Linting " + event.path);
        gulp.src(event.path)
            .pipe(csslint())
            .pipe(csslint.reporter());
    }); 

    gulp.watch('source/sass/**/*').on('change', function(event) {
        var stream = gulp.src(event.path)
             .pipe(sass().on('error', function(erro) {
               console.log('SASS, erro compilação: ' + erro.filename);
               console.log(erro.message);
             }))
             .pipe(gulp.dest('source/css/styles'));
    });   
});
