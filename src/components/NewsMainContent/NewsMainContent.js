import './NewsMainContent.css'

import MainNews from './MainNews/main-news'
import SecondaryNews from './SideNews/secondary-news'
import VideoWrapper from './video/video'
import PodcastWrapper from './podcasts/podcasts'
import EventsWrapper from './events/events'
import LargeButton from '../Partials/LargeButton'
import Header from '../Header/header'
import Container from '../container/container'
// import Logo from 'https://imgur.com/kyWSwQ5'
// import Logo from '../NewsMainContent/podcasts/podcast/podcast-iamge.jpg'
// import Logo from './podcasts/podcast/podcast-iamge.jpg'

export default function NewsMainContent() {

    let sectionTitle = 'Naujienos'

    const mainNewsData = [
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Naujienos',
            title: 'Įmonių kova dėl IT specialistų: kaip sėkmingai atrasti savo talentus?',
            date: '2023-13-32'
        },
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Naujienos',
            title: 'Kaip issirinkti biuro kede?',
            date: '2022-09-11'
        },
    ]
    const mainSideNews = [
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Side News',
            title: 'Kodel tinsta akiu vokai?',
            date: '2021-08-25'
        },
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Side News',
            title: 'Kas juoksis paskutinis?',
            date: '2021-11-25'
        },
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Side News',
            title: 'Kur yra singapuras?',
            date: '2022-09-11'
        },
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/12/2022_11_10-Code-Academy-221-1024x683.jpg',
            category: 'Side News',
            title: 'Kaip atidaryti austres?',
            date: '2023-45-1'
        },
    ]
    const videoData = [
        {
            sectionTitle: 'Vaizdo įrašai',
            h3Title: 'Jei galiu aš - gali ir tu!',
            buttonText: 'Visi vaizdo įrašai'
        }
    ]

    const podcastsData = [
        {
            time: '832',
            title: 'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date: '2022-09-11',
        },
        {
            time: '12:45',
            title: 'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date: '2021-08-11',
            image: 'https://imgur.com/kyWSwQ5'
        },
        {
            time: '15:33',
            title: 'Jei virtualus pasaulis taptu realybe, jos neturetu valdyti facebook',
            date: '2024-09-11',
            image: 'https://imgur.com/kyWSwQ5'
        },
        {
            time: '4:00',
        }
    ]

    const eventsData = [
        {
            image: 'https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png',
            day: 10,
            month: 'lap',
            location: 'Online',
            title: 'CodeAcademy Talents',
            url: './#'
        },
        {
            day: 5,
            month: 'gruo',
            location: 'Online',
            title: 'CodeAcademy Talents',
            url: './#'
        },
        {
            day: 18,
            month: 'sau',
            location: 'Online',
            title: 'CodeAcademy Talents',
            url: './#'
        },
    ]

    return (
        <>
            <Header> </Header>
            <Container>
                <div className="content-wrapper">
                    <main className="main-content">
                        <h1>{sectionTitle}</h1>

                        <section className="news">
                            <MainNews info={mainNewsData}> </MainNews>
                            <SecondaryNews info={mainSideNews}></SecondaryNews>
                            <LargeButton text='Visos naujienos'></LargeButton>
                        </section>
                        <VideoWrapper info={videoData}></VideoWrapper>

                    </main>

                    <aside className="sidebar-content">
                        <PodcastWrapper info={podcastsData}></PodcastWrapper>
                        <EventsWrapper info={eventsData}></EventsWrapper>
                    </aside>
                </div>
            </Container>
        </>
    )
}