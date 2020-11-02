import { useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container")

const renderDetails = (parkObj) => {
    console.log("THis is the rendered window obj", parkObj)
    window.alert(`
       Park Name: ${parkObj.fullName}
       Directions: ${parkObj.directionsInfo}
       Hours: 
        Monday-${parkObj.operatingHours[0].standardHours.wednesday}
       Description: ${parkObj.description}
       Activities: ${parkObj.activities}

    `)
}

eventHub.addEventListener("detailsButtonClicked", detailClickedEventObj => {
    // console.log("details clicked event heard", detailClickedEventObj)
    
    const parkName = detailClickedEventObj.detail.detailWasClicked
    const foundPark = useParks().find((park) => park.fullName === parkName) 
       console.log(foundPark)
    renderDetails(foundPark)
}) 