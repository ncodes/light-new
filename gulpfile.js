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
var sass = require('gulp-sass');
var browserify = require("browserify");
var watchify = require('watchify');

var nodeMonArgs = [];
if (yargs.port) {
    nodeMonArgs = nodeMonArgs.concat(['--port', yargs.port.toString()])
}

gulp.task('sass', function() {
    console.log("Watching scss files".green)
    watch('./src/assets/css/**/*.{scss}', function () {
        console.log("Building scss files".blue)
        return gulp.src('./src/assets/css/import.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(rename('style.css'))
            .pipe(gulp.dest('./src/assets/css'));
    });
});

gulp.task('build-frontend', function() {

    var entries = [
        { path: "frontend/js/pages/index/app.js", bundleName: 'app-bundle' },
    ]

    entries.forEach(function(task){
        console.log(task)
        var b = browserify({ 
            entries: task.path, 
            debug: true,
            cache: {},
            packageCache: {},
            plugin: [watchify],
            extensions: [".js", ".json", ".jsx"]
        }).transform("babelify", { 
            sourceMaps: false,
            presets: ["es2015", "react", "es2016", "es2017"]
        });

        b.on('update', bundle);
        bundle()

        function bundle() {
            console.log("Watching files in frontend directory".green)
            b.bundle()
                .on('error', function (err) {
                    console.log(err.toString());
                    this.emit("end");
                })
                .pipe(fs.createWriteStream("src/assets/dist/"+task.bundleName+".js"))
        }
    })
});

gulp.task('build', function() {
    console.log("Watching files in backend directory".green)
    watch('backend/**/*.js', function () {
        console.log("Building files in backend directory".blue)
        return gulp.src('backend/**/*.js')
            .pipe(sourcemaps.init())
            .pipe(babel({
                presets: ["es2015", "react", "es2016", "es2017"]
            }))
            .pipe(sourcemaps.write('.'))
            .pipe(gulp.dest('src/app'));
    });
});

gulp.task('set-env', function(){
    // set environment variable
    if (process.env.NODE_ENV != "production") {
        if (fs.existsSync(path.join(__dirname, '.env.js'))) {
            env({ file: '.env.js' });
        }
    }
})

gulp.task('nodemon', function() {

    nodemon({
        script: 'server.js',
        ext: 'js',
        args: nodeMonArgs,
        ignore: ["src/*"],
        tasks: ['set-env', 'sass', 'build', 'build-frontend']
    })
    .on('restart', function() {
        console.log('restarted!')
    })

});

gulp.task('develop', ['sass', 'build', 'build-frontend', 'nodemon'])