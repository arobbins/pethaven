import $ from 'jquery';
import Isotope from 'isotope-layout';

const componentPetFinder = (function() {

  let $grid = $('.component-pet-finder-grid');

  // var i = new isotope;


  //
  // Isotope Initing
  //
  const initGrid = function() {
    var iso = new Isotope('.component-pet-finder-grid', {
      itemSelector: '.grid-item',
      layoutMode: 'fitRows',
      fitRows: {
        gutter: 30
      }
    });
  };

  return {
    initGrid: initGrid
  };

})();

export default componentPetFinder;
