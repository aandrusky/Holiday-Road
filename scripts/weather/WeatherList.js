//THIS ENTIRE PAGE DOES NOTHING APPARENTLY
import "../ParkSelect.js"
import { getWeatherItems, useWeatherItems } from "./WeatherProvider.js"
import { WeatherBlock } from "./WeatherBlock.js";

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".itinerary__weather") //this is referenced below for rendered DOM placement


eventHub.addEventListener("parkSelected", parkSelectedEventObj => { //(step 2) listens for park clicked from button module addeventlistener
  
    const selectedParkName = parkSelectedEventObj.detail.parkThatWasChosen

    console.log("heard that the user selected a park, almost time for weather")


   render(selectedParkName)
})



const render = (weatherArray) => {  
    let weatherBlockHTMLRepresentations = ""
    // for (const weather of weatherArray) {

    //     weatherBlockHTMLRepresentations += WeatherBlock(weather)  //<do I even need this loop? since I have no array

        weatherContainer.innerHTML = `
    <h3>5-Day Forecast</3>
    <section class="weatherList">
        ${weatherBlockHTMLRepresentations}
    </section>
    `
    }
}



// const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
//     return criminalObj.conviction === convictionThatWasChosen.name

