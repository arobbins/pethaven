<?php

  $loop = new WP_Query(array( 'post_type' => 'partners', 'orderby' => 'date', 'order' => 'ASC', 'posts_per_page' => -1));

?>
