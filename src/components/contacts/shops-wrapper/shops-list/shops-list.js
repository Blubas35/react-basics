import './shops-list.css'
import Shop from './shop/shop'

export default function ShopsList() {
    return (
        <div className="shops-list">
            <Shop
            shopTitle = 'Parduotuve 1'
            phone = '+37046646464'
            email = 'shop1@parduotuve.lt'
            address = 'Arsenalo g. 5'
            ></Shop>

            <Shop
            shopTitle = 'ParduotuvÄ— 2'
            phone = '+37046646464'
            email = 'shop1@parduotuve.lt'
            address = 'Arsenalo g. 5'
            ></Shop>

            <Shop
            shopTitle = 'ParduotuvÄ— 3'
            phone = '+37046646464'
            email = 'shop1@parduotuve.lt'
            address = 'Arsenalo g. 5'
            ></Shop>

            <Shop
            shopTitle = 'ParduotuvÄ— 4'
            phone = '+37046646464'
            email = 'shop1@parduotuve.lt'
            address = 'Arsenalo g. 5'
            ></Shop>
        </div>
    )
}