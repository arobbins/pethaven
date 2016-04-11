<?php

  // Needed because slick slider doesn't accept 1 as a truthy value
  $autoplay = get_sub_field('marquee_option_autoplay');

  if($autoplay) {
    $autoplay_new = 'true';
  }

?>
