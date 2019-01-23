var projectTitle = "Project One";


var queryURL = "http://api.eventful.com/json/events/search?";
var appKey = "ZsBNvKB3vPZxBcL9";

$.ajax({
    
    url: queryURL + "app_key=" + appKey + "&q=San+Diego",
    method:"GET"

}).then(function(response) {

    console.log(response);

})