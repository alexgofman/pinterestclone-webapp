import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import Gallery from './gallery';
import PinForm from './createPinForm';
import Nav from './nav';

class Home extends Component {
  componentWillMount() {
    const token = localStorage.getItem('token');
    if(!this.props.auth && token) {
      this.props.loginUser(token);
    } //login if theres a token stored and user state isnt authorized
    if(!this.props.pins.length) {
      this.props.fetchPins();
    } //fetch pins if not already done so
  }
  renderPins() {
    const username = this.props.params.username;
    if(!username) {
      return this.props.pins;
    }
    return this.props.pins.filter((v) => { return v.user == username });
  } // filter pins for when viewing a specific users profile
  
  renderHeading() {
    const username = this.props.params.username;
    return !username? '' : <h2>{username+"'s images"}</h2>;
  }
  
  render() {
    return(
      <section className='landing'>
        <Nav auth={this.props.auth} onLogOut={() => {this.props.logoutUser()}}/>
        <div className='banner'>{this.renderHeading()}</div>
        <Gallery pins={this.renderPins()}/>
      </section>
    );
  }
}

function mapStateToProps(state) {
  return {pins:state.pins,auth:state.auth};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);