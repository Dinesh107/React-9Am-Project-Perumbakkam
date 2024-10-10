import React, { useState } from 'react'

function Bike() {

  // const [color, setColor] = useState("blue");
  // const [brand, setBrand] = useState("Suziki");
  // const [model, setModel] = useState("Gixer");
  // const [year, setYear] = useState("2022");

  const [bike, setBike] = useState(
    {
    color: "blue",
    brand: "Suziki",
    model: "Gixer",
    year: "2022",
   }
);
  
   function updateColor() {
      //  setBike({color: "black"});
      setBike(
        (previousState) => {
          return {
            ...previousState, color: "Black",
          }
        }
      )
   }
  
   console.log("current state:", bike);
   

  return (
    <>
        <h1>My Bike</h1>
        <p>Color:- {bike.color}</p>
        <p>Brand:- {bike.brand}</p>
        <p>Model:- {bike.model}</p>
        <p>Year:- {bike.year}</p>
        <button onClick={updateColor}>Change Color</button>
    </>
  )
}

export default Bike



