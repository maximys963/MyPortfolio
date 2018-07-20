import React, { Component } from 'react';
import './App.css';
import Skills from "./components/myskills"
import AboutMe from "./components/aboutme"
import Works from "./components/works"
import Education from "./components/education"

class App extends Component {
  render() {
    return (
        <div className='main-container'>
          <AboutMe/>
          <Skills/>
          <Works/>
          <Education/>
        </div>
    );
  }
}

export default App;
