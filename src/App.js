import './App.css';
import {Routes,Route}from 'react-router-dom';
import {Nav} from './Contents/JSFiles/Nav.js';
import {Admin}from './Contents/JSFiles/Admin.js';
import {Clothings}from './Contents/JSFiles/Clothings.js';
import "react-toastify/dist/ReactToastify.css";
import bgImage from  "./Images/pink-sweater-front.jpeg";
import {ClothContextProvider} from './Contents/Context/ClothContext.js';
import {BrowserRouter}from 'react-router-dom';
import { Basket } from './Contents/JSFiles/Basket';


function App() {
  return (
   
    <div className="App" style={{backgroundImage: `url(${bgImage})`}}>
       <ClothContextProvider>
       < BrowserRouter>
  
   
      <Nav /> 
    <Routes>
        <Route path='/' exact element={<Clothings/>}/>
        <Route path='Admin' element={<Admin />} />
        <Route path='Basket' element={<Basket />} />
      </Routes> 
      </ BrowserRouter >
      </ClothContextProvider>
    </div>
   
  );
}

export default App;
