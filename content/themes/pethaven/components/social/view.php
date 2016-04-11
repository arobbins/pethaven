<?php
  include('controller.php');

  // check if the repeater field has rows of data
  if(have_rows('theme_social', 'option') ):

    // loop through the rows of data
    while ( have_rows('theme_social', 'option') ) : the_row(); ?>

      <a href="<?php the_sub_field('social_link'); ?>" class="social-link">
        <img src="<?php the_sub_field($socialType); ?>" alt="<?php the_sub_field('social_name'); ?>"  class="social-image" />
      </a>

    <?php endwhile;

  else :

    // no rows found

  endif;

?>
