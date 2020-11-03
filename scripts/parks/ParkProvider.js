import apiObject from "../Settings.js";
let parks = []

export const useParks = () => {
    return parks.slice()
    
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=497&start=0&sort=&api_key=${apiObject.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
                // console.log(parsedParks)
                parks = parsedParks.data
            }
        )
        
}
// console.log(parks)