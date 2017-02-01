$(document).ready(function(){
    var getName = function(){
      $.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=301a776cee0e69fad09e3c088a208a9e&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page=1&vote_average.gte=6&with_genres=12", function(json) {
        console.log(json);
        var num = json.total_pages;
        var page = Math.floor((Math.random() * num) + 1);
        var rand = Math.floor((Math.random() * 20) + 1);
        $.getJSON("https://api.themoviedb.org/3/discover/movie?api_key=301a776cee0e69fad09e3c088a208a9e&language=en-US&sort_by=popularity.desc&include_adult=true&include_video=true&page="+page+"&vote_average.gte=6&with_genres=12", function(json) {
          console.log(json);
          $('#name').html(json.results[rand].title);
      });
    });
  }

    $('#search').click(getName);
});