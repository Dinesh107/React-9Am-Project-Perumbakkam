
import { useState } from "react";
function FavoriteColor() {
    // let color = 'Blue';
    const [color, setColor] = useState('blue');

  return (
    <>
      <h1>My fav color is {color}</h1>
      <button onClick={()=> {setColor('Red')}} >Change Color</button>
    </>
  )
}

export default FavoriteColor;