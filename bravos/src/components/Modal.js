import React, { useState, useContext } from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";

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

import CustomCheckbox from "./CustomCheckbox";




const FloatingModal = ({data, setData}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [hasBeenPurchased, setPurchased] = useState(false);

  
  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const toPurchased = (bool) => {
    setPurchased(bool);
  };

  


  const ModalItem = ({modalId, title, img, description, price}) => {
    return(
        <div className="portfolio-modal modal fade" id={modalId} tabindex="-1" aria-labelledby={`#${modalId}`} aria-hidden="true">
            <div className="modal-dialog modal-xl">
                <div className="modal-content">
                    <div className="modal-header border-0"><button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button></div>
                    <div className="modal-body text-center pb-5">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-8">
                                    
                                    <h2 className="portfolio-modal-title text-secondary text-uppercase mb-0">{title}</h2>
                                    
                                    <div className="divider-custom">
                                        <div className="divider-custom-line"></div>
                                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                                        <div className="divider-custom-line"></div>
                                    </div>
                                    
                                    <img className="img-fluid rounded mb-5" src={img} alt="..." />
                                    
                                    
                                    <p className="mb-4">{description}</p>
                                    <p><span>S/. {price}</span></p>

                                    <CustomCheckbox title={title} price={price}/>
                                    <p className="mb-4"></p>

                                    <button className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>{
        
                                    }
                                    }>
                                        <i className="fas fa-xmark fa-fw"></i>
                                        Cerrar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
  }

  return(
    <>
    <ModalItem modalId={"card1"} title={"Ceviche"} img={img_ceviche} price={30} description={'El corazón del ceviche es el pescado fresco, cortado en trozos pequeños y marinado en jugo de limón. Esta técnica de cocción "al frío" le confiere al pescado una textura tierna y un sabor impregnado con la frescura cítrica. El ají, un elemento clave en la cocina peruana, agrega un toque de picante, mientras que la cebolla roja y el cilantro aportan una explosión de sabores herbáceos y crujientes.'} />
    <ModalItem modalId={"card2"} title={"Arroz de mariscos"} img={img_marisco} price={30} description={'En el corazón de este plato se encuentra una mezcla exquisita de arroz, mariscos frescos y una selección de ingredientes aromáticos. Los mariscos, que pueden incluir camarones, calamares, mejillones y pulpo, se cocinan a la perfección, infundiendo al arroz con su sabor deliciosamente salado. La adición de ají, ajo y cilantro agrega capas de complejidad, creando un plato que es tanto reconfortante como emocionante.'}/>
    <ModalItem modalId={"card3"} title={"Chicharrón de mariscos"} img={img_chicharron} price={60} description={'En este plato, los mariscos, que pueden incluir camarones, calamares y pescado, son cuidadosamente sazonados y cubiertos con una capa de masa ligera antes de ser fritos hasta obtener una textura dorada y crujiente. Este método de preparación confiere a los mariscos una capa exterior crujiente y un interior jugoso y lleno de sabor.'}/>
    <ModalItem modalId={"card4"} title={"Tamal"} img={img_tamal} price={5} description={'Los tamales peruanos son pequeños paquetes de maíz rellenos de una mezcla suculenta de ingredientes. La masa de maíz, conocida como masa de tamal, se mezcla con diversos ingredientes, como carne de cerdo, pollo, aceitunas, pasas, pimientos y hierbas aromáticas. Esta mezcla se envuelve en hojas de maíz y se cocina al vapor, creando un plato tierno y lleno de sabor.'}/>
    <ModalItem modalId={"card11"} title={"Jalea Familiar"} img={img_jalea} price={110} description={'La jalea de mariscos es un exquisito platillo que combina la frescura del mar con una presentación única y deliciosa. Se trata de una preparación culinaria que destaca por su mezcla de sabores y texturas, convirtiéndola en una opción apetitosa para los amantes de los frutos del mar.'}/>
    <ModalItem modalId={"card6"} title={"Chicha morada"} img={img_chicha} price={5} description={'La chicha morada se elabora a partir del maíz morado, un maíz de tonalidad oscila que le confiere su característico color púrpura. La preparación de la bebida implica cocinar el maíz morado con frutas como piña, manzana y membrillo, y aromatizar con especias como canela y clavo de olor. Finalmente, se endulza con azúcar y se enfría para crear una refrescante bebida.'}/>
    <ModalItem modalId={"card7"} title={"Piña colada"} img={img_pinacolada} price={15} description={'La piña colada es un cóctel que combina ingredientes simples pero exquisitos. Su receta básica incluye piña fresca, crema de coco, ron blanco y hielo, todo mezclado hasta obtener una consistencia suave y cremosa. El resultado es una bebida refrescante con un equilibrio perfecto entre lo dulce, lo frutal y lo tropical.'}/>
    <ModalItem modalId={"card8"} title={"Alquiler de carpa"} img={img_carpa} price={30} description={'La carpa crea un área privada en la playa, permitiendo a las personas cambiar de ropa, relajarse y disfrutar de sus actividades con mayor comodidad, proporcionan un espacio protegido para que los niños jueguen y descansen, ofreciendo a los padres tranquilidad al saber que sus hijos están resguardados, Al proporcionar un espacio protegido y cómodo, las carpas contribuyen a una experiencia más relajada en la playa, fomentando momentos de descanso y disfrute.'}/>
    <ModalItem modalId={"card9"} title={"Alquiler de parlante"} img={img_parlante} price={20} description={'Un equipo de sonido permite la reproducción de música, creando un ambiente festivo y alegre en la playa. La música es capaz de mejorar el estado de ánimo de las personas y generar una sensación de diversión y relajación'}/>
    <ModalItem modalId={"card10"} title={"Alquiler de piscina"} img={img_piscina} price={20} description={'Una piscina bien diseñada puede ofrecer un ambiente más tranquilo y relajante en comparación con el bullicio y las olas del mar. Esto puede ser especialmente atractivo para aquellos que buscan momentos de paz y privacidad. Las piscinas ofrecen un espacio seguro y controlado para que los niños disfruten del agua, lo que puede ser una opción más cómoda para las familias con niños pequeños.'}/>

    </>
  );
};

FloatingModal.propTypes = {
  img: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default FloatingModal;


