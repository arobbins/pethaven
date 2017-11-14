const Vendor = (function() {

  function initCarousel() {
    jQuery('.component-marquees').slick();
  }

  function initFitvid() {
    jQuery(".component, .content").fitVids();
  }

  return {
    initCarousel: initCarousel,
    initFitvid: initFitvid
  };


})();

export default Vendor;
