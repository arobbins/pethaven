<?php

namespace Roots\Sage\Customizer;
use Roots\Sage\Assets;

/*

Add postMessage support

*/
function customize_register($wp_customize) {
  $wp_customize->get_setting('blogname')->transport = 'postMessage';
}
add_action('customize_register', __NAMESPACE__ . '\\customize_register');


/*

Customizer JS

*/
function customize_preview_js() {
  wp_enqueue_script('sage/customizer', Assets\asset_path('scripts/customizer.js'), ['customize-preview'], null, true);
}
add_action('customize_preview_init', __NAMESPACE__ . '\\customize_preview_js');


/*

Adding classes to menu anchors instead of parent <li>

*/
function add_menuclass($ulclass) {
  return preg_replace('/<a rel="btn btn-secondary"/', '<a rel="btn" class="btn btn-secondary"', $ulclass, 1);
}
add_filter('wp_nav_menu', __NAMESPACE__ . '\\add_menuclass');
