 import apiObject from "../Settings.js";

// let weatherItems = []  //<stores witness api from getWeather

export const getWeatherItems = (latitude, longitude) => { console.log("getting weather")
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiObject.weatherKey}`)
        .then(
            response => response.json())
        .then(
            parsedWeatherItems => {
                console.log(parsedWeatherItems)
                parsedWeatherItems.daily.slice(0, 5) //<come back to this
            }
        )
}

// export const useWeatherItems = () => {  //<uses array^ for later use in code
//     return weatherItems.slice()

// console.log("yay my array got filled", weatherItems)                                 


// export const getLongitude = () => {

// }
