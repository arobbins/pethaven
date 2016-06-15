import $ from 'jquery';
import slick from 'slick-carousel';

const Vendor = (function() {

  let $marquees = $('.component-marquees');

  let initCarousel = function() {
    $marquees.slick();
    $marquees.on('breakpoint', function(event, slick, currentSlide, nextSlide){});
  };

  return {
    initCarousel: initCarousel
  };

})();

export default Vendor;
