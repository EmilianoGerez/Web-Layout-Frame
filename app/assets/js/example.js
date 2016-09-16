(function() {
  //DOM Cache
  var $myCarousel = $('#carousel-example-generic');
  var $mySlider = $('#carousel-example');

  var $notifyError = $('#notifyError');

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
  $('#loginBtn')
    .click(toggleLoading);
  $('#datetimepicker1').datetimepicker();

  $notifyError.click(notificacion);

  // Methods
  function toggleLoading(e) {
    e.preventDefault();
    $('#loginForm, #loginSpinner')
      .toggle();
  }

  function notificacion() {
    _componentExposed.notify.error('Error', 'Error message');
    _componentExposed.notify.success('Success', 'Success message');
    _componentExposed.notify.warning('Warning', 'Warning message');
    _componentExposed.notify.info('Info', 'Info Message');
  }
})();