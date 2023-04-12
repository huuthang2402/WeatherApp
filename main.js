//call api
const apiKey = "863242cfb2b1d357e6093d9a4df19a4b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn= document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + '°C';
    document.querySelector(".humidity").innerHTML = data.main.humidity + '%';
    document.querySelector(".wind").innerHTML = data.wind.speed + 'km/h';

    const now = new Date();
    const date = document.querySelector('.weather .date');
    date.innerText = dateBuilder(now);

    //change icon weather
    if(data.weather[0].main == "Clound")
    {
        weatherIcon.src = "images/clouds.png"
        
    }
    else if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "images/clear.png"
    }
    else if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "images/rain.png"
    }
    else if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "images/drizzle.png"
    }
    else if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "images/mist.png"
    }
    else if(data.weather[0].main == "Snow")
    {
        weatherIcon.src = "images/snow.png"
    }
    document.querySelector(" .weather").style.display ="block";
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})
