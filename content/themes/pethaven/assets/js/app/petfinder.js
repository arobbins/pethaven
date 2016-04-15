import $ from 'jquery';

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
  const getPets = function() {

    var animalType = $container.data("animal-type"),
        location = 55408,
        url = endpoint + methodFindPets + '?key=' + APIkey + '&animal=' + animalType + '&format=' + format + '&location=' + location + '&callback=?';

    $.getJSON(url, function(data) {
      console.log(data);
    });

  };

  return {
    getBreeds: getBreeds,
    getPets: getPets
  };

})();

export default PF;
