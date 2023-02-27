import ServiceItem from "./service-item/service-item"
import './service-list.css'

export default function ServiceList(props) {
    const serviceItem = props.info
    
    const serviceItemElements = serviceItem.map((item, index) => <ServiceItem item ={item} key={index}/>)

    return (
        <div className="service-list">
            {serviceItemElements}
        </div>
    )
}