
import React from "react";
import { Link } from "react-router-dom";
import exAlumniData from "../../data/team/ExAlumni.json"
const ExAlumni = () => {
    return (
        <>
            <Link to="/">Inicio</Link>
            <h1>Ex-Alumnos</h1>
            <ul>
                {exAlumniData.map((data, index) => (
                    <div key={index}>
                        <li>
                            <p>{data.name}
                                {data.links?.map((linksData, index) => (
                                    <> <a href={linksData.href} target="_blank">[{linksData.name}]</a></>
                                ))}
                            </p>
                        </li>
                    </div>
                ))}
            </ul>
        </>
    );
};
export default ExAlumni;