import React, { useEffect, useState, useContext } from "react";
import AppContext from "../context/AppContext";



const CustomCheckbox = ({ title, price}) => {
    const [isChecked, setChecked] = useState(false);
  
    const {itemsOrder, addItem} = useContext(AppContext);

    const handleCheckboxChange = () => {
      setChecked(!isChecked);
      
    };
  
    useEffect(()=> {
        if(isChecked){
            addItem({
                name: title, price: price
            })
        }
    },[isChecked]);
    return (
      <label style={checkboxStyle}>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={
            handleCheckboxChange
            }
          style={{ display: 'none' }}
        />
        
            <span style={checkboxBackground}>

            {isChecked && <span style={check}>✓</span>}
            </span>
        Agregar al pedido
      </label>
    );
  };


  export default CustomCheckbox;

  const checkboxBackground = {
    position: 'absolute',
    top: '0',
    left: '0',
    height: '30px',
    width: '30px',
    backgroundColor: 'white', // Fondo blanco
    border: '1px solid #4CAF50',
    borderRadius: '4px',
  };
  
  const checkmarkStyle = {
    position: 'absolute',
    top: '4px', // Alineado para centrar verticalmente
    left: '4px', // Alineado para centrar horizontalmente
    height: '22px', // Ajustado el tamaño del check
    width: '22px', // Ajustado el tamaño del check
    backgroundColor: 'green', // Color verde para el check
    borderRadius: '4px',
  };

  const checkboxStyle = {
    display: 'inline-block',
    position: 'relative',
    paddingLeft: '40px',
    cursor: 'pointer',
    fontSize: '18px',
  };

  const check = {
    
    color: "green",
    fontWeight: "bold",
    fontSize: 18, // Ajusta el tamaño del check
  };


  const circle =  {
    width: 23,
    height: 23,
    backgroundColor: "transparent",
    borderRadius: 40,
    borderWidth: 4,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
  };