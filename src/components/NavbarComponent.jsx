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
                    <li className='button'>About Me</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>Projects</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>Studies</li>
                </NavLink>
                <NavLink className='container-button'>
                    <li className='button'>Contact Me</li>
                </NavLink>
            </ul>
            <ul>
                <button>ES-EG</button>
                <button>DARK MODE</button>
            </ul>
        </nav>
    )
}

export { NavbarComponent }
