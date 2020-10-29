export const WeatherBlock = (weatherObj) => {
    return `
    <div class ="weatherObj">
        <h5>${weatherObj.location.name}</h5>
        <p>${weatherObj.location.location.latitude}</p>
        <p>${weatherObj.location.location.longitude }</p>
        <p>${weatherObj.forecast.temperature.Fahrenheit }</p>
        <p>${weatherObj.forecast.temperature.min }</p>
        <p>${weatherObj.forecast.temperature.max }</p>
    </div>
    `
}