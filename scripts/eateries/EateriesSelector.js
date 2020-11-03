import { getEateries, useEateries } from "./EateryProvider.js"

const eateriesFilterContainer = document.querySelector(".filters__eateries")
const eventHub = document.querySelector(".container")
// console.log("EateriesSelect: Getting reference to container for dropdown and event hub")

export const EateriesSelect = () => {
  // console.log("EateriesSelect: Get data from API and renders drop down to the DOM")

  getEateries()
    .then(() => {
      const eateriesArray = useEateries()
      // console.log("eateriessArrays", eateriesArray)

      render(eateriesArray)
    })
}

const render = (eateries) => {
  eateriesFilterContainer.innerHTML = `
        <select class="dropdown" id="eateriesSelected">
            <option value="0">Please select an eatery...</option>
            ${eateries.map(
    eateriesObj => {
      return `<option value="${eateriesObj.businessName}">${eateriesObj.businessName}</option>`
    }
  ).join("")
    }
        </select>
    `
}

eateriesFilterContainer.addEventListener("change", (changeEvent) => {
  if (changeEvent.target.id === "eateriesSelected") {
    // console.log("EateriesSelect: Change event happened in the eatery dropdown")
    
    // console.log("EateriesSelect: Build custom event for eateriesSelected")
    const eateriesSelectedEvent = new CustomEvent("eateriesSelected", {
      detail: {
        eateryThatWasChosen: changeEvent.target.value
      }
    })

    // console.log("EateriesSelect: Dispatch eateriesSelected event to event hub")
    eventHub.dispatchEvent(eateriesSelectedEvent)
  }
})