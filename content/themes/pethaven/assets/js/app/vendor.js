import $ from 'jquery';
import slick from 'slick-carousel';

const Vendor = (function() {

  let $mqrquees = $('.component-marquees');

  let initCarousel = function() {
    $mqrquees.slick();
    $mqrquees.on('breakpoint', function(event, slick, currentSlide, nextSlide){});
  };

  return {
    initCarousel: initCarousel
  };

})();

export default Vendor;
