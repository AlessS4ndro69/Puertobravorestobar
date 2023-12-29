// components/Masthead.js
import React from 'react';
import avatar from '../img/logorestaurant.jpg'

const Masthead = () => {
  return (
    // Contenido del encabezado principal aquí
    <header class="masthead bg-primary text-white text-center">
            <div class="container d-flex align-items-center flex-column">
                
                <img class="masthead-avatar mb-5" src={avatar} alt="..." />
                
                <h1 class="masthead-heading text-uppercase mb-0">Puerto Bravo</h1>
                
                <div class="divider-custom divider-light">
                    <div class="divider-custom-line"></div>
                    <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                    <div class="divider-custom-line"></div>
                </div>
                
                <p class="masthead-subheading font-weight-light mb-0">Pescados - Mariscos - Bebidas</p>
            </div>
        </header>
  );
};

export default Masthead;
