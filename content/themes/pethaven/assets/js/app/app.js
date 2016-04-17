import Vendor from './vendor';
import componentPetFinder from './component-petfinder';


//
// Slick Carousel
//
Vendor.initCarousel();

// Components
componentPetFinder.loadPets();
// componentPetFinder.initGrid();
