<?php

  include('controller.php');

?>

<section class="component component-partner l-row l-row-center">

  <?php while($loop->have_posts()) : $loop->the_post(); ?>
    <div class="grid-item l-col l-box-4 partner">
      <a href="<?php the_field('partner_link', get_the_id()); ?>" class="partner-link">
        <img src="<?php the_field('partner_image', get_the_id()); ?>" class="partner-image">
      </a>
      <!-- <h2 class="partner-name"><?php the_field('partner_name', get_the_id()); ?></h2> -->
    </div>
  <?php endwhile;

    wp_reset_postdata();
  ?>

</section>
