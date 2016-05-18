<?php
/**
 * Template Name: Full Width (Pet Finder only)
 */
?>

<?php while (have_posts()) : the_post(); ?>
  <?php get_template_part('templates/content', 'page'); ?>
<?php endwhile; ?>
