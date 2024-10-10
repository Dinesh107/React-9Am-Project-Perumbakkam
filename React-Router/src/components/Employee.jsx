import React from "react";
import { useParams } from "react-router-dom";

export default function Employee() {
  const {id} = useParams()
  return (
    <>
      <h1>Employee Profile Page</h1>
      <p>
        Employee ID is <b>{id}</b>
      </p>
    </>
  );
}
