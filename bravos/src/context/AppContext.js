import { useState, createContext } from "react";


const AppContext = createContext();


const initial_data = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 15 },
    { name: 'Item 3', price: 40 },
  ];

const AppProvider = ({children}) => {
    const [itemsOrder, setItemsOrder] = useState([]);
    const [nameItem, setNameItem] = useState("");
    const [priceItem, setPriceItem] = useState(0);

    const removeItem = (index) => {
        const updatedItems = [...itemsOrder];
        updatedItems.splice(index, 1);
        setItemsOrder(updatedItems);
      };
    
      const addItem = (item) => {
        console.log("agregando item ",item);
        const updatedItems = [...itemsOrder,item];
        setItemsOrder(updatedItems);
      };

    const data = {
        itemsOrder, removeItem, addItem, setNameItem, setPriceItem
    };

    return (
        <AppContext.Provider value = {data}>
            {children}
        </AppContext.Provider>
    );
};




export {AppProvider}; 
export default AppContext;