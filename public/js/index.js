$.getJSON("https:bitbucket.org/nadjib-l1nda/front-end-test/raw/30ffd45f11ad684579e70123f253ea20d0e7befc/data.json", function(data) {

  $.each(data, function(key, val) {

    var h5   = "<button class='btn btn-outline-primary' type='button'><h5 class='days-button'>" + val.date + "</h5>";
    var div1 = "<div class='days'>";
    var p1   = "<p>" + 'Season: ' + val.season + "</p>";
    var p2   = "<p>" + 'Week number: ' + val.season_week + "</p>";
    var p3   = "<p class='days-button'>" + 'Celebrations: ' + '(click to expand)' + "</p>";
    var div2 = "<div class='days' id='celebrations'>";
    var p11  = "<p>" + 'Title: ' + val.celebrations[0].title  + "<p>";
    var p12  = "<p>" + 'Colour: ' + val.celebrations[0].colour + "<p>";
    var p13  = "<p>" + 'Rank: ' + val.celebrations[0].rank + "<p>";
    var p14  = "<p>" + 'Rank number: ' + val.celebrations[0].rank_num + "<p></div>";
    var p4   = "<p>" + 'Week day: ' + val.weekday + "</p><div></button></div>";

    var group = h5+div1+p1+p2+p3+div2+p11+p12+p13+p14+p4;

    $("#dates").append(group);

  });
    var divs = $("button");
      for(var i = 0; i < divs.length; i += 7) {
        divs.slice(i, i+7).wrapAll("<div class='btn-group'></div>");
      }
});

$(document).ready(function main() {
  $('.days').hide();

  $('.days-button').on('click', function() {
    $(this).next().slideToggle(100);
    $(this).toggleClass('active');
	});
});


$(document).ready(function(){
  $("#filter").keyup(function(){
    var filter = $(this).val(), count = 0;

    $("button").each(function(){
      if ($(this).text().search(new RegExp(filter, "i")) < 0) {
          $(this).fadeOut();
      } else {
          $(this).show();
          count++;
      }
    });

    var numberItems = count;
    $("#filter-count").text(count + ' items found');
  });
});
