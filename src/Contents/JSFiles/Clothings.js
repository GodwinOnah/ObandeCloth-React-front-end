import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../Contents/CSSFiles/Clothings.css';
import {Cloth} from './cloth.js';




export const Clothings = () => {

  const [clothings,SetClothings] = useState([]);
  

     useEffect(()=>{
      fetch("http://localhost:8080/api/clothings").then(res =>{
         SetClothings(res.data);
       })
     },[]);


       return clothings?.map((clothing,index)=>
         (
          <div class="clothings">
         <Cloth clothing={clothing} index={index} />
         </div>
         )
      )
};