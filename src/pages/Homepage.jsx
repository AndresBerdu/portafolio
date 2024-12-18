import React from 'react';

/* Components */
import { NavbarComponent } from '../components/NavbarComponent';

/* Images */
import image from "../assets/imgs/background1.jpeg";

/* Icons */
import gitHubIcon from '../assets/icons/github-icon.svg';
import downloadIcon from '../assets/icons/download-icon.svg';
import linkedinIcon from '../assets/icons/linkedin-in-icon.svg';

/* Style */
import '../styles/pages/HomeStyle.css';

const Homepage = () => {
    return (
        <div className='Homepage-background'>
            <NavbarComponent />
            <section className='about-me-container1'>
                <div className='text-container'>
                    <div >
                        <h1 className='title-1'>Andrés Eliécer Berdugo C.</h1>
                        <h2 className='title-2'>Programador Backend</h2>
                        <p className='pais-ciudad'>Colimbia - Medellín</p>
                    </div>
                    <div className='buttons-container'>
                        <div button className='buttons'>
                            <p className='text-button'>Descargar Cv</p>
                            <img src={downloadIcon} alt="icono GitHub" />
                        </div>
                        <div className='buttons'>
                            <a className='text-button' href='https://github.com/AndresBerdu'>Git Hub</a>
                            <img src={gitHubIcon} alt="icono GitHub" />
                        </div>
                        <div className='buttons'>
                            <a className='text-button' href='https://www.linkedin.com/in/andrés-eliécer-berdugo-castro-7b705b27a/'>Linkedin</a>
                            <img src={linkedinIcon} alt="icono GitHub" />
                        </div>
                    </div>
                    <div>
                        <h2 className='title-2'>Sobre Mi</h2>
                        <p className='text-1'>
                            Hola soy un programador especializado en el desarrollo de aplicaciones
                            del lado del backend más que todo en Spring Boot y Express. Tambíen con
                            conocimientos del Frontend en React y Tailwind.
                        </p>
                    </div>
                </div>
                <img className='image-about-me' src={image} alt='Imagen de estudio de programador' loading='lazy' />
            </section>
            <section className='about-me-container2'>
                <h1 className='title-1'>Proyectos</h1>
                <div>

                </div>
            </section>
        </div>
    )
}

export { Homepage }
