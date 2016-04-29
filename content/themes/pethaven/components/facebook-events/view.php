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
      $event_link = get_fbe_field('fb_event_uri');
      $event_starts = get_fbe_date('event_starts','M j, Y @ g:i a');
      $event_ends = get_fbe_date('event_ends','M j, Y @ g:i a');

?>
<div class="facebook-event">
  <a href="<?php echo $event_link; ?>">
    <img src="<?php echo get_fbe_image('cover'); ?>" alt="" />
  </a>
  <h1><?php echo $event_title; ?></h1>
  <p>Starts: <?php echo $event_starts; ?> Ends: <?php echo $event_ends; ?></p>
  <p><?php echo $event_desc; ?></p>
</div>
<?php
    endwhile;
  endif;

  wp_reset_query();

?>
