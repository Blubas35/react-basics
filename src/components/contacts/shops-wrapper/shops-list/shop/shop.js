import './shop.css'

export default function Shop(props) {
    return (
        <div className="shop">
            <h3 className="shop-title">{props.shopTitle}</h3>

            <ul className="shop-address-list">
                <li>Phone: <a href="tel: +37046646464">{props.phone}</a></li>
                <li>Email: <a href="mailto:shop1@parduotuve.lt">{props.email}</a></li>
                <li>Address: <a href="https://goo.gl/maps/bnu5fL4GvtQ5rHda7" target="_blank"> {props.address}</a></li>
            </ul>
        </div>
    )
}