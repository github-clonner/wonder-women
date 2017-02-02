import React from 'react';
import ReactDOM from 'react-dom';
import Event from './event.jsx'
import ListEvents from './listEvents.jsx';
import Home from './home.jsx';
import NavBar from './navbar.jsx';
import Search from './search.jsx';
import About from './about.jsx';
import ContactUs from './contactUs.jsx';
import CreateEvent from './createEvent.jsx';
import Login from './login.jsx';
import Signup from './signUp.jsx';
import Account from './account.jsx';
import {withRouter, Router, Route, Link, browserHistory} from 'react-router';
import './style/home.css';

var App = withRouter(React.createClass({
  render: function() {
    return(
      <div>
        <img className="logo" src={require('./style/images/ArtGalLogo.png')} />
        <NavBar />
        <Search/>
        <Home />
        {this.props.children}
      </div>
    )
  }
}))

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}></Route>
    <Route path='login' component={Login}></Route>
    <Route path='signup' component={Signup}></Route>
    <Route path='account' component={Account}></Route>
    <Route path='createevent' component={CreateEvent}></Route>
    <Route path='events/:id' component={Event}></Route>
    <Route path='events' component={ListEvents}></Route>
    <Route path='about' component={About}></Route>
    <Route path='contactus' component={ContactUs}></Route>
  </Router>,
  document.getElementById('root')
) 