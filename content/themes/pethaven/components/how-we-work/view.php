<?php

  include('controller.php');

?>

<section class="component component-how-we-work" style="background-image: url(<?php the_sub_field('background_image', $post->ID); ?>);background-color:<?php the_sub_field('background_color', $post->ID); ?>">

  <h1 class="how-we-work-title"><?php the_sub_field('title', $post->ID); ?></h1>

  <div class="l-contain l-row l-row-center">
    <?php
    if(have_rows('highlights', $post->ID)):
      while (have_rows('highlights', $post->ID)) : the_row(); ?>

        <div class="l-col l-box-4 card highlight">
          <h1 class="highlight-title"><?php the_sub_field('title'); ?></h1>
          <img class="highlight-icon" src="<?php the_sub_field('icon'); ?>" alt="<?php the_sub_field('title'); ?>" />
          <div class="highlight-copy">
            <?php the_sub_field('body_copy'); ?>
          </div>
          <a href="<?php the_sub_field('cta_link'); ?>" class="highlight-cta"><?php the_sub_field('cta_copy'); ?></a>
        </div>

      <?php endwhile;
    endif;

    ?>
  </div>

</section>
