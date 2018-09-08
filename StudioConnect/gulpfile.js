// in order to use this file
// both gulp and gulp-sass and node-sass must be install globally
// "npm install -g node-sass gulp gulp-cli"
// type "gulp default" into the terminal to start sass

//please note that this configuration has to be restarted periodically due to bugs
//it doesn't always stop because your code is wrong. (It will simply crash due to race conditions with file locks.)
//simply restart if it does crash by typing "gulp default" in your terminal 

// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    // This is the file that contains ref to all others.
    gulp.src('public/assets/styles/main.scss')
        // Runs sass.
        .pipe(sass())
        // If theres an error, it will console log it.
        .on('error', function(error) {
            // we have an error
            console.log(error); 
        })
        // The folder to save it in.
        .pipe(gulp.dest('public/assets/styles'))
});

gulp.task('default', ['sass'], function() {
    // Specifies all the files that I want to trigger a recompile of Sass
    gulp.watch('public/assets/styles/*.scss', ['sass']);
})
