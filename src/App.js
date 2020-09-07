import React from 'react';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

const App = () => {
  const [countries,setCountries] = useState([]);
  const [cart,setCart] = useState([])
  
  
        useEffect(()=>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))
        .catch(error=>console.log(error))
         }, [])
         const handleAddCountry = (country)=>{
          const newCart = [...cart,country];
          setCart(newCart);   
          console.log(newCart);
        
         }
  return (
    <div className='App'> 
      <p>Total Country: {countries.length} </p>
       <p>Country Added: {cart.length}</p>
      <Cart cart={cart}></Cart>
      <ol>
      {
        countries.map(country =><Country handleAddCountry={handleAddCountry} country={country}></Country>)
      }
      </ol>
    </div>
  );
};

export default App;
