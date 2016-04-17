<?php

use Roots\Sage\Setup;
use Roots\Sage\Wrapper;

?>

<!doctype html>
<html <?php language_attributes(); ?>>
  <?php get_template_part('templates/head'); ?>
  <body <?php body_class(); ?>>

    <!--[if IE]>
      <div class="alert alert-warning">
        <?php _e('You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.', 'sage'); ?>
      </div>
    <![endif]-->

    <?php
      do_action('get_header');
      get_template_part('templates/header');
    ?>

    <div class="l-col l-col-center" role="document">

      <?php get_template_part('templates/page', 'header'); ?>


      <?php
        if(!Setup\display_sidebar()) {
          get_template_part('templates/components');
        }
      ?>

      <div class="l-row main">

        <?php if(Setup\display_sidebar()) : ?>

          <aside class="sidebar">
            <?php include Wrapper\sidebar_path(); ?>
          </aside>

        <?php endif; ?>

        <main class="l-fill content">
          <?php
            include Wrapper\template_path();

            if(Setup\display_sidebar()) {
              get_template_part('templates/components');
            }
          ?>
        </main>
      </div>

    </div>

    <?php
      do_action('get_footer');
      get_template_part('templates/footer');
      wp_footer();
    ?>


  </body>
</html>
