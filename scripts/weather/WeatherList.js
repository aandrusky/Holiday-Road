
import "./ParkSelect"
import { getWeatherItems, useWeatherItems } from "./WeatherProvider.js"
import { WeatherBlock } from "./WeatherBlock.js";

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".itinerary__weather") //this is references below for rendered DOM placement


eventHub.addEventListener("parkSelected", () => {
 //(step 2) listens for park clicked from button module addeventlistener
    console.log("heard that the user selected a park")

    WeatherList() //hoisted from  definition below.
})


const WeatherList = () => {

    getWeatherItems()  //<-- this is what we used to get the data from the api and make it usable. This function parsed and primed our array.
        .then(() => {
            const weatherArray = useWeatherItems()
            console.log(weatherArray)
            render(weatherArray)
        })
}

const render = (weatherArray) => {   //render loops through array of weather, pulling each one from weatherBlock. loads them into weatherBlockHTMLRepresentations and puts them in dom. this both creates the html and pastes it into dom
    let witnessStatementHTMLRepresentations = ""
    for (const weather of weatherArray) {

        weatherBlockHTMLRepresentations += WeatherBlock(weather)

        weatherContainer.innerHTML = `
    <h3>5-Day Forecast</3>
    <section class="weatherList">
        ${weatherBlockHTMLRepresentations}
    </section>
    `
    }
}
