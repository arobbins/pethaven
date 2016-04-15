<section class="components">
  <?php

    if(have_rows('components')):
      while(have_rows('components')) : the_row();

        // Marquees
        if(get_row_layout() == 'components_marquees'):
          get_template_part('components/marquees/view');
        endif;

        // How we work
        if(get_row_layout() == 'components_how_we_work'):
          get_template_part('components/how-we-work/view');
        endif;

        // Related
        if(get_row_layout() == 'components_related'):
          get_template_part('components/related/view');
        endif;

        // Pet Finder
        if(get_row_layout() == 'component_pet_finder'):
          get_template_part('components/pet-finder/view');
        endif;

      endwhile;
    endif;

  ?>
</section>
