
import { getAttractions, useAttractions } from "./AttractionProvider.js";
const eventHub = document.querySelector(".container")


const renderDetails = (attractionObj) => {
    
    // console.log("Render window obj", attractionObj)
    window.alert(`
    Attraction Name: ${attractionObj.name}
    City: ${attractionObj.city}
    State: ${attractionObj.state}
    Description: ${attractionObj.description}
    Ameneties: ${attractionObj.ameneties.souvenirs}
    Ameneties: ${attractionObj.ameneties.restrooms}
    
`)
}
eventHub.addEventListener("attractionButtonClicked", detailClickedEventObj => {
    console.log("clicked event heard", detailClickedEventObj)
    const attractionName = detailClickedEventObj.detail.detailWasClicked
    const foundAttraction = useAttractions().find((attraction) => attraction.name === attractionName)
    console.log("found Attraction", foundAttraction)

    renderDetails(foundAttraction)
})

