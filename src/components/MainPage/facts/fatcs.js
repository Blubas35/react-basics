import FactsList from "./facts-list/facts-list"
import './facts.css'
import Paragraph from "../../Partials/paragraph"

export default function Facts() {
    return (
        <section className="facts">
        <div className="container">
          <h2 className="facts-header">CodeAcademy pulsas</h2>
          {/* <H2Title text='CodeAcademy pulsas'></H2Title> */}
          <div className="facts-wrapper">
            <div className="facts-description">
              <Paragraph text='Manome, jog technologinis išsilavinimas privalo sekti šiandienos ir rytojaus darbo rinkos tendencijas bei būti prieinamas kiekvienam. 🙌'></Paragraph>
              <Paragraph text='Šiuo principu vadovaudamiesi, kas dieną savo studentams atveriame naujas galimybes. 🔝'></Paragraph>
            </div>
            <div className="facts-list-wrapper">
              <FactsList></FactsList>
            </div>
          </div>
        </div>
      </section>
    )
}