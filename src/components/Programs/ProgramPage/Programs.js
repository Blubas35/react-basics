import './Programs.css'

import TitleWrapper from '../BannerTitle/page-title-wrapper'
import ProgramFilter from '../ProgramFilter/program-filter'
import ProgramList from '../ProgramList/program-list'
import Header from '../../Header/header'


export default function Programs() {
    return (
        <>
            <Header> </Header>
            <div className="container">
                <main className="page-content">
                    <TitleWrapper
                        bannerText1='Nežinai ką pasirinkti?'
                        bannerText2='Spręsk IT testą'
                    ></TitleWrapper>

                    <div className="program-wrapper">
                        <ProgramFilter></ProgramFilter>
                        <ProgramList></ProgramList>
                    </div>
                </main>
            </div>
        </>
    )
}