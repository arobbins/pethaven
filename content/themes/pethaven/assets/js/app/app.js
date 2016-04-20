import Vendor from './vendor';
import componentPetFinder from './component-petfinder';
import $ from 'jquery';

//
// Slick Carousel
//
Vendor.initCarousel();

// Components
componentPetFinder.loadPets();
