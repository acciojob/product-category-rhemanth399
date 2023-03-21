
import React from "react";
import './../styles/App.css';
import {useState} from 'react';

const App = () => {
  const products = {
    male: [
      { id: 1, name: 'Shirt' },
      { id: 2, name: 'Facial-grooming kit' },
      { id: 3, name: 'Hair styling' },
      { id: 4, name: 'Jeans' },
      { id: 5, name: 'Shoes' }
    ],
    female: [
      { id: 1, name: 'Top' },
      { id: 2, name: 'Skirt' },
      { id: 3, name: 'Makeup item' },
      { id: 4, name: 'Jewellery' },
      { id: 5, name: 'Sandals' }
    ]
  };
  

  const [gender,setGender]=useState('male')

  let handle=(e)=>{
    setGender(e.target.value)
  }
  return (
    <div>
        
        <label htmlFor="dropdown"></label>
        <select id='dropdown' value={selectOption} onChange={handle}>
          <option value="male">Male</option>
          <option value='female'>Female</option>
        </select>
        <ul>
          {products[gender].map((product)=>(
            <li key={product.id}>{product.name}</li>
          ))}
        </ul>
    </div>
  )
}

export default App
