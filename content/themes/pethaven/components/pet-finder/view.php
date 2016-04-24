<?php

  include('controller.php');

?>
<section class="component component-pet-finder" data-animal-type-default="<?php echo $animalType; ?>">
  <div class="l-contain l-box l-row l-row-center">

    <form class="component-pet-finder-filter l-row l-row-center l-col-center" action="" method="post">

      <div class="form-control-inline">
        <label for="type">Animal</label>
        <select class="component-pet-finder-filter-type" name="type">
          <?php

          if( have_rows('theme_petfinder_animal_types', 'option') ):
           	// loop through the rows of data
            while ( have_rows('theme_petfinder_animal_types', 'option') ) : the_row(); ?>

              <option value="<?php echo get_sub_field('type') === 'All' ? null : the_sub_field('type'); ?>" <?php echo get_sub_field('type') === $animalType ? 'selected' : null; ?> <?php echo get_sub_field('type') !== 'All' ? 'required' : null; ?>><?php the_sub_field('type'); ?><?php echo get_sub_field('type') !== 'All' ? 's' : null; ?></option>

            <?php endwhile;
          endif;

          ?>

        </select>
      </div>

      <div class="form-control-inline">
        <label for="breed">Breed</label>
        <input type="text" class="component-pet-finder-filter-breed" name="breed" placeholder="Lab, terrier, etc">
      </div>

      <div class="form-control-inline">
        <label for="age">Age</label>
        <select class="component-pet-finder-filter-age" name="age">
          <option selected disabled>Age</option>
          <option value="Baby">Baby</option>
          <option value="Young">Young</option>
          <option value="Adult">Adult</option>
          <option value="Senior">Senior</option>
        </select>
      </div>

      <div class="form-control-inline">
        <label for="size">Size</label>
        <select class="component-pet-finder-filter-size" name="size">
          <option selected disabled>Size</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
        </select>
      </div>

      <button class="component-pet-finder-filter-clear" type="button" name="clear">Clear</button>

    </form>

    <div class="spinner"></div>
    <div class="msg msg-notice">No pets found. Please choose a different filtering option or click reset.</div>
    <section class="component-pet-finder-grid"></section>

  </div>
</section>
