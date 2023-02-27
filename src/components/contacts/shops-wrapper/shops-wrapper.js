import './shops-wrapper.css'
import ShopsList from './shops-list/shops-list'

export default function ShopsWrapper() {
    return (
        <div className="shops-wrapper">
            <h2 className="shops-wrapper-title">Find us</h2>
            <ShopsList></ShopsList>
        </div>
    )
}