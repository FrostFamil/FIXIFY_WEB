import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAppStoreIos, faGooglePlay } from '@fortawesome/free-brands-svg-icons'

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="http://jacentretail.com/wp-content/uploads/2017/02/hardware_st2.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>FIXIFY</h1>

            <hr/>

          <p>JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links" style={{ alignItems: 'center'}}>

          {/* LinkedIn */}
          <a href="https://www.apple.com/ios/app-store/" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faAppStoreIos} size="5x" color="white" />
          </a>

          {/* Github */}
          <a href="https://play.google.com/store" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon icon={faGooglePlay} size="4x" color="white" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
