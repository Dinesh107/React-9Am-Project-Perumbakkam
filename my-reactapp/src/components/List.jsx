import React, { useState } from 'react'

function List() {

   const [list, setList] = useState(
        [
           
        ]
);

const [count, setCount] = useState(1)

function addProduct() {
     const productName = 'Product ' + count
     setList((preState) => {
       return [...preState, productName]
     })
     setCount((preState)=> {
        return preState + 1
     })
}

  console.log('Current State:- ', list);
  console.log('Current State:- ', count);
   

  return (
    <>
        <h1>List</h1>
        <button onClick={addProduct}>Add Products</button>
        <ul>
           {
            list.map((el, index) =>  <li key={index}>{el}</li>)
           }
        </ul>
    </>
  )
}

export default List