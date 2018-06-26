var gulp = require('gulp');
var spawn = require('child_process').spawn;

var runSpawn = function(done, task, opt_arg, opt_io) {
    opt_arg = typeof opt_arg !== 'undefined' ? opt_arg : [];
    var stdio = 'inherit';
    if (opt_io === 'ignore') {
        stdio = 'ignore';
    }
    var child = spawn(task, opt_arg, {stdio: stdio});
    var running = false;
    child.on('close', function() {
        if (!running) {
            running = true;
            done();
        }
    });
    child.on('error', function() {
        if (!running) {
            console.error('gulp encountered a child error');
            running = true;
            done();
        }
    });
};
gulp.task('build:config', function (done) {
 runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','conf.ts']);
});
gulp.task('build:pages', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/bg/pages/tsconfig.json']);
});
gulp.task('build:tests', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/bg/tests/tsconfig.json']);
});
gulp.task('build:resources', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/bg/resources/tsconfig.json']);
});
gulp.task('build:utils', function (done) {
    runSpawn(done, 'node', ['./node_modules/typescript/bin/tsc','-p','./com/bg/utils/tsconfig.json']);
});
gulp.task('build', ['build:pages','build:tests', 'build:config', 'build:resources','build:utils']);
gulp.task('test',function(done){
    runSpawn(done, 'node', ['./node_modules/protractor/bin/protractor', 'conf.js']);
});
gulp.task('watch', function () {
    gulp.watch('**/*.ts', ['build:pages','build:tests', 'build:config', 'build:resources','build:utils']);
});

gulp.task('default', ['watch']);