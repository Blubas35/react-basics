import ServiceList from "./service-list/service-list"
import HeroBoxTitle from "./hero-box-title/hero-box-title"
import './hero-box.css'

export default function HeroBox() {
  return (
    <section className="hero-box">
      <div className="container">
        <div className="hero-box-content">
          <HeroBoxTitle></HeroBoxTitle>
          <ServiceList></ServiceList>
        </div>
      </div>
    </section>
  )
}