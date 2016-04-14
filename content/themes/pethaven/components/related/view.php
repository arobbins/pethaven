<?php

  include('controller.php');

?>

<section class="component component-releated">
  <div class="l-contain l-row-center l-row">
    <section class="component-related-item component-releated-custom l-box-3">
      <div class="component-related-item-img l-col l-row-right" style="background-image: url(<?php the_sub_field('related_custom_background'); ?>)">
        <h1 class="component-related-item-title"><?php the_sub_field('related_custom_title'); ?></h1>
      </div>
      <div class="component-related-item-content">
        <?php the_sub_field('related_custom_content'); ?>
      </div>
    </section>
    <section class="component-related-item component-releated-latest l-box-3">
      <div class="component-related-item-img l-col l-row-right" style="background-image: url(<?php the_sub_field('related_latest_background'); ?>)">
        <h1 class="component-related-item-title"><?php the_sub_field('related_latest_title'); ?></h1>
      </div>

      <div class="component-related-item-content">
        <?php
          $the_query = new WP_Query( 'posts_per_page=1');

          while($the_query -> have_posts()) : $the_query -> the_post();

            the_excerpt(); ?>
            <a href="<?php the_permalink(); ?>">Read More</a>

          <?php endwhile;

          wp_reset_postdata();

        ?>
      </div>

    </section>
    <section class="component-related-item component-releated-category l-box-3">

      <div class="component-related-item-img l-col l-row-right" style="background-image: url(<?php the_sub_field('related_category_background'); ?>)">
        <h1 class="component-related-item-title"><?php the_sub_field('related_category_title'); ?></h1>
      </div>

      <div class="component-related-item-content">
        <?php
          $cat = get_sub_field('related_category_category');

          $loop = new WP_Query(array('posts_per_page' => 1, 'category__in' => $cat));

          while($loop -> have_posts()) : $loop -> the_post();

            the_excerpt(); ?>

            <a href="<?php the_permalink(); ?>">Read More</a>

          <?php endwhile;

          wp_reset_postdata();

        ?>



      </div>

    </section>
  </div>
</section>
