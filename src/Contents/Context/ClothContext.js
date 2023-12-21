import React,{createContext, useState, useEffect} from 'react';
import axios from 'axios';

export const ClothContext = createContext(null);

const GetDefaultBasketItems = () =>{
    const [clothings,setClothings] = useState([]);

   
    
        fetch("http://localhost:8080/api/clothings").then(res =>{
           setClothings(res.data);
         })
     
    let cart = {};

     for(let i = 1; i<clothings?.map(clothing=>{ return clothing.length}).length+1;i++){
         cart[i] = 0
     }
     return cart;
 }


export const ClothContextProvider = (props) =>{

    
    // console.log(clothings);

    

    const [basketItems, setBasketItems] = useState(GetDefaultBasketItems());
    console.log(basketItems);

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