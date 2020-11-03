import { useParks } from "../parks/ParkProvider.js";
import { getWeatherItems } from "../weather/WeatherProvider.js"
import { WeatherBlock } from "./WeatherBlock.js";
import { useWeatherItems } from "./WeatherProvider.js"

const eventHub = document.querySelector(".container")
const weatherContainer = document.querySelector(".itinerary__weather") 


eventHub.addEventListener("parkSelected", parkSelectedEventObj => { 
  
    const selectedParkName = parkSelectedEventObj.detail.parkThatWasChosen
    const parksArray =  useParks() 

    // console.log("heard that the user selected a park, almost time for weather", selectedParkName)  ////find park object in parks array. use 'useParks'    research find vs filter
    
    const filteredParkArray = parksArray.find((parkObj) => {
        if(parkObj.fullName === selectedParkName) {
            return true
        }
            return false
    })             

    
    
    getWeatherItems(filteredParkArray.latitude, filteredParkArray.longitude)
    .then(()=> {
        const slicedUpWeatherArray = useWeatherItems()
        render(slicedUpWeatherArray)
    })
})



const render = (weatherArray) => {  
    let weatherBlockHTMLRepresentations = ""
    
     for (let slicedWeather of weatherArray) {
        weatherBlockHTMLRepresentations += WeatherBlock(slicedWeather)
     }
        weatherContainer.innerHTML = `
    <h3>7-Day Forecast</3>
    <section class="weatherList">
        ${weatherBlockHTMLRepresentations}
    </section>
    `
    }




// const filteredCriminalsArray = criminalsArray.filter(criminalObj => {
//     return criminalObj.conviction === convictionThatWasChosen.name

