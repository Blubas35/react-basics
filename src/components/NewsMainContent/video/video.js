import './video.css'
import LargeButton from '../../Partials/LargeButton'
import SectionTitle from '../../Partials/SectionTitle'

export default function VideoWrapper (props) {
    let { sectionTitle, h3Title, buttonText } = props
    props.info.map(prop => {
        sectionTitle = prop.sectionTitle
        h3Title = prop.h3Title
        buttonText = prop.buttonText
    })

    return (
        <section className="video">

        <SectionTitle text={sectionTitle}></SectionTitle>

        <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>

        <h3 className="sub-title">{h3Title}</h3>


        <LargeButton text={buttonText}></LargeButton>
    </section>
    )
}