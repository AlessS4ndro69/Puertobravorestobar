// components/Navbar.js
import React, { useEffect, useState } from 'react';

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

const Navbar = ({openOrder}) => {

    const [navbarShrink, setNavbarShrink] = useState(false);

    const handleOpenOrder = () => {
        console.log("Clic en Navbar");
        openOrder();
    };

    // Función para manejar el encogimiento de la barra de navegación
    const handleNavbarShrink = () => {
        if (window.scrollY === 0) {
        setNavbarShrink(false);
        } else {
        setNavbarShrink(true);
        }
    };

    const phoneNumber = '+51925968311'; // Reemplaza con el número de teléfono deseado

    const handlePhoneCall = () => {
        const phoneLink = `tel:${phoneNumber}`;
        window.location.href = phoneLink;
    };
      
      

    // Efecto para añadir y quitar la clase 'navbar-shrink' cuando se desplaza la página
    useEffect(() => {
        // Shrink la barra de navegación al cargar la página
        handleNavbarShrink();

        // Shrink la barra de navegación cuando se desplaza la página
        window.addEventListener('scroll', handleNavbarShrink);

        // Limpia el event listener al desmontar el componente
        return () => {
        window.removeEventListener('scroll', handleNavbarShrink);
        };
    }, []); // El segundo parámetro del useEffect está vacío para que solo se ejecute una vez al montar el componente
                                                                    
  return (
    // Contenido de la barra de navegación aquí
    <nav className={navbarShrink ? 'navbar navbar-shrink' : 'navbar'}>
        <nav class="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
            <div class="container">
                <a class="navbar-brand" href="#page-top">Puerto Bravo Restobar</a>
                <button class="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>handleOpenOrder()}>
                Pedido            
                     


                </button>
                {/* <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Pedido</a></li> */}
                        {/* <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li> }
                        <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" onClick={()=>handlePhoneCall()}>Realizar pedido</a></li>
                    </ul>
                </div>*/}
            
            </div>
        </nav>
    </nav>
  );
};

export default Navbar;



