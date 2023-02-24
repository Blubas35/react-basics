import './program-filter.css'

export default function ProgramFilter() {
    return (
        <div className="program-filter">
        <form className="program-filter-form">
            <span className="programs-found">Rastos 31 programos</span>
            <div className="form-control">
                <label htmlFor="course-select">Tema</label>
                <select id="course-select">
                    <option>Visos</option>
                    <option>Testavimas</option>
                    <option>Testavimas</option>
                    <option>Programavimas</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="location-select">Bieta</label>
                <select id="location-select">
                    <option>Visos</option>
                    <option>Online</option>
                    <option>Vilnius</option>
                    <option>Kaunas</option>
                </select>
            </div>

            <div className="form-control">
                <label htmlFor="location-select">Tipas</label>
                <select id="location-select">
                    <option>1 + 2 lygis</option>
                    <option>Visos</option>
                    <option>Vilnius</option>
                    <option>Kaunas</option>
                </select>
            </div>


            <fieldset id="time-select">
                <legend>Laikas</legend>
                <div className="form-control checkbox">
                    <input type="checkbox" id="time-variation-1"/>
                    <label htmlFor="time-variation-1">Dienomis</label>
                </div>

                <div className="form-control checkbox">
                    <input type="checkbox" id="time-variation-2"/>
                    <label htmlFor="time-variation-2">Vakarais</label>
                </div>
            </fieldset>

            <button type="reset">Išvalyti</button>
        </form>
    </div>
    )
}