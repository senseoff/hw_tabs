$(document).ready(function() {
  
  $('.card__body').not(':first').hide();

  $(document).on("click", ".header__button", function(event) {
    var idx = event.target.id;
    $('.card__body').hide();
    $("#" + idx + "l").fadeIn();
  });

});
