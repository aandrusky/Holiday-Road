import { getEateries, useEateries } from "./EateryProvider.js";
const eventHub = document.querySelector(".container")


const renderDetails = (eateriesObj) => {
    
    // console.log("Render window obj", attractionObj)
    window.alert(`
    Eatery Name: ${eateriesObj.businessName}
    City: ${eateriesObj.city}
    State: ${eateriesObj.state}
    Description: ${eateriesObj.description}
    Ameneties: ${eateriesObj.ameneties.restrooms}
    
`)
}
eventHub.addEventListener("eateryButtonClicked", detailClickedEventObj => {
    console.log("clicked event heard", detailClickedEventObj)
    const eateryName = detailClickedEventObj.detail.detailWasClicked
    const foundEatery = useEateries().find((eatery) => eatery.businessName === eateryName)
    console.log("found Eatery", foundEatery)

    renderDetails(foundEatery)
})

