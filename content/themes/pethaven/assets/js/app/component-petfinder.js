import $ from 'jquery';
import Isotope from 'isotope-layout';
import PF from './petfinder';
import Rx from 'rx';

const componentPetFinder = (() => {

  let $grid = $('.component-pet-finder-grid'),
      dataPets = Rx.Observable.fromPromise(PF.getPets);

  //
  // Isotope Initing
  //
  const loadPets = () => {

    dataPets.subscribe(
      (pets) => {

        $.each(pets.petfinder.pets.pet, (key, pet) => {
          $grid.append($("<div class='grid-item'><h2>" + pet.name.$t + "</h2><p>" + pet.description.$t + "</p></div>"));
        });

        initGrid();

      },
      (error) => {
        console.log('Error', error);
      },
      () => {
        console.log('Completed');
      });

  };


  //
  // Isotope Initing
  //
  const initGrid = () => {
    var iso = new Isotope('.component-pet-finder-grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 46,
        gutter: 10
      }
    });
  };

  return {
    loadPets: loadPets,
    initGrid: initGrid
  };

})();

export default componentPetFinder;
