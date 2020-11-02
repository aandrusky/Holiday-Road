const eventHub =  document.querySelector(".container")

export const Park = (parkObj) => {
    return`
        <div class="park__card">Park Name: ${parkObj.fullName}
            <p>State: ${parkObj.states}</p>
            <img class ="selected__park" src=${parkObj.images[0].url}>
            <button id="details__park--${parkObj.fullName}">Details</button>
        </div>
    `
}

eventHub.addEventListener("click", (eventObj) => {
    // build a custom event 
    if(eventObj.target.id.startsWith("details__park")) {
        let splitObj = eventObj.target.id.split("--")
        // console.log(splitObj)
        const myCustomEvent = new CustomEvent("detailsButtonClicked", {
            detail: {
                  detailWasClicked: splitObj[1]
              }
              
          })
        // console.log("button was clicked:")
    // console.log("details button clicked", myCustomEvent)
    // dispatch the event to the eventHub so that other modules can listen for this event
    eventHub.dispatchEvent(myCustomEvent)
    }
})