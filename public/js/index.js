$.getJSON( "https:bitbucket.org/nadjib-l1nda/front-end-test/raw/30ffd45f11ad684579e70123f253ea20d0e7befc/data.json", function(data) {

  $.each(data, function(key, val) {

    var h5   = "<button class='btn btn-secondary' type='button'><h5 class='days-button'>" + data[key].date + "</h5>";
    var div1 = "<div class='days'>";
    var p1   = "<p>" + 'Season: ' + data[key].season + "</p>";
    var p2   = "<p>" + 'Week number: ' + data[key].season_week + "</p>";
    var p3   = "<p class='days-button'>" + 'Celebrations: ' + "</p>";
    var div2 = "<div class='days'>";
    var p11  = "<p>" + 'Title: ' + data[key].celebrations[0].title  + "<p>";
    var p12  = "<p>" + 'Colour: ' + data[key].celebrations[0].colour + "<p>";
    var p13  = "<p>" + 'Rank: ' + data[key].celebrations[0].rank + "<p>";
    var p14  = "<p>" + 'Rank number: ' + data[key].celebrations[0].rank_num + "<p></div>";
    var p4   = "<p>" + 'Week day: ' + data[key].weekday + "</p><div></button>";

    $(".col").append(h5+div1+p1+p2+p3+div2+p11+p12+p13+p14+p4);

    var divs = $("button");
      for(var i = 0; i < divs.length; i += 7) {
        divs.slice(i, i+7).wrapAll("<div class='btn-group-vertical'>");
      }
  });
});

function main() {
  $('.days').hide();

  $('.days-button').on('click', function() {
    $(this).next().slideToggle(100);
    $(this).toggleClass('active');
	});
}

$(document).ready(main);
