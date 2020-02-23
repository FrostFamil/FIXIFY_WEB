import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Profile extends Component {
  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>{window.$fName} {window.$lName}</h2>
            <img
              src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
              alt="avatar"
              style={{height: '250px'}}
               />
             
          </Cell>
          <Cell col={6}>
            <h2>Profile Date</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    {window.$phone}
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>
                    {window.$email}
                  </ListItemContent>
                </ListItem>

                {
                  window.$fixerId ?
                  <ListItem>
                    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                      <i className="fa fa-briefcase" aria-hidden="true"/>
                      {window.$serviceType}
                    </ListItemContent>
                  </ListItem>:null
                }

              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Profile;
