import './podcast.css'
import Podcast from './podcast/podcast'
import H2Title from '../../Partials/h2Title'

export default function podcastWrapper() {
    return (
        <div className="podcasts">
            <H2Title text='Podcastai ir radijo laidos'></H2Title>
            <div className="podcasts-wrapper">
                <Podcast
                    time='8:32'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2022-09-11'
                ></Podcast>

                <Podcast
                    time='12:45'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2021-08-11'

                ></Podcast>

                <Podcast
                    time='15:33'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2024-09-11'
                ></Podcast>

                <Podcast
                    time='4:00'
                // title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                ></Podcast>

            </div>
        </div>
    )
}