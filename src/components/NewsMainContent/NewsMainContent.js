import './NewsMainContent.css'

import MainNews from './MainNews/main-news'
import SecondaryNews from './SideNews/secondary-news'
import VideoWrapper from './video/video'
import PodcastWrapper from './podcasts/podcasts'
import EventsWrapper from './events/events'
import LargeButton from '../Partials/LargeButton'
import Header from '../Header/header'

export default function NewsMainContent() {
    return (
        <>
        <Header> </Header>
        <div className="container">
        <div className="content-wrapper">
            <main className="main-content">
                <h1>Naujienos</h1>

                <section className="news">
                    <MainNews> </MainNews>
                    <SecondaryNews></SecondaryNews>
                    <LargeButton text='Visos naujienos'></LargeButton>
                </section>
                <VideoWrapper></VideoWrapper>

            </main>

            <aside className="sidebar-content">
                <PodcastWrapper></PodcastWrapper>
                <EventsWrapper></EventsWrapper>
            </aside>
        </div>
    </div>
        </>
    )
}