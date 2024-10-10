import React, { useEffect, useState } from 'react'
 
function Timer() {
  
    const [count, setCount] = useState(0)

useEffect(() => {
 console.log('Screen Rendered'); 
//  checkCount(); // Call function to check count and reset if it exceeds 10    
  //setCount(1);
  setTimeout(()=>{
     setCount((preState) => {
         return preState + 1;
     })
  }, 2000)
}, [])


function checkCount() {
    if(count > 5) {
        setCount(1);
    }
}

function updateCount() {
    setCount((preState) => {
       return preState + 1;
    });
}

  return (
    <div>
        <h1>
            I have rendered {count} times
        </h1>
        <button onClick={updateCount} >Increase Count</button>
    </div>
  )
}

export default Timer