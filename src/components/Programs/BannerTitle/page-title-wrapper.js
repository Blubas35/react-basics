import './BannerTitle.css'

export default function TitleWrapper(props) {
  if (!props.bannerText1 || !props.bannerText2) {
    return (
      <div className="page-title-wrapper">
        <h1 className="title">Programos</h1>
      </div>
    )
  }
  return (
    <div className="page-title-wrapper">
      <h1 className="title">Programos</h1>
      <a href="#" className="bg-image">
        <span className="pink-color">{props.bannerText1}</span>
        <span className="black-color">{props.bannerText2}</span>
      </a>
    </div>
  )
}