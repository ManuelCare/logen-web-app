import React from "react";
import { Link } from "react-router-dom";
import pregradoData from "../data/CurrentAlumni/pregrado.json"
import magisterdata from "../data/CurrentAlumni/magister.json"
const CurrentAlumni = () => {
    return (
        <>
            <Link to="/">Inicio</Link>
            <h1>Alumnos Actuales</h1>
            <br/>
            <h2>Pregado</h2>
            <ul>
                {pregradoData.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>{data.name}</p>
                        </li>
                    </div>
                ))}
            </ul>
            <br/>
            <h2>Magister</h2>
            <ul>
                {magisterdata.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>{data.name}</p>
                        </li>
                    </div>
                ))}
            </ul>
            <br/>
        </>
    );
};

export default CurrentAlumni;