import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import fixerSignupRequest from "../requests/fixerSignupRequest";

export default class RegisterFixer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phone : ''
        };
      }
    
      submitRegister = () => {

        const {email, firstName, lastName, password, phone} = this.state;
        const status = this.state.serviceType;

        fixerSignupRequest(email, password, firstName, lastName, status, phone).then(res => {
            console.log(res);      
        })
    
      }

    render() {
        return (
            <Grid style={{ justifyContent: 'center', marginLeft: 200, marginTop: 70 }}>
                <Cell col={6}>
                    <div className="inner-container">
                    <h1 className="header" style={{ marginLeft: 125, color: 'orange'}} >
                        FIXER
                    </h1>
                    <div className="box">

                        <div className="input-group">
                        <input
                            style={{ width: 400, height: 35, fontSize: 20}}
                            type="text"
                            name="firstName"
                            value={this.state.firstName}
                            onChange={text => this.setState({ firstName: text.target.value})}
                            className="login-input"
                            placeholder="First Name"/>
                        </div>

                        <div className="input-group">
                        <input
                            style={{ width: 400, height: 35, fontSize: 20, marginTop: 5}}
                            type="text"
                            name="lastName"
                            value={this.state.lastName}
                            onChange={text => this.setState({ lastName: text.target.value})}
                            className="login-input"
                            placeholder="Last Name"/>
                        </div>

                        <div className="input-group">
                        <input
                            style={{ width: 400, height: 35, fontSize: 20, marginTop: 5}}
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={text => this.setState({ email: text.target.value})}
                            className="login-input"
                            placeholder="Email"/>
                        </div>

                        <div className="input-group">
                            <select value={this.state.serviceType} onChange={(text) => this.setState({ serviceType: text.target.value})} style={{ width: 406, height: 35, fontSize: 20, marginTop: 5}} className="form-control">
                                <option value="select">Choose Service Type</option>
                                <option value="Technology">Technology</option>
                                <option value="Plumber">Plumber</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Household">Household</option>
                                <option value="Electric">Electric</option>
                                <option value="Auto">Auto</option>
                            </select>
                        </div>

                        <div className="input-group">
                        <input
                            style={{ width: 400, height: 35, fontSize: 20, marginTop: 5}}
                            type="text"
                            name="mobileNumber"
                            value={this.state.phone}
                            onChange={text => this.setState({ phone: text.target.value})}
                            className="login-input"
                            placeholder="Mobile Number"/>
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
                        .submitRegister
                        .bind(this)}>Create Account</button>

                        
                    </div>
                    </div>
                </Cell>
            </Grid>
        );
    }
}