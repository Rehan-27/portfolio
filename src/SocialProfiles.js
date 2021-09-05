import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

class Profile extends Component {
    render() {
        const { image, link } = this.props.profile;
        return (
            <div style={{ display: 'inline-block', width: 30, margin: 10 }}>
                <a href={link} ><img id='icon' src={image} alt="portfolio" /></a>
            </div>
        )
    }
}

class Profiles extends Component {
    render() {
        return (
            <div id='box3'>
                <h3>connect with me</h3>
                {
                    SOCIAL_PROFILES.map(PROFILE => {
                        return (
                            <Profile key={PROFILE.id} profile={PROFILE} />
                        );
                    })
                }
                <p style={{ paddingBottom: 15 }}>mail: rehankhan08976@gmail.com</p>
            </div >
        )
    }

}
export default Profiles;