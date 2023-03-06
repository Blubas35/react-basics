import GetBrand from "./formsComponents/GetBrand";
import GetEngine from "./formsComponents/GetEngine";
import GetModel from "./formsComponents/GetModel";
import GetBasePrice from "./formsComponents/GetBasePrice";
import GetKilometers from "./formsComponents/GetKilometers";
import GetColor from "./formsComponents/GetColor";


export default function GetForm({ onSubmit, title }) {
    return (
        <form onSubmit={onSubmit}  >
            <h1>{title}</h1>
        </form>
    )
}