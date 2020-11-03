import { getEateries, useEateries } from "./EateryProvider.js"
import {Eateries} from "./Eateries.js"


const eventHub = document.querySelector(".container")
// console.log(eventHub)

const eateriesContainer = document.querySelector(".itinerary__eateries")

export const EateriesList = () => {

  getEateries()
    .then(() => {
      const eateryArray = useEateries()
      render(eateryArray)
    })

}

const render = (eateryArray) => {
  let eateryHTMLRepresentation = ""
  for (const eatery of eateryArray) {
  
    eateryHTMLRepresentation += Eateries(eatery)
  }

  eateriesContainer.innerHTML = `
          
          <article class="eateriesList">
          <h3>Eatery</h3>
          ${eateryHTMLRepresentation}
          </article>
          `
}

eventHub.addEventListener("eateriesSelected", eaterySelectedEventObj => {
  // console.log("eatery selected event heard")
      
      const selectedEateryName = eaterySelectedEventObj.detail.eateryThatWasChosen

      const eateriesArray =  useEateries() 

      const filteredEateryArray = eateriesArray.filter((eateriesObj) => {
              if(eateriesObj.businessName === selectedEateryName) {
                  return true
              }
              return false
          })
      render(filteredEateryArray)
})