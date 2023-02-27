import './podcast.css'
import Podcast from './podcast/podcast'
import H2Title from '../../Partials/h2Title'
import Logo from './podcast/podcast-iamge.jpg'

export default function podcastWrapper() {
    
    const podcastsData = [
        {
            time: '832',
            title: 'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date: '2022-09-11',
        },
        {
            time:'12:45',
            title:'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date:'2021-08-11',
            image: {Logo}
        },
        {
            time:'15:33',
            title:'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date:'2024-09-11',
            image : {Logo}
        },
        {
            time:'4:00',
        }
    ]

    const podcasts = podcastsData.map((podcast, index) => {
        <Podcast
            time={podcast.time}
            title={podcast.title}
            date={podcast.date}
            image={podcast.image}
            key={index}
        />
        
    })

    return (
        <div className="podcasts">
            <H2Title text='Podcastai ir radijo laidos'></H2Title>
            <div className="podcasts-wrapper">
                {podcasts}

                <Podcast
                    time='8:32'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2022-09-11'
                ></Podcast>

                <Podcast
                    time='12:45'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2021-08-11'
                    image = {Logo}


                ></Podcast>

                <Podcast
                    time='15:33'
                    title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                    date='2024-09-11'
                    image = {Logo}
                ></Podcast>

                <Podcast
                    time='4:00'
                // title='Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook'
                ></Podcast>

            </div>
        </div>
    )
}