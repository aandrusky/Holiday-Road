 import apiObject from "../Settings.js";

let weatherItems = []  //<stores witness api from getWeather

export const getWeatherItems = () => {
    return fetch(`api.openweathermap.org/data/2.5/forecast?zip=${ZIPCODE},US&appid=${apiObject.weatherKey}`)
        .then(
            response => response.json())
        .then(
            parsedWeatherItems => {
                console.log(parsedWeatherItems)
                weatherItems = parsedWeatherItems.data
            }
        )
}

export const useWeatherItems = () => {  //<uses array^ for later use in code
    return weatherItems.slice()
}
console.log("yay my array got filled", weatherItems)



