import $ from 'jquery';
import Isotope from 'isotope-layout';
import PF from './petfinder';
import Rx from 'rx';
import imagesloaded from 'imagesloaded';
import Utils from './utils';

const componentPetFinder = (() => {

  var $grid = $('.component-pet-finder-grid'),
      $gridContainer = $('.component-pet-finder'),
      $spinner = $('.component-pet-finder .spinner'),
      $inputZipcode = $('.component-pet-finder-filter-zipcode'),
      $inputType = $('.component-pet-finder-filter-type'),
      $inputBreed = $('.component-pet-finder-filter-breed'),
      $inputSize = $('.component-pet-finder-filter-size'),
      $inputAge = $('.component-pet-finder-filter-age'),
      $buttonClear = $('.component-pet-finder-filter-clear'),
      $msg = $('.component-pet-finder .msg'),
      selectedFilters = {
        type: null,
        breed: null,
        size: null,
        age: null
      };

  //
  // Isotope Initing
  //
  const loadPets = () => {

    Rx.Observable.fromPromise(PF.getPets()).subscribe(
      (pets) => {

        insertPetsIntoDOM(pets.petfinder.pets.pet);

        new imagesloaded('.component-pet-finder-grid', () => {

          if(!$grid.hasClass('is-visible')) {
            $grid.addClass('is-visible');
          }

          initGrid();

        });

      },

      (error) => {
        console.log('Error', error);
      }

    );

  };


  //
  // Clear filter
  //
  const clearFilters = (iso) => {

    $inputType.prop('selectedIndex', 0);
    $inputSize.prop('selectedIndex', 0);
    $inputAge.prop('selectedIndex', 0);
    $inputBreed.val('');

    selectedFilters = {
      type: true,
      breed: true,
      size: true,
      age: true
    };

    iso.arrange({
      filter: function(itemElem) {
        return true;
      }
    });

  };


  //
  // Construct breed classes
  //
  const createBreedsList = (breeds) => {
    var breedClasses = '';

    if(breeds.length) {
      $.each(breeds, (index, breed) => {
        if(breed.$t) {
          breedClasses = breedClasses += ' ' + breed.$t.toLowerCase();
        }
      });
    } else {
      breedClasses = breedClasses += ' ' + breeds.$t.toLowerCase();
    }

    return breedClasses;

  };


  //
  // Create Pet Image
  //
  const createPetImage = (pet) => {
    var img = 'photos' in pet.media ? pet.media.photos.photo[2].$t : '../../content/themes/pethaven/assets/imgs/pet-img-notfound.jpg';

    return img;
  };


  //
  // Insert Pets Into Grid
  //
  const insertPetsIntoDOM = (pets) => {
    $.each(pets, (key, pet) => {
      console.log(pet);
      var breeds = pet.breeds.breed,
          breedClasses = createBreedsList(breeds),
          petImage = createPetImage(pet);

      $grid.append($("<div class='grid-item " + breedClasses + "' data-type='" + pet.animal.$t + "' data-breeds='" + breedClasses + "' data-size='" + pet.size.$t + "' data-age='" + pet.age.$t + "'><img src=" + petImage + " class='pet-image'><h4 class='pet-name'>" + pet.name.$t + "</h4><p class='pet-breed'>" + breedClasses + "</p></div>"));

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
        columnWidth: '.grid-item',
        gutter: 2
      }
    });

    filterByAnimalType(iso);
    detectFilterEvents(iso);

  };


  //
  // Filter By Animal Type
  //
  const filterByAnimalType = (iso) => {

    iso.arrange({
      filter: function(itemElem) {

        if($inputType.val() !== "All") {

          return $inputType.val() === itemElem.dataset.type;

        } else {

          return true;

        }

      }
    });

  };


  //
  // Filter By Breed
  //
  const filterByAnimalBreed = (iso) => {

    iso.arrange({
      filter: function(itemElem) {
        if($inputBreed.val().length > 0) {

          return itemElem.dataset.breeds.indexOf($inputBreed.val()) > -1;

        } else {

          return true;

        }
      }
    });

  };


  //
  // Filter By Size
  //
  const filterByAnimalSize = (iso) => {

    iso.arrange({
      filter: function(itemElem) {
        return $inputSize.val() === itemElem.dataset.size;
      }
    });

  };


  //
  // Filter By Age
  //
  const filterByAnimalAge = (iso) => {

    iso.arrange({
      filter: function(itemElem) {
        return $inputAge.val() === itemElem.dataset.age;
      }
    });

  };


  //
  // On filter clearing
  //
  const onClear = (iso) => {

    $buttonClear.click(() => {
      clearFilters(iso);
      console.log(selectedFilters);
    });

  };


  //
  // On Type change
  //
  const onType = (iso) => {

    $inputType.change(() => {
      // selectedFilters.type = $inputType.val();
      // console.log(selectedFilters);
      filterByAnimalType(iso);
    });

  };


  //
  // On Breed change
  //
  const onBreed = (iso) => {

    $inputBreed.keyup(() => {
      selectedFilters.breed = $inputBreed.val();
      console.log(selectedFilters);
      filterByAnimalBreed(iso);
    });

  };


  //
  // On Size change
  //
  const onSize = (iso) => {

    $inputSize.change(() => {

      selectedFilters.size = $inputSize.val();
      console.log(selectedFilters);
      filterByAnimalSize(iso);

    });

  };


  //
  // On Age change
  //
  const onAge = (iso) => {

    $inputAge.change(() => {
      filterByAnimalAge(iso);
    });

  };


  //
  // On Finish
  //
  const onFinish = (iso) => {
    iso.on('arrangeComplete', function(filteredItems) {

      checkForEmptyResults(filteredItems);

    });
  };


  //
  // Detect Filter Events
  //
  const detectFilterEvents = (iso) => {

    onType(iso);
    onBreed(iso);
    onSize(iso);
    onAge(iso);
    onClear(iso);
    onFinish(iso);

  };


  //
  // Check for empty results
  //
  const checkForEmptyResults = (filteredItems) => {
    if(filteredItems.length === 0) {
      $gridContainer.addClass('is-empty');

    } else {
      if($gridContainer.hasClass('is-empty')) {
        $gridContainer.removeClass('is-empty');
      }
    }
  };

  return {
    loadPets: loadPets,
    initGrid: initGrid,
    detectFilterEvents: detectFilterEvents
  };

})();

export default componentPetFinder;
