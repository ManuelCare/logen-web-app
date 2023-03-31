
import React from "react";
import { Link } from "react-router-dom";
import exAlumniData from "../data/ExAlumni.json"
const ExAlumni = () => {
    return (
        <>
            <Link to="/">Inicio</Link>
            <h1>Ex-Alumnos</h1>
            <ul>
            {exAlumniData.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>{data.name}</p>
                        </li>
                    </div>
                ))}
            </ul>
        </>
      );
  };
export default ExAlumni;