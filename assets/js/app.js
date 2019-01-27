var projectTitle = "Project One";
var songkickApiKey = "XFK6hX8iZ4LjPg6l";
var thisMinDate = moment().format("YYYY-MM-DD");
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

        $("#full-event-list").empty();

        for (i=0;i<locationArray.length;i++) {
            if (locationArray[i].metroArea.country.displayName === "US") {

                var locationMetro = locationArray[i].metroArea.displayName;
                var locationMetroState = locationArray[i].metroArea.state.displayName;
                console.log(locationArray[i].metroArea.id + ": " + locationMetro + ", " + locationMetroState);
                
                //$("#full-event-list").append("<tr class='well'><td class='location-name'><a href='#' id='location-link' onclick='"+ getEventsByLocationId(locationArray[i].metroArea.id) + "'>" + locationMetro + ", " +  locationMetroState + "</a></td></tr>");
                getEventsByLocationId(locationArray[i].metroArea.id)

            }

        }

    }).catch(
        function(error){
            console.log(error)
        }
    )

}

function getEventsByLocationId(thisLocationId) {

    
    var queryUrl = "https://api.songkick.com/api/3.0/metro_areas/"+ thisLocationId + "&min_date=" + thisMinDate + "&max_date=" + moment(thisMinDate).add(60, 'days').format("YYYY-MM-DD") + "/calendar.json?apikey=" + songkickApiKey;
    console.log(queryUrl);

    $.ajax({
            
        url: queryUrl,
        method:"GET"

    }).then(function(response) {

        //console.log(response.resultsPage.results.event);

        var eventArray = response.resultsPage.results.event;

        for (e=0; e< eventArray.length; e++) {
            console.log(eventArray[e].displayName);

            $("#full-event-list").append("<tr class='well'><td>"+ moment(eventArray[e].start.date).format("MMM Do YYYY")  +"</td><td class='event-name'>" + eventArray[e].performance[0].displayName + "</td><td>" + eventArray[e].venue.displayName +"</td><td>"+ eventArray[e].location.city +"</td></tr>");

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

/* $("#search-button").on("click", function() {

    var searchValue = $("#search-field").val().trim();
    console.log(searchValue);

    getLocationId(searchValue);

}) */



$('document').ready(function(){
    $('#search-button').click(function(){
        var searchValue = $("#search-field").val().trim();
        getLocationId(searchValue);        
    })
    $('#search-field').keypress(function(e){
        if(e.which == 13){//Enter key pressed
            $('#search-button').click();//Trigger search button click event
            e.preventDefault;
            return false;
        }
    });

});