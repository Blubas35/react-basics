import ServiceList from "./service-list/service-list"
import HeroBoxTitle from "./hero-box-title/hero-box-title"
import './hero-box.css'

export default function HeroBox() {
  let serviceListContent = [
    {
      title: 'Studentams',
      text1: 'Ar žengi pirmą ar kažkelintą žingsnį link tech išsilavinimo – mes tau padėsim!',
      text2: 'Tiesiausias kelias link karjeros – per mus. 🏁 CodeAcademy programavimo kursai'
    },
    {
      title: 'NeStudentams',
      text1: 'Esame geriausias kompanijų draugas Edutech erdvėje.      Kelsime Jūsų darbuotojų kompetenciją bei atrasime talentus. 📈',
      text2: 'CodeAcademy programavimo kursai'
    },
  ]
  
  return (
    <section className="hero-box">
      <div className="container">
        <div className="hero-box-content">
          <HeroBoxTitle></HeroBoxTitle>
          <ServiceList info= {serviceListContent}></ServiceList>
        </div>
      </div>
    </section>
  )
}