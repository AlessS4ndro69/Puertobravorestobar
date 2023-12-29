import React, { useState, useEffect, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import AppContext from '../context/AppContext';

const Order = ({isVisible, closeModal}) => {
  const [showModal, setShowModal] = useState(isVisible);
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const {itemsOrder, removeItem} = useContext(AppContext);
  

  const openModal = () => setShowModal(true);
  const close = () => {
    closeModal();
    console.log("cerrando desde el mimso componenete order");
  }

  const handleWhatsAppClick = () => {
    const phoneNumber = '+51925968311';
    //const message = 'Hellofriend';

    const dataArray = [
      { name: 'John', age: 25 },
      { name: 'Alice', age: 30 },
      // Agrega más objetos según sea necesario
    ];

    // Construye la cadena de consulta a partir del arreglo de objetos
    //const message = dataArray.map(item => `Name: ${item.name}, Age: ${item.age}`).join(',');
    const message = itemsOrder.map(item => ` ${item.name} : ${item.price}`).join('; ');
    console.log(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=Buenos días mi pedido es el siguiente:${encodeURIComponent(message)} Total:${totalPrice} soles`;
    
    // Abrir el enlace en una nueva ventana o pestaña
    window.open(whatsappLink, '_blank');
    close();
  };


  useEffect(() => {
    setShowModal(isVisible);
    setItems(itemsOrder);
    const total = itemsOrder.reduce((total, item) => total + item.price, 0);
    setTotalPrice(total);
  }, [isVisible, itemsOrder]);

  return (
    <div>
      {/* <button onClick={openModal}>Abrir Modal</button> */}

        {/* si coloco showModal no funciona media hora en ese problema para analizar, solamente con useEfect funciona */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              background: '#fff',
              padding: '20px',
              borderRadius: '8px',
              width: '400px',
              textAlign: 'center',
            }}
          >
            <div style={styles.orderContainer}>
      <h2>Tu orden</h2>
      <ul style={styles.orderList}>
        {items.map((item, index) => (
          <li key={index} style={styles.orderListItem}>
            <span style={styles.itemName}>{item.name}</span>
            <span style={styles.itemPrice}>S/.{item.price}</span>
            <button style={styles.deleteButton} onClick={() => removeItem(index)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </li>
        ))}
      </ul>
      <div style={styles.totalPrice}>Total: S/.{totalPrice}</div>
    </div>
            <button
              style={{
                background: '#ccc',
                padding: '8px 12px',
                marginTop: '10px',
                cursor: 'pointer',
                border: 'none',
              }}
              onClick={()=>handleWhatsAppClick()}
            >
              Enviar pedido
            </button>
          </div>
        </div>
      
        
      )}
    </div>
  );
};

export default Order;




const styles = {
    orderContainer: {
      width: '300px',
      margin: '20px auto',
      padding: '15px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#fff',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    },
    orderList: {
      listStyle: 'none',
      padding: '0',
    },
    orderListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '10px',
    },
    itemName: {
      flexGrow: '1',
    },
    deleteButton: {
      backgroundColor: '#dc3545',
      color: '#fff',
      border: 'none',
      padding: '5px',
      cursor: 'pointer',
      borderRadius: '4px',
    },
    totalPrice: {
      marginTop: '10px',
      fontWeight: 'bold',
    },
  };
  