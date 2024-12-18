import React from 'react'

/* Imports */
import { Link, NavLink } from 'react-router';

/* Styles */
import '../styles/components/NavStyle.css';

const NavbarComponent = () => {
    return (
        <nav className='navbar-background'>
            <ul className='container-buttons'>
                <NavLink className='container-button'>
                    <li className='button'>ACERCA DE MI</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>PROYECTOS</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>ESTUDIOS</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>CONTACTAME</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export { NavbarComponent }
