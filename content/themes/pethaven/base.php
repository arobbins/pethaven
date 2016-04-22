<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/head'); ?>

  <body <?php body_class(); ?>>

    <nav class="l-row l-row-right" id="menu-mobile">
      <?php
        if (has_nav_menu('mobile_navigation')) :
          wp_nav_menu(['theme_location' => 'mobile_navigation', 'menu_class' => 'nav nav-mobile l-row l-row-right']);
        endif;
      ?>
    </nav>

    <div id="content">
      <?php
        do_action('get_header');
        get_template_part('templates/header');
      ?>

      <div class="l-col l-col-center" role="document">

        <?php get_template_part('templates/page', 'header'); ?>

        <div class="l-row main">

          <?php if(Setup\display_sidebar()) : ?>

            <aside class="sidebar">
              <?php include Wrapper\sidebar_path(); ?>
            </aside>

          <?php endif; ?>

          <main class="content">
            <?php
              include Wrapper\template_path();

              if(Setup\display_sidebar()) {
                get_template_part('templates/components');
              }
            ?>
          </main>
        </div>

        <?php
          if(!Setup\display_sidebar()) {
            get_template_part('templates/components');
          }
        ?>

      </div>

      <?php
        do_action('get_footer');
        get_template_part('templates/footer');
        wp_footer();
      ?>
    </div>

  </body>
</html>
