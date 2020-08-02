import React from "react";
import {Link, withPrefix} from 'gatsby';
import whiteLogo from '../../static/images/logo_carvalhosiqueira_branco.png';
import redLogo from '../../static/images/logo_carvalhosiqueira_vermelho.png';

class Header extends React.Component {
  componentDidMount(){
    let preScroll = document.querySelector('.pre-scroll');
    let postScroll = document.querySelector('.post-scroll');
    document.addEventListener('scroll', function() {
      if(window.pageYOffset > 150){
        preScroll.classList.remove('active');
        postScroll.classList.add('active');
      } else {
        preScroll.classList.add('active');
        postScroll.classList.remove('active');
      }
      // console.log(window.pageYOffset + 'px');
    });
    preScroll.classList.add('active');
  }

  render() {

  return (
    <header>
      <div className="nav post-scroll">
        <div className="logo">
          {/* <h4><span>| </span>CARVALHO SIQUEIRA</h4> */}
          <a href="/#landing"><img src={withPrefix('/images/logo-white.png')} alt=""/></a>
        </div>
        <div className="links">
          {/* <a href="#missao">Missão</a> */}
          <a href="/#escritorio">O escritório</a>
          <a href="/#sobre-nos">Sócios</a>
          {/* <a href="#testemunhos">Testemunhos</a> */}
          <a href="/#contato" className="mainlink">Contato</a>
        </div>
      </div>
      <div className="nav pre-scroll">
        {/* <div className="logo">
          <h4><span>| </span>CARVALHO SIQUEIRA</h4>
        </div> */}
        <div className="links">
          {/* <a href="#missao">Missão</a> */}
          <a href="/#escritorio">O escritório</a>
          <a href="/#sobre-nos">Sócios</a>
          {/* <a href="#testemunhos">Testemunhos</a> */}
          <a href="/#contato" className="mainlink">Contato</a>
        </div>
      </div>
    </header>
)}
}

export default Header;
{/* <header>
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Crazy Gatsby</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Link as={Link} to="/"><b className="text-dark">Home</b></Link>
        <Link as={Link} to="/about"><b className="text-dark">About</b></Link>
        <Link as={Link} to="/contact"><b className="text-dark">Contact us</b></Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
</header> */}
