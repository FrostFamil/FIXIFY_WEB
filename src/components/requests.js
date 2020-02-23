import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import { fixerGetRelatedRequests, fixerRequests, fixerAddFinishedRequestToHistory } from '../requests/fixerRequests';
import { userRequests, getAllAcceptedRequests, getAllPendingRequests, getAllFinishedRequests } from '../requests/userRequests';


class Requests extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      activeTab: 0,
      allOrders: [],
      pendingOrders: [],
      finishedOrders: [],
      userNotAcceptedOrders: [],
      userPendingOrders: [],
      userAcceptedOrders: [],
      userFinishedOrders: []
     };
  }

  componentDidMount() {

    if(window.$fixerId) {
      const acceptor = window.$fixerId;

      fixerGetRelatedRequests(window.$serviceType).then(res => {
        this.setState({ allOrders: res.requests})   
      });

      fixerRequests(acceptor).then(res => {
        this.setState({ pendingOrders: res.requests}) 
      });

      fixerAddFinishedRequestToHistory(acceptor).then(res => {
        this.setState({ finishedOrders: res.requests}) 
      })

    }else {
      const creator = window.$userId

      userRequests(creator).then(res => {
        this.setState({ userNotAcceptedOrders: res.requests})  
      });

      getAllPendingRequests(creator).then(res => {
        this.setState({ userPendingOrders: res.requests})  
      });

      getAllAcceptedRequests(creator).then(res => {
        this.setState({ userAcceptedOrders: res.requests}) 
      });

      getAllFinishedRequests(creator).then(res => {
        this.setState({ userFinishedOrders: res.requests}) 
      })
    }
  }

  toggleFixerCategories() {

    if(this.state.activeTab === 0){
      
      const listItems = this.state.allOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{window.$serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );
      
    } else if(this.state.activeTab === 1) {
      const listItems = this.state.pendingOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{window.$serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );

    } else if(this.state.activeTab === 2) {
      const listItems = this.state.finishedOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{window.$serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );

    }
  }


  toggleUserCategories() {

    if(this.state.activeTab === 0){
      
      const listItems = this.state.userNotAcceptedOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{item.serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );
      
    } else if(this.state.activeTab === 1) {
      const listItems = this.state.userPendingOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{item.serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );

    } else if(this.state.activeTab === 2) {
      const listItems = this.state.userAcceptedOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{item.serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );

    } else if(this.state.activeTab === 3) {
      const listItems = this.state.userFinishedOrders.map((item) =>
        <li>
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: 'black', fontWeight: 'bold' , height: '176px', background: 'url(https://wallpaperaccess.com/full/692721.png) center / cover'}} >{item.serviceType}</CardTitle>
            <CardText>
              {item.problem}
            </CardText>
            <CardActions border>
              <Button colored>{item.paymentType}</Button>
              <Button colored>{item.price}$</Button>
              <Button colored>{item.scheduled}</Button>
            </CardActions>
            <CardActions border>
              <Button colored>{item.address}</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </li>
      );
      
      return (
        <ul>
          {listItems}
        </ul>
      );

    }
  }



  render() {
    return(
      <div>
        {
          window.$fixerId ?

          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>New Requests</Tab>
            <Tab>Pending Requests</Tab>
            <Tab>Finished Requests</Tab>
          </Tabs>:
          <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
            <Tab>Not Accepted Requests</Tab>
            <Tab>Pending Requests</Tab>
            <Tab>Accepted Requests</Tab>
            <Tab>Finished Requests</Tab>
          </Tabs>
        }


          <Grid>
            <Cell col={12}>
              <div className="content">{window.$fixerId ? this.toggleFixerCategories(): this.toggleUserCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Requests;
