import { getParks, useParks } from "./ParkProvider.js";

const eventHub = document.querySelector(".container")

export const ParkDetails = () => {
    getParks()
        .then( () => {
        const detailsArray = useParks()
         detailsArray.find() 
        renderDetails(detailsArray)
    })
    
}

const renderDetails = (parkObj) => {
    window.alert `
       Park Name: ${parkObj.fullName}
       Location: ${parkObj.states}
       Description: ${parkObj.description}
       Details: ${parkObj.details}
    `
}

eventHub.addEventListener("detailsButtonClicked", detailClickedEventObj => {
    console.log("details clicked event heard", detailClickedEventObj)
    // renderDetails()
        
}) 

// eventHub.addEventListener("parkSelected", parkSelectedEventObj => {
//     console.log("park selected event heard", parkSelectedEventObj)
//         /*
//             Filter the parks application state down to the selected park, and render to dom
//         */
//         const selectedParkName = parkSelectedEventObj.detail.parkThatWasChosen

//         const parksArray =  useParks() 

//         const filteredParkArray = parksArray.filter((parkObj) => {
//                 if(parkObj.fullName === selectedParkName) {
//                     return true
//                 }
//                 return false
//             })
//             // console.log(filteredParkArray)
//         render(filteredParkArray)
// })