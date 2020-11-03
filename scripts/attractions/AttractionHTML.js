const eventHub = document.querySelector(".container")
export const Attraction = (attractionObj) => {
    
    return `
    <div id="attraction-${attractionObj.id}",class="attractions__card">
    <h4 class="name">Attraction Name: ${attractionObj.name}</h4>
    <p>City: ${attractionObj.city}</p>
    <p>State: ${attractionObj.state}</p>
    <button id="detail__attraction--${attractionObj.name}">Details</button>
    </div>
    `
}


eventHub.addEventListener("click", (eventObj) => {
    

    if(eventObj.target.id.startsWith("detail__attraction"))  {
        let splitObj = eventObj.target.id.split("--")
        console.log("split object", splitObj)
        const myCustomEvent = new CustomEvent("attractionButtonClicked", {
            detail: {
                detailWasClicked: splitObj[1]
                
            }
        })
        // console.log(myCustomEvent)
        //dispatch the event to the eventHub so that the other modules can listen for this event
        eventHub.dispatchEvent(myCustomEvent)
    }
})

