import axios from 'axios';
import React,{createContext, useState, useEffect} from 'react';


export const ClothContext = createContext(null);

const GetDefaultBasketItems = () =>{
    const [clothings,setClothings] = useState([]);
  
   
        fetch('http://localhost:3001/clothings').then(res =>{
        if(res)setClothings(res.data);
        return;
         })
    
    let cart = {};
     for(let i = 1; i<clothings?.map(clothing=> clothing.length).length+1;i++){
         cart[i] = 0
     }
     return cart;
 }


export const ClothContextProvider = (props) =>{   

    const [basketItems, setBasketItems] = useState(GetDefaultBasketItems());

    const addToCart = (id) =>{
        setBasketItems((prev)=>({ ...prev, [id]: prev[id]+1}))
    }

    const removeFromCart = (id) =>{
        setBasketItems((prev)=>({ ...prev, [id]: prev[id]-1}))
    }

    const contextValue = {basketItems,addToCart,removeFromCart};

    return  <ClothContext.Provider value={contextValue}>
             {props.children}
             </ClothContext.Provider>
}