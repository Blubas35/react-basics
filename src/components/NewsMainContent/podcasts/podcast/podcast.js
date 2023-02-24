import logo from '../podcast/podcast-iamge.jpg'
import './podcast.css'

export default function Podcast(props) {

    let { time, title, date, image } = props
    
    if(!title) {
        return
    }
    let timeText = time ? `Trukmė : ${time}` : `Trukmė nenurodyta`
    let titleElement = title && <h3 className="podcast-title">{title}</h3>
    let dateElement = date && <span className="podcast-date">{date}</span>

    return (
        <div className="podcast">
            <div className="podcast-controls">
                <img className="podcast-image" src={logo} alt="image" />
                <span className="podcast-time">{timeText}</span>
                <button className="podcast-play">Play</button>
            </div>
            <div className="podcast-info">
                {titleElement}
                {dateElement}
            </div>
        </div>
    )
}