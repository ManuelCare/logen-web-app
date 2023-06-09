
import React from "react";
import { Link } from "react-router-dom";
import dataCurrent from "../../data/projects/current.json"
const CurrentProjects = () => {
  return (<>
    <Link to="/">Inicio</Link>
    <h1>Proyectos Actuales</h1>
    <ul>
      {dataCurrent.map((data, index) => (
        <li>
          <p>{data.name}</p>
        </li>
      ))}
    </ul>
  </>
  );
};

export default CurrentProjects;
