import './service-item.css'
import Paragraph from '../../../../Partials/paragraph'
import SmolButton from '../../../../Partials/smol-blue-button'
import H2Title from '../../../../Partials/h2Title'

export default function ServiceItem(props) {
    return (
        <div className="service-item">
            <H2Title text={props.title}></H2Title>
            <Paragraph text={props.ptext}></Paragraph>
            <Paragraph text={props.ptext2}></Paragraph>

            <SmolButton url='./#' text='Sužinok daugiau' ></SmolButton>
        </div>
    )
}