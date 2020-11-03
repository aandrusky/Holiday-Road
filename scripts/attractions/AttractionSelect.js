import {getAttractions, useAttractions} from "./AttractionProvider.js"

const attractionContainer = document.querySelector(".filters__attractions")
const eventHub = document.querySelector(".container")

export const AttractionSelect = () => {
    // console.log(AttractionSelect)

    getAttractions()
    .then(() => {
        const attractionArray = useAttractions()
        render(attractionArray)
     })
}
const render = (attractions) => {
    attractionContainer.innerHTML = `
    <select class="dropdown" id="attractionSelect">
        <option value="0">Please select an Attraction...</option>
        
        ${attractions.map(
            attractionObj => {
             
             return  `<option value="${attractionObj.name}">${attractionObj.name}</option>`
         }).join("")
        }
    </select>
 `
}
    eventHub.addEventListener("change", (changeEvent) => {
    if (changeEvent.target.id === "attractionSelect") {
    const attractionSelectedEvent = new CustomEvent("attractionSelected", {
        detail: {
            attractionThatWasChosen: changeEvent.target.value
           
        }
    })
    
    eventHub.dispatchEvent(attractionSelectedEvent)
}
// console.log(changeEvent)
})