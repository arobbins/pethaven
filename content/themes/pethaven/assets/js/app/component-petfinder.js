import $ from 'jquery';
import Isotope from 'isotope-layout';
import PF from './petfinder';
import Rx from 'rx';
import imagesloaded from 'imagesloaded';

const componentPetFinder = (() => {

  var $grid = $('.component-pet-finder-grid'),
      dataPets = Rx.Observable.fromPromise(PF.getPets()),
      $spinner = $('.component-pet-finder .spinner'),
      $inputZipcode = $('.component-pet-finder-filter-zipcode'),
      $inputType = $('.component-pet-finder-filter-type');

  //
  // Isotope Initing
  //
  const loadPets = () => {

    dataPets.subscribe(
      (pets) => {

        $.each(pets.petfinder.pets.pet, (key, pet) => {
          //console.log(pet);
          $grid.append($("<div class='grid-item'><h2 class='pet-name'>" + pet.name.$t + "</h2><img src=" + pet.media.photos.photo[2].$t + " class='pet-image'></div>"));
        });

        new imagesloaded('.component-pet-finder-grid', () => {
          if(!$grid.hasClass('is-visible')) {
            $grid.addClass('is-visible');
          }
          initGrid();
        });

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
  const initGrid = (callback) => {

    new Isotope('.component-pet-finder-grid', {
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: 32,
        gutter: 1
      }
    });

  };


  //
  // clearPrevResults
  //
  const clearPrevResults = () => {
    $('.component-pet-finder-grid').empty();
  };


  //
  // On Zipcode change
  //
  const onZipcode = () => {

    $inputZipcode.on();

  };


  //
  // On Type change
  //
  const onType = () => {

    $inputType.change(function() {

      clearPrevResults();

      var sub = Rx.Observable.fromPromise(PF.getPets(
        { animalType: $(this).val() }
      ));

      sub.subscribe(
        (pets) => {

          $.each(pets.petfinder.pets.pet, (key, pet) => {
            //console.log(pet);
            $grid.append($("<div class='grid-item'><h2 class='pet-name'>" + pet.name.$t + "</h2><img src=" + pet.media.photos.photo[2].$t + " class='pet-image'></div>"));
          });

          new imagesloaded('.component-pet-finder-grid', () => {
            if(!$grid.hasClass('is-visible')) {
              $grid.addClass('is-visible');
            }
            initGrid();
          });

        },

        (error) => {
          console.log('Error', error);
        },

        () => {
          // console.log('Completed');

        });


    });

  };


  //
  // Detect Filter Events
  //
  const detectFilterEvents = () => {

    onZipcode();
    onType();

  };


  return {
    loadPets: loadPets,
    initGrid: initGrid,
    detectFilterEvents: detectFilterEvents
  };

})();

export default componentPetFinder;
