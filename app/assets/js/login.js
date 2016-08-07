(function() {

  // Events
  $('#loginBtn').click(toggleLoading);
  $('#datetimepicker1').datetimepicker();
  
    // Methods
  function toggleLoading(e) {
    e.preventDefault()
    $('#loginForm, #loginSpinner').toggle();
  }
})()