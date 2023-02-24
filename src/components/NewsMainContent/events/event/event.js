import './event.css'

export default function EventWrapper () {
    return (
        <div className="event">
        <a href="#">
            <div className="image-wrapper">
                <img src="https://codeacademy.lt/wp-content/uploads/2022/10/MicrosoftTeams-image-20-300x300.png"
                    alt=""/>
            </div>
            <div className="event-info">
                <div className="date">
                    <div className="day">10</div>
                    <div className="month">Lap</div>
                </div>
                <span className="event-location">Online</span>
                <h3 className="event-title">CodeAcademy Talents</h3>
            </div>
        </a>
    </div>
    )
}