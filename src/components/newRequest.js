import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Autocomplete from 'react-google-autocomplete';
import Geocode from "react-geocode";
import date from 'date-and-time';
import DateTimePicker from 'react-datetime-picker';
import makeRequest from '../requests/makeRequest';

export default class NewRequest extends Component {

    constructor(props) {
        super(props);
        this.state = {
            serviceType: '',
            problem: '',
            latitudeFrom: '',
            longitudeFrom: '',
            creator: window.$userId,
            price: 0,
            address: '',
            schedule: '',
            paymentType: ''
          }
      }

      componentDidMount() {
        Geocode.setApiKey("AIzaSyAjL_doMA-BBX1S-Lx_BJXrPAjQCFh3UrM");
        Geocode.setLanguage("en");
      }

      onAddressChange =(place) => {
        
        Geocode.fromAddress(place.formatted_address).then(
            response => {
                const { lat, lng } = response.results[0].geometry.location;
                this.setState({ latitudeFrom: lat, longitudeFrom: lng});         
            },
            error => {
                console.error(error);
            }
        );

        this.setState({address: place.formatted_address});
      }
    
      submitRequest = () => {
        
        const { latitudeFrom, longitudeFrom, creator, price, paymentType, problem, serviceType, schedule, address} = this.state;

        const scheduled = date.format(schedule, "YYYY-MM-DD HH:mm");

        makeRequest(latitudeFrom, longitudeFrom, creator, price, paymentType, problem, serviceType, scheduled, address).then(res => {
            if(res){
              this.props.history.push("/")
            } 
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
                        <Autocomplete
                            style={{width: '67%', height: 35, fontSize: 20}}
                            onPlaceSelected={this.onAddressChange}
                            types={['address']}
                        />
                        </div>

                        <div className="input-group">
                        <input
                            style={{ width: 400, height: 35, fontSize: 20, marginTop: 5}}
                            type="text"
                            name="problem"
                            value={this.state.problem}
                            onChange={text => this.setState({ problem: text.target.value})}
                            className="login-input"
                            placeholder="Problem"/>
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
                            <select value={this.state.paymentType} onChange={(text) => this.setState({ paymentType: text.target.value})} style={{ width: 406, height: 35, fontSize: 20, marginTop: 5, marginBottom: 5}} className="form-control">
                                <option value="select">Choose Payment Type</option>
                                <option value="Cash">Cash</option>
                                <option value="Card">Card</option>
                            </select>
                        </div>

                        <div className="input-group">
                            <DateTimePicker 
                                onChange={date => this.setState({ schedule: date }) }
                                value={this.state.schedule}
                            />
                        </div>

                        <button
                        style={{ marginLeft: 100, width: 206, height: 30, marginTop: 10, backgroundColor: '#2196F3', fontSize: 20, borderRadius: 10}}
                        type="button"
                        className="login-btn"
                        onClick={this
                        .submitRequest
                        .bind(this)}>Submit Request</button>

                        
                    </div>
                    </div>
                </Cell>
            </Grid>
        );
    }
}