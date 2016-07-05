

$(document).ready(function(){

    /** Get User input--Search with it*/
    $("#search-form").submit(function(event) {
        event.preventDefault();
        $(".col-md-12").remove();
        var searchVal = $("#search-input").val();
        getResults(searchVal);
        $("#search-input").val("");
        $("#message").remove();
    });

    /** Get info from youtube */
    function getResults(searchVal){
        var params = {
            part: 'snippet',
            key: 'AIzaSyBPiVRT11xTz9DGX_89oL4zizxSZGgiVSo',
            maxResults: 6,
            q: searchVal
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        
        $.getJSON(url, params, function(data){
            showResults(data.items);  /**items is name of the array */
        });
    }

    /** Show the results */
    function showResults(results){
        $.each(results, function(index, value){
            console.log(value.snippet.title);  /** title is a key in the object  */
            //$("#title-row").append(
            $("#results-row").append(
                //video title
                "<div class='col-md-12 text-center'>" + "<h3>" + value.snippet.title + "</h3>" +
                //video
                "<div class='col-md-12'>" + 
                //"<h3>" + value.snippet.title + "</h3>" +
                "<span>" + 
                    //"<iframe width='420' height='315' src=http://www.youtube.com/embed/" + value.id.videoId + "?autoplay=0></iframe>" +
                    "<a href=" + 'https://www.youtube.com/watch?v=' + value.id.videoId + ">" +
                        "<img src=" + value.snippet.thumbnails.medium.url + ">" +
                    "</a>" +
                "</span>" +
                "</div>");
        });


        
        
    }


});