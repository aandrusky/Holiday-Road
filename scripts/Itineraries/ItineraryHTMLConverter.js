

export const itineraryAsHTML = (ItineraryObj) => {
    return `
    <div class="savedItinerary">
        <h4>Saved Itinerary</h4>
        <p>Park: ${ItineraryObj.Park}<p>
        <p>Weather: ${ItineraryObj.Weather}</p>
        <p>Attraction: ${ItineraryObj.Attraction}</p>
        <p>Eatery: ${ItineraryObj.Eatery}</p>
    </div>
    `
}