import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';

import Testimonials from '../components/Testimonials';
import Header from '../components/Header';
import DottedBox from '../components/DottedBox';
import { withPrefix } from "gatsby";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faInstagram } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function Home({data}) {
  console.log('This is the Home page');
  AOS.init();  

  return (
    <PrimaryLayout>
      <div className="wrapper">
        
        <Header />

        {/* Landing Page */}

        <section className="landing">
          <div className="landingText" data-aos="fade-up" data-aos-duration="1000">
            <h1>Carvalho Siqueira <br /><span>advogadas e advogados</span></h1>
            <h3>Apoio jurídico estruturado a organizações, movimentos sociais e ativistas.</h3>
            <a href="#escritorio">
              <div className="btn">
                  Conheça
              </div>
            </a>
          </div>
          <div className="landingImage" data-aos="fade-down" data-aos-duration="2000">
            <img src={withPrefix('/images/social-media.svg')} alt="background image"/>
          </div>
        </section>

        {/* About section */}
        <section className="about">
          <div className="aboutText" data-aos="fade-up" data-aos-duration="1000">
            <h2>Nossa Missão.<br /><span>Nossos Valores.</span></h2>
            <img src={withPrefix('/images/justice.png')} alt=""/>
          </div>  
          <div className="aboutList" data-aos="fade-left" data-aos-duration="1000">
            <ol>
              <li>
                <span>01</span>
                <p>Lutar contra desigualdades estruturais</p>  
              </li>
              <li>
                <span>02</span>
                <p>Lutar por justiça em todas as classes</p>  
              </li>
              <li>
                <span>03</span>
                <p>Combater características que perpetuam desigualdades</p>  
              </li>
              <li>
                <span>04</span>
                <p>Dar voz a quem não se consegue fazer ouvir</p>  
              </li>
            </ol>
          </div>
        </section>

        {/* Info section */}
        <section className="infoSection">
          <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
            <h2>Quem somos, o que fazemos.<br /> <span>E por que fazemos.</span></h2>
          </div>
          <div className="infoCards">
            {/* Card start */}
            <div className="card one" data-aos="fade-up" data-aos-duration="1000">
              <img src={withPrefix('/images/signs.svg')} className='cardOneImg' alt="" data-aos="fade-up" data-aos-duration="1100"/>
              <div className="cardTop">
                <h2>Sheila de Carvalho</h2>
              </div>
              <div className="cardContent">
                
                <p>Bacharel em Direito pela Universidade Presbiteriana Mackenzie, atua como articuladora da Coalizão Negra por Direitos e é coordenadora do Núcleo de Violência Institucional da Comissão de Direitos Humanos da OAB/SP, além de fellow do Programa de Afrodescendentes do Alto Comissariado de Direitos Humanos da ONU, tendo sido eleita pela ONU uma das pessoas negras mais influentes do mundo em 2020 (MIPAD Award 2020). Litiga para organizações e movimentos sociais voltados para construir ações e debater a violência institucional contra população negra e na defesa e promoção dos Direitos Humanos.</p>
                {/* <a href="#"><div className="cardBtn"><FontAwesomeIcon icon={faFacebook} /></div></a> */}                
              </div>
              <ul className="social-icons">
                <li data-aos="fade-left" data-aos-duration="1300"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faFacebook} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1200"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faLinkedin} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1100"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faTwitter} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1000"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faInstagram} /></a></li>
                <li data-aos="fade-up" data-aos-duration="1400"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faWhatsapp} /></a></li>
              </ul>
            </div>
            {/* Card end */}
            {/* Card start */}
            <div className="card one" data-aos="fade-up" data-aos-duration="1000">
                <img src={withPrefix('/images/signs.svg')} className='cardOneImg' alt="" data-aos="fade-up" data-aos-duration="1100"/>
              <div className="cardTop">
                <h2>Flavio Siqueira</h2>
              </div>
              <div className="cardContent">
                
                <p>Bacharel em Direito pela Universidade Presbiteriana Mackenzie, especialista em Interesses Difusos e Coletivos e Mestre em Políticas Públicas pela Escola Superior do Ministério Público de São Paulo e mestre em Políticas Públicas pela Universidade Federal do ABC. Tem nove anos de experiência em incidência em políticas públicas, pesquisa e litígio estratégico de interesse público nacional e internacional contra governos e grandes corporações, tendo atuado em diversas organizações da sociedade civil brasileira.</p>
                {/* <a href="#"><div className="cardBtn"><FontAwesomeIcon icon={faFacebook} /></div></a> */}
              </div>
                <ul className="social-icons">
                  <li data-aos="fade-right" data-aos-duration="1300"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faFacebook} /></a></li>
                  <li data-aos="fade-right" data-aos-duration="1200"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faLinkedin} /></a></li>
                  <li data-aos="fade-right" data-aos-duration="1100"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faTwitter} /></a></li>
                  <li data-aos="fade-right" data-aos-duration="1000"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faInstagram} /></a></li>
                  <li data-aos="fade-down" data-aos-duration="1400"><a href="#"><FontAwesomeIcon className="cardBtn" icon={faWhatsapp} /></a></li>
                </ul>
            </div>
            {/* Card end */}
            {/* Card start */}
            {/* <div className="card two" data-aos="fade-up" data-aos-duration="1300">
              <img src={withPrefix('/images/signs.svg')} className='cardTwoImg' alt="" data-aos="fade-up" data-aos-duration="1200"/>
              <div className="cardBGTwo"></div>
              <div className="cardContent">
                <h2>Sheila de Carvalho</h2>
                <p>Atuante em várias causas e tals...</p>
                <div className="social-icons">
                  <a href="#"><FontAwesomeIcon className="cardBtn" icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon className="cardBtn" icon={faLinkedin} /></a>
                  <a href="#"><FontAwesomeIcon className="cardBtn" icon={faTwitter} /></a>
                  <a href="#"><FontAwesomeIcon className="cardBtn" icon={faInstagram} /></a>
                </div>
                
              </div>
            </div> */}
            {/* Card end */}
          </div>
        </section>

        <Testimonials />
        {/* <DottedBox /> */}
        
        {/* Banner */}
        <section className="banner" id="escritorio" data-aos="fade-right" data-aos-duration="1000">
          <div className="bannerText">
            <h2>Nosso Escritório.<br /> <span className="bannerInnerText">Nossa atuação.</span> </h2>
            <p>Carvalho Siqueira Advogadas e Advogados surge com a proposta de consolidar a experiência de seus sócios, adquiridas a partir da atuação com organizações da sociedade civil, para oferecer apoio jurídico estruturado a organizações, movimentos sociais e ativistas. <br /><br />
            Nosso foco é o integral atendimento da necessidade dos clientes em projetos e campanhas que envolvam incidência estratégica em políticas públicas, análise de riscos, proteção legal e litígio estratégico no sistema de justiça brasileiro e sistemas internacionais de proteção dos direitos humanos (OEA e ONU).
            </p>
            <div className="banner-images">
              <a href="#"><img src={withPrefix('/images/oea.gif')} alt=""/></a>
              <a href="#"><img src={withPrefix('/images/onu.png')} alt=""/></a>  
            </div>
          </div>
          <div className="bannerImg" data-aos="fade-up" data-aos-duration="1000">
            <img src={withPrefix('/images/hands.webp')} alt=""/>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <h2>Veja mais</h2>
          <div className="footerLinks">
            <a href="#" className="mainlink">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
            <a href="#">Contato</a>
          </div>
        </footer>


      </div>
    </PrimaryLayout>
)}
