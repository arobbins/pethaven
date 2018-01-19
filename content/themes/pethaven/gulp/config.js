////////////
// Config //
////////////

import browserSync from 'browser-sync';

const config = {
  files: {
    js: [
      './assets/js/app/**/*.js',
      '!./assets/js/app.min.js',
      '!./assets/js/vendor.min.js',
      '!./assets/js/app.min.js.map'
    ],
    jsEntry: './assets/js/app/app.js', // Entry file
    css: './assets/css/**/*.scss',
    cssEntry: './assets/css/app/app.scss',
    cssAdminEntry: './assets/css/app/base/admin.scss'
  },
  favicon: {
    entry: './assets/imgs/favicons/favicon.png',
    dest: './assets/imgs/favicons',
    all: './assets/imgs/favicons/**/*'
  },
  folders: {
    css: './assets/css',
    js: './assets/js'
  },
  names: {
    jsVendor: 'vendor.min.js',
    js: 'app.min.js',
    css: 'app.min.css',
    cssAdmin: 'admin.min.css'
  },
  libs: [
    'jquery',
    'slick-carousel',
    'isotope-layout',
    'rx',
    'imagesloaded',
    'lodash',
    'slideout'
  ],
  bs: browserSync.create(),
  serverName: "pethaven.dev"

};

export default config;
