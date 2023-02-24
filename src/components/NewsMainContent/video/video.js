import './video.css'
import LargeButton from '../../Partials/LargeButton'
import SectionTitle from '../../Partials/SectionTitle'
import H3Title from '../../Partials/h3Title'



export default function VideoWrapper () {
    return (
        <section className="video">

        <SectionTitle text='Vaizdo įrašai'></SectionTitle>

        <div className="video-wrapper">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/b8dGCsP75HA"
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
        </div>

        <H3Title text='Jei galiu aš - gali ir tu!'></H3Title>


        <LargeButton text='Visi vaizdo įrašai'></LargeButton>
    </section>
    )
}