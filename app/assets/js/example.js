(function() {
  //DOM Cache
  var $myCarousel = $('#carousel-example-generic');
  var $mySlider = $('#carousel-example');

  //initialize
  _componentExposed.carouselAnimated({
    carouselId: $myCarousel,
    interval: 8000
  });

  _componentExposed.carouselAnimated({
    carouselId: $mySlider,
    interval: 8000
  });

  // Events
  $('#loginBtn').click(toggleLoading);
  $('#datetimepicker1').datetimepicker();

  // Methods
  function toggleLoading(e) {
    e.preventDefault()
    $('#loginForm, #loginSpinner').toggle();
  }

})();