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
    renderDetails()
        
}) 

eventHub.addEventListener("parkSelected", parkSelectedEventObj => { 
  
    const selectedParkName = parkSelectedEventObj.detail.parkThatWasChosen
    const parksArray =  useParks() 

    console.log("heard that the user selected a park, almost time for weather", selectedParkName)  ////find park object in parks array. use 'useParks'    research find vs filter
    
    const filteredParkArray = parksArray.find((parkObj) => {
        if(parkObj.fullName === selectedParkName) {
            return true
        }
            return false
    })
})            