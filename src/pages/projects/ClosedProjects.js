
import React from "react";
import { Link } from "react-router-dom";
import dataClosed from "../../data/projects/closed.json"
const ClosedProjects = () => {
  return (<>
    <Link to="/">Inicio</Link>
    <h1>Proyectos Cerrados</h1>
    <ul>
      {dataClosed.map((data, index) => (
        <li>
          <p>{data.name}</p>
          <p>{data.desc}</p>
        </li>
      ))}
    </ul>
  </>
  );
};

export default ClosedProjects;
