//variables and selectors
const apiKey = "336f44928fcdb8bbc856498a0ed8aa67"
const apiCountryUrl = "https://flagcdn.com/w80/"

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const humiElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");

//functions
const getWeatherData = async(city) => {
    const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWeatherUrl);
    const data = await res.json();

    return data;
}

const showWeatherData = async (city) => {
    const data = await getWeatherData(city);

    cityElement.innerHTML = data.name;
    tempElement.innerHTML = parseInt(data.main.temp);
    descElement.innerHTML = data.weather[0].description;
    weatherIconElement.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src", apiCountryUrl+data.sys.country.toLowerCase()+".png");
    humiElement.innerHTML = `${data.main.humidity}%`;
    windElement.innerHTML = `${data.wind.speed}km/h`
}


//events
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const city = cityInput.value;

    showWeatherData(city);
})