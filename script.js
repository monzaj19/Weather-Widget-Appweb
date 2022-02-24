function go(){
    const loc = document.querySelector("#location"); 
    const city = document.querySelector("#city");
    const temperature = document.querySelector("#temp");
    const main = document.querySelector("#main");
    const desc = document.querySelector("#desc");
    const img = document.querySelector("#image");

    const date = new Date();
    var day = date.getDate();
    var month = date.getMonth() + 1;
    if(month < 10){
        month = "0" + month;
    }
    var year = date.getFullYear();
    
    document.getElementById("date").innerHTML = day + "." + month + "." + year;

    var hour = date.getHours();
    var minutes = date.getMinutes();
    
    document.getElementById("time").innerHTML = hour + ":" + minutes;

    var request = new XMLHttpRequest();
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q="+loc.value+"&appid=1589fe0bd4d13f8572820f339a597f26", true);

    request.onload = function(){ 
        console.log(this.responseText);
        if(request.status == 404){
            alert("Błędna miejscowość!");
        }else{
            var data = JSON.parse(request.response);
            city.innerHTML  = data.name;
            temperature.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
            main.innerHTML = data.weather[0].main;
            desc.innerHTML = data.weather[0].description;
            img.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        }
    };
    
    request.send();
  

    
  };