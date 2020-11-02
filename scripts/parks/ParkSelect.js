import { getParks, useParks } from "./ParkProvider.js"

const parksFilterContainer = document.querySelector(".filters__parks")
    //  console.log("Parks Select: Getting")
const eventHub = document.querySelector(".container")

export const ParkSelect = () => {
    // console.log("ParkSelect: Get data from an API and renderdropdown to DOM")
    
    getParks()
    .then(() => {
         const parksArray = useParks()
        // console.log("parksArray", parksArray)
         render(parksArray)
    })
}

const render = (parks) => {
    parksFilterContainer.innerHTML = `
        <select class="dropdown" id="parkSelect">
            <option value="0">Please select a park..</option>
            ${parks.map(parkObj => {
                    return `<option value="${parkObj.fullName}">${parkObj.fullName}</option>`
                }
                ).join("") 
            }
        </select>
        `
}

// On the event hub, listen for a "change" event.
parksFilterContainer.addEventListener("change", (changeEvent) => {
    // console.log(changeEvent.target.value)

    if (changeEvent.target.id === "parkSelect") {
    
        const parkSelectedEvent = new CustomEvent("parkSelected", {
        detail: {
            parkThatWasChosen: changeEvent.target.value 
        }
    }) 
    // dispatch event to event hub 
    eventHub.dispatchEvent(parkSelectedEvent)
    }
})