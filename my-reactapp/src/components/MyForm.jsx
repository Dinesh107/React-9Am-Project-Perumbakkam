import React, { useState } from "react";

function MyForm() {
  //   const [name, setName] = useState("");
  //   const [age, setAge] = useState("");
  //   const [email, setEmail] = useState("");

  const [inputs, setInputs] = useState({phone:"+91", email: "@gmail.com", country:"India", about:"i am student"  });

  //document.getElementById('textInput').value

  //console.log('Current State:- ', name);

  function handleSubmit(e) {
    e.preventDefault(); // Prevent default form submission behavior
    console.log("Form Submitted");
    // console.log('Current State:- ', name, age, email);
    console.log("Current State:- ", inputs);
  }

  function handleChange(e) {
    const name = e.target.name
    const value = e.target.value
    setInputs((preState) => {
      return {...preState,[name]: value}
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Enter your name:-
          <input type="text" name="name" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="">
          Enter your age:-
          <input type="text" name="age" onChange={handleChange} />
        </label>
        <br />
        <br />
        <label htmlFor="">
          Enter your email:-
          <input type="text" name="email" onChange={handleChange} value={inputs.email}/>
        </label>
        <br />
        <br />
        <label htmlFor="">
          Enter your phoneno:-
          <input type="text" name="phone" onChange={handleChange} value={inputs.phone}/>
        </label>
        <br />
        <br />
        <label htmlFor="">Enter the Country:- 
          <select name="country" onChange={handleChange} value={inputs.country}>
            <option value="India">India</option>
            <option value="UK">UK</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Japan">Japan</option>
            <option value="Germany">Germany</option>
          </select>
        </label>
        <br />
        <br />
        <label htmlFor="">Enter about you:- 
          <textarea name="about" id="" onChange={handleChange} value={inputs.about} />
        </label>
        <br />
        <br />
        <input type="submit" value="Submit form" />
      </form>

    </>
  );
}

export default MyForm;


// (event) => {
//   setInput(
//     (preState) => {
//       return {
//         ...preState, name: event.target.value;
//       }
//     }
//   )
// }

// (event) => {
//   setInput(
//     (preState) => {
//       return {
//         ...preState, age: event.target.value;
//       }
//     }
//   )
// }


// (event) => {
//   setInput(
//     (preState) => {
//       return {
//         ...preState, email: event.target.value;
//       }
//     }
//   )
// }