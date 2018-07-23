import React, { Component } from 'react';
import './works_style.css'


class Works extends Component{
    render(){
        return(
            <div className="third" id="experience">
                <h1>Projects</h1>
                <div className="works-container">
                    <a href='https://maximys963.github.io/Bakery-adaptive-site/build/index.html'><p>Bakery site</p><img src={require(".././icons/bread.svg")} className="project-icon" alt=""/></a>
                    <a href='https://maximys963.github.io/Site-from-scratch-/index.html'><p>Promo site</p><img src={require(".././icons/leaf.svg")} className="project-icon" alt=""/></a>
                    <a href='#'><p>Spark app</p><img src={require(".././icons/bonfire.svg")} className="project-icon" alt=""/></a>
                </div>

            </div>
        )
    }
}

export default Works;