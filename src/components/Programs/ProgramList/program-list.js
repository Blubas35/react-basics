import ProgramItem from './ProgramItem/program-item'
import './program-list.css'

export default function ProgramList() {
    return (
        <div className="program-list">
            <ProgramItem title ='Python – pradedantiesiems užimtiems asmenims (223002626)' text='Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.'
            finance ='Finansuojam UŽT - dirbantiems'
            when = 'Vakarais'
            ></ProgramItem>
            <ProgramItem
            title ='Python – pradedantiesiems užimtiems asmenims (223002626)'
            text='Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.'
            finance ='Finansuojam UŽT - dirbantiems'
            when = 'Vakarais'
            ></ProgramItem>
            <ProgramItem 
            title ='Python – pradedantiesiems užimtiems asmenims (223002626)'
            text='Python – aiškiai suprantama ir greitai išmokstama, tačiau labai universali ir galinga programavimo kalba, todėl šią kalbą išmokti yra nesunku, o ja naudotis – smagu ir patogu.'
            finance ='Finansuojam UŽT - dirbantiems'
            when = 'Vakarais'
            ></ProgramItem>
            <ProgramItem
             finance ='Finansuojam UŽT - dirbantiems'
             when = 'Vakarais'
             ></ProgramItem>
        </div>
    )
}