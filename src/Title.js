import React, { Component } from 'react';

const TITLE = [
    'I am a web developer',
    'Enthusiastic Learner',
    'Adventure seeker',
    'Front End Developer',
    'I make Responsive and scalable websites for clients'
]

class Titles extends Component {

    state = { titleIndex: 0, fadeIn: true }

    componentDidMount() {
        setTimeout(() => this.setState({ fadeIn: false }), 2000)
        this.animateTitle();
    }

    animateTitle = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLE.length;
            this.setState({ titleIndex, fadeIn: true })
            setTimeout(() => this.setState({ fadeIn: false }), 2000)

        }, 4000)
    }

    render() {

        const title = TITLE[this.state.titleIndex]

        return (
            <p className={this.state.fadeIn ? 'title-fade-in' : 'title-fade-out'}> {title}</p >
        )
    }
}

export default Titles;