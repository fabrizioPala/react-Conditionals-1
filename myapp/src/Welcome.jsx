import React from "react";
import { Age } from "./Age";

export function Welcome({ name, age }) {
  return (
    <div>
      <p>Welcome, <strong>{name}</strong></p>
      {age>18 &&<p>You are {age}</p>}
      {age &&<p>You are {age}</p>}
      {age >18 && age < 65 &&<p>You are {age}</p>}
      {age >18 && age <65 && name==="Jhon" &&<p>You are {age}</p>}
      {age &&<p>You are {age}</p>}
    </div>
  );
}



