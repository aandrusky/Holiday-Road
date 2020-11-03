const eventHub =document.querySelector(".container")
export const Eateries = (eateriesObj) => {
    return `
        <div id = "eatery-${eateriesObj.id}",class="eateries__card">
        <h4 class="name">Eatery Name: ${eateriesObj.businessName}</h4>
        <p>City: ${eateriesObj.city}</p>
        <p>State: ${eateriesObj.state}</p>
        <button id="detail__eatery--${eateriesObj.businessName}">Details</button>
        </div>
    `
  }


  // return `
  //   <div id="attraction-${attractionObj.id}",class="attractions__card">
  //   <h4 class="name">Attraction Name: ${attractionObj.name}</h4>
  //   <p>City: ${attractionObj.city}</p>
  //   <p>State: ${attractionObj.state}</p>
  //   <button id="detail__attraction--${attractionObj.name}">Details</button>
  //   </div>
  //   `

  eventHub.addEventListener("click", (eventObj) => {
    

    if(eventObj.target.id.startsWith("detail__eatery"))  {
        let splitObj = eventObj.target.id.split("--")
        console.log("split object", splitObj)
        const myCustomEvent = new CustomEvent("eateryButtonClicked", {
            detail: {
                detailWasClicked: splitObj[1]
                
            }
        })
        // console.log(myCustomEvent)
        //dispatch the event to the eventHub so that the other modules can listen for this event
        eventHub.dispatchEvent(myCustomEvent)
    }
})