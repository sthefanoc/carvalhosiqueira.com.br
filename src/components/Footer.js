import React, { Component, useState } from "react";
import footerStyles from './Footer.module.css';
import { withPrefix } from 'gatsby';
import { render } from "react-dom";


class Footer extends Component {    
  
  render() {
    // const selectedBodyTheme = useState('light');
  return (
    <footer>
      {/* <!-- Contact Us --> */}
      <div class="background-primary padding text-center">
        <p class="h1">Contact Us: 0800 787 787</p>                                                                        
      </div>
      
      {/* <!-- Main Footer --> */}
      <section class="background-dark full-width">
        {/* <!-- Map --> */}
        <div class="s-12 m-12 l-6 margin-m-bottom-2x">
          <div class="s-12 grayscale center">  	  
            something here    
          </div>
        </div>
        
        {/* <!-- Collumn 2 --> */}
        <div class="s-12 m-12 l-6 margin-m-bottom-2x">
          <div class="padding-2x">
            <div class="line">              
              <div class="float-left">
                  <i class="icon-sli-location-pin text-primary icon3x"></i>
                </div>
                <div class="margin-left-70 margin-bottom-30">
                  <h3 class="margin-bottom-0">Company Address</h3>
                  <p>Responsive Street 7
                     London / United Kingdom / Europe
                  </p>               
                </div>
                <div class="float-left">
                  <i class="icon-sli-envelope text-primary icon3x"></i>
                </div>
                <div class="margin-left-70 margin-bottom-30">
                  <h3 class="margin-bottom-0">E-mail</h3>
                  <p>contact@sampledomain.com
                     office@sampledomain.com
                  </p>              
                </div>
                <div class="float-left">
                  <i class="icon-sli-phone text-primary icon3x"></i>
                </div>
                <div class="margin-left-70">
                  <h3 class="margin-bottom-0">Phone Numbers</h3>
                  <p>0800 4521 800 50
                     0450 5896 625 16
                     0798 6546 465 15
                  </p>             
                </div>
            </div>.
          </div>
        </div>  
      </section>
      <hr class="break margin-top-bottom-0" style={{borderColor: 'rgba(0, 38, 51, 0.80)'}} />
      
      {/* <!-- Bottom Footer --> */}
      <section class="padding background-dark full-width">
        <div class="s-12 l-6">
          <p class="text-size-12">Copyright 2019, Vision Design - graphic zoo</p>
          <p class="text-size-12">All images have been purchased from Bigstock. Do not use the images in your website.</p>
        </div>
        <div class="s-12 l-6">
          <a class="right text-size-12" href="http://www.myresponsee.com" title="Responsee - lightweight responsive framework">Design and coding by Responsee Team</a>
        </div>
      </section>
    </footer>
   )
}}

export default Footer;