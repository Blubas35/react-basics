import EventWrapper from "./event/event"
import './events.css'
import LargeButton from "../../Partials/LargeButton"
import H2Title from "../../Partials/h2Title"

export default function EventsWrapper(props) {
    const eventsData = props.info
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