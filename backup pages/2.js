import React, { Component } from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import Testimonials from '../components/Testimonials';
import { withPrefix } from "gatsby";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";


export default class Home extends Component {
  componentDidMount(){
    console.log('This is the Home page');
    AOS.init();  
  }
  render() {
  return (
    <PrimaryLayout>
      <div className="wrapper">
        
        {/* <Header /> */}

        {/* Landing Page */}

        <section className="landing" id="landing">
          <div className="landingText" data-aos="fade-down" data-aos-duration="1000">
            {/* <h1>Carvalho Siqueira <br /><span>advogadas e advogados</span></h1> */}
            <a href="#landing"><img className='logo-img' src={withPrefix('/images/logo_carvalhosiqueira_vermelho.webp')} alt="Carvalho Siqueira | Advogadas e advogados"/></a>
            <h3>Apoio jurídico estruturado a organizações, movimentos sociais e ativistas.</h3>
            <a href="#escritorio" className="btn">Conheça</a>
          </div>
          <div className="landingImage" data-aos="fade-up" data-aos-duration="2000">
          {/* <img src={withPrefix('/images/black-fist.png')} alt="background image"/> */}
            {/* <img src={withPrefix('/images/white-fist.png')} style={{opacity: 1}} alt="background image"/> */}
            <img src={withPrefix('/images/signs.svg')} alt="background" style={{opacity: 1, width: '25vh'}}/>
          </div>
        </section>

        {/* About section */}
        <section className="about" id="missao">
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
        <section className="infoSection" id="sobre-nos">
          <div className="infoHeader" data-aos="fade-up" data-aos-duration="1000">
            <h2>Quem somos, o que fazemos.<br /> <span>E por que fazemos.</span></h2>
          </div>
          <div className="infoCards">
            {/* Card start */}
            <div className="card one" data-aos="fade-up" data-aos-duration="1000">
              <img src={withPrefix('/images/sheila.png')} className='cardOneImg' alt="" data-aos="fade-up" data-aos-duration="1100"/>
              <div className="cardTop">
                <h2>Sheila de Carvalho</h2>
              </div>
              <div className="cardContent" id="redes-sociais-01">
                
                <p>Bacharel em Direito pela Universidade Presbiteriana Mackenzie, atua como articuladora da Coalizão Negra por Direitos e é coordenadora do Núcleo de Violência Institucional da Comissão de Direitos Humanos da OAB/SP, além de fellow do Programa de Afrodescendentes do Alto Comissariado de Direitos Humanos da ONU, tendo sido eleita pela ONU uma das pessoas negras mais influentes do mundo em 2020 (MIPAD Award 2020). Litiga para organizações e movimentos sociais voltados para construir ações e debater a violência institucional contra população negra e na defesa e promoção dos Direitos Humanos.</p>
              </div>
              <ul className="social-icons">
                <li data-aos="fade-left" data-aos-duration="1400"><a href="mailto:sheila@carvalhosiqueira.com.br" target="blank" rel="noopenner noreferrer" aria-label="email"><FontAwesomeIcon className="cardBtn" icon={faEnvelope} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1300"><a href="https://www.facebook.com/" target="blank" rel="noopenner noreferrer" aria-label="facebook"><FontAwesomeIcon className="cardBtn" icon={faFacebook} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1200"><a href="https://www.linkedin.com/" target="blank" rel="noopenner noreferrer" aria-label="linkedin"><FontAwesomeIcon className="cardBtn" icon={faLinkedin} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1100"><a href="https://twitter.com/" target="blank" rel="noopenner noreferrer" aria-label="twitter"><FontAwesomeIcon className="cardBtn" icon={faTwitter} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1000"><a href="https://www.instagram.com/" target="blank" rel="noopenner noreferrer" aria-label="instagram"><FontAwesomeIcon className="cardBtn" icon={faInstagram} /></a></li>
                <li data-aos="fade-up" data-aos-duration="1400"><a href="https://api.whatsapp.com/send?phone=5511976453163" target="blank" rel="noopenner noreferrer" aria-label="whatsapp"><FontAwesomeIcon className="cardBtn" icon={faWhatsapp} /></a></li>
              </ul>
            </div>
            {/* Card end */}
            {/* Card start */}
            <div className="card one" data-aos="fade-up" data-aos-duration="1000">
                <img src={withPrefix('/images/flavio.png')} className='cardOneImg' alt="" data-aos="fade-up" data-aos-duration="1100"/>
              <div className="cardTop">
                <h2>Flavio Siqueira</h2>
              </div>
              <div className="cardContent" id="redes-sociais-02">
                
                <p>Bacharel em Direito pela Universidade Presbiteriana Mackenzie, especialista em Interesses Difusos e Coletivos e Mestre em Políticas Públicas pela Escola Superior do Ministério Público de São Paulo e mestre em Políticas Públicas pela Universidade Federal do ABC. Tem nove anos de experiência em incidência em políticas públicas, pesquisa e litígio estratégico de interesse público nacional e internacional contra governos e grandes corporações, tendo atuado em diversas organizações da sociedade civil brasileira.</p>
              </div>
              <ul className="social-icons">
                <li data-aos="fade-left" data-aos-duration="1400"><a href="mailto:flavio@carvalhosiqueira.com.br" target="blank" rel="noopenner noreferrer" aria-label="email"><FontAwesomeIcon className="cardBtn" icon={faEnvelope} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1300"><a href="https://www.facebook.com/" target="blank" rel="noopenner noreferrer" aria-label="facebook"><FontAwesomeIcon className="cardBtn" icon={faFacebook} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1200"><a href="https://www.linkedin.com/" target="blank" rel="noopenner noreferrer" aria-label="linkedin"><FontAwesomeIcon className="cardBtn" icon={faLinkedin} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1100"><a href="https://twitter.com/" target="blank" rel="noopenner noreferrer" aria-label="twitter"><FontAwesomeIcon className="cardBtn" icon={faTwitter} /></a></li>
                <li data-aos="fade-left" data-aos-duration="1000"><a href="https://www.instagram.com/" target="blank" rel="noopenner noreferrer" aria-label="instagram"><FontAwesomeIcon className="cardBtn" icon={faInstagram} /></a></li>
                <li data-aos="fade-up" data-aos-duration="1400"><a href="https://api.whatsapp.com/send?phone=5511955002906" target="blank" rel="noopenner noreferrer" aria-label="whatsapp"><FontAwesomeIcon className="cardBtn" icon={faWhatsapp} /></a></li>
              </ul>
            </div>
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
              <a data-aos="fade-right" data-aos-duration="1200" href="https://www.oas.org/pt/" target="blank" rel="noopenner noreferrer"  aria-label="oea"><img src={withPrefix('/images/oea.gif')} alt=""/></a>
              <a data-aos="fade-left" data-aos-duration="1400" href="https://nacoesunidas.org/" target="blank" rel="noopenner noreferrer"  aria-label="onu"><img src={withPrefix('/images/onu.png')} alt=""/></a>  
            </div>
          </div>
          <div className="bannerImg" data-aos="fade-up" data-aos-duration="1000">
            <img src={withPrefix('/images/hands.webp')} alt=""/>
          </div>
        </section>
      </div>
    </PrimaryLayout>
  )
  }
}
