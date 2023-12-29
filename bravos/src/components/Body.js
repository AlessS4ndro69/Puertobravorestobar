// components/Body.js
import React from 'react';

/// muy importante para que funcione javascript de botstrap


import img_ceviche from '../img/cards/portadaceviches.jpg';
import img_marisco from '../img/cards/portada_mariscos.jpg';
import img_chicharron from '../img/cards/portada_chicharron.jpg';
import img_tamal from '../img/cards/tamales (2).jpg'
import img_bebida from '../img/cards/portada_bebidas.jpg';
import img_chicha from '../img/cards/chicha.jpg';
import img_pinacolada from '../img/cards/pinacolada.jpg';
import img_carpa from '../img/cards/carpa.jpg';
import img_parlante from '../img/cards/parlante.jpg';
import img_piscina from '../img/cards/piscina.jpg';
import img_jalea from '../img/cards/jalea.jpg'

const Body = ({handleModal}) => {

    const Card = ({img, modalId}) => {
        

        return(
            <div className="col-md-6 col-lg-4 mb-5">
                <div className="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target={`#${modalId}`}>
                    <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                        <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                    </div>
                    <img className="img-fluid" src={img} alt="..." />
                </div>
            </div>
        );
    };



  return (
    // Contenido de la sección de portafolio aquí
    <section className="page-section portfolio" id="portfolio">
            <div className="container">
                
                <h2 className="page-section-heading text-center text-uppercase text-secondary mb-0">Platos extra y servicios</h2>
                
                <div className="divider-custom">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>
                
                <div className="row justify-content-center">
                    
                    <Card img={img_ceviche} modalId={"card1"}/>
                    <Card img={img_marisco} modalId={"card2"}/>
                    <Card img={img_jalea} modalId={"card11"}/>
                    <Card img={img_chicharron} modalId={"card3"}/>
                    <Card img={img_tamal} modalId={"card4"}/>
                    
                    <Card img={img_chicha} modalId={"card6"}/>
                    <Card img={img_pinacolada} modalId={"card7"}/>
                    <Card img={img_carpa} modalId={"card8"}/>
                    <Card img={img_parlante} modalId={"card9"}/>
                    <Card img={img_piscina} modalId={"card10"}/>
                </div>
            </div>
        </section>
  );
};

export default Body;
