(function() {



  // ////////////////////////////////
  // DOM Cache
  // ////////////////////////////////
  var $transparentNavbar = $('#transparent-navbar');
  // var mobileSidebar = $('#mobile-sidebar')
  var $floatingList = $('.floating-list, .floating-list-hover');
  var $btnToggleSidebar = $('#btn-toggle-sidebar');
  var $btnMobileSidebar = $('#btn-mobile-sidebar');
  // ////////////////////////////////
  // Events
  // ////////////////////////////////
  $(window)
    .scroll(navTransparent);
  $btnToggleSidebar.click(toggleSidebar);
  $btnMobileSidebar.click(toggleMobileSidebar);
  $floatingList.click(openfloatingList)
  $('a.sidebar-dropdown-toggle')
    .click(openDropdown);
  $('.nav a')
    .on('click', toggleActiveLink);
  // ////////////////////////////////
  // Methods
  // ////////////////////////////////

  function navTransparent() {
    if ($(window)
      .scrollTop() < 400) /*height in pixels when the navbar becomes non opaque*/ {
      $transparentNavbar.addClass('navbar-transparent');
    } else {
      $transparentNavbar.removeClass('navbar-transparent');
    }
  }

  function toggleSidebar() {
    $('#main-wrapper')
      .toggleClass('toggled');
  }

  function toggleMobileSidebar() {
    $btnMobileSidebar.toggleClass('toggled');
    $btnMobileSidebar.parent('div')
      .parent('div')
      .parent('nav')
      .toggleClass('toggled');
  }

  function openfloatingList() {
    $(this)
      .children('ul')
      .toggleClass('open');
  }

  function openDropdown() {
    $(this)
      .next('.sidebar-dropdown-menu')
      .toggleClass('open');
  }

  function toggleActiveLink() {
    $('.nav')
      .find('.active')
      .removeClass('active');
    $(this)
      .parent()
      .addClass('active');
  }

  // set and emit notify.js

})();

// Revealing components
var _componentExposed = function() {

  // Revealing
  // ////////////////////////////////
  return {
    carouselAnimated: carouselAnimated,
    notify: {
      error: notifyError,
      success: notifySuccess,
      warning: notifyWarning,
      info: notifyInfo
    }
  };

  // Private methods
  // ////////////////////////////////

  // Function to animate slider captions 
  function doAnimations(elems) {
    // Cache the animationend event in a variable
    var animEndEv = 'webkitAnimationEnd animationend';

    elems.each(function() {
      var $this = $(this);
      var $animationType = $this.data('animation');
      $this.addClass($animationType)
        .one(animEndEv, function() {
          $this.removeClass($animationType);
        });
    });
  }

  // Public Methods
  // ////////////////////////////////

  // Variables on page load 
  function carouselAnimated(config) {
    var $firstAnimatingElems = config.carouselId.find('.item:first')
      .find("[data-animation ^= 'animated']");

    // Initialize carousel 
    config.carouselId.carousel({
      interval: config.interval
    });

    // Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);

    // Pause carousel  
    // config.carouselId.carousel('pause')

    // Other slides to be animated on carousel slide event 
    config.carouselId.on('slide.bs.carousel', function(e) {
      var $animatingElems = $(e.relatedTarget)
        .find("[data-animation ^= 'animated']");
      doAnimations($animatingElems);
    });
  }

  // Notify error
  function notifyError(title, message) {
    $.notify({
      icon: 'error',
      title: title,
      message: message
    }, {
      style: 'card',
      className: 'error'
    });
  }
  // Notify success
  function notifySuccess(title, message) {
    $.notify({
      icon: 'check_circle',
      title: title,
      message: message
    }, {
      style: 'card',
      className: 'success'
    });
  }
  // Notify earning
  function notifyWarning(title, message) {
    $.notify({
      icon: 'warning',
      title: title,
      message: message
    }, {
      style: 'card',
      className: 'warning'
    });
  }
  // Notify info
  function notifyInfo(title, message) {
    $.notify({
      icon: 'info',
      title: title,
      message: message
    }, {
      style: 'card',
      className: 'info'
    });
  }

}();