
$(document).ready(function () {
  var searchQuery, api, data;

  $("#search-btn").click(function () {

    searchQuery = $("#search-query").val();
    api = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchQuery + "&format=json&" + "&origin=*";

    $.getJSON(api, function(data) {

      var queryTitle = data[1];
      var queryInfo = data[2];
      var queryLink = data[3];

      for(var i = 0; i < data[1].length; i++) {
        $(".search-result").append("<li> <a href = " + queryLink[i] + ">" + queryTitle[i] + "</a> <p>" + queryInfo[i] + "</p> </li>");

      }

      if (data[1].length === 0 && data[2].length === 0 && data[3].length === 0) {
        $(".search-result").append("<li class='no-result'><p>Oops, no result!</p></li>");
      }
    })

    $(".title").css({"margin-top":"20px","margin-bottom":"20px"});

  });

  $("#search-query").keypress(function (e){
      if (e.which === 13) {
          e.preventDefault();
          $("#search-btn").click();
      };
    })
});

function randomArticle() {
  window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
};
