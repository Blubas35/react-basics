import FactsList from "./facts-list/facts-list"
import './facts.css'
import Paragraph from "../../Partials/paragraph"

export default function Facts(props) {
  const factsListData = props.factsList
  let factsHeader = ''
  let factsText1 = ''
  let factsText2 = ''
  props.factsHeader.map(prop => {
    factsHeader = prop.title
    factsText1 = prop.text1
    factsText2 = prop.text2
  })
    return (
        <section className="facts">
        <div className="container">
          <h2 className="facts-header">{factsHeader}</h2>
          <div className="facts-wrapper">
            <div className="facts-description">
              <Paragraph text={factsText1}></Paragraph>
              <Paragraph text={factsText2}></Paragraph>
            </div>
            <div className="facts-list-wrapper">
              <FactsList info={factsListData}></FactsList>
            </div>
          </div>
        </div>
      </section>
    )
}