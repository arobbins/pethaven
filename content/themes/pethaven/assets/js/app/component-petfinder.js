import $ from 'jquery';
import Isotope from 'isotope-layout';
import PF from './petfinder';
import Rx from 'rx';
import imagesloaded from 'imagesloaded';
import _ from 'lodash';
import Utils from './utils';

const componentPetFinder = (() => {

  var $grid = $('.component-pet-finder-grid'),
      $gridContainer = $('.component-pet-finder'),
      $spinner = $('.component-pet-finder .spinner'),
      $inputZipcode = $('.component-pet-finder-filter-zipcode'),
      $inputType = $('.component-pet-finder-filter-type'),
      $inputBreeds = $('.component-pet-finder-filter-breed'),
      $inputSize = $('.component-pet-finder-filter-size'),
      $inputAge = $('.component-pet-finder-filter-age'),
      $buttonClear = $('.component-pet-finder-filter-clear'),
      $msg = $('.component-pet-finder .msg'),
      selectedFilters = {
        type: null,
        breeds: null,
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
    $inputBreeds.val('');

    selectedFilters = {
      type: null,
      breeds: null,
      size: null,
      age: null
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

      var breeds = pet.breeds.breed,
          breedClasses = createBreedsList(breeds),
          petImage = createPetImage(pet);

      $grid.append($("<a href='https://www.petfinder.com/petdetail/" + pet.id.$t + "' class='pet-link'><div class='grid-item " + breedClasses + "' data-type='" + pet.animal.$t + "' data-breeds='" + breedClasses + "' data-size='" + pet.size.$t + "' data-age='" + pet.age.$t + "'><img src=" + petImage + " class='pet-image'><h4 class='pet-name'>" + pet.name.$t + "</h4><p class='pet-breed'><strong>Breeds</strong>" + breedClasses + "</p><p class='pet-age'><strong>Age:</strong> " + pet.age.$t + "</p><p class='pet-size'><strong>Size:</strong> " + pet.size.$t + "</p></div></a>"));

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

    filterSelection(iso);
    detectFilterEvents(iso);

  };


  //
  // Filter Selection
  //
  const filterSelection = (iso) => {

    iso.arrange({
      filter: function(itemElem) {

        var element = {
          type: itemElem.dataset.type,
          breeds: itemElem.dataset.breeds,
          size: itemElem.dataset.size,
          age: itemElem.dataset.age
        };

        // Remove the null values ...
        var selected = _.omitBy(selectedFilters, _.isNull);

        if(selected.breeds) {

          if(element.breeds.indexOf(selected.breeds) > -1) {

            var elementWithoutBreeds = {
              type: element.type,
              age: element.age,
              size: element.size
            };

            var selectedWithoutBreeds = {
              type: selectedFilters.type,
              age: selectedFilters.age,
              size: selectedFilters.size
            };

            var selectedWithoutBreedsAndNull = _.omitBy(selectedWithoutBreeds, _.isNull);

            return _.some([elementWithoutBreeds], selectedWithoutBreedsAndNull);

          }

        } else {
          return _.some([element], selected);

        }

      }
    });

  };


  //
  // On filter clearing
  //
  const onClear = (iso) => {

    $buttonClear.click(() => {
      clearFilters(iso);
    });

  };


  //
  // On Type change
  //
  const onType = (iso) => {

    $inputType.change(() => {

      if($inputType.val().length === 0) {
        selectedFilters.type = null;

      } else {
        selectedFilters.type = $inputType.val();

      }

      filterSelection(iso);

    });

  };


  //
  // On Breed change
  //
  const onBreed = (iso) => {

    $inputBreeds.keyup(() => {

      if($inputBreeds.val().length === 0) {
        selectedFilters.breeds = null;

      } else {
        selectedFilters.breeds = $inputBreeds.val().toLowerCase();

      }

      filterSelection(iso);

    });

  };


  //
  // On Size change
  //
  const onSize = (iso) => {

    $inputSize.change(() => {
      selectedFilters.size = $inputSize.val();
      filterSelection(iso);
    });

  };


  //
  // On Age change
  //
  const onAge = (iso) => {

    $inputAge.change(() => {
      selectedFilters.age = $inputAge.val();
      filterSelection(iso);
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
