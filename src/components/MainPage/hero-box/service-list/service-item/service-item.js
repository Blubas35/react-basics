import './service-item.css'
import Paragraph from '../../../../Partials/paragraph'
import SmolButton from '../../../../Partials/smol-blue-button'
import H2Title from '../../../../Partials/h2Title'

export default function ServiceItem(props) {
    let { title, text1, text2 } = props.item
    return (
        <div className="service-item">
            <H2Title text={title}></H2Title>
            <Paragraph text={text1}></Paragraph>
            <Paragraph text={text2}></Paragraph>

            <SmolButton url='./#' text='Sužinok daugiau' ></SmolButton>
        </div>
    )
}