var less = require('gulp-less');
var path = require('path');
var gulp = require("gulp");
var rename = require("gulp-rename");
var nodemon = require('gulp-nodemon');
var fs      = require("fs");
var yargs = require('yargs').argv;
var babel = require('gulp-babel');
var env = require('gulp-env');
var watch = require('gulp-watch');
var colors = require('colors');
var sourcemaps = require('gulp-sourcemaps');

var nodeMonArgs = [];
if (yargs.port) {
    nodeMonArgs = nodeMonArgs.concat(['--port', yargs.port.toString()])
}

gulp.task('less', function() {
    console.log("Watching files in css directory".green)
    watch('./src/assets/css/**/*.{less}', function () {
        console.log("Building files in less directory".blue)
        return gulp.src('./src/assets/css/import.less')
            .pipe(less({
                paths: [path.join(__dirname, 'less', 'includes')]
            }))
            .pipe(rename('style.css'))
            .pipe(gulp.dest('./src/assets/css'));
    });
});

gulp.task('build-frontend', function() {
    console.log("Watching files in frontend directory".green)
    watch('frontend/js/**/*.js', function () {
        console.log("Building files in frontend directory".blue)
        return gulp.src('frontend/js/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('src/assets/dist'));
    });
});

gulp.task('build', function() {
    console.log("Watching files in backend directory".green)
    watch('backend/**/*.js', function () {
        console.log("Building files in backend directory".blue)
        return gulp.src('backend/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel())
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('src/app'));
    });
});

gulp.task('nodemon', function() {

    // set environment variable
    if (process.env.NODE_ENV != "production") {
        if (fs.existsSync(path.join(__dirname, '.env.js'))) {
            env({ file: '.env.js' });
        }
    }

    nodemon({
        script: 'server.js',
        ext: 'js',
        args: nodeMonArgs,
        ignore: ["src/*"],
        tasks: []
    })
    .on('restart', function() {
        console.log('restarted!')
    })

});

gulp.task('develop', ['less', 'build', 'build-frontend', 'nodemon'])