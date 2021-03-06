/////////
// CSS //
/////////

import gulp from 'gulp';
import config from './config';
import sourcemaps from 'gulp-sourcemaps';
import sass from 'gulp-sass';
import pleeease from 'gulp-pleeease';
import rename from "gulp-rename";

gulp.task('css', () => {
  return gulp.src(config.files.cssEntry)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(pleeease())
      .pipe(rename(config.names.css))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.folders.css))
    .pipe(config.bs.stream());
});

gulp.task('cssAdmin', () => {
  return gulp.src(config.files.cssAdminEntry)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(pleeease())
      .pipe(rename(config.names.cssAdmin))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.folders.css))
    .pipe(config.bs.stream());
});
