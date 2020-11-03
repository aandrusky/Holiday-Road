const eventHub = document.querySelector(".container")
export const Attraction = (attractionObj) => {
    
    return `
    <div id="attraction-${attractionObj.id}",class="attractions__card">
    <h4 class="name">Attraction Name: ${attractionObj.name}</h4>
    <p>City: ${attractionObj.city}</p>
    <p>State: ${attractionObj.state}</p>
    <button id="detail__attraction">Details</button>
    </div>
    `
}
{/* 
<p>Description: ${attractionObj.description}</p>
<p>Ameneties: ${attractionObj.ameneties.souvenirs}</p>
<p>Ameneties: ${attractionObj.ameneties.restrooms}</p> */}

eventHub.addEventListener("click", (eventObj) =>{

    if(eventObj.target.id === "detail__attraction")  {
        const myCustomEvent = new CustomEvent("attractionButtonClicked", {
            detail: {
                detailWasClicked: eventObj.target.id
                
            }
        })
        // console.log(myCustomEvent)
        //dispatch the event to the eventHub so that the other modules can listen for this event
        eventHub.dispatchEvent(myCustomEvent)
    }
})

