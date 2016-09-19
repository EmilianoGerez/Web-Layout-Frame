(function() {
  // ////////////////////////////////
  // Configs
  // ////////////////////////////////
  // Notify default override
  $.notify.defaults({
    autoHide: false,
    position: 'right bottom',
    showDuration: 0
  });
  // Notification template
  $.notify.addStyle('card', {
    html: '<div>' +
      "<div class='card notification-card'>" +
      "<i class='material-icons notification-close'>close</i>" +
      "<div class='card-image'>" +
      "<i class='material-icons' data-notify-text='icon'></i>" +
      '</div>' +
      "<div class='card-block'>" +
      "<h6 class='card-title' data-notify-text='title'>Cancel</h6>" +
      "<p class='card-text' data-notify-text='message'></p>" +
      '</div>' +
      '</div>' +
      '</div>'
  });



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