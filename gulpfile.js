var gulp = require('gulp'),
	connect = require("gulp-connect"),
    opn = require('opn');


//Задачи для gulp-connect

//Запуск сервера
gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true,
        port: 8888
    });
    opn('http:/localhost:8888');
});

//работа с html
gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});
//работа с css
gulp.task('css', function() {
    gulp.src('./app/style/*.css')
        .pipe(connect.reload());
});
//работа с js
gulp.task('js', function() {
    gulp.src('./app/script/*.js')
        .pipe(connect.reload());
});
//слежка
gulp.task('watch', function() {
    gulp.watch(['.app/*.html'],['html']);
    gulp.watch(['.app/style/*.css'],['css']);
    gulp.watch(['.app/script/*.html'],['js']);
});

//задача по умолчанию
gulp.task('default', ['connect', 'watch']);

