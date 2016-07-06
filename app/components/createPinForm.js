import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { Modal, Button } from 'react-bootstrap';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state={fields:{title:'',URL:''},formIsVisible:false};
    this.handleSubmit=this.handleSubmit.bind(this);
  }
  
  updateInput(e,type) {
    const fields = this.state.fields;
    fields[type] = e.target.value;
    this.setState({fields});
    console.log(this.state.fields);
  }
  
  handleSubmit(e) {
    const fields = this.state.fields;
    e.preventDefault();
    this.props.addPin({title:fields.title, image_url:fields.URL, user:this.props.user.user.displayName});
    this.setState({fields:{title:'',URL:''}, formIsVisible:false});
  }
  
  render(){
    return(
      <div >
        <div className='banner'>
          <Button onClick={()=>{this.setState({formIsVisible:true})}} className='btn-add-pin'>Add an image</Button>
          <hr/>
        </div>
      <Modal show={this.state.formIsVisible} onHide={()=>{this.setState({formIsVisible:false})}}>
        <form onSubmit={this.handleSubmit} className='pin-form'>
          <h4>Add an image</h4>
          <fieldset className="form-group">
            <label>Title:</label>
            <input type='text' className="form-control" value={this.state.fields.title} onChange={(e)=>this.updateInput(e,'title')}/>
          </fieldset>
          <fieldset className="form-group">
            <label>Image Url:</label>
            <input  type="text" className="form-control" value={this.state.fields.URL} onChange={(e)=>this.updateInput(e,'URL')} />
          </fieldset>
            <button action="submit" className='btn center-block'>Submit</button>
        </form>
      </Modal>
      </div>  
      )
  }


}
function mapStateToProps(state) {

  return {pins:state.pins,user:state.auth};
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);