import React from "react";
import "./FooterStyles.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bar"></div>
      <div className="contact-info">
        <h4>Contacto</h4>
        <p>Fono: +56 63 2221427</p>
        <p>Correo: hferrada@inf.uach.cl</p>
        <p>Dirección: Valdivia, Los Ríos</p>
      </div>
    </footer>
  );
};

export default Footer;