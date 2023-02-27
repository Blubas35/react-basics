import ServiceList from "./service-list/service-list"
import HeroBoxTitle from "./hero-box-title/hero-box-title"
import './hero-box.css'

export default function HeroBox(props) {
  const serviceListContent = props.serviceList
  const heroTitleContent = props.heroTitle
  return (
    <section className="hero-box">
      <div className="container">
        <div className="hero-box-content">
          <HeroBoxTitle info={heroTitleContent}></HeroBoxTitle>
          <ServiceList info= {serviceListContent}></ServiceList>
        </div>
      </div>
    </section>
  )
}