 import apiObject from "../Settings.js";


export const getWeatherItems = (latitude, longitude) => { console.log("getting weather")
    return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly,alerts&appid=${apiObject.weatherKey}&units=imperial`)
        .then(
            response => response.json())
        .then(
            parsedWeatherItems => {
                console.log(parsedWeatherItems)
                parsedWeatherItems.daily.slice(0, 6) 
            }
        )
}

