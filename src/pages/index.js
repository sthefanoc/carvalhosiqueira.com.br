import React from "react";
import PrimaryLayout from '../layouts/PrimaryLayout';
import { withPrefix } from "gatsby";

export default function Home({data}) {
  console.log('This is the Home page');
  return (
    <PrimaryLayout>
      <main role="main">    
        {/* <!-- Main Header --> */}
        <header>
          <div class="carousel-default owl-carousel carousel-main carousel-nav-white background-dark text-center">
            <div class="item">
              <div class="s-12">
                <img src={withPrefix('images/header.png')} alt="" />
                <div class="carousel-content">
                  <div class="content-center-vertical line">
                    <div class="margin-top-bottom-80">
                      {/* <!-- Title --> */}
                      <h1 class="text-white margin-bottom-30 text-size-60 text-m-size-30 text-line-height-1">Advogadas e Advogados</h1>
                      <div class="s-12 m-10 l-8 center"><p class="text-white text-size-14 margin-bottom-40">Anos de experiência obtidos atuando em organizações da sociedade civil combinados para fornecer apoio jurídico especializado estruturado a organizações, movimentos sociais e ativistas. Conheça nossa atuação.</p></div>
                      <div class="line">
                        <div class="s-12 m-12 l-3 center">
                          <a class="button button-white-stroke s-12" href="/">Nossos trabalhos</a>
                        </div>       
                      </div>  
                    </div>
                  </div>
                </div>
              </div>
            </div>              
          </div>               
        </header>
        
        {/* <!-- Section 1 --> */}
        <section class="section-top-padding section-small-padding background-white text-center"> 
          <div class="line">
            <div class="margin">
              <div class="s-12 m-12 l-4 margin-m-bottom">
                <div class="padding-2x block-bordered">
                  <i class="icon-sli-shield icon3x text-dark center margin-bottom-30"></i>
                  <h2 class="text-thin">Unlimited Color Variants</h2>
                  <p class="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a class="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
                </div>
              </div>
              <div class="s-12 m-12 l-4 margin-m-bottom">
                <div class="padding-2x block-bordered">
                  <i class="icon-sli-umbrella icon3x text-dark center margin-bottom-30"></i>
                  <h2 class="text-thin">Parallax Background</h2>
                  <p class="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a class="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
                </div>
              </div>
              <div class="s-12 m-12 l-4 margin-m-bottom">
                <div class="padding-2x block-bordered">
                  <i class="icon-sli-home icon3x text-dark center margin-bottom-30"></i>
                  <h2 class="text-thin">Clean Modern Code</h2>
                  <p class="margin-bottom-30">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <a class="button button-dark-stroke text-size-12" href="/">GET MORE INFO</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* <!-- Section 1 --> */}
        <section class="section">
          <div class="line">
            <h2 class="text-size-50 text-center">About Us</h2>
            <hr class="break-small background-primary break-center" />
          </div>
          <div class="line">
            <div class="margin">  
              <div class="s-12 m-12 l-2">
                <p class="h1 text-size-30 margin-m-bottom-30 text-primary text-line-height-1 text-right">We Are Web Design Heroes</p>
              </div>
              <div class="s-12 m-12 l-5">
                <p class="text-size-14 margin-m-bottom-30 text-dark">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica. Dolor in hendrerit in vulputate velit esse molestie consequat. Mirum est notare quam littera gothica. </p>
              </div>
              <div class="s-12 m-12 l-5">
                <p class="text-size-14 text-dark">Mirum est notare quam littera gothica. Dolor in hendrerit in vulputate velit esse molestie consequat. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Dolor in hendrerit in vulputate velit esse molestie consequat.</p>
              </div>
            </div>
          </div>    
        </section>
        
        {/* <!-- Section 2 --> */}
        <section class="full-width">
          <div class="s-12 m-12 l-6">  
            <img src={withPrefix('images//img-12.jpg')} alt="" />
          </div>
          <div class="s-12 m-12 l-6">
            <div class="padding-2x">
              <div class="line">
                <div class="float-left">
                  <i class="icon-sli-drop icon3x text-dark"></i>
                </div>
                <div class="margin-left-60 margin-bottom-30">
                  <h3 class="text-size-25 margin-bottom-0">Unlimited Color Variants</h3>
                  <p class="text-dark">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Vel illum dolore eu feugiat nulla facilisis.</p>            
                </div>
              </div>
              
              <div class="line">
                <div class="float-left">
                  <i class="icon-sli-screen-smartphone icon3x text-dark"></i>
                </div>
                <div class="margin-left-60 margin-bottom-30">
                  <h3 class="text-size-25 margin-bottom-0">Responsive Layoute</h3>
                  <p class="text-dark">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>            
                </div>
              </div>
              
              <div class="line">
                <div class="float-left">
                  <i class="icon-sli-heart icon3x text-dark"></i>
                </div>
                <div class="margin-left-60 margin-bottom-30">
                  <h3 class="text-size-25 margin-bottom-0">Clean Minimalistic Design</h3>
                  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat. Vel illum dolore eu feugiat nulla facilisis.</p>            
                </div>
              </div>
              
              <div class="line">
                <div class="float-left">
                  <i class="icon-sli-chart icon3x text-dark"></i>
                </div>
                <div class="margin-left-60 margin-bottom-30">
                  <h3 class="text-size-25 margin-bottom-0">Tons of Animated Elements</h3>
                  <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>            
                </div>
              </div>
              
              <div class="line">
                <div class="float-left">
                  <i class="icon-sli-globe-alt icon3x text-dark"></i>
                </div>
                <div class="margin-left-60">
                  <h3 class="text-size-25 margin-bottom-0">And many more...</h3>
                  <p class="text-dark">Nam liber tempor cum soluta nobis eleifend. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.</p>            
                </div>
              </div> 
            </div>
          </div>
        </section>
        
        {/* <!-- Section 3 --> */}
        <section class="section background-white" >  
          <div class="line">
            <h2 class="text-size-50 text-center">Our Stats</h2>
            <hr class="break-small background-primary break-center" />
            <div class="margin margin-top-bottom-50">
              <div class="s-12 m-12 l-3">
                <div class="block">
                  <div class="count-to">
                    <span class="timer h1 text-size-50">1500</span>
                    <p class="h1 text-size-20 margin-top-10 text-dark text-thin">Eodem modo typi</p> 
                  </div>
                </div>
              </div>
              <div class="s-12 m-12 l-3">
                <div class="block">
                  <div class="count-to">
                    <span class="timer h1 text-size-50">95%</span>
                    <p class="h1 text-size-20 margin-top-10 text-dark text-thin">Duis autem</p> 
                  </div>
                </div>
              </div>
              <div class="s-12 m-12 l-3">
                <div class="block">
                  <div class="count-to">
                    <span class="timer h1 text-size-50">287</span>
                    <p class="h1 text-size-20 margin-top-10 text-dark text-thin">Mirum est notare</p> 
                  </div>
                </div>
              </div>
              <div class="s-12 m-12 l-3">
                <div class="block">
                  <div class="count-to">
                    <span class="timer h1 text-size-50">7 milion</span>
                    <p class="h1 text-size-20 margin-top-10 text-dark text-thin">Nam liber tempor</p> 
                  </div>
                </div>
              </div> 
            </div>
          </div>
        </section>
        
        <hr class="break margin-top-bottom-0" />
        
        {/* <!-- Section 4 --> */}
        <section class="section-top-padding full-width">
          <h2 class="text-size-50 text-center">Our Work</h2>
          <hr class="break-small background-primary break-center" /> 
          <div class="tabs background-primary-hightlight">
              <div class="tab-item tab-active">
                <a class="tab-label active-btn">Web Design</a>
                <div class="tab-content lightbox-gallery">
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-02.jpg')} alt="" title="Portfolio Image 1" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-09.jpg')} alt="" title="Portfolio Image 2" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-08.jpg')} alt="" title="Portfolio Image 3" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-05.jpg')} alt="" title="Portfolio Image 4" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-06.jpg')} alt="" title="Portfolio Image 5" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-11.jpg')} alt="" title="Portfolio Image 6" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-12.jpg')} alt="" title="Portfolio Image 7" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-07.jpg')} alt="" title="Portfolio Image 8" />
                    </a>	
                  </div>
                </div>  
              </div>
              <div class="tab-item">
                <a class="tab-label">Graphic Design</a>
                <div class="tab-content lightbox-gallery">
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-04.jpg')} alt="" title="Portfolio Image 1" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-06.jpg')} alt="" title="Portfolio Image 2" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-13.jpg')} alt="" title="Portfolio Image 3" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-05.jpg')} alt="" title="Portfolio Image 4" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-12.jpg')} alt="" title="Portfolio Image 5" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-14.jpg')} alt="" title="Portfolio Image 6" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-07.jpg')} alt="" title="Portfolio Image 7" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-10.jpg')} alt="" title="Portfolio Image 8" />
                    </a>	
                  </div>
                </div>  
              </div>
              <div class="tab-item">
                <a class="tab-label">Campaigns</a>
                <div class="tab-content lightbox-gallery">
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-03.jpg')} alt="" title="Portfolio Image 9" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-01.jpg')} alt="" title="Portfolio Image 10" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-09.jpg')} alt="" title="Portfolio Image 11" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-14.jpg')} alt="" title="Portfolio Image 12" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-07.jpg')} alt="" title="Portfolio Image 13" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-13.jpg')} alt="" title="Portfolio Image 14" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-11.jpg')} alt="" title="Portfolio Image 15" />
                    </a>	
                  </div>
                  <div class="s-12 m-6 l-3">
                    <a class="image-with-hover-overlay image-hover-zoom" href="#">
                      <div class="image-hover-overlay background-primary"> 
                        <div class="image-hover-overlay-content text-center padding-2x">
                          <h2 class="text-thin">Lorem Ipsum Dolor</h2> 
                          <p>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. Autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.</p> 
                        </div> 
                      </div> 
                      <img src={withPrefix('images//portfolio/thumb-04.jpg')} alt="" title="Portfolio Image 16" />
                    </a>	
                  </div>
                </div>  
              </div>
          </div>
        </section>
        
        {/* <!-- Section 5 -->     */}
        <section class="section background-white text-center">
          <div class="line">
            <h2 class="text-size-50 text-center">Testimonials</h2>
            <hr class="break-small background-primary break-center" />
            <div class="carousel-default owl-carousel carousel-wide-arrows">
              <div class="item">
                <div class="s-12 m-12 l-7 center text-center">
                  <img class="image-testimonial-small" src={withPrefix('images//testimonials-04.png')} alt="" />
                  <p class="h1 margin-bottom text-size-20">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <p class="h1 text-size-16">Scott Star / CEO / Company</p>
                </div>
              </div>
              <div class="item"> 
                <div class="s-12 m-12 l-7 center text-center">
                  <img class="image-testimonial-small" src={withPrefix('images//testimonials-05.png')} alt="" />
                  <p class="h1 margin-bottom text-size-20">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <p class="h1 text-size-16">Mark Stoner / Web Developer / Company</p>
                </div>
              </div>
              <div class="item">
                <div class="s-12 m-12 l-7 center text-center">
                  <img class="image-testimonial-small" src={withPrefix('images//testimonials-06.png')} alt="" />
                  <p class="h1 margin-bottom text-size-20">Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis</p>
                  <p class="h1 text-size-16">Jane Naismith / Web Designer / Company</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </PrimaryLayout>
)}
