import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Container from '../container/container'
import './MainNavigation.css'

const MainNavigation = () => {
    return (
        <Container>
            <ul className='main-navigation'>
                <li>
                    <NavLink to='/other-projects/counter'>Counter</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/CarFormPage'>Car Form Page</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/shopping-list'>Shopping List</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/to-do-list'>To do list</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/student-form'>Student Form</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/chuck-norris-page'>Chuck Norris Page</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/bored-api'>Bored Api Page</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/bitcoin-api'>Bitcoin Api Page</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/boredOther-api'>Bored Other Api Page</NavLink>
                </li>
                <li>
                    <NavLink to='/other-projects/genderize-api'>Genderize Api Page</NavLink>
                </li>
            </ul>
        </Container>
    )
}

export default MainNavigation