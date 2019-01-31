var projectTitle = "Project One";
var songkickApiKey = "XFK6hX8iZ4LjPg6l";
var thisMinDate = moment().format("YYYY-MM-DD");
var todayDate = moment().format();
var thisLocationId;
var enabled = false;
var stateArray = ['AK', 'AL', 'AR', 'AZ', 'CA', 'CO', 'CT', 'DC', 'DE', 'FL', 'GA', 'HI', 'IA', 'ID', 'IL', 'IN', 'KS', 'KY', 'LA', 'MA', 'MD', 'ME', 'MI', 'MN', 'MO', 'MS', 'MT', 'NC', 'ND', 'NE', 'NH', 'NJ', 'NM', 'NV', 'NY', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VA', 'VT', 'WA', 'WI', 'WV', 'WY'];
var cityArray = ["Aberdeen", "Abilene", "Akron", "Albany", "Albuquerque", "Alexandria", "Allentown", "Amarillo", "Anaheim", "Anchorage", "Ann Arbor", "Antioch", "Apple Valley", "Appleton", "Arlington", "Arvada", "Asheville", "Athens", "Atlanta", "Atlantic City", "Augusta", "Aurora", "Austin", "Bakersfield", "Baltimore", "Barnstable", "Baton Rouge", "Beaumont", "Bel Air", "Bellevue", "Berkeley", "Bethlehem", "Billings", "Birmingham", "Bloomington", "Boise", "Boise City", "Bonita Springs", "Boston", "Boulder", "Bradenton", "Bremerton", "Bridgeport", "Brighton", "Brownsville", "Bryan", "Buffalo", "Burbank", "Burlington", "Cambridge", "Canton", "Cape Coral", "Carrollton", "Cary", "Cathedral City", "Cedar Rapids", "Champaign", "Chandler", "Charleston", "Charlotte", "Chattanooga", "Chesapeake", "Chicago", "Chula Vista", "Cincinnati", "Clarke County", "Clarksville", "Clearwater", "Cleveland", "College Station", "Colorado Springs", "Columbia", "Columbus", "Concord", "Coral Springs", "Corona", "Corpus Christi", "Costa Mesa", "Dallas", "Daly City", "Danbury", "Davenport", "Davidson County", "Dayton", "Daytona Beach", "Deltona", "Denton", "Denver", "Des Moines", "Detroit", "Downey", "Duluth", "Durham", "El Monte", "El Paso", "Elizabeth", "Elk Grove", "Elkhart", "Erie", "Escondido", "Eugene", "Evansville", "Fairfield", "Fargo", "Fayetteville", "Fitchburg", "Flint", "Fontana", "Fort Collins", "Fort Lauderdale", "Fort Smith", "Fort Walton Beach", "Fort Wayne", "Fort Worth", "Frederick", "Fremont", "Fresno", "Fullerton", "Gainesville", "Garden Grove", "Garland", "Gastonia", "Gilbert", "Glendale", "Grand Prairie", "Grand Rapids", "Grayslake", "Green Bay", "GreenBay", "Greensboro", "Greenville", "Gulfport-Biloxi", "Hagerstown", "Hampton", "Harlingen", "Harrisburg", "Hartford", "Havre de Grace", "Hayward", "Hemet", "Henderson", "Hesperia", "Hialeah", "Hickory", "High Point", "Hollywood", "Honolulu", "Houma", "Houston", "Howell", "Huntington", "Huntington Beach", "Huntsville", "Independence", "Indianapolis", "Inglewood", "Irvine", "Irving", "Jackson", "Jacksonville", "Jefferson", "Jersey City", "Johnson City", "Joliet", "Kailua", "Kalamazoo", "Kaneohe", "Kansas City", "Kennewick", "Kenosha", "Killeen", "Kissimmee", "Knoxville", "Lacey", "Lafayette", "Lake Charles", "Lakeland", "Lakewood", "Lancaster", "Lansing", "Laredo", "Las Cruces", "Las Vegas", "Layton", "Leominster", "Lewisville", "Lexington", "Lincoln", "Little Rock", "Long Beach", "Lorain", "Los Angeles", "Louisville", "Lowell", "Lubbock", "Macon", "Madison", "Manchester", "Marina", "Marysville", "McAllen", "McHenry", "Medford", "Melbourne", "Memphis", "Merced", "Mesa", "Mesquite", "Miami", "Milwaukee", "Minneapolis", "Miramar", "Mission Viejo", "Mobile", "Modesto", "Monroe", "Monterey", "Montgomery", "Moreno Valley", "Murfreesboro", "Murrieta", "Muskegon", "Myrtle Beach", "Naperville", "Naples", "Nashua", "Nashville", "New Bedford", "New Haven", "New London", "New Orleans", "New York", "New York City", "Newark", "Newburgh", "Newport News", "Norfolk", "Normal", "Norman", "North Charleston", "North Las Vegas", "North Port", "Norwalk", "Norwich", "Oakland", "Ocala", "Oceanside", "Odessa", "Ogden", "Oklahoma City", "Olathe", "Olympia", "Omaha", "Ontario", "Orange", "Orem", "Orlando", "Overland Park", "Oxnard", "Palm Bay", "Palm Springs", "Palmdale", "Panama City", "Pasadena", "Paterson", "Pembroke Pines", "Pensacola", "Peoria", "Philadelphia", "Phoenix", "Pittsburgh", "Plano", "Pomona", "Pompano Beach", "Port Arthur", "Port Orange", "Port Saint Lucie", "Port St. Lucie", "Portland", "Portsmouth", "Poughkeepsie", "Providence", "Provo", "Pueblo", "Punta Gorda", "Racine", "Raleigh", "Rancho Cucamonga", "Reading", "Redding", "Reno", "Richland", "Richmond", "Richmond County", "Riverside", "Roanoke", "Rochester", "Rockford", "Roseville", "Round Lake Beach", "Sacramento", "Saginaw", "Saint Louis", "Saint Paul", "Saint Petersburg", "Salem", "Salinas", "Salt Lake City", "San Antonio", "San Bernardino", "San Buenaventura", "San Diego", "San Francisco", "San Jose", "Santa Ana", "Santa Barbara", "Santa Clara", "Santa Clarita", "Santa Cruz", "Santa Maria", "Santa Rosa", "Sarasota", "Savannah", "Scottsdale", "Scranton", "Seaside", "Seattle", "Sebastian", "Shreveport", "Simi Valley", "Sioux City", "Sioux Falls", "South Bend", "South Lyon", "Spartanburg", "Spokane", "Springdale", "Springfield", "St. Louis", "St. Paul", "St. Petersburg", "Stamford", "Sterling Heights", "Stockton", "Sunnyvale", "Syracuse", "Tacoma", "Tallahassee", "Tampa", "Temecula", "Tempe", "Thornton", "Thousand Oaks", "Toledo", "Topeka", "Torrance", "Trenton", "Tucson", "Tulsa", "Tuscaloosa", "Tyler", "Utica", "Vallejo", "Vancouver", "Vero Beach", "Victorville", "Virginia Beach", "Visalia", "Waco", "Warren", "Washington", "Waterbury", "Waterloo", "West Covina", "West Valley City", "Westminster", "Wichita", "Wilmington", "Winston", "Winter Haven", "Worcester", "Yakima", "Yonkers", "York", "Youngstown"];
//console.log(enabled);
var cityWeather = "";

function getLocationId(query) {
    var queryUrl = "https://api.songkick.com/api/3.0/search/locations.json?query=" + query + "&apikey=" + songkickApiKey;
    //console.log("queryURL",queryUrl)
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        //console.log(response.resultsPage.results.location);
        var locationArray = response.resultsPage.results.location;
        $("#full-event-list").empty();
        for (i = 0; i < locationArray.length; i++) {
            if (locationArray[i].metroArea.country.displayName === "US") {
                var locationMetro = locationArray[i].metroArea.displayName;
                var locationMetroState = locationArray[i].metroArea.state.displayName;
                //console.log(locationArray[i].metroArea.id + ": " + locationMetro + ", " + locationMetroState);
                getEventsByLocationId(locationArray[i].metroArea.id)
            }
        }
    }).catch(
        function (error) {
            //console.log(error)
        }
    )
}

function getEventsByLocationId(thisLocationId) {
    var queryUrl = "https://api.songkick.com/api/3.0/metro_areas/" + thisLocationId + "&min_date=" + thisMinDate + "&max_date=" + moment(thisMinDate).add(60, 'days').format("YYYY-MM-DD") + "/calendar.json?apikey=" + songkickApiKey;
    //console.log(queryUrl);
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        //console.log(response.resultsPage.results.event);
        var eventArray = response.resultsPage.results.event;
        // container = $('#documents');
        for (e = 0; e < eventArray.length; e++) {
            //console.log(eventArray[e].displayName);
            var eventStartDate = eventArray[e].start.date;
            var artistURI = eventArray[e].performance[0].artist.uri;
            var eventURI = eventArray[e].uri;
            var venueURI = eventArray[e].venue.uri;
            var metroURI = eventArray[e].venue.metroArea.uri;
            //console.log(eventArray[e].uri);
            //console.log(moment(eventStartDate).diff(todayDate,"days"));
            if (moment(eventStartDate).diff(todayDate, "days") >= 0) {
                $("#full-event-list").append("<tr class='well'><td class='event-date'>" + moment(eventStartDate).format("MMM Do YYYY") + "</td><td>" + "<a class='event-name' href='" + artistURI + "' target='_blank'>" + eventArray[e].performance[0].displayName + "</a>" + "</td><td>" + "<a class='event-venue' href='" + venueURI + "' target='_blank'>" + eventArray[e].venue.displayName + "</a></td><td>" + "<a class='event-metro' href='" + metroURI + "' target='_blank'>" + eventArray[e].location.city + "</a></td><td><a href='" + eventURI + "' class='btn btn-primary event-details' target='_blank'><i class='fas fa-info-circle'></i> Details</a></td></tr>");
            }
        }
    }).catch(
        function (error) {
            //console.log(error)
        }
    )

}
//checks if "city, state" is properly inputted by using regular expressions
function validation() {
    var str = $("#search-field").val().trim();
    var re = /^[A-Za-z |A-Za-z ,. ]+,[ ]?[A-Za-z]{2}$/; //makes sure only letters are used, and in city/state(abbreviation) format
    var state = str.substr(str.length - 2); // => "state initial"
    var upperState = state.toUpperCase();
    var city = str.substr(0, str.indexOf(','));
    var upperCity = city.toUpperCase();

    toUpper = function (x) {
        return x.toUpperCase();
    };
    var stateArrayUpper = stateArray.map(toUpper);


    var cityArrayUpper = cityArray.map(toUpper);

    //console.log(str + ": " + re.test(str));
    //if format is correct, state initials is valid, and city is valid
    if (re.test(str) & stateArrayUpper.indexOf(upperState) !== -1 & cityArrayUpper.indexOf(upperCity) !== -1) {
        //getLocationId(searchValue); - keeping this incase it neeeds to be used
        //input is valid
        enabled = true;
        //console.log(enabled);
        $("#error-box").empty();
    }
    else {
        var errorMessage = '<span class="badge badge-danger">Must enter valid major city/state or format</span>';
        //console.log("must enter valid major city/state");
        $("#error-box").empty();
        $("#error-box").append(errorMessage);
        enabled = false;
        //console.log(enabled);
    }
}

function getArtistId(artistName) {
    var queryUrl = "https://api.songkick.com/api/3.0/search/artists.json?query=" + artistName + "&apikey=" + songkickApiKey;
    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function (response) {
        //console.log(response.resultsPage.results.artist);
        var artistArray = response.resultsPage.results.artist;
        for (a = 0; a < artistArray.length; a++) {
            //console.log(artistArray[a].id + ": " + artistArray[a].displayName);
        }
    }).catch(
        function (error) {
            //console.log(error)
        }
    )
}

$('document').ready(function () {

    $('#weatherBox').hide();

    $('#search-button').click(function () {
        
        
        //after clicking search...
        //capture search value to pass into getLocationId function
        var searchValue = $("#search-field").val().trim();
        ////console.log(searchValue);
        //run validation
        validation();
        getLocationId(searchValue);
        cityWeather = searchValue.substr(0, searchValue.indexOf(','));
    })


    $('#search-field').keypress(function (e) {
        if (e.which == 13) {//Enter key pressed
            e.preventDefault();
            //run validation
            validation();
            if (enabled === true) {
                $('#search-button').click();//Trigger search button click event
                e.preventDefault();
                enabled = "false";
                runWeatherAPI();
                return false;
            } else {
                //console.log("TODO: show 'must enter valid city/state or format");
                e.preventDefault();
                return false;
            }
        }
    });


    function runWeatherAPI() {
        if (navigator.geolocation) {
            //commented out code got the current position, new code gets input position
            //navigator.geolocation.getCurrentPosition(function (position) {
                //var latitude = position.coords.latitude;
                //var longitude = position.coords.longitude;
                //console.log(cityWeather);
                $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+cityWeather+ "&appid=36afb39cb4f0ee933b92b0443aa4a8af",
                //$.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" 
                //+ latitude + "&lon=" + longitude + "&appid=36afb39cb4f0ee933b92b0443aa4a8af", 
                
                    function (a) {
                    //to show the current date and time
                    var current = $.now();
                    var maxDate = new Date(current);
                    var isoDate = maxDate.toString();

                    $('#weatherBox').show();

                    $('#date').html(moment(isoDate).format("MMMM D, YYYY"));
                    //to show current condition
                    var cel = Math.round(a.main.temp - 273);
                    $('#location').html(a.name + ", " + a.sys.country);
                    $('#weather').html('<img src =' + "https://openweathermap.org/img/w/" + a.weather[0].icon + ".png" + '>' + a.weather[0].description);
                    $('#temp').html("Temp: " + Math.round(cel * 1.8 + 32) + " F / " + cel + " C");
                    $('#mic').html("Humidity " + a.main.humidity + "%");

                    //to change Celsius to Fahrenheit
                    $('#fh').click(function () {
                        $('#cl').removeClass('cf');
                        $(this).addClass('cf');
                        $('#temp').html(Math.round(cel * 1.8 + 32));
                    })
                    $('#cl').click(function () {
                        $('#fh').removeClass('cf');
                        $(this).addClass('cf');
                        $('#temp').html(cel);
                    })

                });
            //});

        }
    }
})