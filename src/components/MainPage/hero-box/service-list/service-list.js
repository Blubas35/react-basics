import ServiceItem from "./service-item/service-item"
import './service-list.css'

export default function ServiceList(props) {
    const serviceItem = props.info
    
    const serviceItemElements = serviceItem.map((item, index) => <ServiceItem item ={item} key={index}/>)

    return (
        <div className="service-list">
            {serviceItemElements}
           {/* <ServiceItem 
           title ='Studentams'
           ptext = 'Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!'
           ptext2 ='antras praragrasfasf'
           >
           </ServiceItem>
            <ServiceItem
            title ='nestudentams'
            ptext = 'naujas tekstas'
            ptext2 = 'antras paragrafas'

            ></ServiceItem> */}
        </div>
    )
}