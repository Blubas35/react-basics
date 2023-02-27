import EventWrapper from "./event/event"
import './events.css'
import LargeButton from "../../Partials/LargeButton"
import H2Title from "../../Partials/h2Title"

export default function EventsWrapper() {

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
            month: 'lap',
            location: 'Online',
            title: 'CodeAcademy Talents',
            url: './#'
        },
        {
            day: 18,
            month: 'lap',
            location: 'Online',
            title: 'CodeAcademy Talents',
            url: './#'
        },
    ]
    const eventElements = eventsData.map((event, index) => <EventWrapper 
    event={event} key={index}/>)

    return (
        <div className="events">
            <H2Title text='Renginiai'></H2Title>
            <div className="events-wrapper">
                {eventElements}
            </div>
            <LargeButton text='Daugiau' url='./#'></LargeButton>
        </div>
    )
}