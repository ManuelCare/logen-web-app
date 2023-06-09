
import people_es from '../data/people_es.json';
import projects_es from '../data/projects_es.json';
import { Link } from "react-router-dom";
import "./Home.css"
import dog from "./dog.jpg"

const Home = () => {
  return <div className="home-container">
      <h1>Logen</h1>
      <div id="introduccion">
        <p>Logen es un grupo de investigación ubicado en Valdivia, Los Ríos, Chile,
          con foco en la creación de algoritmos de compresión para big data eficientes y ecológicos.
        </p>
      </div>
      <div className="sec-bar"></div>
      <div id="horizontal-section">
        <div id="proyectos">
          <h2>Proyectos</h2>
          <ul>
            <li><Link to="/current-projects">Proyectos Actuales</Link></li>
            <li><Link to="/closed-projects">Proyectos Cerrados</Link></li>
            <li><Link to="/collaboration-projects">Proyectos de Colaboración</Link></li>
          </ul>
        </div>
        <div id="personas">
          <h2>Equipo</h2>
          <ul>
            <li>Investigador principal: Ferrada, H. <a href="https://inf.uach.cl/equipo/hector-ferrada/" target="_blank"> [sitio web UACh]</a></li>
            <li><Link to="/current-alumni">Alumnos Actuales</Link></li>
            <li><Link to="/ex-alumni">Ex-Alumnos</Link></li>
            <li><Link to="/collaborators">Colaboradores</Link></li>
          </ul>
        </div>
      </div>
      <div id="publicaciones">
        <h2>Publicaciones</h2>
      </div>
      <div id="contacto">
        <h2>Contacto</h2>
        <p>Si desea contactarnos, le ofrecemos los siguientes medios de comunicación:</p>
        <ul>
          <li>Teléfono: 1234567890</li>
          <li>Email: correo@real.com</li>
        </ul>
      </div>
    </div>
};

export default Home;
