import axios from 'axios';
import {useState, useEffect} from 'react';
import '../../Contents/CSSFiles/Clothings.css';
import {Cloth} from './cloth.js';


export const Clothings = () => {

  const [clothings,SetClothings] = useState([]);

     useEffect(()=>{
      axios.get('http://localhost:3001/clothings').then(res =>{
        if(res)SetClothings(res.data);
        return
       })
     },[]);

     return(
      <div class="clothings">
        { clothings?.map((clothing,index)=>
         (
          <div >
         <Cloth clothing={clothing} index={index} />
         </div>
         )
      )
         }
      </div>
     )
    
};