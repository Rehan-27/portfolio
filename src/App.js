import React, { Component } from 'react';
import Projects from './Project';
import Profiles from './SocialProfiles';
import Titles from './Title'
import logo from './assets/logo.png';
import './App.css';

class App extends Component {
  state = { displayBio: false };

  toggleDisplay = () => {
    this.setState({ displayBio: !this.state.displayBio });
  }
  render() {

    return (
      <div >
        <div className='profile'><img src={logo} alt="portfolio" /></div>
        <h1>Hello!</h1>
        <h4>I'm Rehan</h4>
        {
          this.state.displayBio ?
            (<div>
              <Titles />
              <p>Ambitious and passionate Fresher Web Developer|Front End Developer.Organized and methodical focuses on code quality and reusability.</p>
              <button className='btn' onClick={this.toggleDisplay}>Less</button>
            </div>) :
            (<div><button className='btn' onClick={this.toggleDisplay}>More</button></div>)
        }
        <Projects />
        <Profiles />
      </div>
    )
  }
}

export default App;