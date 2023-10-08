var input = document.querySelector("button");

const Apikey = "e9198f0db98d566995a9a2aa8eb5f0a9";
const Apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
var disp = document.querySelector(".wather");

async function checkWhether() {

    let inp = document.querySelector("input").value;
    const response = await fetch(Apiurl + `&appid=${Apikey}` + `&q=${inp}`);
    var data = await response.json();
    console.log(data);
    if (response.status == "404") {
        document.querySelector(".error").innerHTML = "Check City Name";
        document.querySelector(".error").style.display = "block";
    }
    else {
        document.querySelector(".error").style.display = "none";

        disp.style.display = "block";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        if (data.weather[0].main == 'Clouds') {
            document.querySelector(".wather-icon").src = 'images/clouds.png';

        }
        else if (data.weather[0].main == 'Clear') {
            document.querySelector(".wather-icon").src = 'images/clear.png';
        }
        else if (data.weather[0].main == 'Rain') {
            document.querySelector(".wather-icon").src = 'images/rain.png';
        }
        else if (data.weather[0].main == 'Drizzle') {
            document.querySelector(".wather-icon").src = 'images/drizzle.png';
        }
        else if (data.weather[0].main == 'Mist') {
            document.querySelector(".wather-icon").src = 'images/mist.png';
        }
    }





}
input.addEventListener('click', checkWhether);

