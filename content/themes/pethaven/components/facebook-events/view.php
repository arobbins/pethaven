<?php

  $args = array(
    'post_type' => 'facebook_events',
    'posts_per_page' => -1,
    'order' => 'ASC'
  );

  $fbe_query = new WP_Query($args);

  if($fbe_query->have_posts()):
    while($fbe_query->have_posts()) : $fbe_query->the_post();

      $event_title = get_the_title();
      $event_desc =  get_the_content();
      $event_image = get_fbe_image('cover');

?>
  <img src="<?php echo get_fbe_image('cover'); ?>" alt="" />
  <h1><?php echo $event_title; ?></h1>
  <p><?php echo $event_desc; ?></p>

<?php
    endwhile;
  endif;

  wp_reset_query();

?>
