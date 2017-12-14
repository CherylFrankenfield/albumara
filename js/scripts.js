//Backend Logic
function Album (name, title, year, art) {
  this.name = name;
  this.title = title;
  this.year = year;
  this.art = art;
};


// Interface Logic

$('document').ready(function(){
  $('#form').submit(function(event){
    var art = $('#art').val();
    var name = $('#name').val();
    var title = $('#title').val();
    var year = $('#year').val();
    var newAlbum = new Album(name, title, year, art);

    $('.gallery').append("<div class='card'></div>");
    $('.card:last-child').append("<div class='card-img'></div>");
    $('.card:last-child').append("<div class='card-info'></div>");
    $('.card:last-child .card-img').css('background-image', 'url(' + newAlbum.art + ')');
    $('.card:last-child .card-info').append("<h2>" + newAlbum.name + "<br>" + newAlbum.title + "<br>" + newAlbum.year + "</h2>");


    event.preventDefault();
  });
});
