export const Park = (parkObj) => {
    return`
        <div class="park__card">Park Name: ${parkObj.fullName}
            <button id="details__park">Details</button>
        </div>
    `
}