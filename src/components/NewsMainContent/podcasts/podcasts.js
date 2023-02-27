import './podcast.css'
import Podcast from './podcast/podcast'
import H2Title from '../../Partials/h2Title'

export default function podcastWrapper(props) {
    const podcastInfo = props.info
    const podcasts = podcastInfo.map((podcast, index) => {
       return <Podcast
            time={podcast.time}
            title={podcast.title}
            date={podcast.date}
            image={podcast.image}
            key={index}
        />
        
    }
    )

    return (
        <div className="podcasts">
            <H2Title text='Podcastai ir radijo laidos'></H2Title>
            <div className="podcasts-wrapper">
                {podcasts}
            </div>
        </div>
    )
}