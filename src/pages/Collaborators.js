
import React from "react";
import { Link } from "react-router-dom";

const Collaborators = () => {
  return (
    <>
        <Link to="/">Inicio</Link>
        <h1>Colaboradores</h1>
        <ul>
            <li>
                <p>Dr. Navarro, C. <a href=".\documents\lorem.pdf" target="_blank" >funciona </a></p> 
            </li>
            <li>
                <p>Dra. Hitschfeld, N.</p>
            </li>
        </ul>
    </>
  );
  };
  
  export default Collaborators;
  