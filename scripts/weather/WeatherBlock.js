export const WeatherBlock = (weatherObj) => {
    return `
    <div class ="weatherObj">
        <h5>${weatherObj.daily[0].dt}</h5>
        <p>${weatherObj.daily[0].temp.max}</p>
        <p>${weatherObj.daily[0].temp.min}</p>
        <p>${weatherObj.daily[0].feels_like}</p>
        <p>${weatherObj.daily[0].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj[0].daily.weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[1].dt}</h5>
        <p>${weatherObj.daily[1].temp.max}</p>
        <p>${weatherObj.daily[1].temp.min}</p>
        <p>${weatherObj.daily[1].feels_like}</p>
        <p>${weatherObj.daily[1].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[1].weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[2].dt}</h5>
        <p>${weatherObj.daily[2].temp.max}</p>
        <p>${weatherObj.daily[2].temp.min}</p>
        <p>${weatherObj.daily[2].feels_like}</p>
        <p>${weatherObj.daily[2].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[2].weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[3].dt}</h5>
        <p>${weatherObj.daily[3].temp.max}</p>
        <p>${weatherObj.daily[3].temp.min}</p>
        <p>${weatherObj.daily[3].feels_like}</p>
        <p>${weatherObj.daily[3].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[3].weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[4].dt}</h5>
        <p>${weatherObj.daily[4].temp.max}</p>
        <p>${weatherObj.daily[4].temp.min}</p>
        <p>${weatherObj.daily[4].feels_like}</p>
        <p>${weatherObj.daily[4].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[4].weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[5].dt}</h5>
        <p>${weatherObj.daily[5].temp.max}</p>
        <p>${weatherObj.daily[5].temp.min}</p>
        <p>${weatherObj.daily[5].feels_like}</p>
        <p>${weatherObj.daily[5].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[5].weather.icon}" alt="weather icon">

        <h5>${weatherObj.daily[6].dt}</h5>
        <p>${weatherObj.daily[6].temp.max}</p>
        <p>${weatherObj.daily[6].temp.min}</p>
        <p>${weatherObj.daily[6].feels_like}</p>
        <p>${weatherObj.daily[6].weather.description}</p>
        <img src="http://openweathermap.org/img/w/${weatherObj.daily[6].weather.icon}" alt="weather icon">
    </div>
    `
}