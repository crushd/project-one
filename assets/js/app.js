var projectTitle = "Project One";
var songkickApiKey = "XFK6hX8iZ4LjPg6l";
var thisLocationId;



function eventfulCall() {

    var queryURL = "http://api.eventful.com/json/events/search?";
    var appKey = "ZsBNvKB3vPZxBcL9";

        $.ajax({
            
            url: queryURL + "app_key=" + appKey + "&q=San+Diego",
            method:"GET"

        }).then(function(response) {

            console.log(response);

        })
    
}

function getLocationId(query) {
    //var getRidofSpacesInQuery = query.split(" ").join("") 
    var queryUrl = "https://api.songkick.com/api/3.0/search/locations.json?query=" + query + "&apikey=" + songkickApiKey;
    console.log("queryURL",queryUrl)
    $.ajax({
            
        url: queryUrl,
        method:"GET"

    }).then(function(response) {

        //console.log(response.resultsPage.results.location);

        var locationArray = response.resultsPage.results.location;

        for (i=0;i<locationArray.length;i++) {
            if (locationArray[i].metroArea.country.displayName === "US") {

                var locationMetro = locationArray[i].metroArea.displayName;
                var locationMetroState = locationArray[i].metroArea.state.displayName;
                console.log(locationArray[i].metroArea.id + ": " + locationMetro + ", " + locationMetroState);
                

            }

        }

    }).catch(
        function(error){
            console.log(error)
        }
    )

}

function getEventsByLocationId(thisLocationId) {

    
    var queryUrl = "https://api.songkick.com/api/3.0/metro_areas/"+ thisLocationId + "/calendar.json?apikey=" + songkickApiKey;
    
    $.ajax({
            
        url: queryUrl,
        method:"GET"

    }).then(function(response) {

        //console.log(response.resultsPage.results.event);

        var eventArray = response.resultsPage.results.event;

        for (e=0; e< eventArray.length; e++) {
            console.log(eventArray[e].displayName);
        }

    }).catch(
        function(error){
            console.log(error)
        }
    )

}

function getArtistId(artistName) {

    
    var queryUrl = "https://api.songkick.com/api/3.0/search/artists.json?query="+ artistName + "&apikey=" + songkickApiKey;
    
    $.ajax({
            
        url: queryUrl,
        method:"GET"

    }).then(function(response) {

        //console.log(response.resultsPage.results.artist);

        var artistArray = response.resultsPage.results.artist;

        for (a=0; a < artistArray.length; a++) {
            console.log(artistArray[a].id + ": " + artistArray[a].displayName);
        }

    }).catch(
        function(error){
            console.log(error)
        }
    )

}