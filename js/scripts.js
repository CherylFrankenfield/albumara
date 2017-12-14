$('document').ready(function(){
  $('#form').submit(function(event){
    var art = $('#art').val();

    $('.gallery').append("<div class='card'></div>");
    $('.card').css('background-image', 'url(' + art + ')');


    event.preventDefault();
  });
});
