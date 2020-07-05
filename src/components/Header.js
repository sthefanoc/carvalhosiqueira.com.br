import React from "react";
import {Link, withPrefix} from 'gatsby';
import whiteLogo from '../../static/images/logo_carvalhosiqueira_branco.png';
import redLogo from '../../static/images/logo_carvalhosiqueira_vermelho.png';

class Header extends React.Component {
  componentDidMount(){

    window.addEventListener('scroll', () => {
      if(window.pageYOffset < 80){
        document.querySelector('nav').classList.remove('fixed')
      } else {
        document.querySelector('nav').classList.add('fixed')
      }
    })
    // body = document.getElementsByTagName('body')[0];

    // function myFunction() {
    //   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //     // document.getElementById("myP").className = "test";
    //     console.log('aaaaaaaaa')
    //   } else {
    //     // document.getElementById("myP").className = "";
    //     console.log('bbbbbbbb')
    //   }
    // }
    // body.addEventListener('scroll', myFunction);
  }

  render() {

  return (
    <header role="banner" className="position-absolute">
      {/* <!-- Top Navigation --> */}
      <nav className="background-transparent background-transparent-hightlight full-width sticky">
        <div className="s-12 l-3">
          <a href="/" className="logo">
            {/* <!-- Logo White Version --> */}
            {/* <div className="logo-white">CARVALHO SIQUEIRA</div> */}
            <img className="logo-white" src={whiteLogo} alt="" />
            {/* <!-- Logo Dark Version --> */}
            {/* <div className="logo-dark">CARVALHO SIQUEIRA</div> */}
            <img className="logo-dark" src={redLogo} alt="" />
          </a>
        </div>
        <div className="top-nav s-12 l-9">
          <p className="nav-text"></p>
          <ul className="right chevron">
            <li><a href="products.html">Valores</a></li>
            <li><a>Services</a>
              <ul>
                <li><a>Service 1</a>
                  <ul>
                    <li><a>Service 1 A</a></li>
                    <li><a>Service 1 B</a></li>
                  </ul>
                </li>
                <li><a>Service 2</a></li>
              </ul>
            </li>
            <li><a href="about.html">About</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>
        </div>
      </nav>
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
