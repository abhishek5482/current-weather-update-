// Object storing functions and variables for API
let weather = {
    "apiKey": "35d0104a0b98ecdd30d19b5e703fe921",
    fetchWeather: function (city) {
       fetch("https://api.openweathermap.org/data/2.5/weather?q=" +
       city +
       "&units=metric&appid=" +
       this.apiKey)
       
       .then((response) => response.json())
       .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;

        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".weather-description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        document.querySelector(".weather").classList.remove("loading");
    },
    weatherSearch: function() {
        this.fetchWeather(document.querySelector(".searchbar").value);
    }
}

const searchBtn = document.querySelector(".search button");
searchBtn.addEventListener("click", function() {
    weather.weatherSearch();
})

document.querySelector(".searchbar").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        weather.weatherSearch();
    }
})

weather.fetchWeather("Toronto");
