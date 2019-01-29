var projectTitle = "Project One";
var songkickApiKey = "XFK6hX8iZ4LjPg6l";
var thisMinDate = moment().format("YYYY-MM-DD");
var todayDate = moment().format();
var thisLocationId;

function getLocationId(query) {

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

        // container = $('#documents');

        for (e=0; e< eventArray.length; e++) {
            console.log(eventArray[e].displayName);
            var eventStartDate = eventArray[e].start.date;
            var artistURI = eventArray[e].performance[0].artist.uri;
            var eventURI = eventArray[e].uri;
            var venueURI = eventArray[e].venue.uri;
            var metroURI = eventArray[e].venue.metroArea.uri;
            //console.log(eventArray[e].uri);

            //console.log(moment(eventStartDate).diff(todayDate,"days"));

            if (moment(eventStartDate).diff(todayDate,"days") >= 0) {
                $("#full-event-list").append("<tr class='well'><td class='event-date'>"+ moment(eventStartDate).format("MMM Do YYYY")  +"</td><td>" + "<a class='event-name' href='"+artistURI+"' target='_blank'>" + eventArray[e].performance[0].displayName + "</a>" + "</td><td>" + "<a class='event-venue' href='"+venueURI+"' target='_blank'>" + eventArray[e].venue.displayName +"</a></td><td>" + "<a class='event-metro' href='"+metroURI+"' target='_blank'>" + eventArray[e].location.city +"</a></td><td><a href='"+eventURI+"' class='btn btn-primary event-details' target='_blank'>Details</a></td></tr>");
            }
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