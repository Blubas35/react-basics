

export default function GenerateCar({ data }) {
    return (
        <div className="result-wrapper">
            <h2>Car successfully created:</h2>
            <h3>Brand: {data.brand} {data.model}</h3>
            <p>{data.color === 'other' ? `Special color: ${data.otherColor}` : `Color: ${data.color}`}</p>
            <ul>
                <li>Engine type: {data.engineType}</li>
                <li>Base cost: {data.price.baseCost}</li>
                <li>Mileage: {data.kilometers}km</li>
            </ul>

            <h3>Price</h3>
            <ul>
                <li>color cost: {data.price.colorPrice}€</li>
                <li>Engine cost: {data.price.enginePrice}€</li>
            </ul>

            <h3>Discounts:</h3>
            <ul>
                <li>mileage discount: {data.price.mileageDiscount}€</li>
                <li>Total price with discount: {data.price.discountedPrice}€</li>

            </ul>
            <h3>Total price:</h3>
            <ul>
                <li>Total price (no VAT):{data.price.discountedPrice}€</li>
                <li>VAT:{data.price.vat}€</li>
                <li>Total price (with VAT):{data.price.finalPriceVAT}€</li>
            </ul>
        </div>
    )
}