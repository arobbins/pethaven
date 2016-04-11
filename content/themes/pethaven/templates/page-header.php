<?php

  use Roots\Sage\Titles;

  if(get_field('page_header_image', $post->ID)) {
    $bg = get_field('page_header_image', $post->ID);

  } else {
    $bg = null;
  }

?>

<div class="<?php echo $bg ? 'page-header' : 'page-header-collapsed'; ?> l-row l-col-center" style="background-image: url(<?php the_field('page_header_image', $post->ID); ?>);">
  <div class="l-contain l-row-center">
    <h1 class="page-header-title"><?= Titles\title(); ?></h1>
  </div>
</div>

<section class="breadcrumbs">
  <div class="l-contain l-row l-row-center l-row-right l-box">
    <?php get_template_part('components/breadcrumbs/view'); ?>
  </div>
</section>
