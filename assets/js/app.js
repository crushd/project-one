var projectTitle = "Project One";
var songkickApiKey = "XFK6hX8iZ4LjPg6l";




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

    var queryUrl = "https://api.songkick.com/api/3.0/search/locations.json?query=" + query + "&apikey=" + songkickApiKey;
    
    $.ajax({
            
        url: queryUrl,
        method:"GET"

    }).then(function(response) {

        //console.log(response.resultsPage.results.location);

        var locationArray = response.resultsPage.results.location;

        for (i=0; i<locationArray.length;i++) {

            var locationMetro = locationArray[i].metroArea.displayName;
            var locationMetroState = locationArray[i].metroArea.state.displayName;

            console.log(locationArray[i].metroArea.id + ": " + locationMetro + ", " + locationMetroState);
        }

    })

}

function songkickCall() {

    var metroAreaId = "San+Diego+CA";
    var queryURL = "https://api.songkick.com/api/3.0/metro_areas/" + metroAreaId + "/calendar.json?apikey=" + songkickApiKey;
    

        $.ajax({
            
            url: queryURL + "app_key=" + appKey + "&q=San+Diego",
            method:"GET"

        }).then(function(response) {

            console.log(response);

        })
    
}