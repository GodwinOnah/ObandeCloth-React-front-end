import React, { useContext } from 'react';
import '../../Contents/CSSFiles/cloth.css';
import { ClothContext } from '../Context/ClothContext';


export const Cloth = ({clothing,index}) =>{

  // console.log(clothing.clothName);

  const {addToCart} = useContext(ClothContext);
    return(
        <div class="container" key={index}>
            <div class="d-flex containerL">
           <div class="card cardL" >
           <img class="card-img-top" src={clothing.clothPicture}  alt="..."/>
         <div class="card-body">
         <h3>{clothing.clothName}</h3>
           <h3><strong >Price:</strong><strong class="pricing">{clothing.clothPrice}</strong></h3>
         </div>
         <div>
          <button class="addToCart" onClick={()=>addToCart(5)}>Add to Cart</button>
          <button>View</button>
         </div>
       </div> 

           </div>
         </div>
    )
}