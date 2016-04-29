<?php

  include('controller.php');

?>

<section class="component component-team l-row">

  <?php while($loop->have_posts()) : $loop->the_post(); ?>
    <div class="grid-item l-col team-member">
      <?php if(get_field('team_main_image', get_the_id())) { ?>
        <img src="<?php the_field('team_main_image', get_the_id()); ?>" class="team-image">
      <?php } ?>
      <h2 class="team-name"><?php the_field('team_name', get_the_id()); ?></h2>
      <h3 class="team-title"><?php the_field('team_title', get_the_id()); ?></h3>
      <div class="team-bio">
        <?php the_field('team_description', get_the_id()); ?>
      </div>
    </div>
  <?php endwhile;

    wp_reset_postdata();
  ?>

</section>
