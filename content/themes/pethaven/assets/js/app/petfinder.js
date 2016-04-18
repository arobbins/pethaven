import $ from 'jquery';
import Rx from 'rx';

const PF = (function() {

  let endpoint = 'http://api.petfinder.com';
  let methodBreedList = '/breed.list';
  let methodFindPets = '/pet.find';
  let APIkey = '454b72d5b9fc8fca72c7a461a5ac46d2';
  let format = 'json';

  let $container = $('.component-pet-finder');


  //
  // Get Breeds
  //
  const getBreeds = function() {

    var animalType = $container.data("animal-type"),
        url = endpoint + methodBreedList + '?key=' + APIkey + '&animal=' + animalType + '&format=' + format + '&callback=?';

    $.getJSON(url, function(data) {
      console.log(data);
    });

  };


  //
  // Generic search
  //
  const getPets = function({animalType = $container.data("animal-type"), zipcode = 55408} = {}) {

    var url = endpoint + methodFindPets + '?key=' + APIkey + '&animal=' + animalType + '&format=' + format + '&location=' + zipcode + '&callback=?';

    return $.ajax({
      url: url,
      dataType: 'jsonp',
      beforeSend: function( xhr ) {
        $('.component-pet-finder .spinner').removeClass('is-hidden');
      },
      success: function () {
        $('.component-pet-finder .spinner').addClass('is-hidden');
      }
    }).promise();

  };

  return {
    getBreeds: getBreeds,
    getPets: getPets
  };

})();

export default PF;
