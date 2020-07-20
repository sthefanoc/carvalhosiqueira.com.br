import React from "react"; 
import { withPrefix } from 'gatsby';
// import testimonialsStyles from './Testimonials.css';
import './Testimonials.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Component } from "react";



class Quote extends Component{
    constructor(props) {
        super(props);
        this.state = {
          playTestimonials: true,
          selectedTestimonial: 0
        };
    }
    
    componentDidMount(){
        AOS.init();
        this.handleSetClick = event => {
            let activeItem = event.currentTarget.getAttribute("data-quote");
            activateQuote(activeItem);
            console.log('active item', activeItem)
        }
    
        const activateQuote = item => {
            let testimonialContainers = document.querySelectorAll('.testimonial-container');
            for(let i=0;i<testimonialContainers.length;i++){
                console.log('item in state is',this.state.selectedTestimonial)
                if(i === Number(item)){
                    testimonialContainers[i].classList.add('active');
                    testimonialContainers[i].classList.remove('inactive');
                    console.log('activated',i)
                } else {
                    testimonialContainers[i].classList.add('inactive');
                    testimonialContainers[i].classList.remove('active');
                    console.log('deactivated',i)
                }
            };
    
            let quoteBtns = document.querySelectorAll('span[data-quote]');
            for(let i=0;i<quoteBtns.length;i++){
                if(i === Number(item)){
                    quoteBtns[i].classList.add('active');
                    console.log('activated',i)
                } else {
                    quoteBtns[i].classList.remove('active');
                    console.log('deactivated',i)
                }
            }
        }

        this.handlePlayClick = event => {
            let activePlay = event.currentTarget.getAttribute('data-icon');
            console.log(activePlay);
            this.activatePlay(activePlay);
        }
        this.activatePlay = item => {
            let pauseBtn = document.querySelector('#pauseBtn');
            let playBtn = document.querySelector('#playBtn');
            let testimonials = document.querySelector('section.testimonials-section');
            // let testimonialObjects = document.querySelector('section.testimonials');
            // let playOn = Object.values(testimonialObjects.classList).includes('play');
            if(item === 'pause'){
                pauseBtn.classList.add('active');
                playBtn.classList.remove('active');
                console.log('gonna pause')
                testimonials.classList.remove('play')
            } else {
                pauseBtn.classList.remove('active');
                playBtn.classList.add('active');
                console.log('gonna play');
                testimonials.classList.add('play');
                isPlayOn()
            }
        }

        let i = 0;
        function isPlayOn () {
            console.log('isPlayOn rodando!')
            let testimonials = document.querySelector('section.testimonials-section');
            let testQuant = document.querySelectorAll('.testimonial-container');
            let playOn = Object.values(testimonials.classList).includes('play');
            // let playOn = true;
            if(playOn){
                console.log('vou selecionar',i);
                activateQuote(i);
                if(i>testQuant.length-2){
                    i=0
                } else {
                    i++;
                }
                setTimeout(isPlayOn, 5000); // callback
            }
        }
        setInterval(isPlayOn(), 5000);
    }  
    
    render(){
        const quotes = {
            0: {
            id: 0,
            client: "Awesome Client, Acme Co",
            image: withPrefix('/images/sheila.png'),
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu interdum at adipiscing pellentesque.",
            },
            1: {
            id: 1,
            client: "Sweet Client, Acme Inc.",
            image: withPrefix('/images/flavio.png'),
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
            },
            2: {
            id: 2,
            client: "Dope Client, Acme LLC",
            image: withPrefix('/images/sheila.png'),
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum. Interdum nunc arcu interdum at adipiscing pellentesque.",
            },
            3: {
            id: 3,
            client: "Cool Client, Acme LTD",
            image: withPrefix('/images/flavio.png'),
            quote:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sit sapien vulputate ante pellentesque aliquam fermentum.",
            },
        }

        
        const data = Object.values(quotes);
        const indexes = Object.keys(quotes);
        return (
            // <section className='testimonials-section play' id="testemunhos" style={{backgroundImage: "url('/images/header.png')"}}>
            <section className='testimonials-section play' id="testemunhos">
                {/* <img src={withPrefix('/images/header.webp')} alt="justice background" className="background"/> */}
                <h2 className="testimonials-title" data-aos="fade-up" data-aos-duration="1200">
                    Voz dos parceiros. <br />
                    <span data-aos="fade-up" data-aos-duration="1600">Como somos lembrados.</span>
                </h2>
                <div className="testimonials play">
                    <div className='testimonial-info'>
                        {data.map(item=>{
                            return(
                                <div key={item.id} className={(this.state.selectedTestimonial === item.id) ? 'testimonial-container active' : 'testimonial-container inactive'}>
                                    <img src={item.image} alt={item.client + ' image'} data-aos="fade-up" data-aos-duration="1000"/>
                                    <p className='testimonials-quote' data-aos="fade-left" data-aos-duration="1200">{item.quote}</p>
                                    <p className='testimonials-name' data-aos="fade-up" data-aos-duration="1000">{item.client}</p>
                                    {/* <div style={{color:'white'}}>Selected {this.state.selectedTestimonial}</div>
                                    <div style={{color:'white'}}>Index {item.id}</div> */}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="control-buttons">
                        <div className='testimonial-buttons'>
                            {indexes.map(index => (
                            <span
                                onClick={event => this.handleSetClick(event)}
                                data-quote={index}
                                key={index}
                                className={index == 0 ? 'active' : ''}
                            />
                            ))}
                        </div>
                        <div className="play-btns">
                            <FontAwesomeIcon 
                                id="pauseBtn"
                                className="controlBtn" 
                                icon={faPause} 
                                onClick={event => this.handlePlayClick(event)}
                            /> 
                            <FontAwesomeIcon 
                                id="playBtn"
                                className="controlBtn active" 
                                icon={faPlay} 
                                onClick={event => this.handlePlayClick(event)}
                            /> 
                        </div>
                    </div>
            </section>
            
        )
    }
}

export default Quote;