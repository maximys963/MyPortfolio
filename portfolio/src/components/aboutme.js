import React, { Component } from 'react';
import './about_me.css'


class AboutMe extends Component{
    render(){
        return(
            <div className="first" >
                <div className='menu-container'>
                <ul className='menu'>
                    <li><a>About me</a></li>
                    <li><a href="#myskills">My skills</a></li>
                    <li><a href="#experience">My experience</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#motivation">Motivation section</a></li>
                </ul>
                    <ul className="socials">
                        <a href='https://www.facebook.com/maxym.panasenko'><img className="social-net" src={require(".././icons/facebook-logo.svg")} alt="facebook"/></a>
                        <a href='https://www.linkedin.com/in/maximys963/'><img className="social-net" src= {require(".././icons/linkedin-logo.svg")} alt="linkedin"/></a>
                        <a href='https://t.me/Maximys963'><img className="social-net" src= {require(".././icons/telegram.svg")} alt="telegram"/></a>
                        <a href='https://github.com/maximys963'><img className="social-net" src= {require(".././icons/github-sign.svg")} alt="github"/></a>
                    </ul>
                </div>
                <div className="photo-container">
                    <img className='myphoto' alt='my photo' src={require('.././images/iam.jpg')} />
                    <div className="photo-text-container">
                        <p  className='photo-text'> Hello! Wecome to my page</p>
                        <p className="about-me">My name is Max. Web development and meeting new people inspiring me.
                            I like team work first of all and have some experience in game dev, participant of Ubisoft Game Jam hackathon.
                            Our world change by ideas so
                            I try to make it little bit better implementing some ideas in JavaScript projects.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default AboutMe;