import apiObject from "../Settings.js";
let parks = []

export const useParks = () => {
    return parks.slice()
    
}

export const getParks = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?api_key=${apiObject.npsKey}&sort=fullName&limit=497&start=0`)
        .then(response => response.json())
        .then(parsedParks => {
                console.log(parsedParks)
                parks = parsedParks.data
            }
        )
        
}
// console.log(parks)