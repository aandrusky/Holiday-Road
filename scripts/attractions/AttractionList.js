import { useAttractions, getAttractions } from "./AttractionProvider.js";
import { Attraction } from "./AttractionHTML.js";

const eventHub = document.querySelector(".container");
const attractionContainer = document.querySelector(".itinerary__attractions");
export const AttractionList = () => {
  getAttractions().then(() => {
    const attractionArray = useAttractions()
    render(attractionArray)
  })
}
eventHub.addEventListener("attractionSelected", attractionSelectedObj => {
    
    const selectedAttractionName = attractionSelectedObj.detail.attractionThatWasChosen
    // console.log(selectedAttractionName)
    const attractionArray = useAttractions();
    const filteredAttractionArray = attractionArray.filter((attractionObj) => {
      if (attractionObj.name === selectedAttractionName) {
        return true
      }
      return false
    })
  render(filteredAttractionArray)
})
const render = (attractionArray) => {
  let attractionHTMLRepresentation = "";

  for (const attraction of attractionArray) {
    attractionHTMLRepresentation += Attraction(attraction);
  }
    attractionContainer.innerHTML = `
            <h2 class= "attractionHeader">Attractions</h2>
            <section class= "attractionList">
            ${attractionHTMLRepresentation}
            </section>`;
  }

