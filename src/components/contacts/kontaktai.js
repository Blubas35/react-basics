import ShopsWrapper from "./shops-wrapper/shops-wrapper"
import './rokontaktai.css'

export default function ContactsPage() {
    return (
        <div className="container">
            <div className="content-wrapper">
                <ShopsWrapper></ShopsWrapper>
                <div className="map-wrapper">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2306.207300878926!2d25.290226200000003!3d54.688379600000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dd94198d32e84b%3A0x984da675ef49d45c!2sArsenalo%20g.%2C%20Vilnius%2C%2001143%20Vilniaus%20m.%20sav.!5e0!3m2!1slt!2slt!4v1671182094489!5m2!1slt!2slt"
                        width="600" height="450" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
    )
}