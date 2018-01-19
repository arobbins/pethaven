import Rx from 'rx';

const PF = (function() {

  let endpoint = 'https://api.petfinder.com';
  let methodBreedList = '/breed.list';
  let methodFindPets = '/shelter.getPets';
  let shelterID = 'MN36';
  let APIkey = '454b72d5b9fc8fca72c7a461a5ac46d2';
  let format = 'json';

  let $container = jQuery('.component-pet-finder');


  //
  // Get Breeds
  //
  const getBreeds = function() {

    var animalType = $container.data("animal-type"),
        url = endpoint + methodBreedList + '?key=' + APIkey + '&animal=' + animalType + '&format=' + format + '&callback=?';

    return jQuery.ajax({
      url: url,
      dataType: 'jsonp',
      beforeSend: function(xhr) {
        // jQuery('.component-pet-finder .spinner').removeClass('is-hidden');
      },
      success: function () {
        // jQuery('.component-pet-finder .spinner').addClass('is-hidden');
      }
    }).promise();

  };


  //
  // Generic search
  //
  const getPets = function() {

    var url = endpoint + methodFindPets + '?key=' + APIkey + '&id=' + shelterID + '&count=1000' + '&format=' + format + '&callback=?';
console.log("url: ", url);
    return jQuery.ajax({
      url: url,
      dataType: 'jsonp',
      beforeSend: function( xhr ) {
        jQuery('.component-pet-finder .spinner').removeClass('is-hidden');
        console.log("url: ", url);
      },
      success: function () {

      }
    }).promise();

  };

  return {
    getBreeds: getBreeds,
    getPets: getPets
  };

})();

export default PF;
