<footer class="footer l-col l-row-center" style="background-image: url(<?php the_field('footer_background_image', 'option'); ?>);background-color:<?php the_field('footer_background_color', 'option'); ?>">
  <div class="footer-content l-contain l-box l-row l-row-justify l-center-self">
    <?php dynamic_sidebar('sidebar-footer'); ?>
  </div>
  <div class="footer-copyright">
    Copyright &copy; <?php echo date('Y'); ?> <?php echo get_bloginfo('name'); ?>
  </div>
</footer>
