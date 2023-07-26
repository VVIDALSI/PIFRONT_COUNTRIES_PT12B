import React from "react";
import stlFooter from "./Footer.module.css";
import logoWebVidal from "../../images/WebVidal.svg";
import whatsapp from "../../images/whatsapp.png";
import linkedin from "../../images/linkedin.png";
import telefono from "../../images/telefono.png";
import github from "../../images/github.svg"

const Footer = () => {
  return (
    <div className={stlFooter.footerCont}>

      <div className={stlFooter.logoWV}>
        <img src={logoWebVidal} alt="" />
      </div>

      <div className={stlFooter.copyright}>
        <h3>Copyright © 2023 WEB VIDAL</h3>
      </div>

      <div className={stlFooter.contact}>
        <a href="https://wa.me/573154629071?text=Cordial%20saludo,%20lo%20estamoscontactando%20porque%20vimos%20la%20pagina%20web%20de%20su%20Hoja%20de%20vida"><img href="" src={whatsapp} alt="" /></a>

        <a href="https://github.com/VVIDALSI"><img  src={github} alt="" /></a>

        <a href="https://www.linkedin.com/in/victor-alejandro-vidal-silva-85b373192/"><img  src={linkedin} alt="" /></a>

        <a href="tel:+573154629071"><img  src={telefono} alt="" /></a>
        
      </div>
    </div>
  );
};

export default Footer;
