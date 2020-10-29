import { useParks, getParks } from "./ParkProvider.js"
import { Park } from "./Park.js"

const eventHub = document.querySelector(".container")

const parksContainer = document.querySelector(".itinerary__parks")

export const ParkList = () => {
    
    getParks()
        .then( () => {
        const parkArray = useParks()
            
        render(parkArray)
    })
    
}

const render = (parkArray) => {
    let parksHTMLRepresentation = ""
    for (const park of parkArray) {
    
    parksHTMLRepresentation += Park(park)
    }

    parksContainer.innerHTML = `
            <h3>National Park</h3>
            <section class="parkList">
            ${parksHTMLRepresentation}
            </section>
            `
}
// Listen for the custom event you dispatched in ParkSelect
eventHub.addEventListener("parkSelected", parkSelectedEventObj => {
    console.log("park selected event heard")
        /*
            Filter the parks application state down to the selected park, and render to dom
        */
        const selectedParkName = parkSelectedEventObj.detail.parkThatWasChosen

        const parksArray =  useParks() 

        const filteredParkArray = parksArray.filter((parkObj) => {
                if(parkObj.fullName === selectedParkName) {
                    return true
                }
                return false
            })
        render(filteredParkArray)
})