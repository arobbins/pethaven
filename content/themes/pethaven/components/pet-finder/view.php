<?php

  include('controller.php');

?>

<section class="component component-pet-finder" data-animal-type="<?php echo $animalType; ?>">
  <div class="l-contain l-row l-row-center">

    <form class="component-pet-finder-filter l-row" action="" method="post">

      <div class="form-control-inline">
        <label for="zipcode">Zipcode</label>
        <input type="text" pattern="(\d{5}([\-]\d{4})?)" title="Five digit zip code"  name="zipcode" placeholder="Zipcode" class="component-pet-finder-filter-zipcode">
      </div>

      <div class="form-control-inline">
        <label for="type">Type</label>
        <select class="component-pet-finder-filter-type" name="type">
          <option value="">All</option>
          <option value="cat" selected>Cats</option>
          <option value="dog">Dogs</option>
        </select>
      </div>

    </form>

    <div class="spinner"></div>
    <section class="component-pet-finder-grid"></section>
  </div>
</section>
