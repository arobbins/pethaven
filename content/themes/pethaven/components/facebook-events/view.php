<div class="l-row facebook-event-wrapper">
  <?php

    $now = date_create();
    $now = date_timestamp_get($now);

    $args = array (
      'post_type' => 'facebook_events',
      'posts_per_page' => -1,
      'orderby' => 'meta_value',
      'order' => 'ASC',
      'meta_query' => array(
        array(
          'key' => 'event_starts',
          'compare' => 'LIKE',
        )
      )
    );

    $fbe_query = new WP_Query($args);

    if($fbe_query->have_posts()):
      while($fbe_query->have_posts()) : $fbe_query->the_post();
        $event_title = get_the_title();
        $event_desc =  get_the_content();
        $event_image = get_fbe_image('cover');
        $event_link = get_fbe_field('fb_event_uri');
        $event_ticket_link = get_fbe_field('ticket_uri');
        $event_starts = get_fbe_date('event_starts','M j, Y @ g:i a');
        $event_ends = get_fbe_date('event_ends','M j, Y @ g:i a');

        $then = get_fbe_date('event_starts','M j, Y, g:i a');
        $then = strtotime($then);
  ?>

  <?php if($now <= $then) { ?>

    <div class="grid-item facebook-event">
      <a href="<?php echo $event_link; ?>">
        <img src="<?php echo get_fbe_image('cover'); ?>" alt="" class="facebook-event-image" />
      </a>
      <h2><?php echo $event_title; ?></h2>
      <p class="facebook-event-date"><strong>Starts:</strong> <?php echo $event_starts; ?></p>
      <p class="facebook-event-date"><strong>Ends:</strong> <?php echo $event_ends; ?></p>
      <p class="facebook-event-desc"><?php echo $event_desc; ?></p>
      <a href="<?php echo $event_link; ?>" class="btn btn-secondary">Learn more</a>
      <?php if($event_ticket_link) { ?>
        <a href="<?php echo $event_ticket_link; ?>" class="btn btn-secondary">Get tickets</a>
      <?php } ?>

    </div>
  <?php

  }
      endwhile;
    endif;

    wp_reset_query();

  ?>
</div>
