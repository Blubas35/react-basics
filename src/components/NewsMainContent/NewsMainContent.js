import './NewsMainContent.css'

import MainNews from './MainNews/main-news'
import SecondaryNews from './SideNews/secondary-news'
import VideoWrapper from './video/video'
import PodcastWrapper from './podcasts/podcasts'
import EventsWrapper from './events/events'
import LargeButton from '../Partials/LargeButton'
import Header from '../Header/header'
import Container from '../container/container'

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
                <VideoWrapper></VideoWrapper>

            </main>

            <aside className="sidebar-content">
                <PodcastWrapper></PodcastWrapper>
                <EventsWrapper></EventsWrapper>
            </aside>
        </div>
    </Container>
        </>
    )
}