import Vendor from './vendor';
import PF from './component-petfinder';
import mobileMenu from './component-mobile-menu';

jQuery(document).ready(function() {

  // Initializing ...
  mobileMenu.init();
  Vendor.initCarousel();
  Vendor.initFitvid();
  PF.loadPets();

});
