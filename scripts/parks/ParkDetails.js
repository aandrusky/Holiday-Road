import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container")

export const ParkDetails = () => {
    getParks()
        .then( () => {
        const detailsArray = useParks()
            
        renderDetails(detailsArray)
    })
    
}

const renderDetails = (parkObj) => {
    window.alert `
    <div class="park__details"> ${parkObj.fullName}
      <p>Location: ${parkObj.states}</p>
      <p>Description: ${parkObj.description}</p>
      <p>Details: ${parkObj.details}</p>
      <p>Details: ${parkObj.details}</p>
      <p>Details: ${parkObj.details}</p> 
    </div>;
`
}

eventHub.addEventListener("click", (eventObj) => {
    // build a custom event 
    if(eventObj.target.id === "details__park") {
        ParkDetails()
        const myCustomEvent = new CustomEvent("detailsButtonClicked", {
            detail: {
                  detailWasClicked: eventObj.target.id
              }
              
          })
        // console.log("button was clicked:")
    console.log("details button clicked", myCustomEvent)
    // dispatch the event to the eventHub so that other modules can listen for this event
    eventHub.dispatchEvent(myCustomEvent)
        }
})
  

// const render = (parkArray) => {
//     let parksHTMLRepresentation = ""
//     for (const park of parkArray) {
    
//     parksHTMLRepresentation += Park(park)
//     }

//     parksContainer.innerHTML = `
//             <h3>National Park</h3>
//             <section class="parkList">
//             ${parksHTMLRepresentation}
//             </section>
//             `
// }