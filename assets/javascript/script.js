
document.getElementById("search").onclick = function() {myFunction()};
var saveCity = localStorage.getItem("city");
console.log(saveCity);
document.getElementById("card-input").placeholder = saveCity;


var curday = function(sp){
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //As January is 0.
    var yyyy = today.getFullYear();
    
    if(dd<10) dd='0'+dd;
    if(mm<10) mm='0'+mm;
    return (mm+sp+dd+sp+yyyy);
    };
    console.log(curday('/'));

function myFunction() {
    var cityName = document.getElementById("card-input").value
    var apikey = "ebc3f1f4905a6bd26e6d5d0ef96dcd5d"
    var url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}`


fetch(url)
    .then(function(response) {
        if (!response.ok) {
            throw response.json();
        }
        return response.json()
    }).then(function (response) {
        console.log(response)

     localStorage.setItem("city",document.getElementById("card-input").value);

    var cityEl = response.name;
    $("#city-header").html(cityEl + "  " + curday("/")); 
    $("#day1").html(curday("/"))
    

    var currentTempEl = response.main.temp;
    $("#list-group-city1").html("Current Temperature:" + " " + currentTempEl + "&deg;k");
    $("#card1-temp").html("Temperature:" + " " + currentTempEl + "k");

    var humidityEl = response.main.humidity;
    $("#list-group-city2").html("Current Humidity:" + " " + humidityEl + "%");
    $("#card1-humidity").html("Humidity:" + " " + humidityEl + "%");


    var windEl = response.wind.speed;
    $("#list-group-city3").html("Current Wind Speed:" + " " + windEl + "MPH");

    var iconcode = response.weather[0].icon;
    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconurl);
    $('#card-img').attr('src', iconurl);

    
    

    // var uvEl = response.;
    // $("#list-group-city3").html("Current UV index:" + uvEl)

    ;

    
    })

}

    
            


