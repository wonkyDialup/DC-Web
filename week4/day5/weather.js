const apikey = "43b8bdb66497ded16b243f1c51e00090";
const mainContainer = document.querySelector(".main");
const searchButton = document.querySelector(".searchButton");



async function searchWeather() {
    mainContainer.innerHTML = "";
    const search = document.querySelector('.searchCity').value;
    const grabWeather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=imperial&appid=43b8bdb66497ded16b243f1c51e00090`);
    const jsonWeather = await grabWeather.json();
    const weatherDiv = document.createElement("div");
    weatherDiv.className = "weather";
    const temperature =document.createElement("h2");
    temperature.innerHTML = `It is currently ${jsonWeather.main.temp.toFixed(0)} °F in ${search}`;
    const feelsLike = document.createElement("h2");
    feelsLike.innerHTML = `Feels like: ${jsonWeather.main.feels_like.toFixed(0)} °F`;
    console.table(jsonWeather.main);
    mainContainer.append(weatherDiv)
    weatherDiv.append(temperature, feelsLike);

                                                                                                            
}
searchButton.addEventListener("click", () => searchWeather());

