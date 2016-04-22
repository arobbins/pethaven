import Vendor from './vendor';
import componentPetFinder from './component-petfinder';
import componentMobileMenu from './component-mobile-menu';

//
// Slick Carousel
//
Vendor.initCarousel();

//
// Components
//
componentPetFinder.loadPets();
componentMobileMenu.init();

componentMobileMenu.toggleMobileMenu();
