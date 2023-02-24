import EventWrapper from "./event/event"
import './events.css'
import LargeButton from "../../Partials/LargeButton"
import H2Title from "../../Partials/h2Title"

export default function EventsWrapper() {
    return (
        <div className="events">
            <H2Title text='Renginiai'></H2Title>
            <div className="events-wrapper">
                <EventWrapper></EventWrapper>
                <EventWrapper></EventWrapper>
                <EventWrapper></EventWrapper>
                <EventWrapper></EventWrapper>
            </div>
            <LargeButton text='Daugiau' url='./#'></LargeButton>
        </div>
    )
}