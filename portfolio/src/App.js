import React, { Component } from 'react';

import './App.css';
import {Col, Grid,Row} from 'react-bootstrap';

class App extends Component {
  render() {
    return (

          <div className="first" >
              <ul className='menu'>
                  <li><a>lorem</a></li>
                  <li><a>ipsum</a></li>
                  <li><a>dolorm</a></li>
                  <li><a>ametm</a></li>
                  <li><a>conserm</a></li>
                  <li><a>atadorm</a></li>
              </ul>
              <div className="photo-container">
                  <img className='myphoto' alt='my photo' src={require('./images/iam.jpg')} />
                  <div  className='photo-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ab at dolor ducimus, facilis, illum incidunt iusto minima non,
                      odio quae quam quia quisquam recusandae sint soluta tenetur vel!
                      Distinctio, tempora.</div>
              </div>

          </div>

    );
  }
}

export default App;
