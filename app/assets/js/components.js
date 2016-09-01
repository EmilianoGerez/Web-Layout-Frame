(function() {
  // DOM Cache
  var $transparentNavbar = $('#transparent-navbar');
  //var mobileSidebar = $('#mobile-sidebar');
  var $floatingBtn = $('.floating-btn, .floating-btn-hover');
  var $btnToggleSidebar = $('#btn-toggle-sidebar');
  var $btnMobileSidebar = $('#btn-mobile-sidebar');

  // Events
  //////////////////////////////////
  $(window).scroll(navTransparent);
  $btnToggleSidebar.click(toggleSidebar);
  $btnMobileSidebar.click(toggleMobileSidebar);
  $floatingBtn.click(openfloatingBtn);
  $('a.sidebar-dropdown-toggle').click(openDropdown);
  $(".nav a").on("click", toggleActiveLink);

  // Methods
  //////////////////////////////////

  function navTransparent() {
    if ($(window).scrollTop() < 400) /*height in pixels when the navbar becomes non opaque*/ {
      $transparentNavbar.addClass('navbar-transparent');
    } else {
      $transparentNavbar.removeClass('navbar-transparent');
    }
  }

  function toggleSidebar() {
    $('#main-wrapper').toggleClass('toggled');
  }

  function toggleMobileSidebar() {
    $btnMobileSidebar.toggleClass('toggled');
    $btnMobileSidebar.parent("div").parent("div").parent("nav").toggleClass('toggled');
  }

  function openfloatingBtn() {
    $(this).children("ul").toggleClass('open');
  }

  function openDropdown() {
    $(this).next('.sidebar-dropdown-menu').toggleClass('open');
  }

  function toggleActiveLink() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  }

})();

// Revealing components
var _componentExposed = function() {

  // Private methods
  //////////////////////////////////

  //Function to animate slider captions 
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function() {
      var $this = $(this);
      var $animationType = $this.data('animation');
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }

  // Public Methods
  //////////////////////////////////

  //Variables on page load 
  function carouselAnimated(config) {
    var $firstAnimatingElems = config.carouselId.find('.item:first').find("[data-animation ^= 'animated']");

    //Initialize carousel 
    config.carouselId.carousel({
      interval: config.interval
    });

    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    //Pause carousel  
    //config.carouselId.carousel('pause');

    //Other slides to be animated on carousel slide event 
    config.carouselId.on('slide.bs.carousel', function(e) {
      var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
      doAnimations($animatingElems);
    });
  }

  // Revealing
  //////////////////////////////////
  return {
    carouselAnimated: carouselAnimated
  };
}();