import React from 'react';

/* Components */
import { NavbarComponent } from '../components/NavbarComponent';

/* Images */
import image from "../assets/imgs/background1.jpeg";

/* Style */
import '../styles/pages/HomeStyle.css';

const Homepage = () => {
    return (
        <div className='Homepage-background'>
            <section className='about-me-container'>
                <div>
                    <div >
                        <h1 className='name'>Andrés Eliécer Berdugo C.</h1>
                        <h2>Programador Backend</h2>
                        <p>Colimbia - Medellín</p>
                    </div>
                    <div>
                        <button>Descargar Cv</button>
                        <button>Git Hub</button>
                        <button>Linkedin</button>
                    </div>
                    <div>
                        <h2>Sobre Mi</h2>
                        <p>
                            Hola soy un programador especializado en el desarrollo de aplicaciones
                            del lado del backend más que todo en Spring Boot y Express. Tambíen con
                            conocimientos del Frontend en React y Tailwind.
                        </p>
                    </div>
                </div>
                <img
                    src={image}
                    alt="Imagen de estudio de programador"
                    className='iamge-about-me'
                />
            </section>
            <section>
                <h1>Proyectos</h1>
                <div></div>
            </section>
        </div>
    )
}

export { Homepage }
