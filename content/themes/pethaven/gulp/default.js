/////////////
// Default //
/////////////

import gulp from 'gulp';

gulp.task('default',
  gulp.parallel('js-vendor', 'js', 'css', 'cssAdmin', 'server')
);
