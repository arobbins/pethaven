import Vendor from './vendor';
import PF from './petfinder';

import componentPetFinder from './component-petfinder';


//
// Slick Carousel
//
Vendor.initCarousel();

// Pet Finder API
PF.getPets();

// Components
componentPetFinder.initGrid();
