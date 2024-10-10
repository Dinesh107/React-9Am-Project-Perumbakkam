import React from "react"
import { useNavigate } from "react-router-dom";

export default function Login() {

   const navigate = useNavigate();

   function onSubmit() {
     console.log("Form submitted");
     // Perform form validation and authentication logic here
     // Add your logic here to handle form submission

     navigate("/dashboard"); // Redirect to dashboard page after successful login
   }

    return(
        <>
        <h1>Login Page</h1>
        <button onClick={onSubmit} >Login</button>
        </>
    )
}