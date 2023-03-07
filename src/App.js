import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Data from './Components/Data';

function App() {

  console.log(Data);

  return (
    <div className="App">
      <Navbar />
      <div className="main-body">
        {
          Data.map((item) => {
            const imageSrc = {
              backgroundImage: "url(" + item.image + ")"
            }
            return (
              <Card
                key={item.id}
                number={item.number}
                name={item.name}
                price={item.price}
                disc={item.description}
                category={item.category}
                imageSrc={imageSrc}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
