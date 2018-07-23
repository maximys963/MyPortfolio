import React, { Component } from 'react';
import './skill_style.css'


class MySkills extends Component{
    render(){
        return(
            <div className="second" id="myskills">
                <img src={require('.././images/react2.svg')} alt="react logo" className="react-logo"/>
                <div className="skills">
                    <h1 className="skills-title">My skills</h1>
                    <div className="skills-points">
                        <div className="html-points">
                            <p>HTML & CSS</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="js-points">
                            <p>JavaScript</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="react-points">
                            <p>React</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="reactnative-points">
                            <p>React Native</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="redux-points">
                            <p>Redux</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="webpack-points">
                            <p>Webpack</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                        <div className="git-points">
                            <p>Git</p>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot green-dot' src={require('.././icons/circle.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                            <img className='dot' src={require('.././icons/circle_white.svg')}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MySkills;