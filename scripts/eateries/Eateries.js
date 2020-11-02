const eventHub =document.querySelector(".container")

export const Eateries = (eateriesObj) => {
    return `
        <div class="eateries__card">
           ${eateriesObj.businessName}
           <button id="details__eatery">Details</button>
           </div>
    `
  }

  