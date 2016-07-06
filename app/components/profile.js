import React,{Component} from 'react'
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router';
import _ from 'lodash'
import Gallery from './gallery';
import PinForm from './createPinForm'
import Nav from './nav'

 class profile extends Component{

 	componentWillMount(){
 		if(!this.props.pins.length){
 			this.props.fetchPins()
 		}
 		const tokenURL=this.props.params.token;
 		const tokenStored=localStorage.getItem('token')

 		if(tokenStored && !this.props.auth){
 			this.props.loginUser(tokenStored);
 		}else if(tokenURL){
 			this.props.loginUser(tokenURL)
 		}
 	}
 	
 	handleDelete({_id}){
		const index=_.findIndex(this.props.pins,(v)=>{return v._id==_id});
		this.props.deletePin(_id,index);	
 	}

	render(){
		if(!this.props.auth || !this.props.auth.authorized){
 			return( 
 				<div>
 				</div>
 				)	//TODO create higherlevel component 
 		}
		
		return(
		 <section className='landing'>
		 	<Nav auth={this.props.auth} onLogOut={()=>{this.props.logoutUser()}}/>
		 	<PinForm/>
			<Gallery pins={this.props.pins.filter((v)=>{return v.user==this.props.auth.user.displayName})} 
					 user={this.props.auth.user.displayName}		 
				 onDelete={(e)=>{this.handleDelete(e)}}/>
		 </section>
		)
	}
}

function mapStateToProps(state) {
console.log(state)
  return {pins:state.pins,auth:state.auth};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(profile);