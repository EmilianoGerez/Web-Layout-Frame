(function() {
  // DOM Cache
  var toggleButton = $('.toggle-button');
  var dbWrapper = $('#db-wrapper');

  // Events
  toggleButton.click(toggleSidebar);

  // Methods
  function toggleSidebar() {
    dbWrapper.toggleClass('toggled');
  }

})();