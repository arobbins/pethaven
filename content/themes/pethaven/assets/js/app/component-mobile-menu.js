import Slideout from 'slideout';

const componentMobileMenu = (function() {

  var $menu = jQuery('.nav-mobile'),
      $menuIcon = jQuery('.toggle-button'),
      $menuContainer = jQuery('.menu-mobile-navigation-container'),
      $slideoutPanel = jQuery('.slideout-panel');

  const showMobileMenu = () => {

    $menuContainer.fadeIn('slow');

    $menuIcon.click(function(e) {
      e.preventDefault();

      if($menu.is(':visible')) {
        $menu.hide();

      } else {
        $menu.fadeIn();

      }

      jQuery(this).toggleClass("is-active");

    });

  };

  const toggleMenu = (menu) => {

    $menuIcon.click(function() {
      menu.toggle();
    });

  };

  const init = () => {

    var menu = new Slideout({
      'panel': document.getElementById('content'),
      'menu': document.getElementById('menu-mobile'),
      'padding': 256,
      'tolerance': 70,
      'side': 'right',
      'touch': false
    });

    toggleMenu(menu);
    showMobileMenu();

  };

  return {
    init: init
  };

})();

export default componentMobileMenu;
