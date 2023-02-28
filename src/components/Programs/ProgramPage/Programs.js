import './Programs.css'

import TitleWrapper from '../BannerTitle/page-title-wrapper'
import ProgramFilter from '../ProgramFilter/program-filter'
import ProgramList from '../ProgramList/program-list'
import Header from '../../Header/header'


export default function Programs() {
    const formTitle = 'Rastos 31 programos'
    const buttonText = 'Išvalyti'
    const formData = [
        {
            title: 'Tema',
            option1: 'Visos',
            option2: 'Testavimas',
            option3: 'Testavimas',
            option4: 'Programavimas',
        },
        {
            title: 'Vieta',
            option1: 'Visos',
            option2: 'Online',
            option3: 'Vilnius',
            option4: 'Klaipeda',
        },
        {
            title: 'Tipas',
            option1: '1 + 2 lygis',
            option2: 'Visos',
            option3: 'Pradedanciuju',
            option4: 'Programavimas',
        },
        {
            title: 'Tema',
            option1: 'Visos',
            option2: 'Testavimas',
            option3: 'Testavimas',
            option4: 'Programavimas',
        },
    ]
    const timeSelect = [
        {
            title: 'Laikas',
            checkBox1: 'Dienomis',
            checkBox2: 'Vakarais'
        },
    ]

    return (
        <>
            <Header> </Header>
            <div className="container">
                <main className="page-content">
                    <TitleWrapper
                        title='Programos'
                        bannerText1='Nežinai ką pasirinkti?'
                        bannerText2='Spręsk IT testą'
                    ></TitleWrapper>

                    <div className="program-wrapper">
                        <ProgramFilter 
                        info={formData} 
                        title={formTitle} 
                        timeSelect= {timeSelect} 
                        buttonText = {buttonText}
                        ></ProgramFilter>
                        <ProgramList></ProgramList>
                    </div>
                </main>
            </div>
        </>
    )
}