import YourSvg from '../../../images/download.svg'
import menulis from '../../../images/menulis.svg'
import H2Title from '../../../Partials/h2Title'
import Paragraph from '../../../Partials/paragraph'

export default function ProgramItem(props) {
    if (!props.title) {
        return
    }
    return (
        <a href="./#">
            <div className="program-item">
                <div className="program-main-info">
                    <img className="program-image"
                        src="https://codeacademy.lt/wp-content/uploads//2021/03/Python_dark-1.svg" alt="programavimo kalba" />

                    <H2Title text={props.title}></H2Title>
                    <Paragraph text={props.text}></Paragraph>
                </div>

                <div className="program-features-wrapper">
                    <ul className="program-features-list">
                        <li className="program-feature-item">
                            <span className="program-feature-item-icon"><img src={YourSvg} alt='kepure' />
                            </span>

                            <span className="program-feature-item-content">{props.finance}</span>
                        </li>

                        <li className="program-feature-item">
                            <span className="program-feature-item-icon"><img src={menulis} alt='menulis' />
                            </span>

                            <span className="program-feature-item-content">{props.when}</span>
                        </li>
                    </ul>
                </div>

                <span className="program-extra-info">Naujas</span>
            </div>
        </a>
    )
}