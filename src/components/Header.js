import React from "react";
import {Link, withPrefix} from 'gatsby';
import whiteLogo from '../../static/images/logo_carvalhosiqueira_branco.png';
import redLogo from '../../static/images/logo_carvalhosiqueira_vermelho.png';

class Header extends React.Component {
  componentDidMount(){

   
  }

  render() {

  return (
    <header>
      <div className="nav post-scroll">
        <div className="logo">
          <h4>Carvalho Siqueira</h4>
        </div>
        <div className="links">
          <a href="#" className="mainlink">Missão</a>
          <a href="#">Nós</a>
          <a href="#">Testemunhos</a>
          <a href="#">Contato</a>
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
