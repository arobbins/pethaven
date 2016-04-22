<?php

namespace Roots\Sage\Extras;

use Roots\Sage\Setup;

/**
 * Add <body> classes
 */
function body_class($classes) {
  // Add page slug if it doesn't exist
  if (is_single() || is_page() && !is_front_page()) {
    if (!in_array(basename(get_permalink()), $classes)) {
      $classes[] = basename(get_permalink());
    }
  }

  // Add class if sidebar is active
  if (Setup\display_sidebar()) {
    $classes[] = 'sidebar-primary';
  }

  return $classes;
}
add_filter('body_class', __NAMESPACE__ . '\\body_class');

/**
 * Clean up the_excerpt()
 */
function excerpt_more() {
  return ' &hellip; <a href="' . get_permalink() . '">' . __('Continued', 'sage') . '</a>';
}
add_filter('excerpt_more', __NAMESPACE__ . '\\excerpt_more');


/*

 Social icons shortcode

*/
function social($atts) {
  ob_start();
  include(locate_template('components/social/view.php'));
  $content = ob_get_clean();
  return $content;
}
add_shortcode('social', __NAMESPACE__ . '\\social');


/*

 Team shortcode

*/
function team($atts) {
  ob_start();
  include(locate_template('components/team/view.php'));
  $content = ob_get_clean();
  return $content;
}
add_shortcode('team', __NAMESPACE__ . '\\team');
