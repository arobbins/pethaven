<?php

/*
  Plugin Name: Pet Haven Custom Post Types
  Version: 1.0
  Author: Gish&Co. - https://gish.co
  Description: Custom Post Types for Pet Haven
*/

/*

  CPT: FAQs

*/
function custom_post_type_team() {

  $labels = array(
    'name'                => _x('Team', 'Post Type General Name', 'text_domain'),
    'singular_name'       => _x('Team', 'Post Type Singular Name', 'text_domain'),
    'menu_name'           => __('Team', 'text_domain'),
    'parent_item_colon'   => __('Parent Item:', 'text_domain'),
    'new_item'            => __('Add New Team Member', 'text_domain'),
    'edit_item'           => __('Edit Team Member', 'text_domain'),
    'not_found'           => __('No Team Members found', 'text_domain'),
    'not_found_in_trash'  => __('No Team Members found in trash', 'text_domain')
  );

  $args = array(
    'label'               => __('post_type_events', 'text_domain'),
    'description'         => __('Custom Post Type for Team Members', 'text_domain'),
    'labels'              => $labels,
    'supports'            => array('title'),
    'taxonomies'          => array(),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'menu_position'       => 100,
    'menu_icon'           => 'dashicons-format-quote',
    'show_in_admin_bar'   => true,
    'show_in_nav_menus'   => true,
    'can_export'          => true,
    'has_archive'         => false,
    'exclude_from_search' => true,
    'publicly_queryable'  => true,
    'capability_type'     => 'page',
  );

  register_post_type('team', $args);

}

/*

  CPT: Conversation

*/
function custom_post_type_partners() {

  $labels = array(
    'name'                => _x('Partners', 'Post Type General Name', 'text_domain'),
    'singular_name'       => _x('Partner', 'Post Type Singular Name', 'text_domain'),
    'menu_name'           => __('Partners', 'text_domain'),
    'parent_item_colon'   => __('Parent Item:', 'text_domain'),
    'new_item'            => __('Add New Partner', 'text_domain'),
    'edit_item'           => __('Edit Partner', 'text_domain'),
    'not_found'           => __('No Partners found', 'text_domain'),
    'not_found_in_trash'  => __('No Partners found in trash', 'text_domain')
  );

  $args = array(
    'label'               => __('post_type_events', 'text_domain'),
    'description'         => __('Custom Post Type for Partners', 'text_domain'),
    'labels'              => $labels,
    'supports'            => array('title'),
    'taxonomies'          => array(),
    'hierarchical'        => false,
    'public'              => true,
    'show_ui'             => true,
    'show_in_menu'        => true,
    'menu_position'       => 100,
    'menu_icon'           => 'dashicons-megaphone',
    'show_in_admin_bar'   => true,
    'show_in_nav_menus'   => true,
    'can_export'          => true,
    'has_archive'         => true,
    'exclude_from_search' => true,
    'publicly_queryable'  => true,
    'capability_type'     => 'post'
  );

  register_post_type('partners', $args);

}

// Hookin, yo
add_action('init', 'custom_post_type_team', 0);
add_action('init', 'custom_post_type_partners', 0);

?>
