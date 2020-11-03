import { saveItinerary } from "./ItineraryDataProvider.js"

const contentTarget = document.querySelector(".itineraryFormContainer")
const eventHub = document.querySelector(".container")


//▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼▼THIS IS WHERE IM TRYING TO ENABLE/DISABLE SAVE ITINERARY BUTTON
// export const buttonAvailability = () => {
//     if (("attractionButtonClicked" = true) || ("eateriesSelected" = true) || ("parkSelected" = true)) {
//         render()
//     }
//     else {
//         document.getElementById("saveItineraryButton").disabled = true
//     }
// }

const render = () => {
    //if user makes all three selections, only then render button.   maybe write a new function that use render as a conditional. 
    contentTarget.innerHTML = `
        <button id="saveItineraryButton">Save Itinerary</button>
    `
}
//▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲▲THIS IS WHERE IM TRYING TO ENABLE/DISABLE SAVE ITINERARY BUTTON

eventHub.addEventListener("click", clickEvent => {           
    if(clickEvent.target.id === "saveItinerary") {
        const selectedPark = document.querySelector(".itinerary--parks")
        const weather = document.querySelector(".itinerary--weather")
        const selectedAttraction = document.querySelector("#itinerary--attractions")
        const selectedEatery = document.querySelector("#itinerary--eateries")
        

        // takes all that data from the selections, and puts it into one spot, or 'object' (newItinerary)

        const newItinerary = {
            selectedPark,
            weather,
            selectedAttraction,
            selectedEatery
        }

        // Then this will POST our object (newItinerary) to our API / json 
        saveItinerary(newItinerary)
    }
})

export const ItineraryForm = () => {
    render()
}