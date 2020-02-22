import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import loginRequest from '../requests/loginRequest';

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  submitLogin = (e) => {
    const { email, password } = this.state;

    loginRequest(email, password).then(res => {
      console.log(res);   
    })
  }

  render() {
    return(
      <Grid style={{ justifyContent: 'center', marginLeft: 200, marginTop: 110 }}>
        <Cell col={6}>
        <div className="inner-container">
          <h1 className="header" style={{ marginLeft: 125, color: 'orange'}} >
            FIXIFY
          </h1>
          <div className="box">

            <div className="input-group">
              <input
                style={{ width: 400, height: 35, fontSize: 20}}
                type="text"
                name="email"
                value={this.state.email}
                onChange={text => this.setState({ email: text.target.value})}
                className="login-input"
                placeholder="Email"/>
            </div>

            <div className="input-group">
              <input
                style={{ width: 400, height: 35, fontSize: 20, marginTop: 5}}
                type="password"
                name="password"
                value={this.state.password}
                onChange={text => this.setState({ password: text.target.value})}
                className="login-input"
                placeholder="Password"/>
            </div>

            <button
              style={{ marginLeft: 100, width: 206, height: 30, marginTop: 10, backgroundColor: '#2196F3', fontSize: 20, borderRadius: 10}}
              type="button"
              className="login-btn"
              onClick={this
              .submitLogin
              .bind(this)}>Login</button>

            <a href="/registerUser">
              <button
              style={{ marginLeft: 100, width: 206, height: 30, marginTop: 10, backgroundColor: '#e8b562', fontSize: 15, borderRadius: 10}}
              type="button"
              className="login-btn">Create Account as a User</button>
            </a>

            <a href="/registerFixer">
              <button
              style={{ marginLeft: 100, width: 206, height: 30, marginTop: 10, backgroundColor: '#ff6714', fontSize: 15, borderRadius: 10}}
              type="button"
              className="login-btn">Create Account as a Fixer</button>
            </a>

          </div>
        </div>
        </Cell>
      </Grid>
    )
  }
}

export default Login;
