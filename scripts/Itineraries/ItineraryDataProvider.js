 

const eventHub = document.querySelector(".container")

const dispatchStateChangeEvent = () => {
    const itineraryStateChangedEvent = new CustomEvent("itineraryStateChanged")

    eventHub.dispatchEvent(itineraryStateChangedEvent)
}

let itinerary = []

export const getItinerary = () => {
    return fetch('http://localhost:8088/itineraries') 
        .then(response => response.json())
        .then(parsedItineraries => {
            itinerary = parsedItineraries
        })

}

export const useItinerary = () => {
    return itinerary.slice()
}

export const saveItinerary = (itinerary) => {
    return fetch('http://localhost:8088/itineraries', { 
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(itinerary)
    })
    .then(getItinerary)
    .then(dispatchStateChangeEvent)
}