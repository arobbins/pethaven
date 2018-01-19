// import Isotope from 'isotope-layout';
import PF from './petfinder';
import Rx from 'rx';
// import imagesloaded from 'imagesloaded';
import _ from 'lodash';
import Utils from './utils';

const componentPetFinder = (() => {

  var $grid = jQuery('.component-pet-finder-grid'),
      $gridContainer = jQuery('.component-pet-finder'),
      $spinner = jQuery('.component-pet-finder .spinner'),
      $inputZipcode = jQuery('.component-pet-finder-filter-zipcode'),
      $inputType = jQuery('.component-pet-finder-filter-type'),
      $inputBreeds = jQuery('.component-pet-finder-filter-breed'),
      $inputSize = jQuery('.component-pet-finder-filter-size'),
      $inputAge = jQuery('.component-pet-finder-filter-age'),
      $buttonClear = jQuery('.component-pet-finder-filter-clear'),
      $msg = jQuery('.component-pet-finder .msg'),
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

    if($grid.length) {

      Rx.Observable.fromPromise(PF.getPets()).subscribe(

        pets => {

          console.log("pets.petfinder.pets: ", pets);

          insertPetsIntoDOM(pets.petfinder.pets.pet);

          $grid.imagesLoaded( function() {

            jQuery('.component-pet-finder .spinner').addClass('is-hidden');

            if (!$grid.hasClass('is-visible')) {
              $grid.addClass('is-visible');
            }

            initGrid();

          });

        },

        error => {
          console.error("Error: ", error);
        }

      );

    } else {
      // console.log('NOT loading pets ...');
    }

  };


  //
  // Clear filter
  //
  const clearFilters = iso => {

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

    iso.isotope({
      filter: function() {
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
      jQuery.each(breeds, (index, breed) => {
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
  const insertPetsIntoDOM = pets => {

    jQuery.each(pets, (key, pet) => {

      var breeds = pet.breeds.breed,
          breedClasses = createBreedsList(breeds),
          petImage = createPetImage(pet);

      $grid.append(jQuery("<a href='https://www.petfinder.com/petdetail/" + pet.id.$t + "' class='grid-item pet-link " + breedClasses + "' data-type='" + pet.animal.$t + "' data-breeds='" + breedClasses + "' data-size='" + pet.size.$t + "' data-age='" + pet.age.$t + "' target='_blank'><img src=" + petImage + " class='pet-image'><h4 class='pet-name'>" + pet.name.$t + "</h4><p class='pet-breed'><strong>Breeds</strong>" + breedClasses + "</p><p class='pet-age'><strong>Age:</strong> " + pet.age.$t + "</p><p class='pet-size'><strong>Size:</strong> " + pet.size.$t + "</p></a>"));

    });
  };


  //
  // Set Animal Type
  //
  const setType = () => {

    if ($inputType.val().length === 0) {
      selectedFilters.type = null;

    } else {
      selectedFilters.type = $inputType.val();

    }
  };


  //
  // Isotope Initing
  //
  const initGrid = () => {

    if (jQuery('.component-pet-finder-grid').length) {

      const iso = jQuery('.component-pet-finder-grid').isotope({
        itemSelector: '.grid-item',
        percentPosition: true,
        masonry: {
          columnWidth: '.grid-item',
          gutter: 2
        }
      });

      setType();
      detectFilterEvents(iso);
      filterSelection(iso);

    }

  };







  function constructFilterClass(selectedOptions) {

    var result = '';

    for (var option in selectedOptions) {

      if (selectedOptions.hasOwnProperty(option)) {

        if (option === 'breeds') {
          result += '.grid-item[data-' + option + '*="' + selectedOptions[option] + '"]';

        } else {
          result += '.grid-item[data-' + option + '="' + selectedOptions[option] + '"]';
        }

      }

    }

    return result;

  }









  function constructSelectedOptions($items) {

    var finalSelectedOptions;

    $items.forEach( function(itemElem) {

      var $itemElem = jQuery(itemElem)[0];

      var element = {
        type: $itemElem.dataset.type,
        breeds: $itemElem.dataset.breeds,
        size: $itemElem.dataset.size,
        age: $itemElem.dataset.age
      };

      // Remove the null values ...
      var selected = _.omitBy(selectedFilters, _.isNull);

      if (selected.breeds) {

        if (selected.breeds.length > 3) {

          var selectedWithoutBreeds = {
            type: selectedFilters.type,
            age: selectedFilters.age,
            size: selectedFilters.size,
            breeds: selected.breeds
          };

          finalSelectedOptions = _.omitBy(selectedWithoutBreeds, _.isNull);

        }

      } else {

        finalSelectedOptions = selected;

      }

    });

    return finalSelectedOptions;

  }















  //
  // Filter Selection
  //
  const filterSelection = iso => {

    iso.isotope({
      itemSelector: '.grid-item',
      percentPosition: true,
      masonry: {
        columnWidth: '.grid-item',
        gutter: 2
      },
      filter: constructFilterClass( constructSelectedOptions( iso.isotope('getItemElements') ) )

    });

  };


  //
  // On filter clearing
  //
  const onClear = iso => {

    $buttonClear.click( () => {

      clearFilters(iso);

    });

  };


  //
  // On Type change
  //
  const onType = iso => {

    $inputType.change( () => {

      setType();
      filterSelection(iso);

    });

  };


  //
  // On Breed change
  //
  const onBreed = iso => {

    $inputBreeds.keyup( () => {

      if ($inputBreeds.val().length === 0) {
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
  const onSize = iso => {

    $inputSize.change( () => {
      selectedFilters.size = $inputSize.val();
      filterSelection(iso);
    });

  };


  //
  // On Age change
  //
  const onAge = iso => {

    $inputAge.change( () => {
      selectedFilters.age = $inputAge.val();
      filterSelection(iso);
    });

  };


  //
  // On Finish
  //
  const onFinish = iso => {

    iso.isotope( 'on', 'arrangeComplete', function(filteredItems) {
      checkForEmptyResults(filteredItems);
    });

    // manually trigger initial layout
    // iso.isotope();


    // iso.on('arrangeComplete', function(event, filteredItems) {
    //   checkForEmptyResults(filteredItems);
    // });

  };


  //
  // Detect Filter Events
  //
  const detectFilterEvents = iso => {

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
  const checkForEmptyResults = filteredItems => {

    if (filteredItems.length === 0) {

      $gridContainer.addClass('is-empty');

    } else {

      if ($gridContainer.hasClass('is-empty')) {
        $gridContainer.removeClass('is-empty');
      }

    }

  };


  return {
    loadPets: loadPets
  };

})();

export default componentPetFinder;
