import { itineraryAsHTML } from './ItineraryHTMLConverter.js';
import {getItinerary, useItinerary} from './ItineraryDataProvider.js'



const itineraryContainer = document.querySelector(".itineraryContainer")

const eventHub = document.querySelector(".container")

eventHub.addEventListener("itineraryStateChanged", () => itineraryList())


export const ItineraryList = () => {
    getItinerary()
    .then(() => {
    const allItineraries = useItinerary()
     console.log("all itineraries", allItineraries)  
    render(allItineraries)

    })
}


const render = (itinerariesArray) => {
    let itinerariesHTMLRepresentations = ""
    for (let slicedItinerary of itinerariesArray) {
        itinerariesHTMLRepresentations += itineraryAsHTML(slicedItinerary)
    }
    itineraryContainer.innerHTML = `
              ${itinerariesHTMLRepresentations}
          `
  }

  //This page APPEARS to be working. I don't think im getting my data from the user selections in my html converter
