<?php

  use Roots\Sage\Titles;


  if(is_home()) {
    if(get_field('page_header_image', get_option('page_for_posts'))) {
      $bg = get_field('page_header_image', get_option('page_for_posts'));

    } else {
      $bg = null;
    }

  } else {
    if(get_field('page_header_image', $post->ID)) {
      $bg = get_field('page_header_image', $post->ID);

    } else {
      $bg = null;
    }
  }

?>

<div class="<?php echo $bg ? 'page-header' : 'page-header-collapsed'; ?> l-row l-col-center" style="background-image: url('<?php echo $bg; ?>');">
  <div class="l-contain l-col l-row-center l-col-center page-header-background">
    <h1 class="page-header-title"><?= Titles\title(); ?></h1>
  </div>
</div>

<section class="breadcrumbs">
  <div class="l-contain l-row l-row-center l-row-right l-box">
    <?php get_template_part('components/breadcrumbs/view'); ?>
  </div>
</section>
