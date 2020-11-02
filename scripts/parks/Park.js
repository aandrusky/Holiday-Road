const eventHub =  document.querySelector(".container")

export const Park = (parkObj) => {
    return`
        <div class="park__card">Park Name: ${parkObj.fullName}
            <p>State: ${parkObj.states}</p>
            <button id="details__park">Details</button>
        </div>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    // build a custom event 
    if(eventObj.target.id === "details__park") {
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