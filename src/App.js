import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">FIXIFY</Link>} scroll>
            {
              window.$token ?

              <Navigation>
                <Link to={`/requests/${window.$token}`}>Requests</Link>
                <Link to={`/profile/${window.$token}`}>Profile</Link>
              </Navigation>:
              <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/aboutme">About Us</Link>
              </Navigation>
            }
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">FIXIFY</Link>}>
            {
              window.$token ?

              <Navigation>
                <Link to={`/requests/${window.$token}`}>Requests</Link>
                <Link to={`/profile/${window.$token}`}>Profile</Link>
              </Navigation>:
              <Navigation>
                <Link to="/login">Login</Link>
                <Link to="/aboutme">About Us</Link>
              </Navigation>
            }
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
