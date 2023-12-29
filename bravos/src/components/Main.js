import logo from '../logo.svg';
import { AppProvider } from '../context/AppContext';
//import './App.css';
// src/App.js
import '../styles.css'
import React, {useState} from 'react';
import Navbar from './Navbar';
import Masthead from './Masthead';
import Body from './Body';
import Footer from './Footer';
import Modal from './Modal';
import Order from './Order';

import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";


const Main = () => {
  const [isVisibleOrder, setVisibleOrder] = useState(false);

  const openOrder = () => {
    console.log("haciendo visible ");
    setVisibleOrder(true);
  }

  const closeOrder = ()=> {
    console.log("cerrando order");
    setVisibleOrder(false);
  };

  

  console.log("isVisibleOrder:", isVisibleOrder); // Agrega este log
  console.log("openOrder:", openOrder); // Agrega este log

  return (
    <div>
      <AppProvider>
        <Navbar  openOrder = {openOrder}/>
        <Masthead />
        <Body />
        {/* <About /> */}
        {/* <Contact /> */}
        <Footer />
        <Modal />
        <Order isVisible = {isVisibleOrder} closeModal = {closeOrder}/>
      </AppProvider>
    </div>
  );
};

export default Main;
