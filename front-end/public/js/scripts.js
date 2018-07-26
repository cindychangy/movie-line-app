  $(document).ready(function () {
    $('#add-button').click(function () {
      $('.modal').toggleClass('show');
      $('.modal-control').toggleClass('close');
    });

  $('span.play-button, .card__poster').click(function(){
    $('.bottom').toggleClass('display');
  });
});
