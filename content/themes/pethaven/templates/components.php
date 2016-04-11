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

      endwhile;
    endif;

  ?>
</section>
