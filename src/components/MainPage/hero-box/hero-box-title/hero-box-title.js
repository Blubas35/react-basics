import './hero-box-title.css'
import H1Title from '../../../Partials/h1Title'
import Paragraph from '../../../Partials/paragraph'


export default function HeroBoxTitle() {
    return (
        <div className="hero-box-title-wrapper">
        <H1Title title='Programuok savo ateitį!®'></H1Title>
        <Paragraph 
        className = 'page-description' 
        text='CodeAcademy programavimo kursai – tiesiausias kelias technologinės karjeros link'>
        </Paragraph>
      </div>
    )
}