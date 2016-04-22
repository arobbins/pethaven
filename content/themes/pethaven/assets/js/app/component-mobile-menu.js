import $ from 'jquery';
import Slideout from 'slideout';

const componentMobileMenu = (function() {

  const init = function() {
    var menu = new Slideout({
      'panel': document.getElementById('content'),
      'menu': document.getElementById('menu-mobile'),
      'padding': 256,
      'tolerance': 70,
      'side': 'right',
      'touch': false
    });

    document.querySelector('.toggle-button').addEventListener('click', function() {
      menu.toggle();
    });

    $('.menu-mobile-navigation-container').show();

    var toggles = document.querySelectorAll(".toggle-button");

    for (var i = toggles.length - 1; i >= 0; i--) {
      var toggle = toggles[i];
      toggleHandler(toggle);
    };

    function toggleHandler(toggle) {
      toggle.addEventListener( "click", function(e) {
        e.preventDefault();

        var $menu = $('.nav-mobile');

        if($menu.is(':visible')) {
          $('.nav-mobile').hide();
        } else {
          $('.nav-mobile').fadeIn();
        }

        (this.classList.contains("is-active") === true) ? this.classList.remove("is-active") : this.classList.add("is-active");
      });
    }

  };

  const toggleMobileMenu = function() {
    $('.slideout-panel').click(function() {
      $(this).find('.mobile-icon').toggleClass('fa-bars fa-times');
      $(this).find('.mobile-icon').next().slideToggle('fast');
    });
  };

  return {
    init: init,
    toggleMobileMenu: toggleMobileMenu
  };

})();

export default componentMobileMenu;
