import { getAttractions, useAttractions } from "./AttractionProvider.js";
const eventHub = document.querySelector(".container")
export const AttractionDetails = () => {
    getAttractions()
        .then( () => {
        const detailsArray = useAttractions()
    //      const foundAttraction = detailsArray.find() 
    //     renderDetails(detailsArray)
    // })
    // console.log(detailsArray)
        detailsArray.find()
        renderDetails(detailsArray)
})
}
const renderDetails = (attractionObj) => {
    window.alert `
    <div class="attraction__details"> ${attractionObj.name}
    <p>City: ${attractionObj.city}</p>
    <p>State: ${attractionObj.state}</p>
    <p>Description: ${attractionObj.description}</p>
    <p>Ameneties: ${attractionObj.ameneties.souvenirs}</p>
    <p>Ameneties: ${attractionObj.ameneties.restrooms}</p>
    </div>;
`
}
eventHub.addEventListener("detailsButtonClicked", (eventObj) => {
    renderDetails()
})



// import {useAttractions} from "./AttractionProvider.js"

// const eventHub = document.querySelector(".container")
// eventHub.addEventListener("attractionButtonClicked", (eventObj) => {

//     const arrayOfAttractions = useAttractions()

//     const foundAttraction = arrayOfAttractions.find= ((attractionObj) => {
//         console.log(foundAttraction)
//         return attractionObj
//     })
//     render(foundAttraction)
// })

//     const render = (attractionsObj) => {

//         const contentTarget = document.querySelector(`#attraction-${attractionObj.id}`)
//         contentTarget.innerHTML += `
//         <div class="detail__list">
//         ${attractionsObj.known_associates.map(detailObj => {
//             return`
//             <p>${detailObj.description}</p>
//             <p>${detailObj.ameneties.souvenirs}</p>
//             <p>${detailObj.ameneties.restrooms}</p>
//             `
//         }).join("")}

//         </div>
//         `
//     }

