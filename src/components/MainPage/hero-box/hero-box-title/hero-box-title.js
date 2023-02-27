import './hero-box-title.css'
import H1Title from '../../../Partials/h1Title'
import Paragraph from '../../../Partials/paragraph'


export default function HeroBoxTitle(props) {
  let title = ''
  let text = ''
  props.info.map(prop => {
    title = prop.title
    text = prop.text
  })

    return (
        <div className="hero-box-title-wrapper">
        <H1Title title={title}></H1Title>
        <Paragraph 
        className = 'page-description' 
        text={text}>
        </Paragraph>
      </div>
    )
}