import React, { Component, useState } from "react";
import './Footer.css';
// import footerStyles from './Footer.module.css';
import { withPrefix } from 'gatsby';
import { render } from "react-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

class Footer extends Component {
  componentDidMount(){
    AOS.init();
  } 
  
  render() {
    // const selectedBodyTheme = useState('light');
  return (
    <footer className="footer" id="contato">
      <div className="contact-us" data-aos="fade-down" data-aos-duration="1000">
        <div>Fale conosco: </div>
        <a className="contact-number" href="https://api.whatsapp.com/send?phone=5511955002906&text=Ol%C3%A1%2C%20time%20do%20Carvalho%20Siqueira%20Advogadas%20e%20Advogados.%20Gostaria%20de%20conversar%20com%20voc%C3%AAs." target="blank" rel="noopenner noreferrer"><span>+55 11 95500 2906</span></a>
      </div>
      <div className="general-info">
        <div className="map" data-aos="fade-right" data-aos-duration="1200">
          <div class="mapouter">
            <div class="gmap_canvas">
              <iframe 
                width="600" 
                height="500" 
                id="gmap_canvas" 
                src="https://maps.google.com/maps?q=Av.%20Get%C3%BAlio%20Vargas%2C%2070%2C%20S%C3%A3o%20Bernardo%20do%20Campo%2FSP%2C%2009751-250&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameborder="0" 
                scrolling="no" 
                marginheight="0" 
                marginwidth="0">
              </iframe>
              <a href="https://goo.gl/maps/rT2ZD8s7c7f7ct6BA"></a>
            </div>
          </div>
        </div>
        <div className="contacts-container" data-aos="fade-left" data-aos-duration="1200">
          <div className="address">
            <h4>O escritório:</h4>
            <a className="contacts-text" href="https://goo.gl/maps/rT2ZD8s7c7f7ct6BA" target="blank" rel="noopenner noreferrer">
              Av. Getúlio Vargas, 70, sala 75<br />
              São Bernardo do Campo/SP<br />
              CEP: 09751-250 <br />
              CNPJ: 12.345.678/9000-01
            </a>

          </div>
          <div className="contact-info">
            <h4 className="contact-title">Os sócios:</h4>
            <div className="all-contacts">
              <div className="contact-01" data-aos="fade-right" data-aos-duration="1400">
                <div className="name"><h5>Sheila de Carvalho</h5></div>
                <FontAwesomeIcon className="footerBtn" icon={faWhatsapp} /><a className="phone contacts-text" href="https://api.whatsapp.com/send?phone=5511976453163" target="blank" rel="noopenner noreferrer">+55 11 97645 3163</a><br />
                <FontAwesomeIcon className="footerBtn" icon={faEnvelope} /><a className="email contacts-text" href="mailto:sheila@carvalhosiqueira.com.br">sheila@carvalhosiqueira.com.br</a><br />
                <FontAwesomeIcon className="footerBtn" icon={faMobileAlt} /><a className="social-media contacts-text" href="#redes-sociais-01">Redes sociais</a><br />
              </div>
              <div className="contact-02" data-aos="fade-left" data-aos-duration="1600">
                <div className="name"><h5>Flávio Siqueira</h5></div>
                <FontAwesomeIcon className="footerBtn" icon={faWhatsapp} /><a className="phone contacts-text" href="https://api.whatsapp.com/send?phone=5511955002906" target="blank" rel="noopenner noreferrer">+55 11 97645 3163</a><br />
                <FontAwesomeIcon className="footerBtn" icon={faEnvelope} /><a className="email contacts-text" href="mailto:flavio@carvalhosiqueira.com.br">flavio@carvalhosiqueira.com.br</a><br />
                <FontAwesomeIcon className="footerBtn" icon={faMobileAlt} /><a className="social-media contacts-text" href="#redes-sociais-02">Redes sociais</a><br />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="credits">
        Powered by <a className="masteradin" href="https://masteradin.com/" target='blank' rel="noopenner noferrer">Masteradin</a>
      </div>
    </footer>
   )
}}

export default Footer;