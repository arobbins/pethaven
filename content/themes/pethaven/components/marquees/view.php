<?php

  include('controller.php');

?>

<section class="component component-marquees" data-slick='{"autoplay": <?php echo $autoplay_new; ?>, "autoplaySpeed": "<?php the_sub_field('marquee_option_autoplay_speed'); ?>", "arrows": "false", "dots": true}'>

  <?php

  // check if the repeater field has rows of data
  if(have_rows('marquees', $post->ID)):

    // loop through the rows of data
    while ( have_rows('marquees', $post->ID)) : the_row(); ?>

      <div class="l-col l-row-center marquee-wrapper" style="background-image: url(<?php the_sub_field('marquee_image'); ?>)">
        <div class="page-header-background">
          <div class="l-contain l-row-center l-box">
            <div class="marquee-content">
              <h1 class="marquee-heading"><?php the_sub_field('marquee_heading'); ?></h1>
              <div class="marquee-copy">
                <?php the_sub_field('marquee_body_copy'); ?>
              </div>
              <a href="<?php the_sub_field('marquee_button_link'); ?>" class="btn btn-large marquee-link"><?php the_sub_field('marquee_button_copy'); ?></a>
            </div>
          </div>
        </div>

      </div>

    <?php endwhile;

  else :

    // no rows found

  endif;

  ?>

</section>
