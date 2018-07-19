import React, { Component } from 'react';

import './App.css';


class App extends Component {
  render() {
    return (
        <div className='main-container'>
          <div className="first" >
              <ul className='menu'>
                  <li><a>About me</a></li>
                  <li><a>My skills</a></li>
                  <li><a>My experience</a></li>
                  <li><a>Motivation section</a></li>
              </ul>
              <div className="photo-container">
                  <img className='myphoto' alt='my photo' src={require('./images/iam.jpg')} />
                  <div className="photo-text-container">
                  <p  className='photo-text'> Hello. My name is Max and I front-end developer </p>
                      <p className="about-me">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Distinctio eveniet ipsa magnam molestias necessitatibus!
                          A eligendi fugit laboriosam libero nulla possimus?
                          Commodi consectetur esse hic itaque maiores nesciunt sequi vero?</p>
                  </div>
              </div>
          </div>
            <div className="second">
                <img src={require('./images/react2.svg')} alt="react logo" className="react-logo"/>
            </div>
            <div className="third">

            </div>
            <div className="fouth">

            </div>


        </div>



    );
  }
}

export default App;
