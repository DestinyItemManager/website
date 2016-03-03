var less = require('gulp-less');
var path = require('path');
var gulp = require('gulp');

var lessFiles = '**/*.less';
var mainLessFile = "style.less";

gulp.task('less', function () {
  return gulp.src(mainLessFile)
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('watch', ['less'], function() {
    var watcher = gulp.watch(lessFiles, ['less']);
    watcher.on('change', function(event) {
      console.log('File ' + event.path + ' was ' + event.type + ', compiling LESS...');
    });
});

gulp.task('default', ['watch'], function() {
    
});