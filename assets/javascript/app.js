$(document).ready(function(){

$("#article-search-submit").click(function(event){
    event.preventDefault();

    var article = $("#article-search-input").val();
    
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
        'api-key': "77699cee16d14fbaabc4dc342a5f43a6",
        'q': article
    });
    

      $.ajax({
        url: url,
        method: 'GET'
      }).done(function(response) {
        console.log(response);
        for (var i= 0; i < response.response.docs.length; i++) {
            var a = $("<div class='row'>");
            var title = $("<h1>").text(response.response.docs[i].headline.main);
            var writer = $("<h3>" + "by ").text(response.response.docs[i].byline);
            
        console.log(i);

        $("#search-results").append("<div class='row'>" + article);

            
        }

      });

    });

});
