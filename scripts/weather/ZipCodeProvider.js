// import { ParkSelect } from "./ParkSelect.js"

import apiObject from "../Settings.js";

let zipCodes = []

export const useZipCodes = () => {
    return zipCodes.slice()
    
}

export const getZipCodes = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?limit=497&start=0&sort=&api_key=${apiObject.npsKey}`)
        .then(response => response.json())
        .then(parsedParks => {
                console.log(parsedParks)
                zipCodes = parsedParks.data.latitude

                console.log("got the addresses maybe", zipCodes)
            }
        )       
}

