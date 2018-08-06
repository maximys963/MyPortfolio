import React, { Component } from 'react';
import './education_style.css'


class Education extends Component{
    render(){
        return(
            <div className="fouth" id="education">
                <div>
                    <img className="plane" src={require(".././icons/plane.svg")} alt=""/>
                </div>
                <div className="education-info">
                    <h1>Eduction</h1>
                    <p>Bachelor degree, National Aviation University (NAU) of Ukraine. Computer Information Technologies Institute.</p>
                    <p>React.js, IT Education Academy (ITEA) courses, 2017.</p>
                    <p>JavaScript Advanced, IT Education Academy (ITEA) courses, Ukraine (2017);</p>
                    <p>JavaScript Base, IT Education Academy (ITEA) courses, Ukraine (2017).</p>
                    <p>HTML5 CSS3, HTML Academy</p>
                </div>
            </div>
        )
    }
}
export default Education;