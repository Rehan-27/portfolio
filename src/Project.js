import React, { Component } from 'react';
import PROJECTS from './data/projects'

class Project extends Component {
    render() {
        const { title, image, link } = this.props.project;
        return (
            <div style={{ display: 'inline-block', width: 300, margin: 10 }}>
                <h4>{title}</h4>
                <img src={image} style={{ width: 250 }} alt='project' />
                <a href={link} >click for preview/code</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return (
            <div id='box2'>
                <h2>My Projects</h2>
                {
                    PROJECTS.map(PROJECT => {
                        return (
                            <Project key={PROJECT.id} project={PROJECT} />
                        );
                    })
                }
            </div >
        )
    }

}
export default Projects;