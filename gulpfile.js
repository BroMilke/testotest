var gulp = require('gulp'),
	connect = require("gulpconnect");


//Задачи для gulp-connect
// Запуск сервера
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });
});
// Работа с html
gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

// Работа с css
gulp.task('css', function() {
    gulp.src('./app/style/*.css')
        .pipe(connect.reload());
});

// Работа с js
gulp.task('js', function() {
    gulp.src('./app/script/*.js')
        .pipe(connect.reload());
});
// Слежка
gulp.task('watch', function() {
        gulp.watch(['./app/*.html'], ['html']);
        gulp.watch(['./app/css/*.css'], ['css']);
        gulp.watch(['./app/js/*.js'], ['js']);
    }

// Задача поумолчанию
gulp.task('default', ['connect', 'watch']);

