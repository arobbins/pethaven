<header class="header">
  <div class="l-row l-row-center l-contain l-box">
    <a class="l-box-3 logo" href="<?= esc_url(home_url('/')); ?>">
      <img src="<?php the_field('theme_logo_primary', 'option'); ?>" alt="Pet Haven">
    </a>
    <nav class="l-col l-row-right l-fill nav-primary">

      <div class="l-row l-row-right l-col-center">
        <?php
        if (has_nav_menu('secondary_navigation')) :
          wp_nav_menu(['theme_location' => 'secondary_navigation', 'menu_class' => 'menu menu-secondary l-box l-row l-row-right']);
        endif;
        ?>
        <div class="social-links">
          <?php echo do_shortcode("[social type='primary']"); ?>
        </div>
      </div>

      <div class="">
        <?php
        if (has_nav_menu('primary_navigation')) :
          wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'menu menu-primary l-row l-row-right']);
        endif;
        ?>
      </div>

    </nav>
  </div>
</header>
