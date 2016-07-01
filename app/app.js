

$(document).ready(function(){

    /** Get User input--Search with it*/
    $("#search-form").submit(function(event) {
        event.preventDefault();
        var searchVal = ($("#search-input").val());
        getResults(searchVal);
    });

    /** Get info from youtube */
    function getResults(searchVal){
        var params = {
            part: 'snippet',
            key: 'AIzaSyBPiVRT11xTz9DGX_89oL4zizxSZGgiVSo',
            q: searchVal
        };
        url = 'https://www.googleapis.com/youtube/v3/search';
        $.getJSON(url, params, function(data){
            showResults(data.Search);
        });
    }

    /** Show the results */
    function showResults(results){
        $.each(results, function(index, value){
            console.log(value.Title);
        });
        
    }


});