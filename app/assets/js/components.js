(function() {
  // DOM Cache
  var transparentNavbar = $('#transparent-navbar');
  //var mobileSidebar = $('#mobile-sidebar');
  var floatingBtn = $('.floating-btn, .floating-btn-hover');
  var btnToggleSidebar = $('#btn-toggle-sidebar');
  var btnMobileSidebar = $('#btn-mobile-sidebar');

  // Events
  $(window).scroll(navTransparent);
  btnToggleSidebar.click(toggleSidebar);
  btnMobileSidebar.click(toggleMobileSidebar);
  floatingBtn.click(openFloatingBtn);
  $('a.sidebar-dropdown-toggle').click(openDropdown);


  $(".nav a").on("click", function() {
    $(".nav").find(".active").removeClass("active");
    $(this).parent().addClass("active");
  });

  // Methods
  function navTransparent() {
    if ($(window).scrollTop() < 400) /*height in pixels when the navbar becomes non opaque*/ {
      transparentNavbar.addClass('navbar-transparent');
    } else {
      transparentNavbar.removeClass('navbar-transparent');
    }
  }

  function toggleSidebar() {
    $('#main-wrapper').toggleClass('toggled');
  }

  function toggleMobileSidebar() {
    btnMobileSidebar.toggleClass('toggled');
    btnMobileSidebar.parent("div").next(".navbar-sidebar").toggleClass('toggled');
  }

  function openFloatingBtn() {
    $(this).children("ul").toggleClass('open');
  }

  function openDropdown() {
    $(this).next('.sidebar-dropdown-menu').toggleClass('open');
  }

})();