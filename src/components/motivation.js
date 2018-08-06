import React, { Component } from 'react';
import './motivation_style.css'
import {Carousel} from 'react-bootstrap'


class Motivation extends Component{
    render(){
        return(
            <div className="five" id="motivation">
                <Carousel>
                    <Carousel.Item className="quote-container">
                       <img className='quote' alt="something" src={require('.././images/khayyam.jpg')}/>

                    </Carousel.Item>
                    <Carousel.Item className="quote-container">
                        <img className='quote' alt="something" src={require('.././images/einstain.jpg')}/>
                    </Carousel.Item>
                    <Carousel.Item className="quote-container">
                        <img  className='quote' alt="something" src={require('.././images/marley.jpg')}/>

                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}

export default Motivation;