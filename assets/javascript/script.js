
document.getElementById("search").onclick = function() {myFunction()};

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

        for (var i=0; i< response.daily[i].length; i++) {
            response
        }
    })

}






        // current weather promise

        // var url2 = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=hourly,daily&appid=${apikey}`
        // fetch(url2)
        //     .then(function (response) {
        //         if (!response.ok) {
        //             throw response.json();                  
        //         }
        //         return response.json();
        //     }).then(function (response) {
        //         console.log(response)
            
        //         for(var i =0; i< response.daily[i].length; i++){
        //             response
        //         }

        //         //forecast data
        //     })
    
            


