// components/Footer.js
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const Footer = () => {
  return (
    // Contenido del pie de página aquí
    <footer class="footer text-center">
            <div class="container">
                <div class="row">
                    
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Ubicación</h4>
                        <p class="lead mb-0">
                            Tercera playa, Mollendo
                            <br />
                            Islay
                        </p>
                    </div>
                    
                    <div class="col-lg-4 mb-5 mb-lg-0">
                        <h4 class="text-uppercase mb-4">Siguenos</h4>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaFacebookF /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaTwitter /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaLinkedinIn /></a>
                        <a className="btn btn-outline-light btn-social mx-1" href="#!"><FaDribbble /></a>
                    </div>
                    
                    <div class="col-lg-4">
                        <h4 class="text-uppercase mb-4">Compromiso</h4>
                        <p class="lead mb-0">
                            Estamos comprometidos con las buenas practicas en cocina y alquiler de carpas, piscinas, parlantes en buen estado.
                            
                            .
                        </p>
                    </div>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
